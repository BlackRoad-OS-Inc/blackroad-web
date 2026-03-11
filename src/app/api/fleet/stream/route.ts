import { NextRequest } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const NODES = [
  { name: 'Alice', ip: '192.168.4.49', stats: 7890 },
  { name: 'Cecilia', ip: '192.168.4.96', stats: 7890 },
  { name: 'Octavia', ip: '192.168.4.100', stats: 7890 },
  { name: 'Aria', ip: '192.168.4.98', stats: 7890 },
  { name: 'Lucidia', ip: '192.168.4.38', stats: 7890 },
]

async function pollNode(node: typeof NODES[0]) {
  try {
    const start = Date.now()
    const r = await fetch(`http://${node.ip}:${node.stats}/stats`, {
      signal: AbortSignal.timeout(3000),
    })
    const data = await r.json()
    return {
      name: node.name,
      ip: node.ip,
      online: true,
      latency: Date.now() - start,
      cpu: data.cpu_percent ?? data.cpu ?? 0,
      memory: data.memory ?? { used: 0, total: 0 },
      temp: data.temperature ?? data.temp ?? 0,
      disk: data.disk ?? { used: 0, total: 0 },
      load: data.load ?? [0, 0, 0],
      uptime: data.uptime ?? 0,
    }
  } catch {
    return { name: node.name, ip: node.ip, online: false, latency: 0, cpu: 0, memory: { used: 0, total: 0 }, temp: 0, disk: { used: 0, total: 0 }, load: [0, 0, 0], uptime: 0 }
  }
}

export async function GET(_req: NextRequest) {
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
      }

      // Initial full poll
      const initial = await Promise.all(NODES.map(pollNode))
      send({ type: 'fleet', nodes: initial, timestamp: new Date().toISOString() })

      // Poll every 5 seconds
      const interval = setInterval(async () => {
        try {
          const nodes = await Promise.all(NODES.map(pollNode))
          send({ type: 'fleet', nodes, timestamp: new Date().toISOString() })
        } catch {
          send({ type: 'error', message: 'Poll failed' })
        }
      }, 5000)

      // Heartbeat every 30s
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(': heartbeat\n\n'))
        } catch {
          clearInterval(interval)
          clearInterval(heartbeat)
        }
      }, 30000)

      // Cleanup after 5 minutes (Cloudflare limit)
      setTimeout(() => {
        clearInterval(interval)
        clearInterval(heartbeat)
        send({ type: 'reconnect', message: 'Stream timeout, please reconnect' })
        controller.close()
      }, 290000)
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-store',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
