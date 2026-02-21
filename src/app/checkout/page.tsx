'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, Suspense } from 'react'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

const PLANS: Record<string, { name: string; price: string; features: string[] }> = {
  professional: {
    name: 'BlackRoad OS Professional',
    price: '$499/mo',
    features: [
      'Up to 1,000 concurrent agents',
      'Full Lucidia access (10 agents)',
      'Advanced Prism Console',
      'ALICE QI deterministic reasoning',
      'Full RoadChain audit ledger',
      'Policy enforcement dashboard',
      '99.5% uptime SLA',
      '5 team members included',
    ],
  },
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const planKey = searchParams.get('plan') || 'professional'
  const plan = PLANS[planKey] || PLANS.professional

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planKey }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="relative z-10 w-full max-w-lg mx-6">
      <div className="text-center mb-8">
        <BlackRoadSymbol size="lg" />
        <h1 className="text-4xl font-bold mt-4 mb-2">Complete Your Purchase</h1>
        <p className="br-text-muted text-lg">{plan.name} — {plan.price}</p>
      </div>

      <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
        {/* Order Summary */}
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6 mb-6">
          <h2 className="text-sm font-bold br-text-muted uppercase mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="br-text-soft">{plan.name}</span>
            <span className="font-bold">{plan.price}</span>
          </div>
          <ul className="space-y-2">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm br-text-muted">
                <span className="text-[var(--br-hot-pink)] mt-0.5">&#x2713;</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Checkout Button */}
        {error && (
          <div className="mb-4 p-3 bg-[rgba(255,0,0,0.1)] border border-[rgba(255,0,0,0.3)] text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Redirecting to Stripe...' : `Subscribe — ${plan.price}`}
        </button>

        <p className="text-center text-xs br-text-muted mt-4">
          You&apos;ll be redirected to Stripe&apos;s secure checkout. Cancel anytime.
        </p>

        <button
          onClick={() => router.push('/pricing')}
          className="w-full mt-3 py-2 text-sm br-text-muted hover:text-white transition-all bg-transparent border-0 cursor-pointer"
        >
          &larr; Back to pricing
        </button>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden flex items-center justify-center">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />
      <Suspense fallback={
        <div className="relative z-10 text-center">
          <BlackRoadSymbol size="lg" />
          <p className="mt-4 br-text-muted">Loading checkout...</p>
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </main>
  )
}
