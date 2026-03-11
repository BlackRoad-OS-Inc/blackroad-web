import { NextResponse } from 'next/server'

interface NodeConfig {
  name: string
  ip: string
  role: string
  user: string
  hailo: boolean
  ports: Record<string, number>
}

const NODES: NodeConfig[] = [
  {
    name: 'Alice',
    ip: '192.168.4.49',
    role: 'Gateway · Pi-hole · PostgreSQL · Qdrant',
    user: 'pi',
    hailo: false,
    ports: { ssh: 22, http: 80, pihole: 53, postgres: 5432, qdrant: 6333, ollama: 11434, stats: 7890 },
  },
  {
    name: 'Cecilia',
    ip: '192.168.4.96',
    role: 'CECE API · TTS · MinIO · Hailo-8',
    user: 'blackroad',
    hailo: true,
    ports: { ssh: 22, ceceApi: 8080, tts: 5500, minio: 9000, ollama: 11434, stats: 7890 },
  },
  {
    name: 'Octavia',
    ip: '192.168.4.100',
    role: 'Gitea · NATS · Hailo-8 · NVMe',
    user: 'pi',
    hailo: true,
    ports: { ssh: 22, gitea: 3100, nats: 4222, ollama: 11434, stats: 7890 },
  },
  {
    name: 'Aria',
    ip: '192.168.4.98',
    role: 'Portainer · Headscale · Pironman5',
    user: 'blackroad',
    hailo: false,
    ports: { ssh: 22, portainer: 9443, headscale: 8080, stats: 7890 },
  },
  {
    name: 'Lucidia',
    ip: '192.168.4.38',
    role: 'Lucidia API · CarPool · PowerDNS',
    user: 'octavia',
    hailo: false,
    ports: { ssh: 22, lucidiaApi: 8182, carpool: 3000, powerdns: 8081, stats: 7890 },
  },
]

async function probeNode(node: NodeConfig): Promise<Record<string, unknown>> {
  const result: Record<string, unknown> = {
    name: node.name,
    ip: node.ip,
    role: node.role,
    hailo: node.hailo,
    online: false,
    latency: null,
    services: {},
    cpu: null,
    memory: null,
    temp: null,
    disk: null,
    uptime: null,
  }

  // Try stats-proxy first (port 7890 — deployed on all nodes)
  try {
    const start = Date.now()
    const r = await fetch(`http://${node.ip}:${node.ports.stats}/stats`, {
      signal: AbortSignal.timeout(3000),
    })
    const latency = Date.now() - start
    if (r.ok) {
      const data = await r.json()
      result.online = true
      result.latency = latency
      result.cpu = data.cpu_percent ?? data.cpu ?? null
      result.memory = data.memory ?? null
      result.temp = data.temperature ?? data.temp ?? null
      result.disk = data.disk ?? null
      result.uptime = data.uptime ?? null
      result.load = data.load ?? null
      result.hostname = data.hostname ?? node.name.toLowerCase()
    }
  } catch {
    // stats-proxy not available, try SSH health check alternatives
  }

  // If stats-proxy failed, try known service endpoints
  if (!result.online) {
    const firstPort = Object.entries(node.ports).find(([k]) => k !== 'ssh' && k !== 'stats')
    if (firstPort) {
      try {
        const start = Date.now()
        const r = await fetch(`http://${node.ip}:${firstPort[1]}/`, {
          signal: AbortSignal.timeout(2000),
        })
        result.online = r.status < 500
        result.latency = Date.now() - start
      } catch {
        // Node is down
      }
    }
  }

  // Probe individual services
  const serviceChecks = Object.entries(node.ports)
    .filter(([k]) => k !== 'ssh' && k !== 'stats')
    .map(async ([name, port]) => {
      try {
        const r = await fetch(`http://${node.ip}:${port}/`, {
          signal: AbortSignal.timeout(2000),
        })
        return { name, port, status: r.status < 500 ? 'up' : 'degraded' }
      } catch {
        return { name, port, status: 'down' }
      }
    })

  const services = await Promise.all(serviceChecks)
  result.services = Object.fromEntries(services.map(s => [s.name, { port: s.port, status: s.status }]))

  return result
}

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function GET() {
  const start = Date.now()
  const nodes = await Promise.all(NODES.map(probeNode))
  const elapsed = Date.now() - start

  const online = nodes.filter(n => n.online).length
  const totalServices = nodes.reduce((acc, n) => {
    const svcs = n.services as Record<string, { status: string }>
    return acc + Object.values(svcs).filter(s => s.status === 'up').length
  }, 0)

  return NextResponse.json({
    status: online === nodes.length ? 'all_operational' : online > 0 ? 'partial' : 'offline',
    nodes,
    summary: {
      total: nodes.length,
      online,
      offline: nodes.length - online,
      services_up: totalServices,
      hailo_nodes: nodes.filter(n => n.hailo && n.online).length,
    },
    probe_time_ms: elapsed,
    timestamp: new Date().toISOString(),
  }, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
