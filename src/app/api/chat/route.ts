// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { NextRequest, NextResponse } from 'next/server'

const GATEWAY = process.env.BLACKROAD_GATEWAY_URL ?? 'http://127.0.0.1:8787'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { agent, message, model, stream = false } = body

  if (!message) {
    return NextResponse.json({ error: 'message required' }, { status: 400 })
  }

  const gatewayRes = await fetch(`${GATEWAY}/v1/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ agent, message, model, stream }),
  })

  if (!gatewayRes.ok) {
    const err = await gatewayRes.text()
    return NextResponse.json({ error: err }, { status: gatewayRes.status })
  }

  if (stream && gatewayRes.body) {
    return new NextResponse(gatewayRes.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  }

  return NextResponse.json(await gatewayRes.json())
}
