import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Validate email
  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    )
  }
  
  // In production, send to email service (Mailchimp, SendGrid, etc.)
  console.log('📧 Newsletter Signup:', email)
  
  return NextResponse.json({
    status: 'subscribed',
    email,
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
