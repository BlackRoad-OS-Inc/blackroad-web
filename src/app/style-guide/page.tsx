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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Style Guide',
  description: 'BlackRoad OS design system — typography, colors, spacing, components, and brand guidelines.',
}

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white">
      
      {/* Header */}
      <header className="border-b border-[var(--br-charcoal)] bg-[var(--br-deep-black)] sticky top-0 z-50">
        <div className="px-6 py-6 max-w-7xl mx-auto">
          <BlackRoadSymbol size="md" />
          <h1 className="text-4xl font-bold mt-4">BlackRoad OS Style Guide</h1>
          <p className="br-text-muted mt-2">Visual design system and brand guidelines</p>
        </div>
      </header>

      <div className="px-6 py-12 max-w-7xl mx-auto">

        {/* Colors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          
          <h3 className="text-xl font-bold mb-4 br-text-muted">Blacks &amp; Grays</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: 'Deep Black', hex: 'var(--br-deep-black)' },
              { name: 'Charcoal', hex: 'var(--br-charcoal)' },
              { name: 'Graphite', hex: 'var(--br-graphite)' },
              { name: 'Slate', hex: 'var(--br-slate)' },
              { name: 'Concrete', hex: 'var(--br-concrete)' },
              { name: 'Silver', hex: 'var(--br-silver)' }
            ].map((color, i) => (
              <div key={i}>
                <div 
                  className="h-32 border border-[rgba(255,255,255,0.2)] mb-2"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-sm font-bold">{color.name}</div>
                <div className="text-xs br-text-muted font-mono">{color.hex}</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4 br-text-muted">Accents</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: 'Sunrise Orange', hex: '#FF9D00' },
              { name: 'Warm Orange', hex: '#FF6B00' },
              { name: 'Hot Pink', hex: '#FF0066' },
              { name: 'Electric Magenta', hex: '#FF006B' },
              { name: 'Deep Magenta', hex: '#D600AA' },
              { name: 'Vivid Purple', hex: '#7700FF' },
              { name: 'Cyber Blue', hex: '#0066FF' }
            ].map((color, i) => (
              <div key={i}>
                <div 
                  className="h-32 border border-[rgba(255,255,255,0.2)] mb-2"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-sm font-bold">{color.name}</div>
                <div className="text-xs br-text-muted font-mono">{color.hex}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl font-bold mb-2">Heading 1</h1>
              <code className="text-sm br-text-muted">text-6xl font-bold</code>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
              <code className="text-sm br-text-muted">text-4xl font-bold</code>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
              <code className="text-sm br-text-muted">text-2xl font-bold</code>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Heading 4</h4>
              <code className="text-sm br-text-muted">text-xl font-bold</code>
            </div>
            <div>
              <p className="text-base mb-2">Body text - The quick brown fox jumps over the lazy dog</p>
              <code className="text-sm br-text-muted">text-base</code>
            </div>
            <div>
              <p className="text-sm br-text-muted mb-2">Small text - The quick brown fox jumps over the lazy dog</p>
              <code className="text-sm br-text-muted">text-sm br-text-muted</code>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Components</h2>

          <div className="space-y-12">
            
            {/* Buttons */}
            <div>
              <h3 className="text-xl font-bold mb-4">Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <button className="px-6 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all">
                  Primary Button
                </button>
                <button className="px-6 py-3 border-2 border-[rgba(255,255,255,0.3)] hover:border-white transition-all">
                  Secondary Button
                </button>
                <button className="px-6 py-3 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] hover:border-white transition-all">
                  Tertiary Button
                </button>
                <button className="px-6 py-3 bg-[var(--br-hot-pink)] text-black font-bold hover:bg-[#0c0] transition-all">
                  Success Button
                </button>
                <button className="px-6 py-3 bg-[var(--br-electric-magenta)] text-white font-bold hover:bg-[#c00] transition-all">
                  Danger Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-xl font-bold mb-4">Cards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all hover-lift">
                  <h4 className="font-bold mb-2">Default Card</h4>
                  <p className="br-text-muted">Standard card with border</p>
                </div>
                <div className="bg-[var(--br-charcoal)] border-2 border-white p-6">
                  <h4 className="font-bold mb-2">Highlighted Card</h4>
                  <p className="br-text-muted">Emphasized with white border</p>
                </div>
                <div className="bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] p-6">
                  <h4 className="font-bold mb-2">Subtle Card</h4>
                  <p className="br-text-muted">Lower contrast background</p>
                </div>
              </div>
            </div>

            {/* Icons & Emojis */}
            <div>
              <h3 className="text-xl font-bold mb-4">Status Indicators</h3>
              <div className="flex gap-8 items-center">
                <div className="flex items-center gap-2">
                  <StatusEmoji status="green" />
                  <span>Healthy</span>
                </div>
                <div className="flex items-center gap-2">
                  <StatusEmoji status="yellow" />
                  <span>Warning</span>
                </div>
                <div className="flex items-center gap-2">
                  <StatusEmoji status="red" />
                  <span>Error</span>
                </div>
                <div className="flex items-center gap-2">
                  <PulsingDot />
                  <span>Active</span>
                </div>
              </div>
            </div>

            {/* Metric Emojis */}
            <div>
              <h3 className="text-xl font-bold mb-4">Metric Icons</h3>
              <div className="flex gap-8 items-center text-2xl">
                <div className="text-center">
                  <MetricEmoji type="lightning" />
                  <div className="text-xs br-text-muted mt-2">Lightning</div>
                </div>
                <div className="text-center">
                  <MetricEmoji type="disk" />
                  <div className="text-xs br-text-muted mt-2">Disk</div>
                </div>
                <div className="text-center">
                  <MetricEmoji type="cd" />
                  <div className="text-xs br-text-muted mt-2">CD</div>
                </div>
                <div className="text-center">
                  <MetricEmoji type="globe" />
                  <div className="text-xs br-text-muted mt-2">Globe</div>
                </div>
                <div className="text-center">
                  <MetricEmoji type="rocket" />
                  <div className="text-xs br-text-muted mt-2">Rocket</div>
                </div>
                <div className="text-center">
                  <MetricEmoji type="clock" />
                  <div className="text-xs br-text-muted mt-2">Clock</div>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div>
              <h3 className="text-xl font-bold mb-4">Form Elements</h3>
              <div className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Text Input</label>
                  <input 
                    type="text" 
                    placeholder="Enter text..."
                    className="w-full px-4 py-2 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Select</label>
                  <select className="w-full px-4 py-2 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Textarea</label>
                  <textarea 
                    placeholder="Enter text..."
                    rows={4}
                    className="w-full px-4 py-2 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Special Effects */}
            <div>
              <h3 className="text-xl font-bold mb-4">Special Effects</h3>
              <div className="space-y-6">
                <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
                  <GlitchText text="GLITCH EFFECT" />
                </div>
                <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
                  <CommandPrompt command="npm run deploy" />
                </div>
                <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
                  <LoadingBar />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Spacing Scale</h2>
          <div className="space-y-4">
            {[
              { name: '2px', class: 'w-2' },
              { name: '4px', class: 'w-4' },
              { name: '8px', class: 'w-8' },
              { name: '12px', class: 'w-12' },
              { name: '16px', class: 'w-16' },
              { name: '24px', class: 'w-24' },
              { name: '32px', class: 'w-32' },
              { name: '48px', class: 'w-48' }
            ].map((space, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-sm br-text-muted">{space.name}</div>
                <div className={`${space.class} h-8 bg-white`} />
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
              <h3 className="text-xl font-bold mb-4">✓ Do</h3>
              <ul className="space-y-2 br-text-muted">
                <li>• Use high contrast (4.5:1 minimum)</li>
                <li>• Maintain consistent spacing</li>
                <li>• Keep animations subtle</li>
                <li>• Use emojis for quick recognition</li>
                <li>• Follow the monochrome + accent pattern</li>
              </ul>
            </div>
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
              <h3 className="text-xl font-bold mb-4">✗ Don't</h3>
              <ul className="space-y-2 br-text-muted">
                <li>• Don't use low contrast text</li>
                <li>• Don't mix too many accent colors</li>
                <li>• Don't overuse animations</li>
                <li>• Don't ignore accessibility</li>
                <li>• Don't break from the grid system</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
