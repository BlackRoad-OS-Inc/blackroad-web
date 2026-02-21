'use client'

import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden flex items-center justify-center">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      <div className="relative z-10 w-full max-w-lg mx-6 text-center">
        <BlackRoadSymbol size="lg" />

        <div className="mt-8 mb-4">
          <span className="inline-block px-3 py-1 text-sm font-bold bg-[rgba(0,255,100,0.15)] text-[var(--br-status-green)]">
            PAYMENT CONFIRMED
          </span>
        </div>

        <h1 className="text-5xl font-bold mb-4">Welcome to BlackRoad OS</h1>
        <p className="text-xl br-text-muted mb-8">
          Your Professional subscription is active. You now have access to 1,000 concurrent agents with full audit trails.
        </p>

        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 mb-8 text-left">
          <h2 className="text-sm font-bold br-text-muted uppercase mb-4">What&apos;s Next</h2>
          <ul className="space-y-3">
            {[
              'Deploy your first agent from the Prism Console',
              'Configure PS-SHA-infinity identity for your organization',
              'Set up RoadChain audit trails for compliance',
              'Explore Lucidia orchestration workflows',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm br-text-soft">
                <span className="text-[var(--br-hot-pink)] mt-0.5 font-bold">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 mb-8">
          <span className="text-xs br-text-muted">Next billing date</span>
          <div className="text-lg font-bold">
            {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all no-underline"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/docs"
            className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all no-underline text-white"
          >
            Read Docs
          </Link>
        </div>
      </div>
    </main>
  )
}
