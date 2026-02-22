// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { NextResponse } from 'next/server'

const GATEWAY = process.env.BLACKROAD_GATEWAY_URL ?? 'http://127.0.0.1:8787'

export async function GET() {
  try {
    const res = await fetch(`${GATEWAY}/v1/agents`, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error(`Gateway ${res.status}`)
    return NextResponse.json(await res.json())
  } catch {
    return NextResponse.json({ agents: [] }, { status: 503 })
  }
}
