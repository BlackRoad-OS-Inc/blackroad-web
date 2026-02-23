'use client'

import Link from 'next/link'
import { useState } from 'react'

const productLinks = [
  { name: 'Platform', href: '/platform', desc: 'The operating system for governed AI' },
  { name: 'ALICE QI', href: '/alice-qi', desc: 'Deterministic reasoning engine' },
  { name: 'Lucidia', href: '/lucidia', desc: 'Human-AI orchestration language' },
  { name: 'Prism Console', href: '/prism-console', desc: 'Mission control for 30K agents' },
  { name: 'RoadChain', href: '/roadchain', desc: 'Immutable audit ledger' },
]

const navLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'About', href: '/about' },
]

const liveLinks = [
  { name: '🌌 Worlds', href: '/worlds', desc: 'Live Pi-generated world artifacts' },
  { name: '🚀 Fleet', href: '/fleet', desc: 'Pi node status & health' },
  { name: '🧠 Memory', href: '/memory', desc: 'PS-SHA∞ hash chain explorer' },
  { name: '🤖 Agents', href: '/agents', desc: 'Agent roster & capabilities' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [liveOpen, setLiveOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg tracking-tight no-underline flex items-center gap-2">
          <span style={{ background: 'var(--br-gradient-full)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            BlackRoad OS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="px-4 py-2 text-sm text-[var(--br-silver)] hover:text-white transition-colors bg-transparent border-none cursor-pointer font-[var(--br-font)]"
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.1)] shadow-2xl" role="menu">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 hover:bg-[rgba(255,255,255,0.05)] transition-colors no-underline"
                  >
                    <div className="text-sm text-white font-bold">{link.name}</div>
                    <div className="text-xs text-[var(--br-silver)]">{link.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[var(--br-silver)] hover:text-white transition-colors no-underline"
            >
              {link.name}
            </Link>
          ))}

          {/* Live Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLiveOpen(true)}
            onMouseLeave={() => setLiveOpen(false)}
          >
            <button
              className="px-4 py-2 text-sm font-medium flex items-center gap-1.5 bg-transparent border-none cursor-pointer font-[var(--br-font)] transition-colors hover:text-white"
              style={{ color: '#FF1D6C' }}
              aria-expanded={liveOpen}
              aria-haspopup="true"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#FF1D6C' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#FF1D6C' }} />
              </span>
              Live
            </button>
            {liveOpen && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-[var(--br-charcoal)] border border-[rgba(255,29,108,0.2)] shadow-2xl" role="menu">
                <div className="px-4 py-2 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-xs text-[var(--br-silver)] uppercase tracking-wider">Live Systems</span>
                </div>
                {liveLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 hover:bg-[rgba(255,255,255,0.05)] transition-colors no-underline"
                  >
                    <div className="text-sm text-white font-bold">{link.name}</div>
                    <div className="text-xs text-[var(--br-silver)]">{link.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm text-[var(--br-silver)] hover:text-white transition-colors no-underline"
          >
            Contact
          </Link>
          <Link
            href="/platform"
            className="px-4 py-2 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
            style={{ background: 'var(--br-gradient-full)' }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[var(--br-silver)] bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--br-charcoal)] border-t border-[rgba(255,255,255,0.08)]">
          <div className="px-6 py-4 space-y-1">
            {[...productLinks, ...navLinks, ...liveLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-[var(--br-silver)] hover:text-white no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
