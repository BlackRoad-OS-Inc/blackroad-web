'use client'

import { useState } from 'react'
import { AnimatedGrid, StatusEmoji, MetricEmoji, PulsingDot, ScanLine, GeometricPattern } from '../components/BlackRoadVisuals'

export default function Dashboard2Page() {
  const [timeRange, setTimeRange] = useState('24h')

  const metrics = [
    { label: 'Requests/sec', value: '12.4K', change: '+23%', trend: 'up', emoji: '⚡' },
    { label: 'Avg Response Time', value: '42ms', change: '-15%', trend: 'down', emoji: '⏱️' },
    { label: 'Error Rate', value: '0.02%', change: '-50%', trend: 'down', emoji: '🎯' },
    { label: 'Active Users', value: '8,432', change: '+12%', trend: 'up', emoji: '👥' }
  ]

  const services = [
    { name: 'web', status: 'healthy', cpu: '23%', memory: '512MB', uptime: '45d' },
    { name: 'api', status: 'healthy', cpu: '67%', memory: '1.2GB', uptime: '45d' },
    { name: 'worker', status: 'warning', cpu: '89%', memory: '2.1GB', uptime: '12d' },
    { name: 'database', status: 'healthy', cpu: '34%', memory: '4.8GB', uptime: '89d' },
    { name: 'cache', status: 'healthy', cpu: '12%', memory: '256MB', uptime: '89d' }
  ]

  const deployments = [
    { id: '#1247', service: 'web', status: 'success', time: '2m ago', user: 'alexa', commit: 'feat: add dashboard' },
    { id: '#1246', service: 'api', status: 'success', time: '15m ago', user: 'mercury', commit: 'fix: rate limiting' },
    { id: '#1245', service: 'worker', status: 'failed', time: '1h ago', user: 'atlas', commit: 'chore: update deps' },
    { id: '#1244', service: 'web', status: 'success', time: '3h ago', user: 'alexa', commit: 'style: new theme' }
  ]

  const alerts = [
    { level: 'warning', message: 'Worker CPU usage above 85%', time: '5m ago', service: 'worker' },
    { level: 'info', message: 'Deployment #1247 completed', time: '2m ago', service: 'web' },
    { level: 'success', message: 'Auto-scaled worker to 3 instances', time: '10m ago', service: 'worker' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <ScanLine />
      <GeometricPattern type="grid" opacity={0.02} />
      
      {/* Header */}
      <header className="relative z-10 border-b border-[var(--br-charcoal)] bg-[var(--br-deep-black)]/80 backdrop-blur">
        <div className="px-6 py-4 flex items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <PulsingDot />
            <span className="text-sm br-text-muted">All Systems Operational</span>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] px-4 py-2 rounded"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            
            <button className="px-4 py-2 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all">
              Deploy
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 px-6 py-8 max-w-[1800px] mx-auto">
        
        {/* Metrics Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm br-text-muted">{metric.label}</span>
                  <span className="text-2xl">{metric.emoji}</span>
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className={`text-sm ${metric.trend === 'up' ? 'text-[var(--br-hot-pink)]' : 'text-[var(--br-hot-pink)]'}`}>
                  {metric.change} vs last period
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Services Status */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                Services <MetricEmoji type="cd" />
              </h2>
              <div className="space-y-3">
                {services.map((service, i) => (
                  <div key={i} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-4 flex items-center justify-between hover:border-[rgba(255,255,255,0.3)] transition-all">
                    <div className="flex items-center gap-4 flex-1">
                      <StatusEmoji status={service.status === 'healthy' ? 'green' : service.status === 'warning' ? 'yellow' : 'red'} />
                      <div>
                        <div className="font-bold">{service.name}</div>
                        <div className="text-xs br-text-muted">Uptime: {service.uptime}</div>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="br-text-muted">CPU:</span> {service.cpu}
                      </div>
                      <div>
                        <span className="br-text-muted">MEM:</span> {service.memory}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Deployments */}
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 mt-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                Recent Deployments <MetricEmoji type="rocket" />
              </h2>
              <div className="space-y-3">
                {deployments.map((deploy, i) => (
                  <div key={i} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-4 flex items-center justify-between hover:border-[rgba(255,255,255,0.3)] transition-all">
                    <div className="flex items-center gap-4 flex-1">
                      <StatusEmoji status={deploy.status === 'success' ? 'green' : 'red'} />
                      <div>
                        <div className="font-bold">{deploy.service} {deploy.id}</div>
                        <div className="text-sm br-text-muted">{deploy.commit}</div>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="br-text-soft">{deploy.user}</div>
                      <div className="br-text-muted">{deploy.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Alerts */}
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                Alerts <MetricEmoji type="lightning" />
              </h2>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div key={i} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-4">
                    <div className="flex items-start gap-2 mb-2">
                      {alert.level === 'warning' && <span className="text-[var(--br-warm-orange)]">⚠️</span>}
                      {alert.level === 'info' && <span className="text-[#00f]">ℹ️</span>}
                      {alert.level === 'success' && <span className="text-[var(--br-hot-pink)]">✓</span>}
                      <span className="text-xs br-text-muted uppercase">{alert.level}</span>
                    </div>
                    <div className="text-sm mb-2">{alert.message}</div>
                    <div className="text-xs br-text-muted">{alert.service} • {alert.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] hover:border-white text-left font-bold transition-all">
                  🚀 Deploy All Services
                </button>
                <button className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] hover:border-white text-left font-bold transition-all">
                  📊 View Metrics
                </button>
                <button className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] hover:border-white text-left font-bold transition-all">
                  📝 View Logs
                </button>
                <button className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] hover:border-white text-left font-bold transition-all">
                  ⚙️ Settings
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
