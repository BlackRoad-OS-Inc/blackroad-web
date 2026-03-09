import { NextResponse } from 'next/server'

const ARIA64_STATUS = 'http://192.168.4.38:8182/status'

export async function GET() {
  let aria64: Record<string, unknown> = { host: 'aria64', online: false }
  let alice: Record<string, unknown> = { host: 'alice', online: false }

  try {
    const r = await fetch(ARIA64_STATUS, { signal: AbortSignal.timeout(5000) })
    aria64 = { ...(await r.json()), online: true }
  } catch {}

  return NextResponse.json({
    fleet: [aria64, alice],
    total_agents: 30000,
    total_worlds: ((aria64.worlds_created as number) ?? 0) + ((alice.worlds_created as number) ?? 0),
    timestamp: new Date().toISOString(),
  })
}
