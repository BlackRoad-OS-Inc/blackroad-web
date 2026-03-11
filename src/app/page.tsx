'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const STOPS = ['#FF6B2B', '#FF2255', '#CC00AA', '#8844FF', '#4488FF', '#00D4FF']
const GRAD = 'linear-gradient(90deg, #FF6B2B, #FF2255, #CC00AA, #8844FF, #4488FF, #00D4FF)'

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return { value, ref }
}

function LiveFleetIndicator() {
  const [fleet, setFleet] = useState<{ online: number; total: number; nodes: string[] } | null>(null)

  useEffect(() => {
    async function poll() {
      try {
        const r = await fetch('/api/fleet')
        const data = await r.json()
        const onlineNodes = (data.nodes || []).filter((n: any) => n.online)
        setFleet({
          online: data.summary?.online ?? onlineNodes.length,
          total: data.summary?.total ?? (data.nodes || []).length,
          nodes: onlineNodes.map((n: any) => n.name),
        })
      } catch {
        setFleet(null)
      }
    }
    poll()
    const id = setInterval(poll, 15000)
    return () => clearInterval(id)
  }, [])

  if (!fleet) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#111] bg-[#050505]"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-40" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]" />
      </span>
      <span className="text-[10px] text-[#555]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {fleet.online}/{fleet.total} nodes live
      </span>
      <span className="text-[9px] text-[#333]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {fleet.nodes.join(' · ')}
      </span>
    </motion.div>
  )
}

function TerminalPreview() {
  const [lines, setLines] = useState<string[]>([])
  const allLines = [
    '$ blackroad init --sovereign',
    '  Initializing BlackRoad OS v2.4.1...',
    '  Loading cryptographic identity layer...',
    '  PS-SHA-∞ hash chain: genesis → verified',
    '',
    '$ blackroad agents spawn --count 5 --runtime llm',
    '  Spawning agents with deterministic reasoning...',
    '  [✓] Lucidia    — orchestrator  — online',
    '  [✓] Alice QI   — analyst       — online',
    '  [✓] Sentinel   — monitor       — online',
    '  [✓] Aura       — creative      — online',
    '  [✓] BlackBot   — executor      — online',
    '',
    '$ blackroad fleet status',
    '  5/5 agents operational · 0 incidents · 99.97% uptime',
    '  RoadChain: 12,847 events recorded · tamper-proof ✓',
  ]

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      if (i < allLines.length) {
        setLines(prev => [...prev, allLines[i]])
        i++
      } else {
        clearInterval(id)
      }
    }, 180)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative rounded-xl overflow-hidden"
    >
      {/* Gradient border glow */}
      <div className="absolute -inset-px rounded-xl" style={{ background: GRAD, opacity: 0.15 }} />
      <div className="relative bg-[#050505] rounded-xl border border-[#111]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#111]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF2255]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B2B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />
          </div>
          <span className="text-[10px] text-[#333] ml-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            blackroad-os — terminal
          </span>
        </div>
        {/* Terminal content */}
        <div className="p-4 h-[320px] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, lineHeight: 1.8 }}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={line.startsWith('$') ? 'text-[#f5f5f5]' : line.includes('[✓]') ? 'text-[#00D4FF]' : line.includes('✓') ? 'text-[#00D4FF]' : 'text-[#444]'}
            >
              {line || '\u00A0'}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-[#00D4FF] ml-0.5"
          />
        </div>
      </div>
    </motion.div>
  )
}

