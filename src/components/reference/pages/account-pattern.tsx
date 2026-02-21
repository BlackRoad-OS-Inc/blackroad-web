'use client'

import Link from 'next/link'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

function UsageBar({ label, used, total, unit = '' }: { label: string; used: number; total: number; unit?: string }) {
  const percentage = (used / total) * 100
  const isHigh = percentage > 80

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="br-text-muted">{label}</span>
        <span className={`font-bold ${isHigh ? 'text-[var(--br-hot-pink)]' : 'br-text-soft'}`}>
          {used.toLocaleString()} / {total.toLocaleString()} {unit}
        </span>
      </div>
      <div className="w-full bg-[var(--br-graphite)] h-2">
        <div
          className="h-2 transition-all"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            background: isHigh ? 'var(--br-hot-pink)' : 'var(--br-gradient-full)',
          }}
        />
      </div>
    </div>
  )
}

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="dots" opacity={0.03} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-12">
          <BlackRoadSymbol size="md" />
          <div>
            <h1 className="text-4xl font-bold">Account</h1>
            <p className="br-text-muted">Manage your subscription and usage</p>
          </div>
        </div>

        {/* Subscription */}
        <section className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6">Subscription</h2>

          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm br-text-muted mb-1">Current Plan</div>
              <div className="text-2xl font-bold">Developer</div>
            </div>
            <span className="px-3 py-1 text-sm font-bold bg-[rgba(0,255,100,0.15)] text-[var(--br-status-green)]">
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Concurrent Agents', value: '5 / 10' },
              { label: 'API Requests Today', value: '247 / 1,000' },
              { label: 'Storage Used', value: '0.4 GB / 1 GB' },
              { label: 'Team Members', value: '1 / 1' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xs br-text-muted mb-1">{stat.label}</div>
                <div className="text-lg font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all no-underline"
            >
              Upgrade Plan
            </Link>
            <button
              type="button"
              className="px-6 py-3 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold transition-all"
              onClick={() => { window.location.href = '/api/portal' }}
            >
              Manage Billing
            </button>
          </div>
        </section>

        {/* Usage */}
        <section className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6">Usage This Month</h2>
          <div className="space-y-5">
            <UsageBar label="Agent Hours" used={42} total={100} />
            <UsageBar label="API Calls" used={7420} total={30000} />
            <UsageBar label="Storage" used={0.4} total={1} unit="GB" />
            <UsageBar label="RoadChain Entries" used={1247} total={10000} />
          </div>
        </section>

        {/* API Keys */}
        <section className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
          <h2 className="text-2xl font-bold mb-6">API Keys</h2>
          <div className="bg-[var(--br-onyx)] p-4 font-mono text-sm mb-4 flex items-center justify-between">
            <span className="br-text-muted">br_dev_****************************7f3a</span>
            <button className="text-xs px-3 py-1 border border-[rgba(255,255,255,0.2)] hover:border-white transition-all">
              Copy
            </button>
          </div>
          <p className="text-xs br-text-muted">
            Keep your API keys secure. Do not share them in client-side code.
          </p>
        </section>
      </div>
    </main>
  )
}
