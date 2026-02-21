import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '@/components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'BlackRoad OS pricing — start free with 10 agents, scale to 30,000+. Plans for developers, teams, and enterprises.',
}


export default function PricingPage() {
  const plans = [
    {
      name: 'Developer',
      price: 'Free',
      period: '',
      description: 'Explore and prototype with governed AI',
      features: [
        { text: 'Up to 10 concurrent agents', included: true },
        { text: 'Lucidia agents (rate-limited)', included: true },
        { text: 'Basic Prism Console', included: true },
        { text: 'Community support', included: true },
        { text: '1 GB RoadChain storage', included: true },
        { text: '1,000 API requests/day', included: true },
        { text: 'PS-SHA-infinity identity', included: true },
        { text: 'Standard audit trails', included: true },
        { text: 'ALICE QI (limited)', included: false },
        { text: 'Policy enforcement', included: false },
        { text: 'Custom domain agents', included: false },
        { text: 'On-premise deployment', included: false },
      ],
      cta: 'Start Free',
      href: '/signup',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Production deployments for growing teams',
      features: [
        { text: 'Up to 1,000 concurrent agents', included: true },
        { text: 'Full Lucidia access (10 agents)', included: true },
        { text: 'Advanced Prism Console', included: true },
        { text: 'Email & chat support (24h)', included: true },
        { text: '100 GB RoadChain storage', included: true },
        { text: '10,000 API requests/day', included: true },
        { text: 'PS-SHA-infinity identity chains', included: true },
        { text: 'Full RoadChain audit ledger', included: true },
        { text: 'ALICE QI deterministic reasoning', included: true },
        { text: 'Policy enforcement dashboard', included: true },
        { text: '99.5% uptime SLA', included: true },
        { text: '5 team members included', included: true },
      ],
      cta: 'Start Trial',
      href: '/checkout?plan=professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Regulated industries at scale',
      features: [
        { text: '30,000+ concurrent agents', included: true },
        { text: 'Unlimited Lucidia workflows', included: true },
        { text: 'Full Prism Console + custom views', included: true },
        { text: '24/7 phone & Slack support', included: true },
        { text: 'Unlimited RoadChain storage', included: true },
        { text: 'Unlimited API requests', included: true },
        { text: 'Dedicated PS-SHA-infinity infra', included: true },
        { text: 'Dedicated infrastructure', included: true },
        { text: 'Full ALICE QI + custom models', included: true },
        { text: 'HIPAA / SOC 2 / FedRAMP ready', included: true },
        { text: 'On-premise deployment option', included: true },
        { text: 'Up to 99.99% SLA', included: true },
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
    },
  ]

  const addons = [
    { name: 'Compliance Pack', price: '$1,000', period: '/mo', description: 'HIPAA, SOC 2, FedRAMP templates and automated reporting' },
    { name: 'Advanced Analytics', price: '$300', period: '/mo', description: 'Anomaly detection, cohort analysis, executive reports' },
    { name: 'Custom Domain Agents', price: '$2,000', period: 'setup + $500/mo', description: 'Build specialized reasoning agents for your industry' },
    { name: 'Dedicated Edge Devices', price: 'Hardware +', period: '$200/mo/device', description: 'Raspberry Pi 5 + Hailo-8 AI accelerator nodes' },
  ]

  const standalone = [
    { name: 'ALICE QI Starter', price: '$299/mo', description: '10,000 API calls, email support' },
    { name: 'ALICE QI Growth', price: '$999/mo', description: '100,000 API calls, chat support' },
    { name: 'Lucidia Hobbyist', price: '$49/mo', description: '1,000 workflow executions' },
    { name: 'Lucidia Professional', price: '$199/mo', description: '10,000 workflow executions' },
  ]

  const faqs = [
    {
      q: 'What\'s included in the free Developer plan?',
      a: 'Up to 10 concurrent AI agents with PS-SHA-infinity identity, basic Prism Console monitoring, standard audit trails, and community support. Perfect for prototyping governed AI workflows.',
    },
    {
      q: 'How does agent pricing work?',
      a: 'Each plan includes a maximum number of concurrent agents. Agents can be any of the 5 runtime types (llm_brain, workflow_engine, integration_bridge, edge_worker, ui_helper). You can spawn and destroy agents dynamically within your plan limits.',
    },
    {
      q: 'What compliance standards do you support?',
      a: 'Enterprise tier includes HIPAA, SOC 2, FERPA, and FedRAMP compliance packages. The Compliance Pack add-on ($1,000/mo) is also available for Professional tier. All tiers include PS-SHA-infinity audit trails and RoadChain immutable logging.',
    },
    {
      q: 'Can I deploy on my own hardware?',
      a: 'Yes. Enterprise tier includes on-premise deployment option. We also offer Dedicated Edge Devices (Raspberry Pi 5 + Hailo-8 AI accelerator) as an add-on for any paid plan.',
    },
    {
      q: 'Do you offer annual billing?',
      a: 'Yes. Pay annually and save 20%. Contact our sales team for annual contracts and custom enterprise agreements.',
    },
    {
      q: 'Can I use ALICE QI or Lucidia without the full platform?',
      a: 'Yes. Both ALICE QI and Lucidia are available as standalone products with their own pricing tiers. See the Standalone Products section below.',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      {/* Hero */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Pricing That Scales With You
        </h1>
        <p className="text-2xl br-text-muted mb-4 max-w-3xl mx-auto">
          Start with 10 free agents. Scale to 30,000 on Enterprise.
          Every plan includes PS-SHA-infinity identity and audit trails.
        </p>
        <p className="text-lg br-text-muted">
          Annual billing saves 20%.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 px-6 py-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-[var(--br-charcoal)] border-2 p-8 transition-all hover-lift relative ${
                plan.popular ? 'border-[var(--br-hot-pink)]' : 'border-[var(--br-charcoal)] hover:border-[rgba(255,255,255,0.3)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--br-hot-pink)] text-white text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="br-text-muted text-lg">{plan.period}</span>
              </div>
              <p className="br-text-muted mb-8 text-sm">{plan.description}</p>

              <Link
                href={plan.href}
                className={`block w-full py-4 text-center font-bold text-lg mb-8 transition-all no-underline ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-[rgba(255,255,255,0.85)]'
                    : 'border-2 border-[rgba(255,255,255,0.3)] hover:border-white text-white'
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <span className="text-[var(--br-hot-pink)] mt-0.5">&#x2713;</span>
                    ) : (
                      <span className="text-[var(--br-pewter)] mt-0.5">&#x2717;</span>
                    )}
                    <span className={feature.included ? 'br-text-soft' : 'br-text-muted line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included in Every Plan */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-8 text-center">Included in Every Plan</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'PS-SHA-infinity Identity', desc: 'Cryptographic identity for every agent' },
            { name: 'RoadChain Audit Trails', desc: 'Tamper-evident logging of all actions' },
            { name: 'Lucidia Orchestration', desc: 'Plain language workflow definitions' },
            { name: 'CLI & SDKs', desc: 'Python, TypeScript, and REST APIs' },
          ].map((item, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all">
              <h3 className="font-bold mb-2 text-sm">{item.name}</h3>
              <p className="text-xs br-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add-Ons */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-4 text-center">Add-Ons</h2>
        <p className="text-lg br-text-muted mb-12 text-center">Available for Professional and Enterprise tiers</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all hover-lift">
              <h3 className="font-bold mb-2">{addon.name}</h3>
              <div className="mb-2">
                <span className="text-xl font-bold">{addon.price}</span>
                <span className="text-xs br-text-muted"> {addon.period}</span>
              </div>
              <p className="text-xs br-text-muted">{addon.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Standalone Products */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-4 text-center">Standalone Products</h2>
        <p className="text-lg br-text-muted mb-12 text-center">Use ALICE QI or Lucidia without the full platform</p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {standalone.map((product, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <h3 className="font-bold mb-2 text-sm">{product.name}</h3>
              <div className="text-xl font-bold mb-2">{product.price}</div>
              <p className="text-xs br-text-muted">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)]">
                <th className="text-left py-4 pr-4 br-text-muted font-normal">Feature</th>
                <th className="text-center py-4 px-4 font-bold">Developer</th>
                <th className="text-center py-4 px-4 font-bold text-[var(--br-hot-pink)]">Professional</th>
                <th className="text-center py-4 px-4 font-bold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Concurrent Agents', '10', '1,000', '30,000+'],
                ['Lucidia Domain Agents', 'Limited', 'Full (10)', 'Unlimited + Custom'],
                ['ALICE QI Reasoning', '-', 'Full', 'Full + Custom Models'],
                ['Prism Console', 'Basic', 'Advanced', 'Full + Custom Views'],
                ['RoadChain Storage', '1 GB', '100 GB', 'Unlimited'],
                ['API Requests / Day', '1,000', '10,000', 'Unlimited'],
                ['PS-SHA-infinity', 'Standard', 'Full Chains', 'Dedicated Infra'],
                ['Policy Enforcement', '-', 'Dashboard', 'Full + Custom Policies'],
                ['Support', 'Community', 'Email + Chat', '24/7 Phone + Slack'],
                ['SLA', '-', '99.5%', 'Up to 99.99%'],
                ['Team Members', '1', '5', 'Unlimited'],
                ['Compliance Packages', '-', 'Add-on', 'Included'],
                ['On-Premise Deploy', '-', '-', 'Available'],
              ].map(([feature, dev, pro, ent], i) => (
                <tr key={i} className="border-b border-[rgba(255,255,255,0.05)]">
                  <td className="py-3 pr-4 br-text-muted">{feature}</td>
                  <td className="text-center py-3 px-4">{dev === '-' ? <span className="br-text-muted">-</span> : dev}</td>
                  <td className="text-center py-3 px-4">{pro}</td>
                  <td className="text-center py-3 px-4">{ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative z-10 px-6 py-20 max-w-4xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
              <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
              <p className="br-text-muted text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-6">Ready to deploy governed AI?</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Start free. No credit card required. Scale when you're ready.
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
