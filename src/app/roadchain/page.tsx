import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RoadChain — Immutable Audit Ledger',
  description: 'Blockchain-inspired audit trail recording every agent action for HIPAA, SOC 2, FERPA, and FedRAMP compliance.',
}


export default function RoadChainPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      {/* Hero */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <p className="text-[var(--br-hot-pink)] font-bold mb-4 tracking-wider uppercase text-sm">RoadChain</p>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Immutable Proof for Every AI Decision
        </h1>
        <p className="text-2xl br-text-soft mb-8 max-w-4xl leading-relaxed">
          Blockchain-based audit ledger that records every agent action with tamper-evident
          cryptographic proof. Built for regulators, auditors, and compliance teams who
          need certainty, not promises.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Request Demo
          </a>
          <a href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Technical Specification
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="max-w-4xl space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all text-center">
              <div className="text-5xl font-bold text-[var(--br-hot-pink)] mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Record</h3>
              <p className="br-text-muted text-sm">Every agent action\u2014decisions, data accesses, API calls\u2014is captured as an immutable event on the ledger.</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all text-center">
              <div className="text-5xl font-bold text-[var(--br-hot-pink)] mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Chain</h3>
              <p className="br-text-muted text-sm">Events are hash-linked using SHA-256, creating a tamper-evident chain. Altering any event invalidates all subsequent hashes.</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all text-center">
              <div className="text-5xl font-bold text-[var(--br-hot-pink)] mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Prove</h3>
              <p className="br-text-muted text-sm">Generate compliance reports, share audit trails with regulators, and trace any decision back to its source data with mathematical certainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chain Visualization */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">The Chain</h2>
        <div className="max-w-4xl bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-sm">
          <div className="space-y-6">
            <div className="border-l-2 border-[var(--br-hot-pink)] pl-6">
              <p className="text-white mb-1">Block #4,041</p>
              <p className="br-text-muted">Hash: da9366c5cafc83fa...</p>
              <p className="br-text-muted">Prev: 7b2e91f4a3dc66b1...</p>
              <p className="br-text-muted">Agent: erebus-weaver-1771093745</p>
              <p className="br-text-muted">Action: created | Entity: network-trace</p>
              <p className="br-text-muted">Timestamp: 2026-02-19T23:33:24Z</p>
            </div>
            <div className="border-l-2 border-[rgba(255,255,255,0.2)] pl-6">
              <p className="text-white mb-1">Block #4,040</p>
              <p className="br-text-muted">Hash: 7b2e91f4a3dc66b1...</p>
              <p className="br-text-muted">Prev: 5f1687b4e2a9cc3d...</p>
              <p className="br-text-muted">Agent: erebus-weaver-1771093745</p>
              <p className="br-text-muted">Action: decided | Entity: naming-convention</p>
              <p className="br-text-muted">Timestamp: 2026-02-19T17:50:00Z</p>
            </div>
            <div className="border-l-2 border-[rgba(255,255,255,0.1)] pl-6">
              <p className="text-white mb-1">Block #4,039</p>
              <p className="br-text-muted">Hash: 5f1687b4e2a9cc3d...</p>
              <p className="br-text-muted">Prev: a1b2c3d4e5f6...</p>
              <p className="br-text-muted">Agent: erebus-weaver-1771093745</p>
              <p className="br-text-muted">Action: decided | Entity: ai-name-reserve-list</p>
              <p className="br-text-muted">Timestamp: 2026-02-19T17:55:00Z</p>
            </div>
          </div>
          <p className="mt-6 br-text-muted text-xs">156,867 total entries | Append-only | Tamper-evident</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Tamper-Evident Recording',
              description: 'Every event is hash-linked. Modify any entry and the entire chain breaks. Mathematical proof, not trust.',
            },
            {
              title: 'Decision Provenance',
              description: 'Trace any AI decision back through the complete reasoning chain to the original source data. Full lineage.',
            },
            {
              title: 'Compliance Reports',
              description: 'Auto-generate regulator-ready reports in CSV, PDF, or JSON. SOC 2, HIPAA, FERPA, and FedRAMP templates included.',
            },
            {
              title: 'PS-SHA-infinity Integration',
              description: 'Every audit entry is linked to the agent\'s cryptographic identity chain. Identity and actions are inseparable.',
            },
            {
              title: 'Query Interface',
              description: 'Search by agent ID, timestamp range, action type, or entity. Filter, sort, and export. Built for audit teams.',
            },
            {
              title: 'Read-Only Sharing',
              description: 'Generate time-limited, read-only links for regulators and external auditors. They see the proof without accessing the system.',
            },
          ].map((feature, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="br-text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* API */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">API</h2>
        <div className="max-w-3xl space-y-4">
          {[
            { method: 'GET', path: '/api/roadchain/events', desc: 'Query audit events with filters' },
            { method: 'GET', path: '/api/roadchain/events/{id}', desc: 'Get single event with full chain context' },
            { method: 'GET', path: '/api/roadchain/agent/{id}/history', desc: 'Complete history for one agent' },
            { method: 'POST', path: '/api/roadchain/verify', desc: 'Verify chain integrity' },
            { method: 'POST', path: '/api/compliance/report', desc: 'Generate compliance report' },
            { method: 'POST', path: '/api/roadchain/share', desc: 'Create read-only audit link' },
          ].map((endpoint, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-center gap-4 font-mono text-sm">
              <span className="text-[var(--br-hot-pink)] font-bold w-16">{endpoint.method}</span>
              <span className="text-white">{endpoint.path}</span>
              <span className="br-text-muted ml-auto hidden md:block">{endpoint.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Compliance Standards</h2>
        <p className="br-text-muted mb-8 max-w-3xl">RoadChain audit trails are designed to satisfy these regulatory frameworks:</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { standard: 'SOC 2', description: 'Trust services criteria for security, availability, and confidentiality' },
            { standard: 'HIPAA', description: 'Healthcare data protection and patient privacy requirements' },
            { standard: 'FERPA', description: 'Student education records privacy and access controls' },
            { standard: 'FedRAMP', description: 'Federal government cloud security authorization' },
          ].map((std, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-2">{std.standard}</h3>
              <p className="br-text-muted text-xs">{std.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Trust, verified.</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Stop hoping your AI is compliant. Start proving it.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/signup" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Start Free Trial
          </a>
          <a href="/platform" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            View Full Platform
          </a>
        </div>
      </section>
    </main>
  )
}
