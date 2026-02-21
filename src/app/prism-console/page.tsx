import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prism Console — Monitoring Dashboard',
  description: 'Real-time monitoring dashboard for AI agent health, performance metrics, and policy enforcement.',
}


export default function PrismConsolePage() {
  const features = [
    {
      title: 'Agent Monitoring Dashboard',
      description: 'Live map of all 30,000 agents by runtime type, status, and load. Health metrics (CPU, memory, latency, error rate), execution trace visualization, and capacity planning with auto-scaling recommendations.',
    },
    {
      title: 'Policy Enforcement',
      description: 'Define and enforce policies across your entire fleet. YAML-based rules with auto-remediation. Active policies, violation tracking, and compliance scoring in real-time.',
    },
    {
      title: 'RoadChain Audit Browser',
      description: 'Search and visualize blockchain audit trails. Filter by agent ID, timestamp, or event type. Export compliance reports as CSV or PDF. Share read-only audit links with regulators.',
    },
    {
      title: 'Multi-Cloud Orchestration',
      description: 'Manage deployments across Railway, Cloudflare Pages, Cloudflare Workers, edge devices, and DigitalOcean. One-click deploys, instant rollbacks, environment variable management.',
    },
    {
      title: 'Feature Flags & Experiments',
      description: 'Toggle features per environment. A/B test agent configurations. Gradual rollouts (10% to 50% to 100%). Instant rollback if metrics degrade.',
    },
    {
      title: 'Job Scheduler',
      description: 'Visual cron job management. See upcoming executions, view history and logs, pause/resume without code changes. Alert on failures.',
    },
    {
      title: 'Analytics Service',
      description: 'Built-in business intelligence: anomaly detection with configurable severity, cohort analysis, decision automation with RACI matrices, and auto-generated executive reports.',
    },
  ]

  const mockDashboard = {
    activeAgents: '28,453',
    maxAgents: '30,000',
    systemHealth: '99.8%',
    alertsWarning: 2,
    alertsCritical: 0,
    policiesActive: 47,
    violations24h: 3,
    complianceScore: '99.2%',
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      {/* Hero */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <p className="text-[var(--br-hot-pink)] font-bold mb-4 tracking-wider uppercase text-sm">Prism Console</p>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Mission Control for 30,000 AI Agents
        </h1>
        <p className="text-2xl br-text-soft mb-8 max-w-4xl leading-relaxed">
          Real-time monitoring, policy enforcement, compliance visualization, and infrastructure
          orchestration\u2014all from a single dashboard.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Request Demo
          </a>
          <a href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Documentation
          </a>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Dashboard at a Glance</h2>
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{mockDashboard.activeAgents}</div>
              <div className="text-sm br-text-muted">Active Agents / {mockDashboard.maxAgents}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{mockDashboard.systemHealth}</div>
              <div className="text-sm br-text-muted">System Health</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{mockDashboard.complianceScore}</div>
              <div className="text-sm br-text-muted">Compliance Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{mockDashboard.alertsWarning}</div>
              <div className="text-sm br-text-muted">Active Warnings</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[rgba(255,255,255,0.05)] p-4">
              <span className="br-text-muted">Policies Active:</span> <span className="font-bold">{mockDashboard.policiesActive}</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4">
              <span className="br-text-muted">Violations (24h):</span> <span className="font-bold">{mockDashboard.violations24h} (all auto-remediated)</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4">
              <span className="br-text-muted">Critical Alerts:</span> <span className="font-bold text-green-400">{mockDashboard.alertsCritical}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Detail Mock */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Agent Detail View</h2>
        <div className="max-w-3xl bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 font-mono text-sm">
          <div className="space-y-3">
            <div className="flex justify-between"><span className="br-text-muted">Agent ID:</span><span>agent-llm-brain-a7f3c</span></div>
            <div className="flex justify-between"><span className="br-text-muted">Status:</span><span className="text-green-400">Healthy</span></div>
            <div className="flex justify-between"><span className="br-text-muted">Runtime:</span><span>llm_brain (GPT-4)</span></div>
            <div className="flex justify-between"><span className="br-text-muted">Uptime:</span><span>47d 3h</span></div>
            <div className="flex justify-between"><span className="br-text-muted">Requests (24h):</span><span>15,847</span></div>
            <div className="flex justify-between"><span className="br-text-muted">Avg Latency:</span><span>1.2s</span></div>
            <div className="flex justify-between"><span className="br-text-muted">Error Rate:</span><span>0.02%</span></div>
            <div className="flex justify-between"><span className="br-text-muted">PS-SHA-infinity Chain:</span><span className="text-[var(--br-hot-pink)]">View &rarr;</span></div>
          </div>
        </div>
      </section>

      {/* Policy Example */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Policy Enforcement</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Define policies in YAML</h3>
            <pre className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-sm br-text-muted overflow-x-auto font-mono whitespace-pre">{`policy: no_pii_in_logs
severity: critical
rule: |
  If agent.output contains PII patterns
  (SSN, credit card, etc.), redact
  automatically and flag for review
action: alert_compliance_team`}</pre>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Real-time enforcement</h3>
            <div className="space-y-4">
              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-center gap-3">
                <span className="text-green-400">&#x2713;</span>
                <span className="text-sm">47 policies active and enforced</span>
              </div>
              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-center gap-3">
                <span className="text-yellow-400">!</span>
                <span className="text-sm">3 violations in 24h (all auto-remediated)</span>
              </div>
              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-center gap-3">
                <span className="text-green-400">&#x2713;</span>
                <span className="text-sm">99.2% compliance score trending up</span>
              </div>
              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-center gap-3">
                <span className="text-green-400">&#x2713;</span>
                <span className="text-sm">0 critical alerts in past 30 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Full Feature Set</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="br-text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Infrastructure You Can See</h2>
        <p className="br-text-muted mb-8 max-w-3xl">Manage deployments across every provider from one place.</p>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { name: 'Railway', count: '12 services' },
            { name: 'CF Pages', count: '205 projects' },
            { name: 'CF Workers', count: '15 functions' },
            { name: 'Edge Devices', count: '8 nodes' },
            { name: 'DigitalOcean', count: '2 droplets' },
          ].map((provider, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all">
              <div className="font-bold mb-1">{provider.name}</div>
              <div className="text-sm br-text-muted">{provider.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">See everything. Control everything.</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Prism Console is included in BlackRoad OS Professional and Enterprise tiers.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Request Demo
          </a>
          <a href="/pricing" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            View Pricing
          </a>
        </div>
      </section>
    </main>
  )
}
