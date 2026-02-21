import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BlackRoad OS',
  description: 'The story behind BlackRoad OS — our mission to make AI governance the default, not the afterthought.',
}


export default function AboutPage() {
  const stats = [
    { value: '30K+', label: 'Concurrent Agents' },
    { value: '225K+', label: 'Indexed Components' },
    { value: '156K+', label: 'Memory Entries' },
    { value: '1,085', label: 'Repositories' },
    { value: '15', label: 'GitHub Orgs' },
    { value: '8', label: 'Physical Devices' },
  ]

  const timeline = [
    { year: 'Nov 2025', title: 'Incorporated', description: 'BlackRoad OS, Inc. founded as Delaware C-Corporation. Vision: governed AI for regulated industries.' },
    { year: 'Dec 2025', title: 'PS-SHA-infinity', description: 'Cryptographic identity system deployed. Append-only hash chains giving every agent persistent, tamper-evident identity.' },
    { year: 'Jan 2026', title: 'CECE OS', description: '68 sovereign apps running on Raspberry Pi 5 with Hailo-8 AI accelerator. Fortune 500 services replaced locally.' },
    { year: 'Jan 2026', title: 'Multi-Agent Scale', description: '30,000 agent orchestration achieved. Five runtime types, breath-synchronized coordination, deterministic reasoning.' },
    { year: 'Feb 2026', title: 'Full Infrastructure', description: '1,085 repos, 205 Cloudflare projects, 8-device mesh, 15 GitHub orgs. Production-ready enterprise platform.' },
  ]

  const principles = [
    {
      title: 'Integrity Over Optics',
      description: 'We tell the truth, even when it\'s awkward. We document decisions transparently. We don\'t hide complexity\u2014we explain it.',
    },
    {
      title: 'Autonomy + Alignment',
      description: 'Freedom to act, anchored by shared goals. Our agents operate independently but always within policy boundaries.',
    },
    {
      title: 'Bias for Clarity',
      description: 'Confusion is the enemy. We document fast, explain clearly, and surface the right information at the right time.',
    },
    {
      title: 'Security First',
      description: 'Our reputation lives in the safety of our systems. Every decision is traceable. Every access is logged. Every risk is measured.',
    },
    {
      title: 'Iterate in Public',
      description: 'Transparency compounds trust. We build in the open, learn from mistakes, and share our journey.',
    },
    {
      title: 'Deterministic by Design',
      description: 'We don\'t bolt compliance onto existing AI. We build governance into the foundation. Same input, same output, every time.',
    },
  ]

  const products = [
    { name: 'BlackRoad OS Platform', description: 'Browser-native operating system. Unified identity, agent orchestration, and policy enforcement across all services.', href: '/platform' },
    { name: 'ALICE QI Engine', description: 'Deterministic reasoning for risk intelligence, quantitative modeling, and explainable decision-making.', href: '/alice-qi' },
    { name: 'Lucidia', description: 'Human-AI coordination language. Specify workflows and agent behaviors in plain language, no coding required.', href: '/lucidia' },
    { name: 'Prism Console', description: 'Real-time monitoring dashboard for 30,000+ agents. Compliance visualization and policy management.', href: '/prism-console' },
    { name: 'RoadChain Ledger', description: 'Blockchain-based audit trail. Tamper-evident records of every agent action and system event.', href: '/roadchain' },
    { name: 'PS-SHA-infinity', description: 'Cryptographic identity verification using infinite cascade hashing. Identity that persists, evolves, and proves itself.', href: '/platform' },
  ]

  const industries = [
    { name: 'Fintech & Wealth Management', description: 'Deploy AI for portfolio analytics, risk scoring, and fraud detection with complete audit trails and explainable decisions.' },
    { name: 'Healthcare & Life Sciences', description: 'Run HIPAA-compliant AI agents for patient data analysis, clinical workflows, and research coordination.' },
    { name: 'Education & Research', description: 'Provide AI tutoring, curriculum development, and administrative automation with transparent governance.' },
    { name: 'Government & Public Sector', description: 'Implement policy enforcement, identity verification, and public service automation with full accountability.' },
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
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          The Path We're On
        </h1>
        <p className="text-2xl br-text-soft mb-6 max-w-4xl leading-relaxed">
          BlackRoad OS builds the operating system for compliant AI at scale. We exist to solve
          a critical gap in enterprise technology: the inability to deploy autonomous agents in
          regulated environments without sacrificing governance, auditability, or security.
        </p>
        <p className="text-xl br-text-muted max-w-3xl leading-relaxed">
          Modern AI is powerful but chaotic. Enterprises in fintech, healthcare, education, and
          government cannot afford to "move fast and break things" when handling financial data,
          medical records, or public services. They need deterministic systems with cryptographic
          proof, explainable decisions, and complete audit trails. That's exactly what we built.
        </p>
      </section>

      {/* The Problem */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Problem We Solve</h2>
          <p className="text-xl br-text-soft leading-relaxed mb-8">
            Every enterprise faces the same AI paradox: the more powerful the AI, the less
            they can trust it in production.
          </p>
          <p className="text-lg br-text-muted leading-relaxed mb-10">
            Traditional AI deployments fail in regulated industries because they can't answer
            three fundamental questions:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-5xl font-bold mb-4 text-[var(--br-hot-pink)]">1</div>
              <h3 className="text-xl font-bold mb-2">Who made this decision?</h3>
              <p className="br-text-muted">Identity</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-5xl font-bold mb-4 text-[var(--br-hot-pink)]">2</div>
              <h3 className="text-xl font-bold mb-2">Why was it made?</h3>
              <p className="br-text-muted">Explainability</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-5xl font-bold mb-4 text-[var(--br-hot-pink)]">3</div>
              <h3 className="text-xl font-bold mb-2">Can we prove it to regulators?</h3>
              <p className="br-text-muted">Auditability</p>
            </div>
          </div>
          <p className="text-xl br-text-soft mt-10 leading-relaxed">
            BlackRoad OS answers all three\u2014by design, not as an afterthought.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Our Approach</h2>
        <div className="max-w-4xl space-y-8">
          <p className="text-xl br-text-soft leading-relaxed">
            We fuse identity, mathematics, and orchestration into a unified platform where
            thousands of AI agents operate like a trained team, not a chaotic swarm.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">Cryptographic Identity</h3>
              <p className="br-text-muted">Every agent has identity through PS-SHA-infinity\u2014persistent, tamper-evident hash chains that survive migrations, restarts, and system changes.</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">Explainable Decisions</h3>
              <p className="br-text-muted">Deterministic reasoning engines show their work, not just their conclusions. Every calculation is reproducible.</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">Auditable Actions</h3>
              <p className="br-text-muted">RoadChain records every agent action on a blockchain ledger designed for tamper-evident compliance trails.</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">Human-Centered Orchestration</h3>
              <p className="br-text-muted">Lucidia lets you specify agent behaviors in plain language. No prompt engineering or Python expertise required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12 text-center">By the Numbers</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all hover-lift">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm br-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-4">Our Technology</h2>
        <p className="text-xl br-text-muted mb-12 max-w-3xl">
          Six integrated systems that work as one platform.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <a key={i} href={product.href} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift block">
              <h3 className="text-xl font-bold mb-3">{product.name}</h3>
              <p className="br-text-muted text-sm">{product.description}</p>
              <span className="text-[var(--br-hot-pink)] text-sm mt-4 inline-block">Learn more &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-4">Who We Serve</h2>
        <p className="text-xl br-text-muted mb-12 max-w-3xl">
          Built for industries where compliance isn't optional.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
              <p className="br-text-muted">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Our Journey</h2>
        <div className="max-w-4xl space-y-8">
          {timeline.map((event, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="w-28 flex-shrink-0">
                <div className="text-lg font-bold br-text-muted">{event.year}</div>
              </div>
              <div className="flex-1 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="br-text-muted">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Our Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="br-text-muted text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Leadership</h2>
        <div className="max-w-4xl bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-10">
          <h3 className="text-2xl font-bold mb-2">Alexa Louise Amundson</h3>
          <p className="text-[var(--br-hot-pink)] mb-6">Founder & CEO</p>
          <p className="br-text-soft leading-relaxed mb-4">
            Alexa founded BlackRoad OS to solve the enterprise AI governance crisis: powerful but
            chaotic AI systems that regulated industries cannot safely deploy at scale.
          </p>
          <p className="br-text-muted leading-relaxed mb-4">
            With a background spanning quantum physics research, financial systems architecture,
            and AI safety frameworks, she recognized that enterprises didn't need another AI
            tool\u2014they needed an operating system purpose-built for governed intelligence.
          </p>
          <p className="br-text-muted leading-relaxed italic">
            "You bring your chaos, your curiosity, your half-finished dreams. BlackRoad brings
            structure, compute, and care. Together, you build worlds."
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Company</h2>
            <div className="space-y-4 br-text-muted">
              <p><span className="text-white font-bold">Legal Name:</span> BlackRoad OS, Inc.</p>
              <p><span className="text-white font-bold">Type:</span> Delaware C-Corporation</p>
              <p><span className="text-white font-bold">Founded:</span> November 16, 2025</p>
              <p><span className="text-white font-bold">Headquarters:</span> Remote-first</p>
              <p><span className="text-white font-bold">Contact:</span> blackroad.systems@gmail.com</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">The Vision</h2>
            <div className="space-y-4 text-lg br-text-soft leading-relaxed">
              <p>A world where AI amplifies human capability without compromising trust.</p>
              <p>Where a compliance officer can audit 10,000 agent decisions in minutes, not months.</p>
              <p>Where a developer can deploy governed AI without becoming a security expert.</p>
              <p className="text-white font-bold">That's the road we're building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Build With Us</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          If you're tired of duct-taped solutions, unexplainable black boxes, and compliance
          nightmares, we built BlackRoad OS for you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Contact Sales
          </a>
          <a href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Explore Documentation
          </a>
          <a href="/pricing" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            View Pricing
          </a>
        </div>
      </section>
    </main>
  )
}
