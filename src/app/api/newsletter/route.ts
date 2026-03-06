// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = (body as Record<string, unknown>)?.email
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 },
    )
  }

  return NextResponse.json({
    status: 'subscribed',
    message: 'Successfully subscribed to newsletter!',
  })
}

export async function GET() {
  return NextResponse.json({
    service: 'newsletter',
    provider: 'blackroad-mail',
    status: 'operational'
  })
}
