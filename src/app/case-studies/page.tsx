import { FloatingShapes, StatusEmoji, MetricEmoji, GeometricPattern } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'How organizations use BlackRoad OS to deploy compliant AI agents in fintech, healthcare, education, and government.',
}


export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: 'TechCorp',
      logo: '🏢',
      industry: 'SaaS',
      size: '500 employees',
      challenge: 'Manual deployments taking 2+ hours, frequent downtime, DevOps bottleneck',
      solution: 'Implemented BlackRoad multi-agent system with autonomous deployments',
      results: [
        { metric: '95%', label: 'Faster deploys', icon: '⚡' },
        { metric: '99.99%', label: 'Uptime', icon: '🎯' },
        { metric: '70%', label: 'Cost reduction', icon: '💰' },
        { metric: '10x', label: 'Deploy frequency', icon: '🚀' }
      ],
      quote: 'BlackRoad transformed our deployment process. What used to take hours now takes minutes, and our DevOps team can focus on innovation instead of firefighting.',
      author: 'Sarah Chen, CTO',
      tags: ['Autonomous Deploy', 'Cost Savings', 'Scale']
    },
    {
      company: 'FinanceApp',
      logo: '💳',
      industry: 'FinTech',
      size: '200 employees',
      challenge: 'Compliance requirements, security audits, complex multi-region deployments',
      solution: 'Deployed with BlackRoad zero-trust security and multi-cloud orchestration',
      results: [
        { metric: 'SOC2', label: 'Certified in 3mo', icon: '🔐' },
        { metric: '100%', label: 'Audit pass rate', icon: '✅' },
        { metric: '5', label: 'Cloud regions', icon: '🌍' },
        { metric: '0', label: 'Security incidents', icon: '🛡️' }
      ],
      quote: "BlackRoad's compliance automation saved us months of work. The security features gave our auditors confidence, and we passed SOC2 on the first try.",
      author: 'Michael Rodriguez, Head of Security',
      tags: ['Security', 'Compliance', 'Multi-Cloud']
    },
    {
      company: 'GameStudio',
      logo: '🎮',
      industry: 'Gaming',
      size: '50 employees',
      challenge: 'Scaling to millions of players, handling traffic spikes, edge computing needs',
      solution: 'Leveraged BlackRoad edge-first deployment with auto-scaling',
      results: [
        { metric: '5M', label: 'Concurrent users', icon: '👥' },
        { metric: '28ms', label: 'Global latency', icon: '⏱️' },
        { metric: '300+', label: 'Edge locations', icon: '🌐' },
        { metric: '10x', label: 'Traffic handling', icon: '📈' }
      ],
      quote: "We launched globally without building complex CDN infrastructure. BlackRoad's edge deployment gave us sub-30ms latency worldwide out of the box.",
      author: 'Alex Kim, Co-Founder',
      tags: ['Edge Computing', 'Gaming', 'Auto-Scale']
    }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="lines" opacity={0.03} />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Customer Success Stories <StatusEmoji status="green" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          See how teams are using BlackRoad OS to ship faster, scale infinitely,
          and eliminate DevOps overhead.
        </p>
      </section>

      {/* Case Studies */}
      <section className="relative z-10 px-6 pb-20 max-w-7xl mx-auto space-y-20">
        {caseStudies.map((study, i) => (
          <article key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] overflow-hidden hover:border-white transition-all">
            
            {/* Header */}
            <div className="p-8 border-b border-[var(--br-charcoal)]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-5xl">{study.logo}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{study.company}</h2>
                      <div className="br-text-muted">{study.industry} • {study.size}</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {study.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              
              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-[var(--br-electric-magenta)]">⚠️</span>
                  The Challenge
                </h3>
                <p className="br-text-soft">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-[var(--br-hot-pink)]">✓</span>
                  The Solution
                </h3>
                <p className="br-text-soft">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">Results</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {study.results.map((result, j) => (
                    <div key={j} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-6 text-center">
                      <div className="text-3xl mb-2">{result.icon}</div>
                      <div className="text-3xl font-bold mb-1">{result.metric}</div>
                      <div className="text-sm br-text-muted">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[var(--br-deep-black)] border-l-4 border-white p-6">
                <p className="text-xl br-text-soft mb-4 italic">"{study.quote}"</p>
                <div className="br-text-muted">— {study.author}</div>
              </div>

            </div>

          </article>
        ))}
      </section>

      {/* Stats Summary */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Aggregate Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">750+</div>
            <div className="br-text-muted">Teams Deployed</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">10M+</div>
            <div className="br-text-muted">Deployments</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">99.99%</div>
            <div className="br-text-muted">Avg Uptime</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">$2M+</div>
            <div className="br-text-muted">Cost Saved</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Join hundreds of teams shipping faster with BlackRoad OS.
          Start free, scale as you grow.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/pricing" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            View Pricing
          </a>
          <a href="/contact" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Schedule Demo
          </a>
        </div>
      </section>
    </main>
  )
}
