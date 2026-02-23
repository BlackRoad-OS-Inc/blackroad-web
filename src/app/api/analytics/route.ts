import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // In production, send to analytics service
  console.log('📊 Analytics Event:', body)
  
  return NextResponse.json({
    status: 'tracked',
    event: body.event,
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
