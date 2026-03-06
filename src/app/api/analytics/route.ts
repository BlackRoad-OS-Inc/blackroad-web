// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || !('event' in body) || typeof (body as Record<string, unknown>).event !== 'string') {
    return NextResponse.json({ error: 'Missing required field: event (string)' }, { status: 400 })
  }

  const { event } = body as { event: string }

  return NextResponse.json({
    status: 'tracked',
    event,
    timestamp: new Date().toISOString(),
  })
}

export async function GET() {
  return NextResponse.json({
    service: 'analytics',
    events: ['pageview', 'click', 'signup', 'checkout'],
    status: 'operational'
  })
}
