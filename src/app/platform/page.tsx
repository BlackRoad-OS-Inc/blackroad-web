import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BlackRoad OS Platform',
  description: 'The complete governed AI operating system — deploy 30,000 agents with cryptographic identity, deterministic reasoning, and full audit trails.',
}


export default function PlatformPage() {
  const features = [
    {
      title: 'PS-SHA-infinity Cryptographic Identity',
      description: 'Every agent receives a persistent, tamper-evident identity chain. Hash-linked journals create reconstructable worldlines. Regulators can trace any decision back to its source with mathematical certainty.',
      details: [
        'Append-only hash chains: H(n) = SHA-256(H(n-1) + event_data + timestamp)',
        'Identity binding across system migrations and restarts',
        'Fine-grained audit trails for compliance',
        'Tamper detection through hash verification',
      ],
    },
    {
      title: 'Lucidia Breath Synchronization',
      description: 'Agents don\'t operate chaotically\u2014they breathe together. Using Golden Ratio timing, the system oscillates between expansion and contraction for organic coordination.',
      details: [
        'Expansion: Agents spawn, tasks execute, decisions made',
        'Contraction: Memory consolidates, learning occurs, state commits',
        'Golden Ratio timing prevents race conditions',
        'No central micromanagement required',
      ],
    },
    {
      title: '30,000 Agent Orchestration',
      description: 'Five runtime types handle every workload, from heavy reasoning to lightweight edge tasks.',
      details: [
        'llm_brain \u2014 Heavy reasoning (50-200 agents, 1-5s)',
        'workflow_engine \u2014 Multi-step automation (100-500 agents, 100-500ms)',
        'integration_bridge \u2014 External API connections (100-500 agents, 50-200ms)',
        'edge_worker \u2014 Lightweight edge tasks (10-50 agents, 500-2000ms)',
        'ui_helper \u2014 Frontend interactions (1000+ agents, <50ms)',
      ],
    },
    {
      title: 'Prism Console',
      description: 'Single-pane-of-glass visibility into your entire AI infrastructure. Monitor 30,000+ agents, enforce policies, browse audit trails, and orchestrate deployments.',
      details: [
        'Real-time agent health monitoring',
        'Policy enforcement with violation alerts',
        'RoadChain audit trail browser',
        'Feature flags and hot redeploys',
      ],
    },
    {
      title: '10 Domain Expert Agents',
      description: 'Specialized reasoning engines covering physics, mathematics, chemistry, geology, analysis, architecture, engineering, visual arts, creative writing, and NLP.',
      details: [
        'Each agent has moral constants and core principles',
        'Configurable via YAML',
        'Deterministic reasoning with explainable outputs',
        'Coordinate via Lucidia orchestration language',
      ],
    },
    {
      title: 'RoadChain Audit Ledger',
      description: 'Blockchain-based immutable log of every agent action. Tamper-evident, regulator-ready, with query interfaces for audit teams.',
      details: [
        'Cryptographic proof of decision provenance',
        'Regulator-ready compliance reports',
        'Integration with PS-SHA-infinity identity chains',
        'Export to CSV, PDF for external auditors',
      ],
    },
  ]

  const useCases = [
    {
      industry: 'Financial Services',
      challenge: 'Deploy AI for fraud detection and risk analytics while maintaining SOC 2 compliance.',
      result: '1,000 agents analyzing transactions 24/7 with complete auditability.',
      highlights: ['Deterministic fraud scoring', 'Explainable decisions', 'Automated compliance reporting'],
    },
    {
      industry: 'Healthcare',
      challenge: 'Deploy AI for patient data analysis while maintaining HIPAA compliance.',
      result: 'AI-powered clinical workflows with zero compliance violations.',
      highlights: ['Consent-based data access', 'Cryptographic verification', 'Automated HIPAA reporting'],
    },
    {
      industry: 'Education',
      challenge: 'Deploy AI tutoring for 10,000 students while protecting student data.',
      result: 'Personalized AI education at scale with complete transparency.',
      highlights: ['Transparent grading', 'Student data protection', 'Automated FERPA compliance'],
    },
    {
      industry: 'Government',
      challenge: 'Deploy AI for policy enforcement while ensuring accountability.',
      result: 'AI-powered government services with full accountability.',
      highlights: ['Bias detection and mitigation', 'Public transparency', 'Explainable decisions'],
    },
  ]

  const pricing = [
    {
      tier: 'Developer',
      price: 'Free',
      description: 'Exploration and prototyping',
      features: ['Up to 10 concurrent agents', 'Lucidia domain agents (limited)', 'Community support', 'Standard audit trails'],
    },
    {
      tier: 'Professional',
      price: '$499/mo',
      description: 'Production deployments',
      features: ['Up to 1,000 concurrent agents', 'Full Lucidia access', 'PS-SHA-infinity identity chains', 'RoadChain audit ledger', 'Prism Console', '10,000 API calls/day'],
      highlighted: true,
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Regulated industries at scale',
      features: ['30,000+ concurrent agents', 'Dedicated infrastructure', '24/7 phone support', 'On-premise deployment', 'HIPAA/SOC 2 packages', 'Unlimited API requests'],
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      {/* Hero */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <p className="text-[var(--br-hot-pink)] font-bold mb-4 tracking-wider uppercase text-sm">BlackRoad OS Platform</p>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          The Operating System for Governed AI
        </h1>
        <p className="text-2xl br-text-soft mb-8 max-w-4xl leading-relaxed">
          Deploy 30,000 autonomous agents with cryptographic identity, deterministic reasoning,
          and complete audit trails. Built for enterprises that can't afford chaos.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Schedule Demo
          </a>
          <a href="/signup" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Start Free Trial
          </a>
          <a href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Documentation
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Overview</h2>
          <p className="text-xl br-text-soft leading-relaxed mb-6">
            BlackRoad OS is the world's first operating system designed specifically for deploying
            AI agents at scale in regulated industries. Unlike general-purpose AI platforms that bolt
            on compliance as an afterthought, BlackRoad OS builds governance into its foundation.
          </p>
          <p className="text-lg br-text-muted leading-relaxed">
            Every agent has cryptographic identity through PS-SHA-infinity. Every decision is deterministically
            explainable. Every action is recorded on an immutable RoadChain ledger. It's not just AI\u2014it's
            AI you can trust, audit, and prove to regulators.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all">
            <div className="text-3xl font-bold mb-2">30K+</div>
            <div className="text-sm br-text-muted">Concurrent Agents</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all">
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-sm br-text-muted">Industries Served</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all">
            <div className="text-3xl font-bold mb-2">Cloud + Edge</div>
            <div className="text-sm br-text-muted">Deployment Options</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all">
            <div className="text-3xl font-bold mb-2">Production</div>
            <div className="text-sm br-text-muted">Status</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Key Features</h2>
        <div className="space-y-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="br-text-soft mb-6 max-w-3xl">{feature.description}</p>
              <ul className="grid md:grid-cols-2 gap-3">
                {feature.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm br-text-muted">
                    <span className="text-[var(--br-hot-pink)] mt-0.5">&#x2713;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Technology Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2 text-sm br-text-muted">
              <li>React 18.3 + TypeScript 5.9</li>
              <li>Next.js 14.2/16.0 (SSR)</li>
              <li>TailwindCSS 3.4</li>
              <li>Tauri 2.9 (desktop)</li>
            </ul>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <ul className="space-y-2 text-sm br-text-muted">
              <li>FastAPI 0.104 (Python 3.11+)</li>
              <li>Node.js/Express (TypeScript)</li>
              <li>Pydantic 2.5 validation</li>
              <li>SQLAlchemy 2.0 async</li>
            </ul>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">Data & Messaging</h3>
            <ul className="space-y-2 text-sm br-text-muted">
              <li>PostgreSQL + asyncpg</li>
              <li>Redis (hiredis optimized)</li>
              <li>NATS JetStream</li>
              <li>Cloudflare KV + D1</li>
            </ul>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
            <ul className="space-y-2 text-sm br-text-muted">
              <li>Railway (production services)</li>
              <li>Cloudflare Pages + Workers</li>
              <li>Docker containers</li>
              <li>GitHub Actions CI/CD</li>
            </ul>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">Observability</h3>
            <ul className="space-y-2 text-sm br-text-muted">
              <li>Prometheus metrics</li>
              <li>Sentry error tracking</li>
              <li>Prism Console dashboards</li>
              <li>PS-SHA-infinity audit logs</li>
            </ul>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">AI/ML</h3>
            <ul className="space-y-2 text-sm br-text-muted">
              <li>Claude (Anthropic)</li>
              <li>GPT-4 (OpenAI)</li>
              <li>Ollama (local models)</li>
              <li>Hailo-8 edge inference</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">{useCase.industry}</h3>
              <p className="br-text-muted text-sm mb-4">{useCase.challenge}</p>
              <p className="text-[var(--br-hot-pink)] text-sm mb-4">{useCase.result}</p>
              <ul className="space-y-1">
                {useCase.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm br-text-muted">
                    <span className="text-[var(--br-hot-pink)]">&#x2713;</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CLI */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Get Started in 5 Minutes</h2>
        <div className="max-w-3xl bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-sm">
          <div className="space-y-4 br-text-muted">
            <p><span className="text-white">$</span> npm install -g @blackroad/cli</p>
            <p><span className="text-white">$</span> br auth login</p>
            <p><span className="text-white">$</span> br agents spawn --type llm_brain --name "my-first-agent"</p>
            <p><span className="text-white">$</span> br agents execute my-first-agent "Analyze this data"</p>
            <p><span className="text-white">$</span> br console open</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <div key={i} className={`bg-[var(--br-charcoal)] border p-8 hover:border-white transition-all ${plan.highlighted ? 'border-[var(--br-hot-pink)]' : 'border-[var(--br-charcoal)]'}`}>
              <h3 className="text-xl font-bold mb-2">{plan.tier}</h3>
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <p className="br-text-muted text-sm mb-6">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm br-text-muted">
                    <span className="text-[var(--br-hot-pink)]">&#x2713;</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Ready to deploy governed AI?</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Start with 10 free agents. Scale to 30,000 when you're ready.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/signup" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Start Free Trial
          </a>
          <a href="/contact" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Talk to Sales
          </a>
        </div>
      </section>
    </main>
  )
}
