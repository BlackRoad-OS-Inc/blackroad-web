import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  StatusEmoji,
  BlackRoadSymbol,
  PulsingDot
} from '../components/BlackRoadVisuals'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'System Status',
  description: 'Real-time status of BlackRoad OS services, APIs, and infrastructure.',
}

export default function StatusPage() {
  const services = [
    { name: 'API Gateway', status: 'operational', uptime: '99.99%', latency: '45ms', region: 'US-West' },
    { name: 'Web Application', status: 'operational', uptime: '99.97%', latency: '120ms', region: 'Global' },
    { name: 'Database Primary', status: 'operational', uptime: '99.95%', latency: '12ms', region: 'US-East' },
    { name: 'Database Replica', status: 'operational', uptime: '99.98%', latency: '15ms', region: 'EU-West' },
    { name: 'Cache Layer', status: 'degraded', uptime: '98.20%', latency: '125ms', region: 'Global' },
    { name: 'Message Queue', status: 'operational', uptime: '100.00%', latency: '8ms', region: 'US-West' },
    { name: 'File Storage', status: 'operational', uptime: '99.93%', latency: '67ms', region: 'Global' },
    { name: 'CDN', status: 'operational', uptime: '99.99%', latency: '23ms', region: 'Global' },
    { name: 'Email Service', status: 'operational', uptime: '99.96%', latency: '450ms', region: 'US-East' },
    { name: 'Monitoring', status: 'operational', uptime: '99.94%', latency: '89ms', region: 'US-West' }
  ]

  const incidents = [
    {
      date: '2026-02-14 18:30 UTC',
      title: 'Cache Layer Performance Degradation',
      status: 'investigating',
      updates: [
        { time: '19:15', message: 'Identified the issue - Redis cluster memory pressure' },
        { time: '18:45', message: 'Monitoring cache performance metrics' },
        { time: '18:30', message: 'Investigating elevated latency in cache layer' }
      ]
    },
    {
      date: '2026-02-12 09:00 UTC',
      title: 'Scheduled Maintenance - Database Upgrade',
      status: 'resolved',
      updates: [
        { time: '11:30', message: 'All systems operational. Maintenance complete.' },
        { time: '10:15', message: 'Upgrade in progress. Services running normally.' },
        { time: '09:00', message: 'Beginning scheduled database maintenance window' }
      ]
    },
    {
      date: '2026-02-08 14:20 UTC',
      title: 'API Gateway Timeout Spike',
      status: 'resolved',
      updates: [
        { time: '15:45', message: 'Issue resolved. Systems stable.' },
        { time: '15:00', message: 'Applied fix. Monitoring for stability.' },
        { time: '14:40', message: 'Root cause identified - rate limiter configuration' },
        { time: '14:20', message: 'Investigating API timeout reports' }
      ]
    }
  ]

  const uptime90Days = [
    99.99, 99.98, 99.99, 100, 99.97, 99.99, 99.99, 100, 99.98, 99.99,
    99.99, 100, 99.95, 99.98, 99.99, 99.99, 100, 99.97, 99.99, 100,
    99.98, 99.99, 99.99, 100, 99.96, 99.99, 99.98, 99.99, 100, 99.97,
    99.99, 99.99, 100, 99.98, 99.99, 99.99, 100, 99.97, 99.99, 99.99,
    100, 99.98, 99.99, 99.99, 100, 99.96, 99.99, 99.98, 99.99, 100,
    99.97, 99.99, 99.99, 100, 99.98, 99.99, 99.99, 100, 99.97, 99.99,
    99.99, 100, 99.98, 99.99, 99.99, 100, 99.96, 99.99, 99.98, 99.99,
    100, 99.97, 99.99, 99.99, 100, 99.98, 99.99, 99.99, 100, 99.97,
    99.99, 99.99, 100, 99.98, 99.99, 99.99, 100, 99.96, 99.99, 98.20
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <BlackRoadSymbol size={80} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">
            System <span className="text-[var(--br-hot-pink)]">Status</span>
          </h1>
          <div className="flex items-center justify-center gap-3 text-xl">
            <StatusEmoji status="green" />
            <span className="br-text-muted">All Systems Operational</span>
          </div>
          <p className="text-sm br-text-faint mt-2">Last updated: 2 minutes ago</p>
        </div>

        {/* Overall Uptime */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-center">
            <div className="text-4xl font-bold text-[var(--br-hot-pink)] mb-2">99.96%</div>
            <div className="br-text-muted">30-Day Uptime</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-center">
            <div className="text-4xl font-bold text-[var(--br-hot-pink)] mb-2">99.94%</div>
            <div className="br-text-muted">90-Day Uptime</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-center">
            <div className="text-4xl font-bold text-[var(--br-hot-pink)] mb-2">3</div>
            <div className="br-text-muted">Incidents This Month</div>
          </div>
        </div>

        {/* 90-Day Uptime Chart */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded mb-12">
          <h2 className="text-2xl font-bold mb-6">90-Day Uptime History</h2>
          <div className="flex items-end gap-1 h-24">
            {uptime90Days.map((uptime, idx) => (
              <div
                key={idx}
                className="flex-1 transition-all hover:opacity-70 cursor-pointer"
                style={{
                  height: `${uptime}%`,
                  backgroundColor: uptime >= 99.9 ? 'var(--br-hot-pink)' : uptime >= 99 ? 'var(--br-warm-orange)' : 'var(--br-electric-magenta)'
                }}
                title={`Day ${idx + 1}: ${uptime}%`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between text-sm br-text-faint mt-3">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Service Status */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Status</h2>
          <div className="space-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded hover:border-white transition-all">
                <div className="flex items-center gap-4 flex-1">
                  <StatusEmoji status={service.status === 'operational' ? 'green' : 'yellow'} />
                  <div>
                    <div className="font-bold">{service.name}</div>
                    <div className="text-sm br-text-muted capitalize">{service.status}</div>
                  </div>
                </div>
                <div className="flex gap-8 text-right">
                  <div>
                    <div className="text-xs br-text-muted">Uptime</div>
                    <div className="font-bold text-[var(--br-hot-pink)]">{service.uptime}</div>
                  </div>
                  <div>
                    <div className="text-xs br-text-muted">Latency</div>
                    <div className="font-bold">{service.latency}</div>
                  </div>
                  <div>
                    <div className="text-xs br-text-muted">Region</div>
                    <div className="font-bold br-text-muted">{service.region}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, idx) => (
              <div key={idx} className="border-l-4 border-[var(--br-warm-orange)] pl-6 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-lg mb-1">{incident.title}</div>
                    <div className="text-sm br-text-muted">{incident.date}</div>
                  </div>
                  <div className={`px-3 py-1 rounded text-xs font-bold ${
                    incident.status === 'investigating' ? 'bg-[var(--br-warm-orange)] text-black' : 
                    incident.status === 'resolved' ? 'bg-[var(--br-hot-pink)] text-black' : 
                    'bg-[var(--br-electric-magenta)] text-white'
                  }`}>
                    {incident.status.toUpperCase()}
                  </div>
                </div>
                <div className="space-y-2">
                  {incident.updates.map((update, updateIdx) => (
                    <div key={updateIdx} className="flex gap-3 text-sm">
                      <div className="br-text-muted font-mono whitespace-nowrap">{update.time}</div>
                      <div className="br-text-muted">{update.message}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="br-text-muted mb-6">Get notified when incidents occur or are resolved</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] px-4 py-3 rounded focus:border-[var(--br-hot-pink)] outline-none" />
            <button className="px-6 py-3 bg-[var(--br-hot-pink)] text-black rounded font-bold hover:bg-white transition-all">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 justify-center mt-6 text-sm">
            <a href="/api-docs" className="br-text-muted hover:text-[var(--br-hot-pink)]">API Docs</a>
            <span className="br-text-faint">•</span>
            <a href="/docs" className="br-text-muted hover:text-[var(--br-hot-pink)]">Documentation</a>
            <span className="br-text-faint">•</span>
            <a href="/contact" className="br-text-muted hover:text-[var(--br-hot-pink)]">Contact</a>
          </div>
        </div>
      </div>
    </main>
  )
}
