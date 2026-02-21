import Link from 'next/link'
import { GeometricPattern } from '@/components/BlackRoadVisuals'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Guide',
  description: 'BlackRoad OS security architecture — encryption, access controls, PS-SHA-infinity identity, and compliance standards.',
}

export default function SecurityDocPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <GeometricPattern type="dots" opacity={0.03} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 text-sm br-text-muted mb-8">
          <Link href="/docs" className="hover:text-white transition-colors no-underline text-[rgba(255,255,255,0.6)]">Docs</Link>
          <span>/</span>
          <span className="text-white">Security</span>
        </div>

        <h1 className="text-5xl font-bold mb-4">Security Guide</h1>
        <p className="text-xl br-text-muted mb-12">How BlackRoad OS protects your data, agents, and infrastructure.</p>

        {/* Identity */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">PS-SHA-infinity Identity</h2>
          <p className="text-sm br-text-soft mb-4">
            Every agent in BlackRoad OS receives a unique cryptographic identity using PS-SHA-infinity (Post-Shannon Hash Algorithm).
            This identity is unforgeable, auditable, and persistent across agent lifecycle events.
          </p>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm mb-4">
            <div className="br-text-muted mb-2">// Agent identity structure</div>
            <div>{'{'}</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">&quot;agent_id&quot;</span>: <span className="text-[var(--br-warm-orange)]">&quot;ps-sha-7f3a...b2c1&quot;</span>,</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">&quot;created&quot;</span>: <span className="text-[var(--br-warm-orange)]">&quot;2026-02-19T12:00:00Z&quot;</span>,</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">&quot;runtime&quot;</span>: <span className="text-[var(--br-warm-orange)]">&quot;llm_brain&quot;</span>,</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">&quot;owner&quot;</span>: <span className="text-[var(--br-warm-orange)]">&quot;org_acme_corp&quot;</span>,</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">&quot;chain_head&quot;</span>: <span className="text-[var(--br-warm-orange)]">&quot;sha256:e3b0c44...&quot;</span></div>
            <div>{'}'}</div>
          </div>
        </section>

        {/* Encryption */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Encryption</h2>
          <div className="space-y-3">
            {[
              { layer: 'In Transit', method: 'TLS 1.3', desc: 'All API traffic, agent communication, and dashboard access encrypted with TLS 1.3.' },
              { layer: 'At Rest', method: 'AES-256-GCM', desc: 'All stored data, RoadChain entries, and agent state encrypted with AES-256-GCM.' },
              { layer: 'Key Management', method: 'HSM-backed', desc: 'Encryption keys stored in hardware security modules. Customer-managed keys available on Enterprise.' },
              { layer: 'Agent-to-Agent', method: 'mTLS', desc: 'Mutual TLS authentication between agents. No unencrypted inter-agent communication.' },
            ].map((item) => (
              <div key={item.layer} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-5">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold">{item.layer}</h3>
                  <code className="text-xs text-[var(--br-hot-pink)] bg-[var(--br-onyx)] px-2 py-0.5">{item.method}</code>
                </div>
                <p className="text-sm br-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Access Controls */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Access Controls</h2>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm mb-4">
            <div className="br-text-muted mb-2">// Policy definition (YAML)</div>
            <div><span className="text-[var(--br-cyber-blue)]">policies</span>:</div>
            <div className="ml-4">- name: <span className="text-[var(--br-warm-orange)]">restrict-pii-access</span></div>
            <div className="ml-6">scope: <span className="text-[var(--br-warm-orange)]">agent.llm_brain</span></div>
            <div className="ml-6">rules:</div>
            <div className="ml-8">- deny: <span className="text-[var(--br-warm-orange)]">read(customer.ssn)</span></div>
            <div className="ml-8">- deny: <span className="text-[var(--br-warm-orange)]">read(customer.dob)</span></div>
            <div className="ml-8">- allow: <span className="text-[var(--br-warm-orange)]">read(customer.name, customer.email)</span></div>
            <div className="ml-6">enforcement: <span className="text-[var(--br-warm-orange)]">strict</span></div>
            <div className="ml-6">audit: <span className="text-[var(--br-warm-orange)]">roadchain</span></div>
          </div>
          <p className="text-sm br-text-muted">Policies are enforced at the platform level. Agents cannot bypass them, even if instructed to.</p>
        </section>

        {/* RoadChain */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Audit Trail (RoadChain)</h2>
          <p className="text-sm br-text-soft mb-4">
            Every agent action, data access, and decision is recorded in RoadChain — an immutable, append-only
            ledger using SHA-256 chain hashing. Entries cannot be modified or deleted.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Immutable', desc: 'Hash-chained entries with Merkle proofs. Tampering is cryptographically detectable.' },
              { title: 'Complete', desc: 'Every API call, model invocation, and data access is logged with full context.' },
              { title: 'Exportable', desc: 'Export audit logs in JSON, CSV, or compliance-specific formats (SOC 2, HIPAA).' },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4">
                <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs br-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compliance Standards</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { standard: 'SOC 2 Type II', status: 'Supported', desc: 'Security, availability, processing integrity, confidentiality, and privacy controls.' },
              { standard: 'HIPAA', status: 'Supported', desc: 'Protected health information safeguards. BAA available on Enterprise plans.' },
              { standard: 'FERPA', status: 'Supported', desc: 'Student education records protection for K-12 and higher education.' },
              { standard: 'FedRAMP', status: 'Q2 2026', desc: 'Federal government authorization for cloud services. In progress.' },
            ].map((item) => (
              <div key={item.standard} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-5">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold">{item.standard}</h3>
                  <span className={`px-2 py-0.5 text-xs font-bold ${
                    item.status === 'Supported' ? 'bg-[rgba(0,255,100,0.15)] text-[var(--br-status-green)]' : 'bg-[rgba(255,157,0,0.15)] text-[var(--br-warm-orange)]'
                  }`}>{item.status}</span>
                </div>
                <p className="text-sm br-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <div className="flex gap-4">
            <Link href="/docs/getting-started" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Getting Started</Link>
            <Link href="/roadchain" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">RoadChain Deep Dive</Link>
            <Link href="/security" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Security Overview</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
