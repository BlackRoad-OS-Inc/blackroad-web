'use client'

import { useState } from 'react'
import { FloatingShapes, BlackRoadSymbol } from '../components/BlackRoadVisuals'

export default function ColorPlaygroundPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const palette = {
    blacks: [
      { name: 'Pure Black', hex: 'var(--br-black)', rgb: 'rgb(0, 0, 0)', usage: 'Void backgrounds' },
      { name: 'Deep Black', hex: 'var(--br-deep-black)', rgb: 'rgb(10, 10, 10)', usage: 'Primary background' },
      { name: 'Charcoal', hex: 'var(--br-charcoal)', rgb: 'rgb(26, 26, 26)', usage: 'Card backgrounds' },
      { name: 'Onyx', hex: 'var(--br-onyx)', rgb: 'rgb(20, 20, 20)', usage: 'Hover states' }
    ],
    grays: [
      { name: 'Iron', hex: 'var(--br-charcoal)', rgb: 'rgb(26, 26, 26)', usage: 'Borders dark' },
      { name: 'Steel', hex: 'var(--br-steel)', rgb: 'rgb(34, 34, 34)', usage: 'Borders default' },
      { name: 'Smoke', hex: 'var(--br-graphite)', rgb: 'rgb(42, 42, 42)', usage: 'Borders light' },
      { name: 'Ash', hex: 'var(--br-slate)', rgb: 'rgb(51, 51, 51)', usage: 'Dividers' },
      { name: 'Concrete', hex: 'var(--br-concrete)', rgb: 'rgb(68, 68, 68)', usage: 'Borders hover' },
      { name: 'Slate', hex: 'var(--br-slate-strong)', rgb: 'rgb(85, 85, 85)', usage: 'Secondary text' },
      { name: 'Pewter', hex: 'var(--br-pewter)', rgb: 'rgb(102, 102, 102)', usage: 'Muted text' },
      { name: 'Silver', hex: 'var(--br-silver)', rgb: 'rgb(136, 136, 136)', usage: 'Body text' },
      { name: 'Platinum', hex: 'var(--br-platinum)', rgb: 'rgb(170, 170, 170)', usage: 'Headings' },
      { name: 'Pearl', hex: 'var(--br-pearl)', rgb: 'rgb(204, 204, 204)', usage: 'Active text' },
      { name: 'Fog', hex: 'var(--br-fog)', rgb: 'rgb(221, 221, 221)', usage: 'Hover text' }
    ],
    whites: [
      { name: 'Cream', hex: 'var(--br-cream)', rgb: 'rgb(238, 238, 238)', usage: 'Off-white' },
      { name: 'Snow', hex: 'var(--br-snow)', rgb: 'rgb(245, 245, 245)', usage: 'Light backgrounds' },
      { name: 'Pure White', hex: 'var(--br-white)', rgb: 'rgb(255, 255, 255)', usage: 'Pure white, CTAs' }
    ],
    accents: [
      { name: 'Sunrise Orange', hex: '#FF9D00', rgb: 'rgb(255, 157, 0)', usage: 'Secondary actions' },
      { name: 'Warm Orange', hex: '#FF6B00', rgb: 'rgb(255, 107, 0)', usage: 'Highlights' },
      { name: 'Hot Pink', hex: '#FF0066', rgb: 'rgb(255, 0, 102)', usage: 'Primary actions' },
      { name: 'Electric Magenta', hex: '#FF006B', rgb: 'rgb(255, 0, 107)', usage: 'Emphasis' },
      { name: 'Deep Magenta', hex: '#D600AA', rgb: 'rgb(214, 0, 170)', usage: 'Accents' },
      { name: 'Vivid Purple', hex: '#7700FF', rgb: 'rgb(119, 0, 255)', usage: 'Premium' },
      { name: 'Cyber Blue', hex: '#0066FF', rgb: 'rgb(0, 102, 255)', usage: 'Links, info' }
    ]
  }

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedColor(hex)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      
      {/* Header */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Color Playground 🎨
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          BlackRoad OS core neutrals with official brand accents.
          Click any color to copy its hex value.
        </p>
      </section>

      {/* Blacks */}
      <ColorSection 
        title="Blacks" 
        subtitle="The foundation of BlackRoad UI"
        colors={palette.blacks}
        copyColor={copyColor}
        copiedColor={copiedColor}
      />

      {/* Grays */}
      <ColorSection 
        title="Grays" 
        subtitle="11 shades for precise hierarchy"
        colors={palette.grays}
        copyColor={copyColor}
        copiedColor={copiedColor}
      />

      {/* Whites */}
      <ColorSection 
        title="Whites" 
        subtitle="Light mode and contrast"
        colors={palette.whites}
        copyColor={copyColor}
        copiedColor={copiedColor}
      />

      {/* Accents */}
      <ColorSection 
        title="Accents"
        subtitle="Official brand highlights"
        colors={palette.accents}
        copyColor={copyColor}
        copiedColor={copiedColor}
      />

      {/* Contrast Checker */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Contrast Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-8">
            <h3 className="text-xl font-bold mb-4">Primary Background</h3>
            <div className="space-y-4">
              <p className="text-white">White text on #0A0A0A (AAA)</p>
              <p className="br-text-soft">Light gray on #0A0A0A (AAA)</p>
              <p className="br-text-muted">Gray on #0A0A0A (AA)</p>
              <p className="br-text-faint">Dark gray on #0A0A0A (Fail)</p>
            </div>
          </div>

          <div className="bg-white border border-[rgba(0,0,0,0.12)] p-8 text-black">
            <h3 className="text-xl font-bold mb-4">Light Background</h3>
            <div className="space-y-4">
              <p className="text-black">Black text on white (AAA)</p>
              <p className="text-[var(--br-charcoal)]">Dark gray on white (AAA)</p>
              <p className="text-[#666]">Gray on white (AA)</p>
              <p className="text-[#aaa]">Light gray on white (Fail)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Usage Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">🎨 Color Theory</h3>
            <ul className="space-y-3 br-text-muted">
              <li>• Use blacks (#0A0A0A → #1A1A1A) for backgrounds</li>
              <li>• Use grays (#222222 → #DDDDDD) for borders and text</li>
              <li>• Use white (#fff) for primary CTAs only</li>
              <li>• Use accents sparingly for status and actions</li>
              <li>• Maintain high contrast (4.5:1 minimum)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">⚡ Best Practices</h3>
            <ul className="space-y-3 br-text-muted">
              <li>• Dark mode first, then adapt to light</li>
              <li>• Neon accents on black for cyberpunk aesthetic</li>
              <li>• Use #888888 for body text, #DDDDDD for emphasis</li>
              <li>• Border progression: #222222 → #444444 → white</li>
              <li>• Test accessibility with WCAG tools</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

function ColorSection({ 
  title, 
  subtitle, 
  colors, 
  copyColor, 
  copiedColor 
}: { 
  title: string
  subtitle: string
  colors: Array<{ name: string; hex: string; rgb: string; usage: string }>
  copyColor: (hex: string) => void
  copiedColor: string | null
}) {
  return (
    <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-xl br-text-muted mb-8">{subtitle}</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => copyColor(color.hex)}
            className="text-left bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white transition-all overflow-hidden hover-lift"
          >
            <div 
              className="h-32 border-b border-[var(--br-charcoal)]"
              style={{ backgroundColor: color.hex }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{color.name}</h3>
              <div className="space-y-1 text-sm br-text-muted">
                <div className="font-mono">{color.hex}</div>
                <div className="font-mono">{color.rgb}</div>
                <div className="mt-3 text-[#aaa]">{color.usage}</div>
              </div>
              {copiedColor === color.hex && (
                <div className="mt-3 text-[var(--br-hot-pink)] font-bold">✓ Copied!</div>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
