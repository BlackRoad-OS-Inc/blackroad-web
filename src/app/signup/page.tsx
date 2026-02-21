'use client'

import Link from 'next/link'

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Get Started</h1>
        <p className="text-[rgba(255,255,255,0.6)] mb-8">
          Start building with BlackRoad OS. Free tier includes 10 concurrent agents.
        </p>
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 space-y-4">
          <p className="text-sm text-[rgba(255,255,255,0.6)]">
            Sign up is currently available through our sales team.
          </p>
          <Link
            href="/contact"
            className="block w-full py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all no-underline"
          >
            Contact Sales
          </Link>
          <Link
            href="/"
            className="block w-full py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold transition-all no-underline text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
