import { FloatingShapes, StatusEmoji, MetricEmoji, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description: 'BlackRoad OS security practices — encryption, access controls, compliance standards, and vulnerability management.',
}


export default function SecurityPage() {
  const practices = [
    {
      icon: '🔐',
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using AES-256-GCM. TLS 1.3 everywhere.',
      details: [
        'Automatic SSL/TLS certificates',
        'Perfect forward secrecy',
        'Zero-knowledge architecture',
        'Hardware security modules (HSM)'
      ]
    },
    {
      icon: '🔒',
      title: 'Zero-Trust Networking',
      description: 'Every request authenticated and authorized. No implicit trust, ever.',
      details: [
        'Mutual TLS (mTLS)',
        'Service mesh security',
        'Network segmentation',
        'Least-privilege access'
      ]
    },
    {
      icon: '🛡️',
      title: 'Automated Security Scans',
      description: 'Continuous scanning for vulnerabilities, secrets, and misconfigurations.',
      details: [
        'Dependabot auto-updates',
        'CodeQL static analysis',
        'Container vulnerability scans',
        'Secret detection'
      ]
    },
    {
      icon: '🔍',
      title: 'Security Monitoring',
      description: 'Real-time threat detection with AI-powered anomaly detection.',
      details: [
        'Intrusion detection (IDS)',
        'DDoS mitigation',
        'Rate limiting',
        'Audit logging'
      ]
    },
    {
      icon: '🔑',
      title: 'Secret Management',
      description: 'Centralized secret storage with automatic rotation and access controls.',
      details: [
        'Vault integration',
        'Dynamic secrets',
        'Automatic rotation',
        'Access audit trails'
      ]
    },
    {
      icon: '🚨',
      title: 'Incident Response',
      description: '24/7 security operations team with automated incident response.',
      details: [
        'Security playbooks',
        'Automatic rollbacks',
        'Incident timeline',
        'Post-mortem analysis'
      ]
    }
  ]

  const compliance = [
    { standard: 'SOC 2 Type II', status: 'certified', year: '2024' },
    { standard: 'ISO 27001', status: 'certified', year: '2024' },
    { standard: 'GDPR', status: 'compliant', year: '2024' },
    { standard: 'HIPAA', status: 'in-progress', year: '2025' },
    { standard: 'PCI DSS', status: 'in-progress', year: '2025' },
    { standard: 'FedRAMP', status: 'planned', year: '2026' }
  ]

  const vulnerabilityProcess = [
    { step: '1', title: 'Report', description: 'Email security@blackroad.io or use our bug bounty program' },
    { step: '2', title: 'Acknowledge', description: 'We respond within 24 hours with confirmation' },
    { step: '3', title: 'Investigate', description: 'Our team validates and assesses severity' },
    { step: '4', title: 'Fix', description: 'We deploy a fix within 7 days for critical issues' },
    { step: '5', title: 'Disclose', description: 'Coordinated disclosure after fix is deployed' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="grid" opacity={0.03} />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Security First <StatusEmoji status="green" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Enterprise-grade security built into every layer. 
          Zero-trust architecture, continuous monitoring, and transparent practices.
        </p>
        <div className="flex gap-4">
          <a href="#practices" className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift">
            Our Practices
          </a>
          <a href="#compliance" className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift">
            Compliance
          </a>
        </div>
      </section>

      {/* Security Practices */}
      <section id="practices" className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Security Practices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="text-5xl mb-4">{practice.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{practice.title}</h3>
              <p className="br-text-muted mb-6">{practice.description}</p>
              <ul className="space-y-2">
                {practice.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm br-text-soft">
                    <span className="text-[var(--br-hot-pink)]">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Compliance & Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {compliance.map((cert, i) => (
            <div key={i} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 hover:border-white transition-all hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{cert.standard}</h3>
                {cert.status === 'certified' && <StatusEmoji status="green" />}
                {cert.status === 'compliant' && <StatusEmoji status="green" />}
                {cert.status === 'in-progress' && <StatusEmoji status="yellow" />}
                {cert.status === 'planned' && <span className="br-text-muted">○</span>}
              </div>
              <div className="br-text-muted">
                <span className="capitalize">{cert.status}</span> • {cert.year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12 text-center">Vulnerability Disclosure Process</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {vulnerabilityProcess.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-16 h-16 flex-shrink-0 bg-white text-black text-2xl font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="flex-1 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="br-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Bounty */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Bug Bounty Program</h2>
          <p className="text-xl br-text-muted mb-8">
            We reward security researchers who help us keep BlackRoad OS secure.
            Bounties range from $100 to $10,000 depending on severity.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-3xl font-bold mb-2">$100</div>
              <div className="br-text-muted">Low Severity</div>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-3xl font-bold mb-2">$500</div>
              <div className="br-text-muted">Medium</div>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-3xl font-bold mb-2">$2,500</div>
              <div className="br-text-muted">High</div>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6">
              <div className="text-3xl font-bold mb-2">$10K</div>
              <div className="br-text-muted">Critical</div>
            </div>
          </div>
          <a 
            href="mailto:security@blackroad.io"
            className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            Report Vulnerability →
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Security Questions?</h2>
        <p className="text-xl br-text-muted mb-8">
          Our security team is here to help. Reach out anytime.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="mailto:security@blackroad.io"
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            📧 security@blackroad.io
          </a>
          <a 
            href="/docs/security"
            className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift"
          >
            Read Security Docs
          </a>
        </div>
      </section>
    </main>
  )
}
