import { FloatingShapes, StatusEmoji, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Connect BlackRoad OS with your existing stack — authentication, payments, databases, monitoring, and CI/CD.',
}


export default function IntegrationsPage() {
  const categories = [
    {
      name: 'Authentication',
      integrations: [
        { name: 'Clerk', logo: '🔐', status: 'verified', description: 'User management & SSO' },
        { name: 'Auth0', logo: '🔑', status: 'verified', description: 'Enterprise authentication' },
        { name: 'Supabase Auth', logo: '🛡️', status: 'verified', description: 'Open source auth' },
        { name: 'Firebase Auth', logo: '🔥', status: 'coming-soon', description: 'Google authentication' }
      ]
    },
    {
      name: 'Payments',
      integrations: [
        { name: 'Stripe', logo: '💳', status: 'verified', description: 'Payment processing' },
        { name: 'PayPal', logo: '💰', status: 'verified', description: 'Global payments' },
        { name: 'Paddle', logo: '🏦', status: 'beta', description: 'Merchant of record' },
        { name: 'LemonSqueezy', logo: '🍋', status: 'coming-soon', description: 'Digital products' }
      ]
    },
    {
      name: 'Databases',
      integrations: [
        { name: 'PostgreSQL', logo: '🐘', status: 'verified', description: 'Relational database' },
        { name: 'MongoDB', logo: '🍃', status: 'verified', description: 'Document database' },
        { name: 'Redis', logo: '🔴', status: 'verified', description: 'In-memory cache' },
        { name: 'Supabase', logo: '⚡', status: 'verified', description: 'Postgres + realtime' },
        { name: 'PlanetScale', logo: '🌍', status: 'beta', description: 'Serverless MySQL' },
        { name: 'Neon', logo: '🟢', status: 'beta', description: 'Serverless Postgres' }
      ]
    },
    {
      name: 'Messaging',
      integrations: [
        { name: 'Slack', logo: '💬', status: 'verified', description: 'Team communication' },
        { name: 'Discord', logo: '🎮', status: 'verified', description: 'Community chat' },
        { name: 'Telegram', logo: '✈️', status: 'beta', description: 'Bot integration' },
        { name: 'Teams', logo: '👥', status: 'coming-soon', description: 'Microsoft Teams' }
      ]
    },
    {
      name: 'Storage',
      integrations: [
        { name: 'AWS S3', logo: '📦', status: 'verified', description: 'Object storage' },
        { name: 'Cloudflare R2', logo: '☁️', status: 'verified', description: 'Zero egress storage' },
        { name: 'MinIO', logo: '💿', status: 'verified', description: 'Self-hosted S3' },
        { name: 'Backblaze B2', logo: '🗄️', status: 'beta', description: 'Affordable storage' }
      ]
    },
    {
      name: 'Monitoring',
      integrations: [
        { name: 'Grafana', logo: '📊', status: 'verified', description: 'Metrics & dashboards' },
        { name: 'Prometheus', logo: '🔥', status: 'verified', description: 'Time-series metrics' },
        { name: 'Sentry', logo: '🐛', status: 'verified', description: 'Error tracking' },
        { name: 'Datadog', logo: '🐕', status: 'beta', description: 'APM & monitoring' },
        { name: 'New Relic', logo: '📈', status: 'coming-soon', description: 'Observability' }
      ]
    },
    {
      name: 'AI/ML',
      integrations: [
        { name: 'OpenAI', logo: '🤖', status: 'verified', description: 'GPT-4 & assistants' },
        { name: 'Anthropic', logo: '🧠', status: 'verified', description: 'Claude models' },
        { name: 'Hugging Face', logo: '🤗', status: 'verified', description: 'Open source models' },
        { name: 'Ollama', logo: '🦙', status: 'verified', description: 'Local LLMs' },
        { name: 'Pinecone', logo: '🌲', status: 'beta', description: 'Vector database' }
      ]
    },
    {
      name: 'DevOps',
      integrations: [
        { name: 'GitHub', logo: '🐙', status: 'verified', description: 'Source control' },
        { name: 'GitLab', logo: '🦊', status: 'verified', description: 'DevOps platform' },
        { name: 'Docker', logo: '🐳', status: 'verified', description: 'Containerization' },
        { name: 'Kubernetes', logo: '☸️', status: 'verified', description: 'Orchestration' },
        { name: 'Terraform', logo: '🏗️', status: 'beta', description: 'Infrastructure as code' }
      ]
    }
  ]

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'verified':
        return { color: 'var(--br-hot-pink)', text: 'VERIFIED', emoji: '✓' }
      case 'beta':
        return { color: 'var(--br-warm-orange)', text: 'BETA', emoji: '⚠️' }
      case 'coming-soon':
        return { color: 'rgba(255,255,255,0.6)', text: 'SOON', emoji: '🔮' }
      default:
        return { color: 'rgba(255,255,255,0.6)', text: status.toUpperCase(), emoji: '○' }
    }
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="grid" opacity={0.03} />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Integrations <StatusEmoji status="green" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Connect BlackRoad OS with your favorite tools and services.
          50+ integrations and counting.
        </p>
        <div className="flex gap-4">
          <a href="/docs/integrations" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            View Documentation
          </a>
          <a href="https://github.com/blackroad-os/integrations" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Request Integration
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="br-text-muted">Total Integrations</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
            <div className="text-4xl font-bold mb-2 text-[var(--br-hot-pink)]">38</div>
            <div className="br-text-muted">Verified</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
            <div className="text-4xl font-bold mb-2 text-[var(--br-warm-orange)]">8</div>
            <div className="br-text-muted">Beta</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
            <div className="text-4xl font-bold mb-2 br-text-muted">4</div>
            <div className="br-text-muted">Coming Soon</div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto space-y-16">
        {categories.map((category, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold mb-8">{category.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.integrations.map((integration, j) => {
                const badge = getStatusBadge(integration.status)
                return (
                  <div key={j} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{integration.logo}</span>
                        <div>
                          <h3 className="text-xl font-bold">{integration.name}</h3>
                        </div>
                      </div>
                      <span 
                        className="px-2 py-1 text-xs font-bold rounded"
                        style={{ 
                          backgroundColor: badge.color + '20',
                          color: badge.color,
                          border: `1px solid ${badge.color}`
                        }}
                      >
                        {badge.emoji} {badge.text}
                      </span>
                    </div>
                    <p className="text-sm br-text-muted mb-4">{integration.description}</p>
                    {integration.status === 'verified' && (
                      <button className="text-sm font-bold hover:underline">
                        View Docs →
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Custom Integrations */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Integration?</h2>
          <p className="text-xl br-text-muted mb-8">
            We offer custom integration development for enterprise customers.
            Connect any API, webhook, or service to BlackRoad OS.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-4xl mb-3">🔌</div>
              <h3 className="font-bold mb-2">REST API</h3>
              <p className="text-sm br-text-muted">Full REST API access</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-4xl mb-3">🔔</div>
              <h3 className="font-bold mb-2">Webhooks</h3>
              <p className="text-sm br-text-muted">Real-time event streaming</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold mb-2">SDKs</h3>
              <p className="text-sm br-text-muted">TypeScript, Python, Go</p>
            </div>
          </div>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            Contact Sales →
          </a>
        </div>
      </section>
    </main>
  )
}
