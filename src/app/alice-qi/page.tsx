import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALICE QI — Deterministic Reasoning Engine',
  description: 'Deterministic AI reasoning that produces the same output every time. Built for regulated decision-making in fintech, healthcare, and government.',
}


export default function AliceQIPage() {
  const features = [
    {
      title: 'Deterministic Decision-Making',
      description: 'Same input, same output, every time. Traditional AI models are probabilistic\u2014ask the same question twice, get different answers. ALICE QI uses deterministic algorithms that produce identical results for identical inputs. Critical for auditing and compliance.',
    },
    {
      title: 'Governed Model Routing',
      description: 'Route queries to appropriate reasoning engines based on complexity, latency, and compliance constraints. Fast Path (<10ms), Standard Path (50-200ms), or Deep Path (500-2000ms). Every routing decision is logged and auditable.',
    },
    {
      title: 'Explainable Risk Scoring',
      description: 'Every risk score comes with factor breakdown and natural language reasoning. No more black-box decisions\u2014auditors see exactly why a score was assigned, which factors contributed, and the mathematical reasoning behind each.',
    },
    {
      title: 'Portfolio Analytics',
      description: 'Modern Portfolio Theory optimization, factor model analysis (Fama-French, custom factors), risk decomposition, scenario analysis with stress testing, and backtesting with reproducible results.',
    },
    {
      title: 'Mathematical Foundations',
      description: 'Built on proven frameworks: matrix decomposition, eigenvalue analysis, convex optimization, Bayesian inference with prior documentation, and Spiral Information Geometry for cognitive modeling. Every calculation includes source code references.',
    },
  ]

  const codeExamples = {
    riskScoring: `# Risk score with full explanation
score = alice.analyze_risk(transaction)

print(score.value)   # 0.82 (high risk)
print(score.factors)
# {
#   'unusual_amount': 0.3,
#   'new_merchant': 0.25,
#   'velocity_check': 0.15,
#   'location_mismatch': 0.12
# }
print(score.reasoning)
# "Transaction flagged: Amount $15,000 is 8x
# average, merchant first seen, 3 transactions
# in 5 minutes, IP doesn't match billing."`,
    portfolio: `portfolio = alice.portfolio.optimize(
    current_holdings=holdings,
    target_allocation=targets,
    constraints={
        'max_turnover': 0.20,
        'tax_aware': True
    }
)

# Every trade is explained:
# SELL AAPL 50 shares - Reduce tech from 35% to 30%
# BUY BND 200 shares - Increase bonds 20% to 25%`,
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
        <p className="text-[var(--br-hot-pink)] font-bold mb-4 tracking-wider uppercase text-sm">ALICE QI</p>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          AI That Shows Its Work
        </h1>
        <p className="text-2xl br-text-soft mb-8 max-w-4xl leading-relaxed">
          Deterministic reasoning for risk intelligence, portfolio analytics, and quantitative
          modeling. Every conclusion is explainable. Every calculation is reproducible.
          Every decision is auditable.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Request Access
          </a>
          <a href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            API Documentation
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Overview</h2>
          <p className="text-xl br-text-soft leading-relaxed mb-6">
            ALICE QI (Quantum Intelligence) is the deterministic reasoning engine that powers BlackRoad OS.
            Unlike probabilistic AI that produces different answers to the same question, ALICE QI delivers
            reproducible results with complete transparency into its reasoning process.
          </p>
          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {['Risk Scoring', 'Portfolio Optimization', 'Fraud Detection', 'Financial Modeling', 'Compliance Analysis'].map((use, i) => (
              <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 text-center text-sm hover:border-white transition-all">
                {use}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Capabilities</h2>
        <div className="space-y-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="br-text-muted max-w-3xl">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">See It In Action</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Explainable Risk Scoring</h3>
            <pre className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-sm br-text-muted overflow-x-auto font-mono">
              {codeExamples.riskScoring}
            </pre>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio Optimization</h3>
            <pre className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-sm br-text-muted overflow-x-auto font-mono">
              {codeExamples.portfolio}
            </pre>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
            <h3 className="text-xl font-bold mb-3">Fraud Detection</h3>
            <p className="br-text-muted text-sm mb-4">
              Real-time transaction analysis with explainable flags. Every blocked transaction
              includes a complete reasoning chain for compliance teams.
            </p>
            <p className="text-[var(--br-hot-pink)] text-sm">45ms decision time, 0.02% false positive rate</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
            <h3 className="text-xl font-bold mb-3">Portfolio Rebalancing</h3>
            <p className="br-text-muted text-sm mb-4">
              Optimize client portfolios with tax-aware constraints. Every trade recommendation
              includes the mathematical justification.
            </p>
            <p className="text-[var(--br-hot-pink)] text-sm">Full audit trail per optimization</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all">
            <h3 className="text-xl font-bold mb-3">Anomaly Detection</h3>
            <p className="br-text-muted text-sm mb-4">
              Time-series analysis with configurable sensitivity. Isolation forests, statistical
              methods, and custom models\u2014all with reproducible results.
            </p>
            <p className="text-[var(--br-hot-pink)] text-sm">Configurable std deviation thresholds</p>
          </div>
        </div>
      </section>

      {/* API */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">API Reference</h2>
        <div className="max-w-3xl space-y-4">
          {[
            { method: 'POST', path: '/v1/alice/risk/analyze', desc: 'Analyze risk with explainable scoring' },
            { method: 'POST', path: '/v1/alice/portfolio/optimize', desc: 'Optimize portfolio with constraints' },
            { method: 'POST', path: '/v1/alice/anomalies/detect', desc: 'Detect anomalies in time-series data' },
            { method: 'GET', path: '/v1/alice/audit/{id}', desc: 'Retrieve calculation audit trail' },
          ].map((endpoint, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 flex items-center gap-4 font-mono text-sm">
              <span className="text-[var(--br-hot-pink)] font-bold w-16">{endpoint.method}</span>
              <span className="text-white">{endpoint.path}</span>
              <span className="br-text-muted ml-auto">{endpoint.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <p className="br-text-muted mb-8">Included in BlackRoad OS Professional and Enterprise tiers. Also available standalone:</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-2">$299/mo</div>
            <p className="br-text-muted text-sm">10,000 API calls, email support</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-hot-pink)] p-8">
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <div className="text-3xl font-bold mb-2">$999/mo</div>
            <p className="br-text-muted text-sm">100,000 API calls, chat support</p>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Custom</div>
            <p className="br-text-muted text-sm">Unlimited calls, dedicated infrastructure</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">AI that explains itself.</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Stop guessing why your AI made a decision. Start proving it.
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
