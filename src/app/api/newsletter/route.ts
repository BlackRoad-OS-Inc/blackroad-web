import { NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  const { email } = body as Record<string, unknown>

  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    )
  }

  // In production, send to email service (Mailchimp, SendGrid, etc.)
  console.log('📧 Newsletter Signup:', email)

  return NextResponse.json({
    status: 'subscribed',
    message: 'Successfully subscribed to newsletter!'
  })
}

export async function GET() {
  return NextResponse.json({
    service: 'newsletter',
    provider: 'blackroad-mail',
    status: 'operational'
  })
}
