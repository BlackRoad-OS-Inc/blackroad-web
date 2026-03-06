// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
// Agent registry API proxy (issues #1, #13)
import { NextResponse } from 'next/server'

const AGENTS_API_URL = (process.env['NEXT_PUBLIC_AGENTS_API_URL'] ?? 'http://127.0.0.1:3001').replace(/\/$/, '')

const FALLBACK_AGENTS = [
  { id: 'octavia-001', name: 'Octavia', type: 'architect', status: 'online',  node: 'aria64' },
  { id: 'lucidia-001', name: 'Lucidia', type: 'dreamer',   status: 'online',  node: 'aria64' },
  { id: 'alice-001',   name: 'Alice',   type: 'operator',  status: 'online',  node: 'alice'  },
  { id: 'aria-001',    name: 'Aria',    type: 'interface',  status: 'online',  node: 'aria64' },
  { id: 'shellfish-001', name: 'Shellfish', type: 'hacker', status: 'offline', node: 'aria64' },
]

export async function GET() {
  // Try live registry first
  try {
    const res = await fetch(`${AGENTS_API_URL}/agents`, {
      next: { revalidate: 10 },
      signal: AbortSignal.timeout(3000),
    })
    if (res.ok) {
      const data = await res.json()
      return NextResponse.json(data)
    }
  } catch {
    // Fall back to mock data if registry is unavailable
  }

  return NextResponse.json({
    agents: FALLBACK_AGENTS,
    total: FALLBACK_AGENTS.length,
    active: FALLBACK_AGENTS.filter(a => a.status === 'online').length,
    timestamp: new Date().toISOString(),
    source: 'fallback',
  })
}
