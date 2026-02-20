import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'blackroad-web',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
  })
}
