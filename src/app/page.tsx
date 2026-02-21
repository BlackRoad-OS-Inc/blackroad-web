import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from './components/BlackRoadVisuals'

export default function Home() {
  const products = [
    {
      name: 'BlackRoad OS Platform',
      tagline: 'The operating system for governed AI',
      description: 'Deploy 30,000 autonomous agents with cryptographic identity, deterministic reasoning, and complete audit trails.',
      href: '/platform',
    },
    {
      name: 'ALICE QI',
      tagline: 'AI that shows its work',
      description: 'Deterministic reasoning for risk intelligence, portfolio analytics, and quantitative modeling. Every decision is explainable.',
      href: '/alice-qi',
    },
    {
      name: 'Lucidia',
      tagline: 'Orchestrate AI like you\'d coordinate humans',
      description: '10 domain expert agents coordinated through plain language workflows. No coding expertise required.',
      href: '/lucidia',
    },
    {
      name: 'Prism Console',
      tagline: 'Mission control for 30,000 agents',
      description: 'Real-time monitoring, policy enforcement, compliance visualization, and infrastructure orchestration.',
      href: '/prism-console',
    },
    {
      name: 'RoadChain',
      tagline: 'Immutable proof for every AI decision',
      description: 'Blockchain-based audit ledger with tamper-evident cryptographic proof. Built for regulators.',
      href: '/roadchain',
    },
  ]

  const stats = [
    { value: '30K+', label: 'Concurrent Agents' },
    { value: '225K+', label: 'Components Indexed' },
    { value: '1,085', label: 'Repositories' },
    { value: '15', label: 'GitHub Organizations' },
    { value: '8', label: 'Physical Devices' },
    { value: '205', label: 'Cloudflare Projects' },
  ]

  const industries = [
    { name: 'Fintech', description: 'Fraud detection, portfolio analytics, risk scoring with complete audit trails.' },
    { name: 'Healthcare', description: 'HIPAA-compliant AI agents for clinical workflows and patient data.' },
    { name: 'Education', description: 'AI tutoring at scale with transparent governance and student protection.' },
    { name: 'Government', description: 'Policy enforcement and identity verification with full accountability.' },
  ]

  const testimonials = [
    {
      quote: 'BlackRoad OS is the only AI platform our compliance team actually approved. The PS-SHA-infinity audit trails are exactly what regulators want to see.',
      author: 'CTO, Fortune 500 Financial Institution',
    },
    {
      quote: 'We deployed 5,000 AI agents for clinical decision support. BlackRoad\'s deterministic reasoning gives us the explainability HIPAA requires.',
      author: 'Chief Medical Information Officer',
    },
    {
      quote: 'Finally, an AI platform that doesn\'t treat governance as an afterthought. Prism Console gives us complete visibility into every agent decision.',
      author: 'VP of Engineering, Government Contractor',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      {/* Hero */}
      <section className="relative z-10 px-6 py-28 max-w-7xl mx-auto">
        <div className="mb-6">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-7xl font-black mb-6 leading-tight max-w-4xl">
          <span style={{ background: 'var(--br-gradient-full)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The Operating System
          </span>
          <br />
          for Governed AI
        </h1>
        <p className="text-2xl br-text-soft mb-4 max-w-3xl leading-relaxed">
          Deploy 30,000 autonomous agents with cryptographic identity, deterministic reasoning,
          and complete audit trails. Built for enterprises that can't afford chaos.
        </p>
        <p className="text-lg br-text-muted mb-10 max-w-2xl">
          Fintech. Healthcare. Education. Government. Industries where compliance isn't optional.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/signup" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift no-underline">
            Start Free Trial
          </Link>
          <Link href="/contact" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift no-underline text-white">
            Schedule Demo
          </Link>
          <Link href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift no-underline text-white">
            Documentation
          </Link>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
            <div className="text-4xl font-bold text-[var(--br-hot-pink)] mb-4">1</div>
            <h3 className="text-xl font-bold mb-3">Who made this decision?</h3>
            <p className="br-text-muted text-sm">Every agent has cryptographic identity through PS-SHA-infinity. Persistent, tamper-evident hash chains that prove provenance.</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
            <div className="text-4xl font-bold text-[var(--br-hot-pink)] mb-4">2</div>
            <h3 className="text-xl font-bold mb-3">Why was it made?</h3>
            <p className="br-text-muted text-sm">Deterministic reasoning engines show their work. Same input, same output, every time. Explainable by design.</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
            <div className="text-4xl font-bold text-[var(--br-hot-pink)] mb-4">3</div>
            <h3 className="text-xl font-bold mb-3">Can we prove it to regulators?</h3>
            <p className="br-text-muted text-sm">RoadChain blockchain audit ledger records every action. Tamper-evident, regulator-ready, exportable.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-5 text-center hover:border-white transition-all">
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs br-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-4">The Platform</h2>
        <p className="text-xl br-text-muted mb-12 max-w-3xl">
          Five integrated products that work as one system.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Link
              key={i}
              href={product.href}
              className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift block no-underline text-white"
            >
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-[var(--br-hot-pink)] text-sm mb-3">{product.tagline}</p>
              <p className="br-text-muted text-sm">{product.description}</p>
            </Link>
          ))}
          <Link
            href="/features"
            className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift flex items-center justify-center no-underline text-white"
          >
            <span className="text-lg font-bold">View All Features &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-4">Built for Regulated Industries</h2>
        <p className="text-xl br-text-muted mb-12 max-w-3xl">
          Where compliance isn't optional and AI decisions must be provable.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <h3 className="font-bold mb-2">{industry.name}</h3>
              <p className="br-text-muted text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Preview */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-8">Ship in Minutes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-sm">
            <div className="text-xs br-text-muted mb-4">Python SDK</div>
            <pre className="br-text-muted whitespace-pre overflow-x-auto">{`from blackroad import BlackRoadOS

br = BlackRoadOS(api_key="your_key")

# Spawn agent with cryptographic identity
agent = br.agents.spawn(
    runtime_type="llm_brain",
    capabilities=["reasoning", "planning"]
)

# Execute task
result = agent.execute(
    "Analyze this financial transaction"
)

# Every action is auditable
trail = agent.get_roadchain_events()`}</pre>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-sm">
            <div className="text-xs br-text-muted mb-4">Lucidia Workflow</div>
            <pre className="br-text-muted whitespace-pre overflow-x-auto">{`workflow: fraud_detection
trigger: new_transaction

steps:
  - agent: analyst
    task: "Score transaction risk"
    output: risk_score

  - agent: mathematician
    task: "Calculate confidence"
    output: confidence

  - decision:
      if: risk_score > 0.75
      then: block_and_alert
      else: approve

# Every step logged to RoadChain
# Every decision explainable`}</pre>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-12">What Leaders Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
              <p className="br-text-soft text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <p className="text-[var(--br-hot-pink)] text-sm font-bold">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-4 text-center">Start Free. Scale When Ready.</h2>
        <p className="text-xl br-text-muted mb-12 text-center max-w-2xl mx-auto">
          10 free agents to start. Up to 30,000 on Enterprise.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Developer</h3>
            <div className="text-3xl font-bold mb-2">Free</div>
            <p className="br-text-muted text-sm mb-4">10 agents, community support</p>
            <Link href="/signup" className="text-[var(--br-hot-pink)] text-sm font-bold no-underline">Get Started &rarr;</Link>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-hot-pink)] p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="text-3xl font-bold mb-2">$499/mo</div>
            <p className="br-text-muted text-sm mb-4">1,000 agents, full platform</p>
            <Link href="/pricing" className="text-[var(--br-hot-pink)] text-sm font-bold no-underline">View Details &rarr;</Link>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Custom</div>
            <p className="br-text-muted text-sm mb-4">30K+ agents, dedicated infra</p>
            <Link href="/contact" className="text-[var(--br-hot-pink)] text-sm font-bold no-underline">Contact Sales &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-5xl font-bold mb-6">
          Stop hoping your AI is compliant.
          <br />
          <span style={{ background: 'var(--br-gradient-full)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Start proving it.
          </span>
        </h2>
        <p className="text-xl br-text-muted mb-10 max-w-2xl mx-auto">
          Cryptographic identity. Deterministic reasoning. Immutable audit trails.
          BlackRoad OS answers the three questions regulators always ask.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/signup" className="px-10 py-5 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift no-underline">
            Start Free Trial
          </Link>
          <Link href="/contact" className="px-10 py-5 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift no-underline text-white">
            Talk to Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
