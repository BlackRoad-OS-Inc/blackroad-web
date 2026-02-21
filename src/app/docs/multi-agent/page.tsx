import Link from 'next/link'
import { GeometricPattern } from '../../components/BlackRoadVisuals'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Agent Orchestration',
  description: 'Coordinate multiple AI agents using Lucidia workflows, agent pools, and event-driven communication patterns.',
}

export default function MultiAgentDocPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <GeometricPattern type="lines" opacity={0.03} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 text-sm br-text-muted mb-8">
          <Link href="/docs" className="hover:text-white transition-colors no-underline text-[rgba(255,255,255,0.6)]">Docs</Link>
          <span>/</span>
          <span className="text-white">Multi-Agent Orchestration</span>
        </div>

        <h1 className="text-5xl font-bold mb-4">Multi-Agent Orchestration</h1>
        <p className="text-xl br-text-muted mb-12">Coordinate thousands of agents with Lucidia workflows.</p>

        {/* Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Agent Pools', desc: 'Groups of agents sharing a runtime configuration. Scale from 1 to 30,000 with automatic load balancing.' },
              { title: 'Lucidia Workflows', desc: 'Declarative orchestration language defining how agents communicate, delegate, and report results.' },
              { title: 'Event Bus', desc: 'Asynchronous message passing between agents. Supports pub/sub, request/reply, and broadcast patterns.' },
              { title: 'Breath Sync', desc: 'Human-readable execution timing that aligns agent decision cycles with auditable checkpoints.' },
            ].map((concept) => (
              <div key={concept.title} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
                <h3 className="font-bold mb-2">{concept.title}</h3>
                <p className="text-sm br-text-muted">{concept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Runtime types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Agent Runtime Types</h2>
          <p className="text-sm br-text-muted mb-4">Every agent runs one of 5 runtime types. All count equally toward your concurrency limit.</p>
          <div className="space-y-2">
            {[
              { type: 'llm_brain', desc: 'LLM-powered reasoning agent (Claude, GPT-4, Ollama)', use: 'Analysis, generation, decision-making' },
              { type: 'workflow_engine', desc: 'Lucidia workflow executor', use: 'Multi-step orchestration, delegation chains' },
              { type: 'integration_bridge', desc: 'External service connector', use: 'API calls, database queries, webhook handlers' },
              { type: 'edge_worker', desc: 'Edge compute agent (Pi, Workers)', use: 'Low-latency processing, local inference' },
              { type: 'ui_helper', desc: 'User-facing interaction agent', use: 'Chat, forms, dashboard updates' },
            ].map((rt) => (
              <div key={rt.type} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-start gap-4">
                <code className="text-[var(--br-hot-pink)] text-sm font-bold whitespace-nowrap">{rt.type}</code>
                <div>
                  <div className="text-sm br-text-soft">{rt.desc}</div>
                  <div className="text-xs br-text-muted mt-1">Use cases: {rt.use}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lucidia Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Lucidia Workflow Example</h2>
          <p className="text-sm br-text-muted mb-4">This workflow coordinates 3 agents to analyze customer support tickets:</p>
          <div className="bg-[var(--br-charcoal)] p-6 font-mono text-sm">
            <div className="br-text-muted">// support-triage.lucidia</div>
            <div className="mt-2"><span className="text-[var(--br-vivid-purple)]">workflow</span> support_triage {'{'}</div>
            <div className="ml-4 br-text-muted mt-2">// Step 1: Classify the ticket</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">agent</span> classifier = spawn(llm_brain, model: <span className="text-[var(--br-warm-orange)]">&quot;claude-haiku&quot;</span>)</div>
            <div className="ml-4">category = classifier.classify(ticket.body)</div>
            <div className="ml-4 br-text-muted mt-4">// Step 2: Route to specialist</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">agent</span> specialist = spawn(llm_brain, model: <span className="text-[var(--br-warm-orange)]">&quot;claude-sonnet&quot;</span>)</div>
            <div className="ml-4">response = specialist.draft_response(ticket, category)</div>
            <div className="ml-4 br-text-muted mt-4">// Step 3: Quality check</div>
            <div className="ml-4"><span className="text-[var(--br-cyber-blue)]">agent</span> reviewer = spawn(llm_brain, model: <span className="text-[var(--br-warm-orange)]">&quot;claude-opus&quot;</span>)</div>
            <div className="ml-4">approved = reviewer.review(response, ticket)</div>
            <div className="ml-4 mt-4"><span className="text-[var(--br-vivid-purple)]">if</span> approved {'{'}</div>
            <div className="ml-8"><span className="text-[var(--br-vivid-purple)]">emit</span> ticket_resolved(ticket.id, response)</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
          </div>
        </section>

        {/* Scaling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Scaling to 30,000 Agents</h2>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">10</div>
                <div className="text-xs br-text-muted">Developer (Free)</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">1,000</div>
                <div className="text-xs br-text-muted">Professional ($499/mo)</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">30,000+</div>
                <div className="text-xs br-text-muted">Enterprise (Custom)</div>
              </div>
            </div>
          </div>
          <p className="text-sm br-text-muted mt-4">
            Agents spawn and destroy dynamically. You only pay for concurrent capacity, not total agents created.
            Every agent gets a unique PS-SHA-infinity identity and all actions are logged to RoadChain.
          </p>
        </section>

        <section className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <div className="flex gap-4">
            <Link href="/docs/getting-started" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Getting Started</Link>
            <Link href="/lucidia" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Lucidia Deep Dive</Link>
            <Link href="/docs/security" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white px-6 py-3 font-bold text-sm transition-all no-underline text-white">Security</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
