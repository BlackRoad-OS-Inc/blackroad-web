import { FloatingShapes, StatusEmoji, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the BlackRoad OS team building the future of governed AI.',
}


export default function TeamPage() {
  const team = [
    {
      name: 'Alexa Amundson',
      role: 'Founder & CEO',
      avatar: '👩‍💻',
      bio: 'Building the future of autonomous infrastructure. Previously: distributed systems at scale.',
      links: {
        linkedin: 'https://linkedin.com/in/alexa-amundson',
        github: 'https://github.com/alexa',
        twitter: 'https://twitter.com/alexa'
      }
    },
    {
      name: 'Atlas',
      role: 'AI Infrastructure Lead',
      avatar: '🤖',
      bio: 'Multi-agent orchestration specialist. Coordinates 27+ AI agents in real-time.',
      links: {
        github: 'https://github.com/blackroad-os/atlas'
      }
    },
    {
      name: 'Mercury',
      role: 'DevOps Engineer',
      avatar: '⚡',
      bio: 'Railway + Cloudflare deployment expert. Loves self-healing systems.',
      links: {
        github: 'https://github.com/blackroad-os/mercury'
      }
    },
    {
      name: 'Cece',
      role: 'Memory Systems Architect',
      avatar: '💾',
      bio: 'PS-SHA-∞ memory persistence. 4000+ entries indexed and searchable.',
      links: {
        github: 'https://github.com/blackroad-os/cece'
      }
    },
    {
      name: 'Prism',
      role: 'Observability Engineer',
      avatar: '📊',
      bio: 'Real-time metrics, logs, traces. AI-powered alerting that actually works.',
      links: {
        github: 'https://github.com/blackroad-os/prism'
      }
    },
    {
      name: 'Operator',
      role: 'Security Lead',
      avatar: '🔐',
      bio: 'Zero-trust networking, automated security scans, incident response.',
      links: {
        github: 'https://github.com/blackroad-os/operator'
      }
    }
  ]

  const values = [
    {
      icon: '🚀',
      title: 'Ship Fast',
      description: 'Move quickly, iterate constantly, deploy fearlessly. Speed is a feature.'
    },
    {
      icon: '🤝',
      title: 'Build in Public',
      description: 'Transparent roadmap, open source core, community-driven development.'
    },
    {
      icon: '🧠',
      title: 'AI-First',
      description: 'Embrace automation. Let AI handle the repetitive, focus on the creative.'
    },
    {
      icon: '🌍',
      title: 'Remote-First',
      description: 'Work from anywhere. Async communication. Results over hours.'
    },
    {
      icon: '⚡',
      title: 'Own Your Stack',
      description: 'No vendor lock-in. Multi-cloud. You control your infrastructure.'
    },
    {
      icon: '🔓',
      title: 'Open by Default',
      description: 'Open protocols, open standards, open collaboration.'
    }
  ]

  const openRoles = [
    { title: 'Senior Full-Stack Engineer', team: 'Platform', location: 'Remote' },
    { title: 'DevOps Engineer', team: 'Infrastructure', location: 'Remote' },
    { title: 'Product Designer', team: 'Design', location: 'Remote' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Meet the Team <StatusEmoji status="green" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl mx-auto">
          A small team of humans + AI agents building the future of autonomous infrastructure.
          Remote-first. Mission-driven. Moving fast.
        </p>
      </section>

      {/* Team Grid */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <div className="br-text-muted mb-4">{member.role}</div>
              <p className="br-text-soft mb-6">{member.bio}</p>
              <div className="flex gap-3">
                {member.links.github && (
                  <a 
                    href={member.links.github}
                    className="px-4 py-2 bg-[var(--br-charcoal)] hover:bg-[rgba(255,255,255,0.08)] text-sm font-bold transition-all"
                  >
                    GitHub
                  </a>
                )}
                {member.links.linkedin && (
                  <a 
                    href={member.links.linkedin}
                    className="px-4 py-2 bg-[var(--br-charcoal)] hover:bg-[rgba(255,255,255,0.08)] text-sm font-bold transition-all"
                  >
                    LinkedIn
                  </a>
                )}
                {member.links.twitter && (
                  <a 
                    href={member.links.twitter}
                    className="px-4 py-2 bg-[var(--br-charcoal)] hover:bg-[rgba(255,255,255,0.08)] text-sm font-bold transition-all"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="br-text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Join Us</h2>
          <p className="text-xl br-text-muted max-w-2xl mx-auto">
            We're always looking for exceptional talent who share our vision.
            Human or AI agent, if you can ship, we want to talk.
          </p>
        </div>

        {/* Open Roles */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {openRoles.map((role, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 flex items-center justify-between hover:border-white transition-all hover-lift">
              <div>
                <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                <div className="br-text-muted">
                  {role.team} • {role.location}
                </div>
              </div>
              <a 
                href="/careers"
                className="px-6 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
              >
                Apply →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/careers"
            className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            View All Positions →
          </a>
        </div>
      </section>

      {/* Culture */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Working at BlackRoad</h2>
        <p className="text-xl br-text-muted mb-12 max-w-3xl mx-auto">
          Remote-first culture. Async communication. High autonomy.
          Unlimited PTO. Top-tier compensation. Latest tech.
          We trust you to do your best work, however and wherever that happens.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-4xl mb-3">💰</div>
            <div className="text-2xl font-bold mb-2">Competitive Pay</div>
            <div className="br-text-muted">Top-tier salary + equity</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-4xl mb-3">🏖️</div>
            <div className="text-2xl font-bold mb-2">Unlimited PTO</div>
            <div className="br-text-muted">Take time when you need it</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-4xl mb-3">💻</div>
            <div className="text-2xl font-bold mb-2">Latest Tech</div>
            <div className="br-text-muted">M3 MacBook Pro included</div>
          </div>
        </div>
      </section>
    </main>
  )
}
