import Link from 'next/link'
import { FloatingShapes, AnimatedGrid, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Core capabilities of BlackRoad OS — PS-SHA-infinity identity, ALICE QI reasoning, Lucidia orchestration, Prism Console, and RoadChain audit trails.',
}


export default function FeaturesPage() {
  const coreFeatures = [
    {
      title: 'PS-SHA-infinity Cryptographic Identity',
      description: 'Every agent receives a persistent, tamper-evident identity chain. Hash-linked journals create reconstructable worldlines that survive migrations, restarts, and system changes.',
      details: ['Append-only SHA-256 hash chains', 'Identity binding across migrations', 'Fine-grained audit trails', 'Tamper detection via verification'],
      product: 'Platform',
      href: '/platform',
    },
    {
      title: 'Deterministic Reasoning (ALICE QI)',
      description: 'Same input, same output, every time. No probabilistic guessing. Every conclusion comes with a complete explanation of its reasoning chain.',
      details: ['Explainable risk scoring', 'Governed model routing', 'Portfolio optimization', 'Reproducible calculations'],
      product: 'ALICE QI',
      href: '/alice-qi',
    },
    {
      title: 'Plain Language Orchestration (Lucidia)',
      description: 'Describe what you want in plain language. Lucidia handles agent coordination, task distribution, and result aggregation. No coding required.',
      details: ['YAML workflow definitions', '10 domain expert agents', 'Breath-synchronized execution', 'External service integration'],
      product: 'Lucidia',
      href: '/lucidia',
    },
    {
      title: '30,000 Agent Orchestration',
      description: 'Five runtime types handle every workload. From heavy reasoning to lightweight edge tasks, the platform scales from 10 agents to 30,000.',
      details: ['llm_brain (heavy reasoning)', 'workflow_engine (automation)', 'integration_bridge (APIs)', 'edge_worker + ui_helper'],
      product: 'Platform',
      href: '/platform',
    },
    {
      title: 'Real-Time Monitoring (Prism Console)',
      description: 'Single-pane-of-glass visibility into your entire AI infrastructure. Agent health, policy enforcement, compliance scoring, and audit trail browsing.',
      details: ['Live agent map (30K+ visualized)', 'Policy enforcement dashboard', 'RoadChain audit browser', 'Multi-cloud orchestration'],
      product: 'Prism Console',
      href: '/prism-console',
    },
    {
      title: 'Blockchain Audit Ledger (RoadChain)',
      description: 'Every agent action recorded with tamper-evident cryptographic proof. Generate compliance reports, share with regulators, trace any decision to its source.',
      details: ['SHA-256 hash-linked events', 'Regulator-ready exports (CSV, PDF)', 'Read-only sharing links', 'SOC 2, HIPAA, FERPA templates'],
      product: 'RoadChain',
      href: '/roadchain',
    },
  ]

  const infrastructure = [
    {
      title: 'Edge-First Deployment',
      description: 'Deploy to Cloudflare\'s 300+ edge locations globally. Sub-50ms p99 latency worldwide.',
      items: ['Global CDN', 'Automatic failover', 'DDoS protection', 'Zero-config SSL'],
    },
    {
      title: 'Multi-Cloud Architecture',
      description: 'No lock-in. Deploy across Railway, Cloudflare, Raspberry Pi clusters, or your own infrastructure.',
      items: ['Railway containers', 'Cloudflare Workers', 'Pi cluster support', 'Docker + K8s'],
    },
    {
      title: 'Zero-Trust Security',
      description: 'End-to-end encryption, zero-trust networking, automated security scans, and secrets management.',
      items: ['TLS everywhere', 'Secret management', 'Auto-patching', 'Compliance ready'],
    },
    {
      title: 'Git-Native Workflows',
      description: 'Push to deploy. Every commit is a deployment. Automatic preview environments.',
      items: ['GitHub Actions', 'Auto-PR creation', 'Preview deploys', 'Instant rollback'],
    },
    {
      title: '10 Domain Expert Agents',
      description: 'Specialized reasoning engines for physics, math, chemistry, geology, analysis, architecture, engineering, art, writing, and NLP.',
      items: ['Configurable via YAML', 'Moral constants built-in', 'Deterministic outputs', 'Cross-agent coordination'],
    },
    {
      title: 'Distributed Codex',
      description: '225,000+ indexed components searchable in milliseconds. Find solutions, patterns, and code examples instantly.',
      items: ['Full-text search', 'Semantic matching', 'Code examples', 'Auto-documentation'],
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />

      {/* Hero */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Everything You Need to Deploy Governed AI
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Cryptographic identity. Deterministic reasoning. Immutable audits.
          Five products working as one platform.
        </p>
        <div className="flex gap-4">
          <Link href="/platform" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift no-underline">
            Explore Platform
          </Link>
          <Link href="/comparison-table" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift no-underline text-white">
            Compare Platforms
          </Link>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-12">Core Capabilities</h2>
        <div className="space-y-6">
          {coreFeatures.map((feature, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <Link href={feature.href} className="text-[var(--br-hot-pink)] text-sm font-bold no-underline whitespace-nowrap">
                  {feature.product} &rarr;
                </Link>
              </div>
              <p className="br-text-soft mb-6 max-w-3xl">{feature.description}</p>
              <div className="grid md:grid-cols-4 gap-3">
                {feature.details.map((detail, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm br-text-muted">
                    <span className="text-[var(--br-hot-pink)]">&#x2713;</span> {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-12">Infrastructure & Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructure.map((item, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="br-text-muted text-sm mb-4">{item.description}</p>
              <ul className="space-y-1">
                {item.items.map((sub, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm br-text-muted">
                    <span className="text-[var(--br-hot-pink)]">&#x2713;</span> {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">30K+</div>
            <div className="br-text-muted">Concurrent Agents</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">225K+</div>
            <div className="br-text-muted">Indexed Components</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">5</div>
            <div className="br-text-muted">Runtime Types</div>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <div className="text-5xl font-bold mb-2">10</div>
            <div className="br-text-muted">Domain Agents</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to see it in action?</h2>
        <p className="text-xl br-text-muted mb-8">
          Start with 10 free agents. Scale to 30,000 when you're ready.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/signup" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift no-underline">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift no-underline text-white">
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  )
}
