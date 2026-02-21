'use client'

import { useState } from 'react'
import { 
  FloatingShapes, 
  AnimatedGrid, 
  ScanLine, 
  StatusEmoji, 
  MetricEmoji, 
  BlackRoadSymbol, 
  GeometricPattern,
  CommandPrompt,
  LoadingBar,
  PulsingDot,
  GlitchText
} from '../components/BlackRoadVisuals'

export default function ComponentLibraryPage() {
  const [activeTab, setActiveTab] = useState('shapes')

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      
      {/* Header */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Component Library 🎨
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          11 reusable React components + 10+ CSS animations for building BlackRoad UIs.
          Copy code snippets directly into your project.
        </p>
      </section>

      {/* Tabs */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto mb-12">
        <div className="flex gap-2 border-b border-[rgba(255,255,255,0.15)]">
          {['shapes', 'emojis', 'animations', 'patterns', 'interactive'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-bold transition-all ${
                activeTab === tab 
                  ? 'border-b-2 border-white text-white' 
                  : 'br-text-muted hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 px-6 pb-20 max-w-7xl mx-auto">
        
        {/* Shapes Tab */}
        {activeTab === 'shapes' && (
          <div className="space-y-12">
            <ComponentShowcase
              title="FloatingShapes"
              description="Animated background shapes that float across the screen"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)] overflow-hidden"><FloatingShapes /></div>}
              code={`import { FloatingShapes } from './components/BlackRoadVisuals'

<FloatingShapes />`}
            />

            <ComponentShowcase
              title="AnimatedGrid"
              description="Pulsing grid pattern overlay"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)]"><AnimatedGrid /></div>}
              code={`import { AnimatedGrid } from './components/BlackRoadVisuals'

<AnimatedGrid />`}
            />

            <ComponentShowcase
              title="BlackRoadSymbol"
              description="Brand identity symbol in 3 sizes"
              demo={
                <div className="flex gap-8 items-end bg-[var(--br-deep-black)] p-8">
                  <BlackRoadSymbol size="sm" />
                  <BlackRoadSymbol size="md" />
                  <BlackRoadSymbol size="lg" />
                </div>
              }
              code={`import { BlackRoadSymbol } from './components/BlackRoadVisuals'

<BlackRoadSymbol size="sm" />
<BlackRoadSymbol size="md" />
<BlackRoadSymbol size="lg" />`}
            />
          </div>
        )}

        {/* Emojis Tab */}
        {activeTab === 'emojis' && (
          <div className="space-y-12">
            <ComponentShowcase
              title="StatusEmoji"
              description="Status indicators: green (live), yellow (warning), red (error)"
              demo={
                <div className="flex gap-4 bg-[var(--br-deep-black)] p-8">
                  <StatusEmoji status="green" />
                  <StatusEmoji status="yellow" />
                  <StatusEmoji status="red" />
                </div>
              }
              code={`import { StatusEmoji } from './components/BlackRoadVisuals'

<StatusEmoji status="green" />
<StatusEmoji status="yellow" />
<StatusEmoji status="red" />`}
            />

            <ComponentShowcase
              title="MetricEmoji"
              description="Semantic emojis for metrics and actions"
              demo={
                <div className="flex gap-4 bg-[var(--br-deep-black)] p-8">
                  <MetricEmoji type="lightning" />
                  <MetricEmoji type="disk" />
                  <MetricEmoji type="cd" />
                  <MetricEmoji type="globe" />
                  <MetricEmoji type="rocket" />
                  <MetricEmoji type="clock" />
                </div>
              }
              code={`import { MetricEmoji } from './components/BlackRoadVisuals'

<MetricEmoji type="lightning" />
<MetricEmoji type="disk" />
<MetricEmoji type="cd" />
<MetricEmoji type="globe" />
<MetricEmoji type="rocket" />
<MetricEmoji type="clock" />`}
            />
          </div>
        )}

        {/* Animations Tab */}
        {activeTab === 'animations' && (
          <div className="space-y-12">
            <ComponentShowcase
              title="ScanLine"
              description="CRT terminal scan line effect"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)]"><ScanLine /></div>}
              code={`import { ScanLine } from './components/BlackRoadVisuals'

<ScanLine />`}
            />

            <ComponentShowcase
              title="GlitchText"
              description="Cyberpunk glitch text effect"
              demo={
                <div className="bg-[var(--br-deep-black)] p-8">
                  <GlitchText text="BLACKROAD OS" />
                </div>
              }
              code={`import { GlitchText } from './components/BlackRoadVisuals'

<GlitchText text="BLACKROAD OS" />`}
            />

            <ComponentShowcase
              title="LoadingBar"
              description="Animated progress bar"
              demo={<div className="bg-[var(--br-deep-black)] p-8"><LoadingBar /></div>}
              code={`import { LoadingBar } from './components/BlackRoadVisuals'

<LoadingBar />`}
            />

            <ComponentShowcase
              title="PulsingDot"
              description="Breathing indicator dot"
              demo={
                <div className="bg-[var(--br-deep-black)] p-8 flex gap-4">
                  <PulsingDot />
                  <span className="br-text-muted">System Online</span>
                </div>
              }
              code={`import { PulsingDot } from './components/BlackRoadVisuals'

<PulsingDot />`}
            />
          </div>
        )}

        {/* Patterns Tab */}
        {activeTab === 'patterns' && (
          <div className="space-y-12">
            <ComponentShowcase
              title="GeometricPattern - Grid"
              description="Grid pattern overlay"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)]"><GeometricPattern type="grid" opacity={0.1} /></div>}
              code={`import { GeometricPattern } from './components/BlackRoadVisuals'

<GeometricPattern type="grid" opacity={0.1} />`}
            />

            <ComponentShowcase
              title="GeometricPattern - Dots"
              description="Dot pattern overlay"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)]"><GeometricPattern type="dots" opacity={0.1} /></div>}
              code={`<GeometricPattern type="dots" opacity={0.1} />`}
            />

            <ComponentShowcase
              title="GeometricPattern - Lines"
              description="Horizontal lines overlay"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)]"><GeometricPattern type="lines" opacity={0.1} /></div>}
              code={`<GeometricPattern type="lines" opacity={0.1} />`}
            />

            <ComponentShowcase
              title="GeometricPattern - Diagonal"
              description="Diagonal lines overlay"
              demo={<div className="relative h-64 bg-[var(--br-deep-black)]"><GeometricPattern type="diagonal" opacity={0.1} /></div>}
              code={`<GeometricPattern type="diagonal" opacity={0.1} />`}
            />
          </div>
        )}

        {/* Interactive Tab */}
        {activeTab === 'interactive' && (
          <div className="space-y-12">
            <ComponentShowcase
              title="CommandPrompt"
              description="Terminal-style command prompt with blinking cursor"
              demo={
                <div className="bg-[var(--br-deep-black)] p-8">
                  <CommandPrompt command="npm run build" />
                </div>
              }
              code={`import { CommandPrompt } from './components/BlackRoadVisuals'

<CommandPrompt command="npm run build" />`}
            />
          </div>
        )}
      </section>

      {/* Footer */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Ready to build?</h2>
        <p className="text-xl br-text-muted mb-8">
          All components are MIT licensed. Copy, modify, and ship!
        </p>
        <a 
          href="/docs"
          className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
        >
          Read Documentation →
        </a>
      </section>
    </main>
  )
}

function ComponentShowcase({ title, description, demo, code }: { 
  title: string
  description: string
  demo: React.ReactNode
  code: string 
}) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] overflow-hidden">
      <div className="p-6 border-b border-[var(--br-charcoal)]">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="br-text-muted">{description}</p>
      </div>
      
      {/* Demo */}
      <div className="border-b border-[var(--br-charcoal)]">
        {demo}
      </div>

      {/* Code */}
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm br-text-soft bg-[var(--br-deep-black)]">
          <code>{code}</code>
        </pre>
        <button
          onClick={copyCode}
          className="absolute top-4 right-4 px-4 py-2 bg-[var(--br-charcoal)] hover:bg-[rgba(255,255,255,0.08)] text-sm font-bold transition-all"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