function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, #FF225510 0%, transparent 70%)', top: '-10%', right: '-10%' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, #4488FF08 0%, transparent 70%)', bottom: '10%', left: '-5%' }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, #8844FF06 0%, transparent 70%)', top: '40%', left: '30%' }}
        animate={{ x: [0, 40, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function ParticleField() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 12,
    size: 1 + Math.random() * 2,
    color: STOPS[i % STOPS.length],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            left: `${p.x}%`,
            bottom: -10,
            opacity: 0.15,
          }}
          animate={{ y: [0, -1000], opacity: [0, 0.3, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95])

  const products = [
    { name: 'BlackRoad OS', tagline: 'The sovereign operating system', description: 'Deploy autonomous agents with cryptographic identity, deterministic reasoning, and complete audit trails.', href: '/platform', color: '#FF6B2B' },
    { name: 'ALICE QI', tagline: 'AI that shows its work', description: 'Deterministic reasoning for risk intelligence, portfolio analytics, and quantitative modeling.', href: '/alice-qi', color: '#FF2255' },
    { name: 'Lucidia', tagline: 'Orchestrate intelligence', description: '10 domain expert agents coordinated through plain language workflows. No coding required.', href: '/lucidia', color: '#CC00AA' },
    { name: 'Prism Console', tagline: 'Mission control', description: 'Real-time monitoring, policy enforcement, compliance visualization, infrastructure orchestration.', href: '/prism-console', color: '#8844FF' },
    { name: 'RoadChain', tagline: 'Immutable proof', description: 'Blockchain audit ledger with tamper-evident cryptographic proof. Built for regulators.', href: '/roadchain', color: '#4488FF' },
  ]

  const s1 = useCountUp(30000, 2500)
  const s2 = useCountUp(52, 2000)
  const s3 = useCountUp(99, 1500)

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <GradientOrbs />
      <ParticleField />

      {/* ── Hero ── */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 px-6 pt-32 pb-20 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LiveFleetIndicator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8"
        >
          {/* Logo bars */}
          <div className="flex gap-[3px] mb-6">
            {STOPS.map((c, i) => (
              <motion.div
                key={c}
                className="w-[4px] h-8 rounded-sm"
                style={{ background: c }}
                animate={{ scaleY: [1, 1.4, 1] }}
                transition={{ duration: 2.5, delay: i * 0.12, repeat: Infinity }}
              />
            ))}
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight max-w-5xl mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="grad-text-animated">
              The Operating System
            </span>
            <br />
            <span className="text-white">for Governed AI</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#888] max-w-3xl leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Deploy autonomous agents with cryptographic identity, deterministic reasoning,
            and complete audit trails.
          </p>
          <p className="text-base text-[#444] mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Fintech. Healthcare. Education. Government.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/signup" className="group relative px-8 py-4 bg-white text-black font-bold text-base tracking-tight overflow-hidden transition-all hover-lift no-underline"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: GRAD }} />
            </Link>
            <Link href="/os" className="px-8 py-4 border border-[#222] hover:border-[#555] text-white font-bold text-base tracking-tight transition-all hover-lift no-underline"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Open Console
            </Link>
            <Link href="/docs" className="px-8 py-4 text-[#555] hover:text-white font-bold text-base tracking-tight transition-all no-underline"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Documentation &rarr;
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* ── Terminal Preview ── */}
      <section className="relative z-10 px-6 pb-20 max-w-4xl mx-auto">
        <TerminalPreview />
      </section>

      {/* ── Live Stats ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { ref: s1.ref, value: s1.value.toLocaleString(), suffix: '+', label: 'Concurrent Agents', color: '#FF2255' },
            { ref: s2.ref, value: s2.value, suffix: ' TOPS', label: 'AI Acceleration', color: '#8844FF' },
            { ref: s3.ref, value: s3.value + '.97', suffix: '%', label: 'Uptime', color: '#00D4FF' },
          ].map((stat, i) => (
            <div key={i} ref={stat.ref} className="text-center">
              <div className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: stat.color }}>
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-xs text-[#333] mt-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="border-t border-[#111] pt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Three questions regulators always ask.
          </motion.h2>
          <p className="text-lg text-[#444] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            BlackRoad OS answers all three, cryptographically.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: '01', q: 'Who made this decision?', a: 'Every agent has cryptographic identity through PS-SHA-infinity. Persistent, tamper-evident hash chains prove provenance.', color: '#FF6B2B' },
              { num: '02', q: 'Why was it made?', a: 'Deterministic reasoning engines show their work. Same input, same output, every time. Explainable by design.', color: '#CC00AA' },
              { num: '03', q: 'Can you prove it?', a: 'RoadChain blockchain records every action. Tamper-evident, regulator-ready, exportable. Immutable truth.', color: '#00D4FF' },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#050505] border border-[#111] rounded-xl p-6 hover:border-[#222] transition-all"
              >
                <div className="text-xs font-bold mb-4" style={{ color: pillar.color, fontFamily: "'JetBrains Mono', monospace" }}>
                  {pillar.num}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {pillar.q}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {pillar.a}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: pillar.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="border-t border-[#111] pt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Platform
          </motion.h2>
          <p className="text-lg text-[#444] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Five integrated products. One sovereign system.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={product.href}
                  className="group relative block bg-[#050505] border border-[#111] rounded-xl p-6 hover:border-[#222] transition-all no-underline"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: product.color }} />
                    <h3 className="text-base font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-xs mb-2" style={{ color: product.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    {product.tagline}
                  </p>
                  <p className="text-sm text-[#444] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {product.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: product.color }} />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/fleet"
                className="group flex items-center justify-center h-full min-h-[180px] bg-[#050505] border border-[#111] border-dashed rounded-xl p-6 hover:border-[#333] transition-all no-underline"
              >
                <span className="text-sm font-bold text-[#333] group-hover:text-white transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  View Live Fleet &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="border-t border-[#111] pt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How it works.
          </motion.h2>
          <p className="text-lg text-[#444] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            From signup to sovereign AI in three clicks.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Open Console', desc: 'Sign in and access your sovereign workspace. Zero config, zero CLI commands.', href: '/os', cta: 'Open Console', color: '#FF6B2B' },
              { step: '02', title: 'Deploy Agents', desc: 'Choose from pre-built agent templates or describe what you need. Lucidia handles orchestration.', href: '/lucidia', cta: 'Explore Agents', color: '#8844FF' },
              { step: '03', title: 'Monitor Everything', desc: 'Real-time dashboard with live fleet metrics, audit trails, and compliance reporting.', href: '/fleet', cta: 'View Fleet', color: '#00D4FF' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block bg-[#050505] border border-[#111] rounded-xl p-6 hover:border-[#222] transition-all no-underline h-full"
                >
                  <div className="text-xs font-bold mb-4" style={{ color: item.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#444] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                  <span className="text-xs font-semibold group-hover:text-white transition-colors" style={{ color: item.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.cta} &rarr;
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: item.color }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="border-t border-[#111] pt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-12 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built for regulated industries.
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Fintech', desc: 'Fraud detection, portfolio analytics, risk scoring with complete audit trails.', color: '#FF6B2B' },
              { name: 'Healthcare', desc: 'HIPAA-compliant AI agents for clinical workflows and patient data.', color: '#FF2255' },
              { name: 'Education', desc: 'AI tutoring at scale with transparent governance and student protection.', color: '#8844FF' },
              { name: 'Government', desc: 'Policy enforcement and identity verification with full accountability.', color: '#00D4FF' },
            ].map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#050505] border border-[#111] rounded-xl p-6 hover:border-[#222] transition-all"
              >
                <div className="w-1.5 h-6 rounded-full mb-4" style={{ background: ind.color }} />
                <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {ind.name}
                </h3>
                <p className="text-sm text-[#444]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="border-t border-[#111] pt-20 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Start free. Scale when ready.
          </motion.h2>
          <p className="text-lg text-[#444] mb-12 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            10 agents free. Up to 30,000 on Enterprise.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Developer', price: 'Free', desc: '10 agents, community support', cta: 'Get Started', href: '/signup', featured: false },
              { name: 'Professional', price: '$499', desc: '1,000 agents, full platform', cta: 'Start Trial', href: '/pricing', featured: true },
              { name: 'Enterprise', price: 'Custom', desc: '30K+ agents, dedicated infra', cta: 'Contact Sales', href: '/contact', featured: false },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden"
              >
                {plan.featured && <div className="absolute -inset-px rounded-xl" style={{ background: GRAD, opacity: 0.3 }} />}
                <div className={`relative bg-[#050505] rounded-xl p-6 ${plan.featured ? 'border border-[#222]' : 'border border-[#111]'}`}>
                  <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-black mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {plan.price}
                    {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-sm text-[#444] font-normal">/mo</span>}
                  </div>
                  <p className="text-sm text-[#444] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.desc}</p>
                  <Link href={plan.href} className={`block text-center py-2.5 rounded-lg text-sm font-bold transition-all no-underline ${plan.featured ? 'bg-white text-black hover:bg-[#eee]' : 'border border-[#222] text-white hover:border-[#444]'}`}>
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-6 py-28 max-w-7xl mx-auto text-center">
        <div className="border-t border-[#111] pt-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-6 tracking-tight max-w-3xl mx-auto leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Stop hoping your AI is compliant.
              <br />
              <span className="grad-text-animated">Start proving it.</span>
            </h2>
            <p className="text-lg text-[#444] mb-10 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Cryptographic identity. Deterministic reasoning. Immutable audit trails.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/signup" className="px-10 py-5 bg-white text-black font-bold text-lg hover:bg-[#eee] transition-all hover-lift no-underline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Start Free Trial
              </Link>
              <Link href="/contact" className="px-10 py-5 border border-[#222] hover:border-white text-white font-bold text-lg transition-all hover-lift no-underline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
