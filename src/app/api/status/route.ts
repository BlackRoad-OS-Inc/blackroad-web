import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    service: 'blackroad-os-web',
    status: 'operational',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    features: {
      authentication: 'demo',
      payments: 'stripe-ready',
      router: 'cloudflare-workers'
    }
  })
}
