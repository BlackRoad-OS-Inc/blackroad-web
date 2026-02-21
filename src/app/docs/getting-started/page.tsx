import Link from 'next/link'
import { GeometricPattern } from '../../components/BlackRoadVisuals'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Install BlackRoad OS, deploy your first agent, and connect to the Prism Console in under 5 minutes.',
}

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <GeometricPattern type="lines" opacity={0.03} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm br-text-muted mb-8">
          <Link href="/docs" className="hover:text-white transition-colors no-underline text-[rgba(255,255,255,0.6)]">Docs</Link>
          <span>/</span>
          <span className="text-white">Getting Started</span>
        </div>

        <h1 className="text-5xl font-bold mb-4">Getting Started</h1>
        <p className="text-xl br-text-muted mb-12">Deploy your first agent in under 5 minutes.</p>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="space-y-2 br-text-soft text-sm">
            <li className="flex items-start gap-3"><span className="text-[var(--br-hot-pink)]">&#x2713;</span> Node.js 20+ or Python 3.10+</li>
            <li className="flex items-start gap-3"><span className="text-[var(--br-hot-pink)]">&#x2713;</span> A BlackRoad OS account (free tier works)</li>
            <li className="flex items-start gap-3"><span className="text-[var(--br-hot-pink)]">&#x2713;</span> An API key from your <Link href="/account" className="text-[var(--br-hot-pink)] no-underline">account dashboard</Link></li>
          </ul>
        </section>

        {/* Step 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Install the CLI</h2>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm mb-4">
            <div className="br-text-muted mb-2"># Install via npm</div>
            <div>npm install -g @blackroad/cli</div>
            <div className="br-text-muted mt-4 mb-2"># Or via pip</div>
            <div>pip install blackroad-os</div>
          </div>
          <p className="text-sm br-text-muted">The CLI provides commands for agent management, deployment, and monitoring.</p>
        </section>

        {/* Step 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Authenticate</h2>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm mb-4">
            <div>blackroad auth login</div>
            <div className="br-text-muted mt-2"># Or set your API key directly</div>
            <div>export BLACKROAD_API_KEY=br_dev_your_key_here</div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Deploy Your First Agent</h2>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm mb-4">
            <div className="br-text-muted mb-2"># Initialize a new project</div>
            <div>blackroad init my-first-agent</div>
            <div className="mt-2">cd my-first-agent</div>
            <div className="br-text-muted mt-4 mb-2"># Deploy</div>
            <div>blackroad deploy</div>
            <div className="mt-4 text-[var(--br-status-green)]">&#x2713; Agent deployed: agent_ps-sha-7f3a...b2c1</div>
            <div className="text-[var(--br-status-green)]">&#x2713; PS-SHA-infinity identity assigned</div>
            <div className="text-[var(--br-status-green)]">&#x2713; RoadChain audit trail active</div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Monitor in Prism Console</h2>
          <p className="br-text-soft text-sm mb-4">
            Open the <Link href="/prism-console" className="text-[var(--br-hot-pink)] no-underline">Prism Console</Link> to see your agent running in real time. You&apos;ll see:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Agent Health', desc: 'CPU, memory, uptime, and response latency' },
              { title: 'Audit Trail', desc: 'Every action logged to RoadChain in real time' },
              { title: 'Identity', desc: 'PS-SHA-infinity cryptographic identity verified' },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4">
                <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs br-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Python SDK */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Python SDK Quick Start</h2>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm">
            <div className="br-text-muted mb-2"># pip install blackroad-os</div>
            <div className="text-[var(--br-cyber-blue)]">from</div> blackroad <div className="text-[var(--br-cyber-blue)]">import</div> Agent, Platform
            <div className="mt-4">platform = Platform(api_key=<span className="text-[var(--br-warm-orange)]">&quot;br_dev_...&quot;</span>)</div>
            <div className="mt-2">agent = platform.create_agent(</div>
            <div className="ml-4">name=<span className="text-[var(--br-warm-orange)]">&quot;my-first-agent&quot;</span>,</div>
            <div className="ml-4">runtime=<span className="text-[var(--br-warm-orange)]">&quot;llm_brain&quot;</span>,</div>
            <div className="ml-4">model=<span className="text-[var(--br-warm-orange)]">&quot;claude-sonnet-4&quot;</span></div>
            <div>)</div>
            <div className="mt-4">result = agent.run(<span className="text-[var(--br-warm-orange)]">&quot;Analyze Q4 revenue trends&quot;</span>)</div>
            <div className="br-text-muted mt-2"># Every action is logged to RoadChain automatically</div>
          </div>
        </section>

        {/* Next steps */}
        <section className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Multi-Agent Orchestration', href: '/docs/multi-agent', desc: 'Coordinate multiple agents with Lucidia workflows' },
              { title: 'Integrations', href: '/docs/integrations', desc: 'Connect to databases, APIs, and cloud services' },
              { title: 'Security Guide', href: '/docs/security', desc: 'Configure encryption, access controls, and compliance' },
              { title: 'API Reference', href: '/api-docs', desc: 'Complete REST API documentation' },
            ].map((link) => (
              <Link key={link.title} href={link.href} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[rgba(255,255,255,0.3)] p-4 transition-all no-underline text-white">
                <h3 className="font-bold mb-1 text-sm">{link.title}</h3>
                <p className="text-xs br-text-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
