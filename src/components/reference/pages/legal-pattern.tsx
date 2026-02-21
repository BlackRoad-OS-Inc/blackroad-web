import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  BlackRoadSymbol
} from '@/components/BlackRoadVisuals'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Terms of service, privacy policy, and cookie policy for BlackRoad OS.',
}


export default function LegalPages() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <BlackRoadSymbol size={80} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">
            Legal <span className="br-text-muted">Documentation</span>
          </h1>
          <p className="br-text-muted text-xl">Last updated: February 15, 2026</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="#terms" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] p-6 rounded transition-all hover-lift text-center">
            <div className="text-4xl mb-3">📜</div>
            <div className="font-bold">Terms of Service</div>
          </Link>
          <Link href="#privacy" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-cyber-blue)] p-6 rounded transition-all hover-lift text-center">
            <div className="text-4xl mb-3">🔒</div>
            <div className="font-bold">Privacy Policy</div>
          </Link>
          <Link href="#dpa" className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-vivid-purple)] p-6 rounded transition-all hover-lift text-center">
            <div className="text-4xl mb-3">🤝</div>
            <div className="font-bold">DPA</div>
          </Link>
        </div>

        {/* Terms of Service */}
        <section id="terms" className="mb-16 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
          <h2 className="text-3xl font-bold mb-6 text-[var(--br-hot-pink)]">Terms of Service</h2>
          
          <div className="space-y-6 br-text-muted">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
              <p>By accessing and using BlackRoad OS (&quot;Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Use License</h3>
              <p>We grant you a limited, non-exclusive, non-transferable license to use the Service for your internal business purposes. You may not:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Resell or redistribute the Service</li>
                <li>Reverse engineer or decompile the software</li>
                <li>Use the Service for illegal purposes</li>
                <li>Attempt to gain unauthorized access</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. User Accounts</h3>
              <p>You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized access or security breaches.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Payment Terms</h3>
              <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Service Availability</h3>
              <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance with reasonable notice. We are not liable for service interruptions beyond our control.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">6. Data Ownership</h3>
              <p>You retain all rights to your data. We claim no ownership over content you upload. We may use anonymized, aggregated data for service improvements.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">7. Termination</h3>
              <p>Either party may terminate with 30 days written notice. We may suspend access immediately for violations. Upon termination, you will have 30 days to export your data.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">9. Changes to Terms</h3>
              <p>We may modify these terms at any time. We will notify users of material changes via email. Continued use after changes constitutes acceptance.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">10. Contact</h3>
              <p>For questions about these terms, contact us at <a href="mailto:legal@blackroad.io" className="text-[var(--br-hot-pink)] hover:underline">legal@blackroad.io</a></p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="mb-16 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
          <h2 className="text-3xl font-bold mb-6 text-[var(--br-cyber-blue)]">Privacy Policy</h2>
          
          <div className="space-y-6 br-text-muted">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Information We Collect</h3>
              <p>We collect information you provide directly (account details, payment info) and automatically (usage data, logs, cookies).</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">How We Use Your Information</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide and improve the Service</li>
                <li>Process payments and transactions</li>
                <li>Send service updates and notifications</li>
                <li>Respond to support requests</li>
                <li>Detect fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Data Sharing</h3>
              <p>We do not sell your data. We may share with:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Service providers (hosting, analytics)</li>
                <li>Law enforcement (when required)</li>
                <li>Acquirers (in case of merger/sale)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Data Security</h3>
              <p>We use industry-standard encryption (TLS 1.3), secure data centers, regular security audits, and access controls to protect your data.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Your Rights</h3>
              <p>You have the right to access, correct, delete, or export your data. Contact us at <a href="mailto:privacy@blackroad.io" className="text-[var(--br-cyber-blue)] hover:underline">privacy@blackroad.io</a></p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Cookies</h3>
              <p>We use essential cookies for functionality and optional cookies for analytics. You can control cookie preferences in your browser settings.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">International Data Transfers</h3>
              <p>We store data in US data centers. We comply with GDPR for EU users and use Standard Contractual Clauses for international transfers.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Data Retention</h3>
              <p>We retain your data while your account is active and for 90 days after deletion. Backups are retained for 30 days. Some data may be retained longer for legal compliance.</p>
            </div>
          </div>
        </section>

        {/* Data Processing Agreement */}
        <section id="dpa" className="mb-16 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
          <h2 className="text-3xl font-bold mb-6 text-[var(--br-vivid-purple)]">Data Processing Agreement (DPA)</h2>
          
          <div className="space-y-6 br-text-muted">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. Definitions</h3>
              <p><strong>Controller:</strong> You (the customer)<br/>
              <strong>Processor:</strong> BlackRoad OS Inc.<br/>
              <strong>Personal Data:</strong> Data submitted via the Service</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Processing Instructions</h3>
              <p>We process Personal Data only on your documented instructions, as described in our Terms of Service and this DPA.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. Security Measures</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
                <li>Regular penetration testing and security audits</li>
                <li>Role-based access controls and 2FA</li>
                <li>24/7 security monitoring and incident response</li>
                <li>Annual SOC 2 Type II certification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Sub-Processors</h3>
              <p>Current sub-processors:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>AWS (hosting - US regions)</li>
                <li>Stripe (payment processing)</li>
                <li>SendGrid (email delivery)</li>
              </ul>
              <p className="mt-2">We will provide 30 days notice before adding new sub-processors.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Data Subject Rights</h3>
              <p>We will assist you in responding to data subject requests (access, deletion, portability) within 14 days of your request.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">6. Data Breach Notification</h3>
              <p>We will notify you of any security breach affecting Personal Data within 72 hours of discovery, including details of the breach and remediation steps.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">7. Audit Rights</h3>
              <p>You may request security documentation and audit reports. On-site audits require 60 days notice and are limited to once per year.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">8. Data Return and Deletion</h3>
              <p>Upon termination, we will return or delete all Personal Data within 30 days, unless required by law to retain. Export functionality is available via the dashboard.</p>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
            <h3 className="text-xl font-bold mb-3">📄 Legal Documents</h3>
            <div className="space-y-2">
              <a href="mailto:legal@blackroad.io?subject=Terms%20of%20Service%20Request" className="block text-[var(--br-hot-pink)] hover:underline">→ Request Terms of Service</a>
              <a href="mailto:legal@blackroad.io?subject=Privacy%20Policy%20Request" className="block text-[var(--br-cyber-blue)] hover:underline">→ Request Privacy Policy</a>
              <a href="mailto:legal@blackroad.io?subject=DPA%20Request" className="block text-[var(--br-vivid-purple)] hover:underline">→ Request DPA</a>
            </div>
          </div>

          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
            <h3 className="text-xl font-bold mb-3">💬 Need Help?</h3>
            <p className="br-text-muted mb-4">Have questions about our legal policies?</p>
            <a href="mailto:legal@blackroad.io" className="text-[var(--br-hot-pink)] hover:underline">
              Contact Legal Team →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
