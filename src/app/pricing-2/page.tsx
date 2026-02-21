import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Simple, transparent pricing for BlackRoad OS. Developer, Professional, and Enterprise tiers.',
}


export default function Pricing2Page() {
  const plans = [
    {
      name: 'Developer',
      price: '$0',
      period: 'forever',
      description: 'Explore governed AI with 10 free agents',
      features: [
        { text: '10 concurrent agents', included: true },
        { text: 'PS-SHA-infinity identity', included: true },
        { text: 'Standard audit trails', included: true },
        { text: 'Basic Prism Console', included: true },
        { text: 'Lucidia (rate-limited)', included: true },
        { text: 'Community support', included: true },
        { text: 'ALICE QI reasoning', included: false },
        { text: 'Policy enforcement', included: false },
        { text: 'Compliance packages', included: false },
      ],
      cta: 'Start Free',
      href: '/signup',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Production-ready with 1,000 agents',
      features: [
        { text: '1,000 concurrent agents', included: true },
        { text: 'Full PS-SHA-infinity chains', included: true },
        { text: 'Full RoadChain audit ledger', included: true },
        { text: 'Advanced Prism Console', included: true },
        { text: 'Full Lucidia (10 agents)', included: true },
        { text: 'ALICE QI deterministic reasoning', included: true },
        { text: 'Policy enforcement dashboard', included: true },
        { text: '99.5% SLA', included: true },
        { text: 'Compliance add-ons available', included: true },
      ],
      cta: 'Start Pro Trial',
      href: '/signup',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Regulated industries at 30,000+ agents',
      features: [
        { text: '30,000+ concurrent agents', included: true },
        { text: 'Dedicated PS-SHA-infinity infra', included: true },
        { text: 'Unlimited RoadChain storage', included: true },
        { text: 'Full Prism Console + custom views', included: true },
        { text: 'Unlimited Lucidia + custom agents', included: true },
        { text: 'Full ALICE QI + custom models', included: true },
        { text: 'HIPAA / SOC 2 / FedRAMP', included: true },
        { text: 'Up to 99.99% SLA', included: true },
        { text: 'On-premise deployment', included: true },
        { text: '24/7 phone + Slack support', included: true },
        { text: 'Architecture consulting', included: true },
        { text: 'Custom contracts', included: true },
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
    },
  ]

  const addons = [
    { name: 'Compliance Pack', price: '$1,000/mo', description: 'HIPAA, SOC 2, FedRAMP templates + automated reporting' },
    { name: 'Advanced Analytics', price: '$300/mo', description: 'Anomaly detection, cohort analysis, executive reports' },
    { name: 'Custom Domain Agents', price: '$2,000 setup', description: 'Specialized reasoning agents for your industry' },
    { name: 'Edge Devices', price: '$200/mo/device', description: 'Raspberry Pi 5 + Hailo-8 AI accelerator nodes' },
  ]

  const faqs = [
    {
      q: 'What compliance standards do you support?',
      a: 'Enterprise includes HIPAA, SOC 2, FERPA, and FedRAMP. Professional can add the Compliance Pack for $1,000/mo. All plans include PS-SHA-infinity audit trails and RoadChain immutable logging.',
    },
    {
      q: 'How does agent pricing work?',
      a: 'Each plan has a max concurrent agent count. Spawn and destroy agents dynamically. All 5 runtime types (llm_brain, workflow_engine, integration_bridge, edge_worker, ui_helper) count equally.',
    },
    {
      q: 'Can I deploy on my own hardware?',
      a: 'Enterprise includes on-premise deployment. Any paid plan can add Dedicated Edge Devices (Pi 5 + Hailo-8). The platform also runs on Railway, Cloudflare, and Docker.',
    },
    {
      q: 'Do you offer annual billing?',
      a: 'Yes. Annual billing saves 20%. Contact sales for custom enterprise contracts.',
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
          Simple, Transparent Pricing
        </h1>
        <p className="text-2xl br-text-muted mb-4">
          Start free. Scale to 30,000 agents. No surprises.
        </p>
        <p className="text-lg br-text-muted">
          Every plan includes PS-SHA-infinity identity and RoadChain audit trails.
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

      {/* Add-ons */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Add-Ons</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {addons.map((addon, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 text-center hover:border-white transition-all hover-lift">
              <h3 className="font-bold mb-2">{addon.name}</h3>
              <div className="text-xl font-bold mb-2">{addon.price}</div>
              <p className="text-xs br-text-muted">{addon.description}</p>
            </div>
          ))}
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
        <h2 className="text-4xl font-bold mb-6">Still have questions?</h2>
        <p className="text-xl br-text-muted mb-8">
          Our team is here to help you find the right plan.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift no-underline">
            Contact Sales
          </Link>
          <Link href="/docs" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift no-underline text-white">
            Read Docs
          </Link>
        </div>
      </section>
    </main>
  )
}
