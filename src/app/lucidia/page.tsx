import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucidia — AI Orchestration Language',
  description: 'Domain-specific orchestration language with 10 specialized agents and breath-sync timing for human-readable AI workflows.',
}


export default function LucidiaPage() {
  const agents = [
    { name: 'Physicist', focus: 'Energy modeling, force calculations, thermal analysis', lines: 867 },
    { name: 'Mathematician', focus: 'Symbolic computation, proofs, equation solving', lines: 760 },
    { name: 'Chemist', focus: 'Molecular analysis, chemical reactions', lines: 569 },
    { name: 'Geologist', focus: 'Terrain modeling, stratigraphy', lines: 654 },
    { name: 'Analyst', focus: 'Data insights, pattern recognition, statistics', lines: 505 },
    { name: 'Architect', focus: 'System design, blueprints', lines: 392 },
    { name: 'Engineer', focus: 'Structural analysis, optimization', lines: 599 },
    { name: 'Painter', focus: 'Graphics generation, visual rendering', lines: 583 },
    { name: 'Poet', focus: 'Creative writing, narrative generation', lines: 250 },
    { name: 'Speaker', focus: 'NLP, speech synthesis, translation', lines: 302 },
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
        <p className="text-[var(--br-hot-pink)] font-bold mb-4 tracking-wider uppercase text-sm">Lucidia</p>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Orchestrate AI Like You'd Coordinate Humans
        </h1>
        <p className="text-2xl br-text-soft mb-8 max-w-4xl leading-relaxed">
          Specify agent behaviors in plain language. No coding expertise required.
          Lucidia translates human intent into machine-parseable workflows that
          coordinate thousands of agents.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/signup" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Try Lucidia Free
          </a>
          <a href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Workflow Examples
          </a>
        </div>
      </section>

      {/* What is Lucidia */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">What is Lucidia?</h2>
          <p className="text-xl br-text-soft leading-relaxed mb-8">
            Lucidia is the orchestration language that makes BlackRoad OS accessible to non-developers.
            Instead of writing code, you describe what you want in natural language\u2014Lucidia handles
            the agent coordination, task distribution, and result aggregation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <h3 className="font-bold mb-2">YAML for Humans</h3>
              <p className="br-text-muted text-sm">Who don't want to learn YAML</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <h3 className="font-bold mb-2">Terraform for AI</h3>
              <p className="br-text-muted text-sm">Agents instead of infrastructure</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <h3 className="font-bold mb-2">A Project Manager</h3>
              <p className="br-text-muted text-sm">That never sleeps and coordinates 30,000 workers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Example */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Plain Language Workflows</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Market Sentiment Analysis</h3>
            <pre className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-sm br-text-muted overflow-x-auto font-mono whitespace-pre">{`workflow: analyze_market_sentiment
description: |
  Analyze social media sentiment,
  cross-reference with news, generate
  a trading recommendation.

steps:
  - agent: analyst
    task: "Scrape Twitter for mentions"
    output: tweets_data

  - agent: analyst
    task: "Analyze sentiment: {tweets_data}"
    output: sentiment_score

  - agent: physicist
    task: "Model momentum: {sentiment_score}"
    output: momentum_model

  - agent: mathematician
    task: "Calculate confidence intervals"
    output: confidence

  - decision:
      if: sentiment > 0.6 and confidence > 0.80
      then: "BUY with {confidence}% confidence"
      else: "HOLD - insufficient signal"`}</pre>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Support Automation</h3>
            <pre className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-sm br-text-muted overflow-x-auto font-mono whitespace-pre">{`workflow: customer_support_ticket
trigger: new_email_received

steps:
  - agent: analyst
    task: "Categorize ticket: {email}"
    output: category

  - conditional:
      billing:
        - agent: analyst
          task: "Extract account details"
        - external: stripe_api
          action: lookup_customer
        - agent: speaker
          task: "Generate billing response"

      bug:
        - external: linear_api
          action: create_issue
        - agent: engineer
          task: "Estimate severity"
        - agent: speaker
          task: "Send acknowledgment"

      feature_request:
        - external: airtable_api
          action: add_to_roadmap
        - agent: speaker
          task: "Thank and explain process"`}</pre>
          </div>
        </div>
      </section>

      {/* Breath Sync */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Breath-Synchronized Execution</h2>
        <div className="max-w-4xl">
          <p className="text-xl br-text-soft leading-relaxed mb-8">
            Workflows execute in harmony with Lucidia's breath cycle, using Golden Ratio timing
            to prevent race conditions and achieve organic coordination.
          </p>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-center mb-8">
            <p className="text-2xl text-[var(--br-hot-pink)] mb-4">B(t) = sin(phi * t) + i + (-1)^floor(t)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">Expansion (B &gt; 0)</h3>
              <p className="br-text-muted">Agents spawn, tasks execute in parallel, decisions are made. The system reaches outward.</p>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">Contraction (B &le; 0)</h3>
              <p className="br-text-muted">Results consolidate, memory commits, learning occurs. The system integrates inward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Domain Agents */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-4">10 Domain Expert Agents</h2>
        <p className="text-xl br-text-muted mb-12 max-w-3xl">
          Specialized reasoning engines with moral constants and core principles defined via YAML.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {agents.map((agent, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-5 hover:border-white transition-all hover-lift">
              <h3 className="font-bold mb-1">{agent.name}</h3>
              <p className="br-text-muted text-xs mb-2">{agent.focus}</p>
              <p className="text-[var(--br-hot-pink)] text-xs">{agent.lines} lines</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLI */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Lucidia CLI</h2>
        <div className="max-w-3xl bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-sm space-y-6">
          <div>
            <p className="br-text-muted mb-1"># Install</p>
            <p><span className="text-white">$</span> pip install lucidia-core</p>
          </div>
          <div>
            <p className="br-text-muted mb-1"># Run a workflow</p>
            <p><span className="text-white">$</span> lucidia run workflow.yaml</p>
          </div>
          <div>
            <p className="br-text-muted mb-1"># List available agents</p>
            <p><span className="text-white">$</span> lucidia list</p>
          </div>
          <div>
            <p className="br-text-muted mb-1"># Query a specific agent</p>
            <p><span className="text-white">$</span> lucidia run physicist --query "Calculate energy to heat 1000L of water from 20C to 100C"</p>
            <div className="mt-2 br-text-muted pl-4 border-l border-[rgba(255,255,255,0.1)]">
              <p>Energy required: 334.4 MJ</p>
              <p>Reasoning: mass(1000kg) x specific_heat(4.184) x delta_T(80) = 334,720 kJ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <p className="br-text-muted mb-8">Included in all BlackRoad OS tiers. Also available standalone:</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-2">Hobbyist</h3>
            <div className="text-3xl font-bold mb-2">$49/mo</div>
            <p className="br-text-muted text-sm">1,000 workflow executions</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-hot-pink)] p-8">
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="text-3xl font-bold mb-2">$199/mo</div>
            <p className="br-text-muted text-sm">10,000 workflow executions</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Custom</div>
            <p className="br-text-muted text-sm">Unlimited executions</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Describe it. Lucidia builds it.</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Stop writing boilerplate. Start orchestrating intelligence.
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
