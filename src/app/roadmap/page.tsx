import { ScanLine, StatusEmoji, MetricEmoji, GeometricPattern, PulsingDot } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'BlackRoad OS product roadmap — upcoming features, platform improvements, and release timeline.',
}


export default function RoadmapPage() {
  const quarters = [
    {
      name: 'Q4 2025',
      status: 'completed',
      items: [
        { title: 'Multi-agent orchestration', status: 'done', description: '30,000 concurrent agents with PS-SHA-infinity identity' },
        { title: 'Distributed codex', status: 'done', description: '225K+ indexed components across 1,085 repos' },
        { title: 'Edge AI cluster', status: 'done', description: '8 devices, 52 TOPS compute, full Tailscale mesh' },
        { title: 'Cloudflare infrastructure', status: 'done', description: '205 Pages projects, 35 KV namespaces' }
      ]
    },
    {
      name: 'Q1 2026',
      status: 'in-progress',
      items: [
        { title: 'ALICE QI deterministic reasoning', status: 'done', description: 'Same input, same output — every time' },
        { title: 'Lucidia orchestration language', status: 'done', description: '10 domain agents with breath-sync timing' },
        { title: 'RoadChain audit ledger', status: 'done', description: 'Immutable blockchain-inspired compliance logging' },
        { title: 'Prism Console v2', status: 'in-progress', description: 'Real-time dashboard with policy enforcement' }
      ]
    },
    {
      name: 'Q2 2026',
      status: 'planned',
      items: [
        { title: 'Multi-cloud deployment', status: 'planned', description: 'AWS, GCP, Azure alongside Cloudflare + Railway' },
        { title: 'HIPAA / SOC 2 certification', status: 'planned', description: 'Formal compliance certification for enterprise' },
        { title: 'Team workspaces', status: 'planned', description: 'Multi-tenant organizations with role-based access' },
        { title: 'Marketplace launch', status: 'planned', description: 'Agent templates, workflow packages, and integrations' }
      ]
    },
    {
      name: 'Q3 2026',
      status: 'future',
      items: [
        { title: 'FedRAMP authorization', status: 'future', description: 'Federal government deployment readiness' },
        { title: 'Advanced edge inference', status: 'future', description: 'On-device model execution with Hailo-8 acceleration' },
        { title: 'SDK ecosystem', status: 'future', description: 'Python, Node.js, Go, and Rust client libraries' },
        { title: 'Desktop + mobile apps', status: 'future', description: 'Native Prism Console for Mac, Windows, iOS, Android' }
      ]
    }
  ]

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'done':
        return { color: 'var(--br-hot-pink)', text: 'DONE', emoji: '✓' }
      case 'in-progress':
        return { color: 'var(--br-warm-orange)', text: 'IN PROGRESS', emoji: '⚡' }
      case 'planned':
        return { color: 'var(--br-cyber-blue)', text: 'PLANNED', emoji: '📋' }
      case 'research':
        return { color: 'var(--br-vivid-purple)', text: 'RESEARCH', emoji: '🔬' }
      case 'future':
        return { color: 'rgba(255,255,255,0.6)', text: 'FUTURE', emoji: '🔮' }
      default:
        return { color: 'rgba(255,255,255,0.6)', text: status.toUpperCase(), emoji: '○' }
    }
  }

  const getQuarterStatus = (status: string) => {
    switch(status) {
      case 'completed':
        return <StatusEmoji status="green" />
      case 'in-progress':
        return <StatusEmoji status="yellow" />
      default:
        return <span className="text-2xl br-text-muted">○</span>
    }
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <ScanLine />
      <GeometricPattern type="lines" opacity={0.03} />
      
      {/* Header */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Product Roadmap <MetricEmoji type="rocket" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Our vision for the next 12 months. Transparent. Ambitious. Community-driven.
        </p>
        <div className="flex gap-6 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-[var(--br-hot-pink)] text-xl">✓</span>
            <span className="br-text-muted">Done</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--br-warm-orange)] text-xl">⚡</span>
            <span className="br-text-muted">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--br-cyber-blue)] text-xl">📋</span>
            <span className="br-text-muted">Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="br-text-muted text-xl">🔮</span>
            <span className="br-text-muted">Future</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
        <div className="space-y-16">
          {quarters.map((quarter, qIdx) => (
            <div key={qIdx} className="relative">
              {/* Quarter Header */}
              <div className="flex items-center gap-4 mb-8">
                {getQuarterStatus(quarter.status)}
                <h2 className="text-4xl font-bold">{quarter.name}</h2>
                {quarter.status === 'in-progress' && <PulsingDot />}
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {quarter.items.map((item, iIdx) => {
                  const badge = getStatusBadge(item.status)
                  return (
                    <div 
                      key={iIdx} 
                      className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all hover-lift"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold flex-1">{item.title}</h3>
                        <span 
                          className="px-3 py-1 text-xs font-bold rounded ml-4"
                          style={{ 
                            backgroundColor: badge.color, 
                            color: '#000'
                          }}
                        >
                          {badge.emoji} {badge.text}
                        </span>
                      </div>
                      <p className="br-text-muted">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12 text-center">2026 Progress</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2 text-[var(--br-hot-pink)]">8</div>
            <div className="br-text-muted">Completed</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2 text-[var(--br-warm-orange)]">4</div>
            <div className="br-text-muted">In Progress</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2 text-[var(--br-cyber-blue)]">4</div>
            <div className="br-text-muted">Planned</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2 br-text-muted">4</div>
            <div className="br-text-muted">Future</div>
          </div>
        </div>
      </section>

      {/* Community Input */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Help Shape the Roadmap</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          We build in public and listen to our community. 
          Vote on features, suggest ideas, or join the discussion.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/blackroad-os/roadmap/discussions"
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            💬 Join Discussion
          </a>
          <a 
            href="https://github.com/blackroad-os/roadmap/issues/new"
            className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift"
          >
            💡 Request Feature
          </a>
        </div>
      </section>
    </main>
  )
}
