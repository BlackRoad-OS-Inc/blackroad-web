import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store in D1 database if available
    // For now, forward to email via Cloudflare Email Workers or store in KV
    const submission = {
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('cf-connecting-ip') || 'unknown',
    }

    // Try to store in KV if available (set via wrangler.toml binding)
    try {
      const env = (request as any).env
      if (env?.CONTACT_KV) {
        const key = `contact:${Date.now()}:${email}`
        await env.CONTACT_KV.put(key, JSON.stringify(submission), { expirationTtl: 86400 * 90 })
      }
    } catch {
      // KV not available in this environment, continue
    }

    // Send notification email via Mailgun/SendGrid/Resend if configured
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'BlackRoad OS <noreply@blackroad.io>',
          to: ['amundsonalexa@gmail.com'],
          subject: `[BlackRoad Contact] ${submission.subject} — ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${submission.subject}\n\nMessage:\n${message}\n\nTimestamp: ${submission.timestamp}`,
        }),
      })
    }

    return NextResponse.json({
      status: 'received',
      message: 'Your message has been received. We will get back to you within 24 hours.',
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
