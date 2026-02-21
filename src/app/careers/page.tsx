import { FloatingShapes, StatusEmoji, MetricEmoji, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join BlackRoad OS — open roles in engineering, AI research, and infrastructure. Build the future of governed AI.',
}


export default function CareersPage() {
  const openRoles = [
    { title: 'Senior Full-Stack Engineer', team: 'Platform', location: 'Remote', type: 'Full-time', emoji: '⚡' },
    { title: 'DevOps Engineer', team: 'Infrastructure', location: 'Remote', type: 'Full-time', emoji: '🌐' },
    { title: 'Product Designer', team: 'Design', location: 'Remote', type: 'Full-time', emoji: '🎨' },
    { title: 'Technical Writer', team: 'Documentation', location: 'Remote', type: 'Contract', emoji: '📝' },
    { title: 'ML Engineer', team: 'AI/ML', location: 'Remote', type: 'Full-time', emoji: '🤖' },
    { title: 'Security Engineer', team: 'Security', location: 'Remote', type: 'Full-time', emoji: '🔒' }
  ]

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', desc: 'Top-tier compensation + equity' },
    { icon: '🏖️', title: 'Unlimited PTO', desc: 'Take time when you need it' },
    { icon: '🏥', title: 'Health Insurance', desc: 'Medical, dental, vision covered' },
    { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere' },
    { icon: '📚', title: 'Learning Budget', desc: '$2K/year for education' },
    { icon: '💻', title: 'Latest Tech', desc: 'M3 MacBook Pro + peripherals' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="grid" opacity={0.03} />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Build the Future <StatusEmoji status="green" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Join a world-class team building the next generation of developer infrastructure.
          Remote-first. Mission-driven. Highly autonomous.
        </p>
        <div className="flex gap-4 text-lg">
          <span className="br-text-muted"><MetricEmoji type="rocket" /> {openRoles.length} open positions</span>
          <span className="br-text-muted">• 🌍 Fully remote</span>
          <span className="br-text-muted">• ⚡ Fast-growing</span>
        </div>
      </section>

      {/* Open Roles */}
      <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Open Positions</h2>
        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {role.emoji} {role.title}
                  </h3>
                  <div className="flex gap-4 br-text-muted">
                    <span>🏢 {role.team}</span>
                    <span>• 📍 {role.location}</span>
                    <span>• ⏰ {role.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
                  Apply →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Benefits &amp; Perks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="br-text-muted">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Don't see a perfect fit?</h2>
        <p className="text-xl br-text-muted mb-8">
          We're always looking for exceptional talent. Send us your resume anyway!
        </p>
        <button className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
          📧 Email us: careers@blackroad.io
        </button>
      </section>
    </main>
  )
}
