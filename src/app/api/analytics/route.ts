import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Request body must be a JSON object' }, { status: 400 })
  }

  const { event } = body as Record<string, unknown>
  if (!event || typeof event !== 'string') {
    return NextResponse.json({ error: 'Missing required field: event' }, { status: 400 })
  }

  // In production, forward to analytics service
  console.log('📊 Analytics Event:', event)

  return NextResponse.json({
    status: 'tracked',
    event,
    timestamp: new Date().toISOString()
  })
}

export async function GET() {
  return NextResponse.json({
    service: 'analytics',
    events: ['pageview', 'click', 'signup', 'checkout'],
    status: 'operational'
  })
}
