import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  BlackRoadSymbol,
  StatusEmoji
} from '@/components/BlackRoadVisuals'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thanks for reaching out to BlackRoad OS. We will be in touch soon.',
}


export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden flex items-center justify-center">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <BlackRoadSymbol size={120} className="mx-auto mb-6 animate-pulse" />
          <StatusEmoji status="green" className="text-8xl" />
        </div>

        {/* Main Message */}
        <h1 className="text-6xl font-bold mb-6">
          Thank <span className="text-[var(--br-hot-pink)]">You!</span>
        </h1>
        
        <p className="text-2xl br-text-muted mb-12 leading-relaxed">
          We've received your submission.<br/>
          Our team will get back to you within 24 hours.
        </p>

        {/* Details */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded mb-12 max-w-xl mx-auto">
          <div className="text-left space-y-4">
            <div className="flex justify-between border-b border-[var(--br-charcoal)] pb-3">
              <span className="br-text-muted">Confirmation ID</span>
              <span className="font-mono text-[var(--br-hot-pink)]">#BR-{Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between border-b border-[var(--br-charcoal)] pb-3">
              <span className="br-text-muted">Submitted</span>
              <span className="font-mono">2026-02-15 00:38 UTC</span>
            </div>
            <div className="flex justify-between">
              <span className="br-text-muted">Response Time</span>
              <span className="font-mono text-[var(--br-hot-pink)]">&lt; 24 hours</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
              <div className="text-4xl mb-3">1️⃣</div>
              <div className="font-bold mb-2">Confirmation Email</div>
              <div className="text-sm br-text-muted">Check your inbox for details</div>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
              <div className="text-4xl mb-3">2️⃣</div>
              <div className="font-bold mb-2">Team Review</div>
              <div className="text-sm br-text-muted">We'll analyze your request</div>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
              <div className="text-4xl mb-3">3️⃣</div>
              <div className="font-bold mb-2">Personal Response</div>
              <div className="text-sm br-text-muted">Get a tailored reply from us</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="px-8 py-4 bg-[var(--br-hot-pink)] text-black rounded font-bold hover:bg-white transition-all text-lg">
              Return Home
            </Link>
            <Link href="/dashboard" className="px-8 py-4 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded font-bold transition-all text-lg">
              Go to Dashboard
            </Link>
          </div>

          <div className="flex gap-6 justify-center text-sm br-text-muted">
            <Link href="/docs" className="hover:text-[var(--br-hot-pink)] transition-colors">
              📚 Read Docs
            </Link>
            <Link href="/contact" className="hover:text-[var(--br-hot-pink)] transition-colors">
              💬 Contact Support
            </Link>
            <Link href="/status-page" className="hover:text-[var(--br-hot-pink)] transition-colors">
              📊 System Status
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 pt-16 border-t border-[var(--br-charcoal)]">
          <h3 className="text-xl font-bold mb-6">While You Wait...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-left hover:border-[var(--br-cyber-blue)] transition-all">
              <div className="text-2xl mb-3">📖</div>
              <div className="font-bold mb-2">Explore Documentation</div>
              <p className="text-sm br-text-muted mb-3">Learn how to get the most out of BlackRoad OS</p>
              <Link href="/docs" className="text-[var(--br-cyber-blue)] hover:underline text-sm">
                Browse Docs →
              </Link>
            </div>

            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-left hover:border-[var(--br-vivid-purple)] transition-all">
              <div className="text-2xl mb-3">🎮</div>
              <div className="font-bold mb-2">Try the Playground</div>
              <p className="text-sm br-text-muted mb-3">Test features and experiment with components</p>
              <Link href="/playground" className="text-[var(--br-vivid-purple)] hover:underline text-sm">
                Launch Playground →
              </Link>
            </div>

            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-left hover:border-[var(--br-warm-orange)] transition-all">
              <div className="text-2xl mb-3">💡</div>
              <div className="font-bold mb-2">Read Case Studies</div>
              <p className="text-sm br-text-muted mb-3">See how other teams use BlackRoad</p>
              <Link href="/case-studies" className="text-[var(--br-warm-orange)] hover:underline text-sm">
                View Stories →
              </Link>
            </div>

            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded text-left hover:border-[var(--br-hot-pink)] transition-all">
              <div className="text-2xl mb-3">🚀</div>
              <div className="font-bold mb-2">Check the Roadmap</div>
              <p className="text-sm br-text-muted mb-3">See what features are coming next</p>
              <Link href="/roadmap" className="text-[var(--br-hot-pink)] hover:underline text-sm">
                View Roadmap →
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-16 border-t border-[var(--br-charcoal)]">
          <p className="br-text-muted mb-4">Join 10,000+ teams building on BlackRoad OS</p>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/BlackRoad-OS" className="br-text-muted hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/alexa-amundson" className="br-text-muted hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:blackroad.systems@gmail.com" className="br-text-muted hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </main>
  )
}
