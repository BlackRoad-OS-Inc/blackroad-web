import { ScanLine, StatusEmoji, MetricEmoji, GeometricPattern } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Release notes and version history for BlackRoad OS platform updates.',
}


export default function ChangelogPage() {
  const releases = [
    {
      version: '2.0.0',
      date: 'Jan 15, 2025',
      status: 'latest',
      type: 'major',
      changes: [
        { type: 'feature', text: 'Multi-agent orchestration system with PS-SHA-∞ memory' },
        { type: 'feature', text: 'Distributed blackroad os with 22K+ indexed components' },
        { type: 'feature', text: 'Real-time collaboration across 27+ AI agents' },
        { type: 'breaking', text: 'New authentication system - migration required' }
      ]
    },
    {
      version: '1.8.0',
      date: 'Dec 10, 2024',
      status: 'stable',
      type: 'minor',
      changes: [
        { type: 'feature', text: 'Railway deployment automation' },
        { type: 'feature', text: 'Cloudflare Pages integration for 20+ domains' },
        { type: 'improvement', text: 'Faster build times (40% reduction)' },
        { type: 'fix', text: 'Memory leak in long-running processes' }
      ]
    },
    {
      version: '1.7.2',
      date: 'Nov 28, 2024',
      status: 'stable',
      type: 'patch',
      changes: [
        { type: 'fix', text: 'TypeScript type errors in API client' },
        { type: 'fix', text: 'WebSocket reconnection issues' },
        { type: 'improvement', text: 'Better error messages' }
      ]
    },
    {
      version: '1.7.0',
      date: 'Nov 15, 2024',
      status: 'stable',
      type: 'minor',
      changes: [
        { type: 'feature', text: 'Stripe integration with webhooks' },
        { type: 'feature', text: 'Clerk authentication across services' },
        { type: 'improvement', text: 'Dashboard UI refresh' }
      ]
    },
    {
      version: '1.6.0',
      date: 'Oct 30, 2024',
      status: 'stable',
      type: 'minor',
      changes: [
        { type: 'feature', text: 'Pi cluster deployment support' },
        { type: 'feature', text: 'GitHub Actions automation' },
        { type: 'improvement', text: 'Documentation overhaul' }
      ]
    }
  ]

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'feature': return '✨'
      case 'improvement': return '⚡'
      case 'fix': return '🔧'
      case 'breaking': return '💥'
      default: return '📝'
    }
  }

  const getTypeBadge = (type: string) => {
    switch(type) {
      case 'major': return { bg: 'var(--br-electric-magenta)', text: 'MAJOR' }
      case 'minor': return { bg: 'var(--br-warm-orange)', text: 'MINOR' }
      case 'patch': return { bg: '#00ff00', text: 'PATCH' }
      default: return { bg: 'rgba(255,255,255,0.6)', text: 'RELEASE' }
    }
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <ScanLine />
      <GeometricPattern type="lines" opacity={0.03} />
      
      {/* Header */}
      <section className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Changelog <MetricEmoji type="clock" />
        </h1>
        <p className="text-2xl br-text-muted mb-8">
          Track every feature, improvement, and bug fix across BlackRoad OS.
        </p>
        <div className="flex gap-4">
          <a href="#latest" className="px-6 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Latest Release
          </a>
          <a href="https://github.com/blackroad-os" className="px-6 py-3 border border-[rgba(255,255,255,0.3)] hover:border-white transition-all hover-lift">
            View on GitHub →
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 px-6 py-16 max-w-4xl mx-auto">
        <div className="space-y-12">
          {releases.map((release, i) => {
            const badge = getTypeBadge(release.type)
            return (
              <div key={i} id={i === 0 ? 'latest' : undefined} className="relative pl-8 border-l-2 border-[rgba(255,255,255,0.15)]">
                {/* Version Marker */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rounded-full"></div>
                
                {/* Release Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-3xl font-bold">v{release.version}</h2>
                    {release.status === 'latest' && <StatusEmoji status="green" />}
                    <span 
                      className="px-3 py-1 text-xs font-bold rounded"
                      style={{ backgroundColor: badge.bg, color: badge.bg === '#00ff00' ? '#000' : '#fff' }}
                    >
                      {badge.text}
                    </span>
                  </div>
                  <div className="br-text-muted">
                    <MetricEmoji type="clock" /> {release.date}
                  </div>
                </div>

                {/* Changes */}
                <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 space-y-3">
                  {release.changes.map((change, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="text-xl">{getTypeIcon(change.type)}</span>
                      <div>
                        <span className="text-xs br-text-muted uppercase tracking-wider">{change.type}</span>
                        <p className="br-text-soft">{change.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Want to stay updated?</h2>
        <p className="text-xl br-text-muted mb-8">
          Subscribe to our changelog feed or watch us on GitHub.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            📧 Subscribe to Updates
          </button>
          <button className="px-6 py-3 border border-[rgba(255,255,255,0.3)] hover:border-white transition-all hover-lift">
            ⭐ Star on GitHub
          </button>
        </div>
      </section>
    </main>
  )
}
