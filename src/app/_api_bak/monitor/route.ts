import { NextResponse } from 'next/server'

export async function GET() {
  const services = [
    { name: 'web', port: 3000, status: 'operational', url: 'http://localhost:3000' },
    { name: 'prism', port: 3001, status: 'starting', url: 'http://localhost:3001' },
    { name: 'operator', port: 3002, status: 'starting', url: 'http://localhost:3002' },
    { name: 'api', port: 3003, status: 'starting', url: 'http://localhost:3003' },
  ]

  return NextResponse.json({
    services,
    timestamp: new Date().toISOString(),
    totalServices: services.length,
    healthyServices: services.filter(s => s.status === 'operational').length,
    environment: process.env.NODE_ENV || 'development'
  })
}
