import { FloatingShapes, BlackRoadSymbol, StatusEmoji } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press Kit',
  description: 'BlackRoad OS brand assets, logos, company information, and media resources for press coverage.',
}


export default function PressKitPage() {
  const assets = [
    { name: 'Logo (SVG)', size: '2 KB', file: 'blackroad-logo.svg' },
    { name: 'Logo (PNG)', size: '12 KB', file: 'blackroad-logo.png' },
    { name: 'Logo Dark', size: '2 KB', file: 'blackroad-logo-dark.svg' },
    { name: 'Logo Light', size: '2 KB', file: 'blackroad-logo-light.svg' },
    { name: 'Icon Only', size: '1 KB', file: 'blackroad-icon.svg' },
    { name: 'Full Lockup', size: '3 KB', file: 'blackroad-lockup.svg' }
  ]

  const colors = [
    { name: 'Deep Black', hex: '#0A0A0A', usage: 'Primary background' },
    { name: 'Charcoal', hex: '#1A1A1A', usage: 'Card backgrounds' },
    { name: 'Pure White', hex: '#FFFFFF', usage: 'Primary text & CTAs' },
    { name: 'Sunrise Orange', hex: '#FF9D00', usage: 'Secondary actions' },
    { name: 'Warm Orange', hex: '#FF6B00', usage: 'Highlights' },
    { name: 'Hot Pink', hex: '#FF0066', usage: 'Primary actions' },
    { name: 'Electric Magenta', hex: '#FF006B', usage: 'Emphasis' },
    { name: 'Deep Magenta', hex: '#D600AA', usage: 'Accents' },
    { name: 'Vivid Purple', hex: '#7700FF', usage: 'Premium' },
    { name: 'Cyber Blue', hex: '#0066FF', usage: 'Links, info' }
  ]

  const factSheet = [
    { label: 'Founded', value: '2023' },
    { label: 'Headquarters', value: 'Remote-First' },
    { label: 'Employees', value: '6 (3 humans, 3 AI agents)' },
    { label: 'Funding', value: 'Bootstrapped' },
    { label: 'Customers', value: '750+ teams' },
    { label: 'Deployments', value: '10M+ total' },
    { label: 'Uptime', value: '99.99% average' },
    { label: 'AI Agents', value: '27+ in production' }
  ]

  const boilerplate = `BlackRoad OS is an autonomous infrastructure platform that uses multi-agent AI to deploy, monitor, and scale applications without human intervention. Founded in 2023, BlackRoad OS combines edge-first deployment, zero-trust security, and vendor-agnostic architecture to help developers ship faster while maintaining complete control of their stack. With 27+ AI agents collaborating in real-time and support for Cloudflare, Railway, and Raspberry Pi clusters, BlackRoad OS is building the future of autonomous DevOps.`

  const milestones = [
    { date: '2023 Q4', event: 'Founded BlackRoad OS' },
    { date: '2024 Q1', event: 'Launched multi-agent orchestration' },
    { date: '2024 Q2', event: 'Deployed PS-SHA-∞ memory system' },
    { date: '2024 Q3', event: 'Reached 100 customers' },
    { date: '2024 Q4', event: 'Surpassed 1M deployments' },
    { date: '2025 Q1', event: '750+ teams, 10M+ deployments' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Press Kit
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Brand assets, company information, and media resources.
          Everything you need to tell our story.
        </p>
        <div className="flex gap-4">
          <a 
            href="/press/blackroad-press-kit.zip" 
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            📦 Download Full Kit
          </a>
          <a 
            href="mailto:press@blackroad.io"
            className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift"
          >
            📧 Contact Press Team
          </a>
        </div>
      </section>

      {/* Company Info */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">About BlackRoad OS</h2>
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
          <p className="text-lg br-text-soft leading-relaxed">
            {boilerplate}
          </p>
        </div>
      </section>

      {/* Fact Sheet */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {factSheet.map((fact, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 flex justify-between items-center">
              <span className="font-bold">{fact.label}</span>
              <span className="br-text-muted">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Assets */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Brand Assets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {assets.map((asset, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all">
              <div className="bg-[var(--br-deep-black)] h-32 flex items-center justify-center mb-4">
                <BlackRoadSymbol size="md" />
              </div>
              <h3 className="font-bold mb-1">{asset.name}</h3>
              <div className="text-sm br-text-muted mb-4">{asset.size}</div>
              <button className="w-full px-4 py-2 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Brand Colors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {colors.map((color, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] overflow-hidden">
              <div 
                className="h-32"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-6">
                <h3 className="font-bold mb-1">{color.name}</h3>
                <div className="text-sm br-text-muted mb-2 font-mono">{color.hex}</div>
                <div className="text-sm br-text-muted">{color.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Key Milestones</h2>
        <div className="max-w-3xl space-y-4">
          {milestones.map((milestone, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 flex gap-6">
              <div className="w-32 flex-shrink-0 br-text-muted font-bold">{milestone.date}</div>
              <div className="flex-1">{milestone.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Leadership</h2>
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl">👩‍💻</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Alexa Amundson</h3>
              <div className="br-text-muted mb-4">Founder & CEO</div>
              <p className="br-text-soft mb-4">
                Previously built distributed systems at scale. Passionate about autonomous 
                infrastructure and AI-first development. Started BlackRoad OS to democratize 
                world-class deployment systems.
              </p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/alexa-amundson" className="text-sm font-bold hover:underline">
                  LinkedIn →
                </a>
                <a href="https://github.com/alexa" className="text-sm font-bold hover:underline">
                  GitHub →
                </a>
                <a href="https://twitter.com/alexa" className="text-sm font-bold hover:underline">
                  Twitter →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-8">Brand Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <StatusEmoji status="green" />
              Do
            </h3>
            <ul className="space-y-2 br-text-muted">
              <li>• Use official logo files</li>
              <li>• Maintain clear space around logo</li>
              <li>• Use approved color palette</li>
              <li>• Link to blackroad.io</li>
              <li>• Credit properly in articles</li>
            </ul>
          </div>
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <StatusEmoji status="red" />
              Don't
            </h3>
            <ul className="space-y-2 br-text-muted">
              <li>• Modify or distort the logo</li>
              <li>• Use unofficial colors</li>
              <li>• Recreate or redraw the logo</li>
              <li>• Imply endorsement without permission</li>
              <li>• Use in offensive context</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
        <p className="text-xl br-text-muted mb-8">
          For press inquiries, interviews, or additional information:
        </p>
        <a 
          href="mailto:press@blackroad.io"
          className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
        >
          📧 press@blackroad.io
        </a>
      </section>
    </main>
  )
}
