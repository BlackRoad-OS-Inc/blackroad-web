import { FloatingShapes, StatusEmoji, GeometricPattern } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform Comparison',
  description: 'See how BlackRoad OS compares to other AI platforms on identity, auditability, compliance, and agent orchestration.',
}


export default function ComparisonTablePage() {
  const competitors = [
    { name: 'BlackRoad OS', isUs: true },
    { name: 'Vercel', isUs: false },
    { name: 'Netlify', isUs: false },
    { name: 'Railway', isUs: false }
  ]

  const features = [
    {
      category: 'Deployment',
      items: [
        { name: 'Edge Deploy', blackroad: true, vercel: true, netlify: true, railway: false },
        { name: 'Regional Deploy', blackroad: true, vercel: false, netlify: false, railway: true },
        { name: 'Pi Cluster Deploy', blackroad: true, vercel: false, netlify: false, railway: false },
        { name: 'Multi-Cloud', blackroad: true, vercel: false, netlify: false, railway: false }
      ]
    },
    {
      category: 'Developer Experience',
      items: [
        { name: 'Git Integration', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'CLI Tools', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Local Dev Cluster', blackroad: true, vercel: false, netlify: false, railway: false },
        { name: 'Multi-Agent AI', blackroad: true, vercel: false, netlify: false, railway: false },
        { name: 'PS-SHA-∞ Memory', blackroad: true, vercel: false, netlify: false, railway: false }
      ]
    },
    {
      category: 'Infrastructure',
      items: [
        { name: 'Auto-Scaling', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Load Balancing', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Custom Domains', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'SSL/TLS', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'DDoS Protection', blackroad: true, vercel: true, netlify: true, railway: false }
      ]
    },
    {
      category: 'Collaboration',
      items: [
        { name: 'Team Management', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Role-Based Access', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'AI Agents', blackroad: true, vercel: false, netlify: false, railway: false },
        { name: 'Agent Memory Sync', blackroad: true, vercel: false, netlify: false, railway: false }
      ]
    },
    {
      category: 'Observability',
      items: [
        { name: 'Real-time Logs', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Metrics Dashboard', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Distributed Tracing', blackroad: true, vercel: false, netlify: false, railway: false },
        { name: 'AI-Powered Alerts', blackroad: true, vercel: false, netlify: false, railway: false }
      ]
    },
    {
      category: 'Pricing',
      items: [
        { name: 'Free Tier', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Usage-Based', blackroad: true, vercel: true, netlify: true, railway: true },
        { name: 'Unlimited Projects', blackroad: true, vercel: false, netlify: false, railway: false },
        { name: 'No Vendor Lock-in', blackroad: true, vercel: false, netlify: false, railway: false }
      ]
    }
  ]

  const CheckMark = () => <span className="text-[var(--br-hot-pink)] text-2xl">✓</span>
  const CrossMark = () => <span className="text-[var(--br-electric-magenta)] text-2xl">✗</span>

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />
      
      {/* Header */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          How We Compare ⚡
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          See how BlackRoad OS stacks up against leading deployment platforms.
          We're built different—autonomous, multi-agent, no lock-in.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="relative z-10 px-6 pb-20 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-white">
                <th className="text-left p-6 font-bold text-xl">Feature</th>
                {competitors.map((comp, i) => (
                  <th key={i} className={`p-6 font-bold text-xl ${comp.isUs ? 'bg-[var(--br-charcoal)]' : ''}`}>
                    {comp.name}
                    {comp.isUs && <StatusEmoji status="green" />}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((section, sectionIdx) => (
                <>
                  {/* Category Header */}
                  <tr key={`cat-${sectionIdx}`} className="bg-[var(--br-charcoal)]">
                    <td colSpan={5} className="p-6 font-bold text-2xl border-t-2 border-[rgba(255,255,255,0.15)]">
                      {section.category}
                    </td>
                  </tr>
                  
                  {/* Feature Rows */}
                  {section.items.map((feature, featureIdx) => (
                    <tr key={`feat-${sectionIdx}-${featureIdx}`} className="border-b border-[var(--br-charcoal)] hover:bg-[var(--br-charcoal)] transition-colors">
                      <td className="p-6 br-text-soft">{feature.name}</td>
                      <td className="p-6 text-center bg-[var(--br-deep-black)]">
                        {feature.blackroad ? <CheckMark /> : <CrossMark />}
                      </td>
                      <td className="p-6 text-center">
                        {feature.vercel ? <CheckMark /> : <CrossMark />}
                      </td>
                      <td className="p-6 text-center">
                        {feature.netlify ? <CheckMark /> : <CrossMark />}
                      </td>
                      <td className="p-6 text-center">
                        {feature.railway ? <CheckMark /> : <CrossMark />}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Why Choose BlackRoad OS?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Multi-Agent AI</h3>
            <p className="br-text-muted">
              27+ AI agents collaborate in real-time with PS-SHA-∞ memory persistence.
              No other platform has this.
            </p>
          </div>

          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-4xl mb-4">🔓</div>
            <h3 className="text-2xl font-bold mb-4">No Lock-In</h3>
            <p className="br-text-muted">
              Deploy to Cloudflare, Railway, Pi clusters, or your own infrastructure.
              You own your stack.
            </p>
          </div>

          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Built for Speed</h3>
            <p className="br-text-muted">
              Edge-first architecture with regional fallbacks. 
              Sub-50ms p99 latency globally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to switch?</h2>
        <p className="text-xl br-text-muted mb-8">
          Migrate your projects in minutes. Zero downtime.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/docs"
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            Get Started →
          </a>
          <a 
            href="/contact"
            className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift"
          >
            Talk to Sales
          </a>
        </div>
      </section>
    </main>
  )
}
