'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { UserButton, useAuth } from '@clerk/nextjs'

const STOPS = ['#FF6B2B', '#FF2255', '#CC00AA', '#8844FF', '#4488FF', '#00D4FF']
const GRAD = 'linear-gradient(90deg, #FF6B2B, #FF2255, #CC00AA, #8844FF, #4488FF, #00D4FF)'

const productLinks = [
  { name: 'Platform', href: '/platform', desc: 'The sovereign AI operating system', color: '#FF6B2B' },
  { name: 'ALICE QI', href: '/alice-qi', desc: 'Deterministic reasoning engine', color: '#FF2255' },
  { name: 'Lucidia', href: '/lucidia', desc: 'Human-AI orchestration language', color: '#CC00AA' },
  { name: 'Prism Console', href: '/prism-console', desc: 'Mission control for 30K agents', color: '#8844FF' },
  { name: 'RoadChain', href: '/roadchain', desc: 'Immutable audit ledger', color: '#4488FF' },
]

const navLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Fleet', href: '/fleet' },
]

const liveLinks = [
  { name: 'Fleet', href: '/fleet', desc: 'Live infrastructure status' },
  { name: 'Agents', href: '/agents', desc: 'Agent roster & capabilities' },
  { name: 'Memory', href: '/memory', desc: 'PS-SHA-infinity chain' },
  { name: 'Worlds', href: '/worlds', desc: 'Generated world artifacts' },
  { name: 'Terminal', href: '/terminal', desc: 'System monitoring' },
  { name: 'Dashboard', href: '/dashboard', desc: 'Service health' },
]

function NavCTA() {
  const { isSignedIn, isLoaded } = useAuth()
  if (!isLoaded) return null
  return (
    <div className="hidden md:flex items-center gap-2">
      {isSignedIn ? (
        <>
          <Link
            href="/os"
            className="px-3 py-1.5 text-[12px] text-[#555] hover:text-white transition-colors no-underline"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Console
          </Link>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="px-3 py-1.5 text-[12px] text-[#555] hover:text-white transition-colors no-underline"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 text-[12px] font-semibold text-black bg-white rounded-md hover:bg-[#eee] transition-all no-underline"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get Started
          </Link>
        </>
      )}
    </div>
  )
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [liveOpen, setLiveOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      {/* Gradient bar */}
      <div className="h-[2px] animate-grad-shift" style={{ background: GRAD, backgroundSize: '200% 100%' }} />

      <div
        className="transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid #141414' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="flex gap-[2px]">
              {STOPS.map((c, i) => (
                <div
                  key={c}
                  className="w-[3px] h-[18px] rounded-sm"
                  style={{
                    background: c,
                    animation: `barPulse 2.5s ease-in-out ${i * 0.14}s infinite`,
                  }}
                />
              ))}
            </div>
            <span className="text-[15px] font-bold text-[#f5f5f5] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              BlackRoad
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
                className="px-3 py-2 text-[13px] text-[#686868] hover:text-[#f0f0f0] transition-colors bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                aria-expanded={productsOpen}
              >
                Products
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-start gap-3 px-4 py-3 hover:bg-[#111] transition-colors no-underline"
                    >
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: link.color }} />
                      <div>
                        <div className="text-[13px] text-white font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {link.name}
                        </div>
                        <div className="text-[11px] text-[#444]" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {link.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] text-[#686868] hover:text-[#f0f0f0] transition-colors no-underline"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
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
                className="px-3 py-2 text-[13px] flex items-center gap-1.5 bg-transparent border-none cursor-pointer transition-colors hover:text-[#f0f0f0]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#00D4FF' }}
                aria-expanded={liveOpen}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-40" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D4FF]" />
                </span>
                Live
              </button>
              {liveOpen && (
                <div className="absolute top-full right-0 mt-0 w-60 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-[#111]">
                    <span className="text-[9px] text-[#333] uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Live Systems
                    </span>
                  </div>
                  {liveLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 hover:bg-[#111] transition-colors no-underline"
                    >
                      <div className="text-[12px] text-white font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {link.name}
                      </div>
                      <div className="text-[10px] text-[#333]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <NavCTA />

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#666] bg-transparent border-none cursor-pointer text-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? '\u2715' : '\u2630'}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#111]">
            <div className="px-6 py-4 space-y-1">
              {[...productLinks, ...navLinks.map(l => ({ ...l, desc: '' })), ...liveLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-[13px] text-[#888] hover:text-white no-underline transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#111] mt-4 flex gap-3">
                <Link href="/os" className="text-[12px] text-[#555] no-underline" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Console
                </Link>
                <Link href="/signup" className="text-[12px] font-semibold text-black bg-white px-3 py-1 rounded no-underline">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
