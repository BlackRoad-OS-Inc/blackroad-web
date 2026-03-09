import { NextResponse } from 'next/server'

const AGENTS = [
  { id: 'octavia-001', name: 'Octavia', type: 'architect', status: 'active', node: 'aria64' },
  { id: 'lucidia-001', name: 'Lucidia', type: 'dreamer',   status: 'active', node: 'aria64' },
  { id: 'alice-001',   name: 'Alice',   type: 'operator',  status: 'active', node: 'alice'  },
  { id: 'aria-001',    name: 'Aria',    type: 'interface',  status: 'active', node: 'aria64' },
  { id: 'shellfish-001', name: 'Shellfish', type: 'hacker', status: 'standby', node: 'aria64' },
]

export async function GET() {
  return NextResponse.json({
    agents: AGENTS,
    total: AGENTS.length,
    active: AGENTS.filter(a => a.status === 'active').length,
    timestamp: new Date().toISOString(),
  })
}
