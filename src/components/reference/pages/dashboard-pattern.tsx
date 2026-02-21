'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

interface ServiceStatus {
  service: string
  status: string
  timestamp?: string
  uptime?: number
  memory?: { used: number; total: number }
}

export default function Dashboard() {
  const [services, setServices] = useState<ServiceStatus[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStatuses() {
      const endpoints = [
        { name: 'Web', url: '/api/health' },
        { name: 'Status', url: '/api/status' },
        { name: 'Analytics', url: '/api/analytics' },
        { name: 'Newsletter', url: '/api/newsletter' },
      ]

      const results = await Promise.all(
        endpoints.map(async (endpoint) => {
          try {
            const res = await fetch(endpoint.url)
            const data = await res.json()
            return { service: endpoint.name, ...data, status: data.status || 'ok' }
          } catch {
            return { service: endpoint.name, status: 'error' }
          }
        })
      )

      setServices(results)
      setLoading(false)
    }

    fetchStatuses()
    const interval = setInterval(fetchStatuses, 10000)
    return () => clearInterval(interval)
  }, [])

  const healthy = services.filter(s => s.status === 'ok' || s.status === 'operational').length
  const errors = services.filter(s => s.status === 'error').length

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <BlackRoadSymbol size="md" />
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-sm br-text-muted">Service health &amp; metrics</p>
            </div>
          </div>
          <Link
            href="/"
            className="px-4 py-2 border border-[rgba(255,255,255,0.3)] hover:border-white text-sm font-bold transition-all no-underline text-white"
          >
            Home
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center">
            <div className="text-4xl font-bold mb-1">{services.length}</div>
            <div className="text-sm br-text-muted">Total Services</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center">
            <div className="text-4xl font-bold mb-1 text-[var(--br-status-green)]">{healthy}</div>
            <div className="text-sm br-text-muted">Healthy</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center">
            <div className="text-4xl font-bold mb-1 text-[var(--br-hot-pink)]">{errors}</div>
            <div className="text-sm br-text-muted">Errors</div>
          </div>
        </div>

        {/* Services */}
        {loading ? (
          <div className="text-center py-16">
            <div className="text-lg br-text-muted animate-pulse">Loading services...</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {services.map((service) => {
              const isOk = service.status === 'ok' || service.status === 'operational'
              return (
                <div
                  key={service.service}
                  className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-[rgba(255,255,255,0.2)] transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{service.service}</h3>
                    <span
                      className={`px-3 py-1 text-xs font-bold ${
                        isOk
                          ? 'bg-[rgba(0,255,100,0.15)] text-[var(--br-status-green)]'
                          : 'bg-[rgba(255,0,102,0.15)] text-[var(--br-hot-pink)]'
                      }`}
                    >
                      {isOk ? 'OPERATIONAL' : 'ERROR'}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm br-text-muted">
                    {service.timestamp && (
                      <div>Last check: {new Date(service.timestamp).toLocaleTimeString()}</div>
                    )}
                    {service.uptime !== undefined && (
                      <div>Uptime: {Math.floor(service.uptime)}s</div>
                    )}
                    {service.memory && (
                      <div>Memory: {service.memory.used}MB / {service.memory.total}MB</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Quick Links */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Account', href: '/account' },
              { label: 'API Docs', href: '/api-docs' },
              { label: 'Status Page', href: '/status-page' },
              { label: 'Settings', href: '/settings-page' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white p-4 text-center font-bold text-sm transition-all no-underline text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
