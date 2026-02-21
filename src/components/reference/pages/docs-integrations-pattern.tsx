import Link from 'next/link'
import { GeometricPattern } from '@/components/BlackRoadVisuals'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations Guide',
  description: 'Connect BlackRoad OS to databases, authentication providers, cloud services, and monitoring tools.',
}

export default function IntegrationsDocPage() {
  const categories = [
    {
      name: 'Authentication',
      integrations: [
        { name: 'Clerk', status: 'GA', desc: 'User authentication and session management. Drop-in integration with ClerkProvider.' },
        { name: 'Auth0', status: 'GA', desc: 'Enterprise SSO, MFA, and identity management.' },
        { name: 'Okta', status: 'Beta', desc: 'SAML/OIDC federation for enterprise deployments.' },
      ],
    },
    {
      name: 'Payments',
      integrations: [
        { name: 'Stripe', status: 'GA', desc: 'Subscription billing, usage metering, and checkout flows.' },
      ],
    },
    {
      name: 'Databases',
      integrations: [
        { name: 'PostgreSQL', status: 'GA', desc: 'Primary datastore for agent state, user data, and analytics.' },
        { name: 'Redis', status: 'GA', desc: 'Caching layer, rate limiting, and real-time pub/sub.' },
        { name: 'Cloudflare KV', status: 'GA', desc: 'Edge key-value storage for low-latency reads.' },
        { name: 'Cloudflare D1', status: 'Beta', desc: 'Edge SQL database for Workers-based agents.' },
      ],
    },
    {
      name: 'Cloud & Deployment',
      integrations: [
        { name: 'Cloudflare Pages', status: 'GA', desc: 'Static and SSR deployment with global CDN. Primary deployment target.' },
        { name: 'Cloudflare Workers', status: 'GA', desc: 'Edge compute for low-latency agent execution.' },
        { name: 'Railway', status: 'GA', desc: 'One-click backend deployment with PostgreSQL and Redis.' },
        { name: 'Docker', status: 'GA', desc: 'Containerized deployment for on-premise and self-hosted.' },
        { name: 'Raspberry Pi', status: 'GA', desc: 'Edge device deployment with Hailo-8 AI acceleration.' },
      ],
    },
    {
      name: 'AI & Models',
      integrations: [
        { name: 'Anthropic Claude', status: 'GA', desc: 'Claude Sonnet and Opus for LLM agent brains.' },
        { name: 'OpenAI', status: 'GA', desc: 'GPT-4 and embeddings for compatible workloads.' },
        { name: 'Ollama', status: 'GA', desc: 'Local model inference on edge devices.' },
        { name: 'Hugging Face', status: 'Beta', desc: 'Custom model hosting and inference.' },
      ],
    },
    {
      name: 'Monitoring',
      integrations: [
        { name: 'Prism Console', status: 'GA', desc: 'Built-in real-time monitoring, alerts, and policy enforcement.' },
        { name: 'Grafana', status: 'Planned', desc: 'Metrics export via Prometheus/OpenTelemetry.' },
        { name: 'Datadog', status: 'Planned', desc: 'APM integration for distributed tracing.' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <GeometricPattern type="dots" opacity={0.03} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 text-sm br-text-muted mb-8">
          <Link href="/docs" className="hover:text-white transition-colors no-underline text-[rgba(255,255,255,0.6)]">Docs</Link>
          <span>/</span>
          <span className="text-white">Integrations</span>
        </div>

        <h1 className="text-5xl font-bold mb-4">Integrations</h1>
        <p className="text-xl br-text-muted mb-12">Connect BlackRoad OS to your existing stack.</p>

        {categories.map((cat) => (
          <section key={cat.name} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{cat.name}</h2>
            <div className="space-y-3">
              {cat.integrations.map((integ) => (
                <div key={integ.name} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold">{integ.name}</h3>
                      <span className={`px-2 py-0.5 text-xs font-bold ${
                        integ.status === 'GA' ? 'bg-[rgba(0,255,100,0.15)] text-[var(--br-status-green)]' :
                        integ.status === 'Beta' ? 'bg-[rgba(255,157,0,0.15)] text-[var(--br-warm-orange)]' :
                        'bg-[rgba(255,255,255,0.08)] br-text-muted'
                      }`}>{integ.status}</span>
                    </div>
                    <p className="text-sm br-text-muted">{integ.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Example: Connecting PostgreSQL</h2>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm">
            <div className="br-text-muted mb-2"># blackroad.config.ts</div>
            <div><span className="text-[var(--br-cyber-blue)]">export default</span> {'{'}</div>
            <div className="ml-4">integrations: {'{'}</div>
            <div className="ml-8">database: {'{'}</div>
            <div className="ml-12">provider: <span className="text-[var(--br-warm-orange)]">&apos;postgresql&apos;</span>,</div>
            <div className="ml-12">url: process.env.DATABASE_URL,</div>
            <div className="ml-12">pool: {'{'} min: 2, max: 10 {'}'},</div>
            <div className="ml-8">{'}'},</div>
            <div className="ml-8">cache: {'{'}</div>
            <div className="ml-12">provider: <span className="text-[var(--br-warm-orange)]">&apos;redis&apos;</span>,</div>
            <div className="ml-12">url: process.env.REDIS_URL,</div>
            <div className="ml-8">{'}'},</div>
            <div className="ml-4">{'}'},</div>
            <div>{'}'}</div>
          </div>
        </section>

        <section className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <div className="flex gap-4">
            <Link href="/docs/getting-started" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Getting Started</Link>
            <Link href="/docs/multi-agent" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Multi-Agent Guide</Link>
            <Link href="/docs/security" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Security</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
