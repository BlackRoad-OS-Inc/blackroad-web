import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Alexa Amundson',
  description: 'Selected work by Alexa Amundson — BlackRoad OS platform, 30K agent orchestration, edge AI cluster, and more.',
}


export default function PortfolioPage() {
  const projects = [
    {
      title: 'BlackRoad OS Platform',
      year: '2024–present',
      description: 'Governed AI operating system orchestrating 30,000 autonomous agents with cryptographic identity, deterministic reasoning, and complete audit trails.',
      tech: ['PS-SHA-infinity', 'RoadChain', 'Lucidia', 'ALICE QI', 'Prism Console'],
      href: '/platform',
    },
    {
      title: '30K Agent Orchestration',
      year: '2025–present',
      description: 'Multi-agent coordination system managing 30,000 concurrent AI agents across edge devices, cloud infrastructure, and on-premise deployments.',
      tech: ['Raspberry Pi 5', 'Hailo-8', 'Cloudflare Workers', 'Railway', 'Docker'],
      href: '/platform',
    },
    {
      title: 'ALICE QI Reasoning Engine',
      year: '2025–present',
      description: 'Deterministic reasoning engine achieving perfect reproducibility — same input, same output, every time. Built for regulated decision-making.',
      tech: ['Constraint satisfaction', 'Formal verification', 'Audit logging'],
      href: '/alice-qi',
    },
    {
      title: 'Lucidia Orchestration Language',
      year: '2025–present',
      description: 'Domain-specific language for AI agent coordination with 10 specialized agents including breath-sync timing for human-readable execution.',
      tech: ['Custom DSL', 'Breath sync', '10 domain agents'],
      href: '/lucidia',
    },
    {
      title: 'RoadChain Audit Ledger',
      year: '2025–present',
      description: 'Blockchain-inspired immutable audit trail recording every agent action, decision, and data access for regulatory compliance.',
      tech: ['SHA-256 chains', 'Merkle proofs', 'HIPAA', 'SOC 2', 'FedRAMP'],
      href: '/roadchain',
    },
    {
      title: 'Edge AI Cluster',
      year: '2024–present',
      description: '8-device distributed compute cluster spanning Raspberry Pi 5 + Hailo-8 nodes, DigitalOcean droplets, and Mac orchestration — 52 TOPS total AI compute.',
      tech: ['Tailscale mesh', 'Pi 5', 'Hailo-8 (26 TOPS)', 'k3s', 'NVMe'],
      href: '/platform',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      {/* Header */}
      <section className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <div className="mb-8">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-4">Alexa Amundson</h1>
        <p className="text-2xl br-text-muted mb-2">
          Infrastructure Architect &middot; AI Systems Engineer
        </p>
        <p className="text-lg br-text-muted">
          Founder & CEO, BlackRoad OS, Inc.
        </p>
      </section>

      {/* Projects */}
      <section className="relative z-10 px-6 pb-8 max-w-5xl mx-auto">
        <h2 className="text-sm font-bold uppercase br-text-muted mb-12 tracking-widest">Selected Work</h2>
        <div className="space-y-1">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="block bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[rgba(255,255,255,0.3)] p-8 transition-all hover-lift no-underline text-white"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-sm br-text-muted whitespace-nowrap ml-4">{project.year}</span>
              </div>
              <p className="br-text-muted text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-[var(--br-onyx)] br-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto border-t border-[rgba(255,255,255,0.08)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '1,085', label: 'Repositories' },
            { value: '15', label: 'GitHub Orgs' },
            { value: '205', label: 'Cloudflare Projects' },
            { value: '8', label: 'Compute Devices' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm br-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto text-center border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Build</h2>
        <p className="br-text-muted mb-8">Interested in working together or learning more about BlackRoad OS?</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all no-underline">
            Get in Touch
          </Link>
          <Link href="/about" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold transition-all no-underline text-white">
            About BlackRoad
          </Link>
        </div>
      </section>
    </main>
  )
}
