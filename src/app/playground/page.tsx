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

export default function PlaygroundPage() {
  const [activeEffect, setActiveEffect] = useState<string>('none')
  const [bgColor, setBgColor] = useState('var(--br-deep-black)')
  const [text, setText] = useState('BLACKROAD OS')

  const effects = [
    { id: 'none', name: 'None', component: null },
    { id: 'floating', name: 'Floating Shapes', component: <FloatingShapes /> },
    { id: 'grid', name: 'Animated Grid', component: <AnimatedGrid /> },
    { id: 'scanline', name: 'Scan Line', component: <ScanLine /> },
    { id: 'dots', name: 'Dot Pattern', component: <GeometricPattern type="dots" opacity={0.1} /> },
    { id: 'lines', name: 'Line Pattern', component: <GeometricPattern type="lines" opacity={0.1} /> },
    { id: 'diagonal', name: 'Diagonal', component: <GeometricPattern type="diagonal" opacity={0.1} /> }
  ]

  const colors = [
    { name: 'Deep Black', hex: 'var(--br-deep-black)' },
    { name: 'Charcoal', hex: 'var(--br-charcoal)' },
    { name: 'Sunrise Orange', hex: '#FF9D00' },
    { name: 'Hot Pink', hex: '#FF0066' },
    { name: 'Cyber Blue', hex: '#0066FF' },
    { name: 'White', hex: '#FFFFFF' }
  ]

  return (
    <main className="min-h-screen text-white">
      
      {/* Split View */}
      <div className="flex h-screen">
        
        {/* Controls Sidebar */}
        <aside className="w-80 bg-[var(--br-deep-black)] border-r border-[var(--br-charcoal)] overflow-y-auto">
          <div className="p-6">
            
            <div className="mb-8">
              <BlackRoadSymbol size="md" />
              <h1 className="text-2xl font-bold mt-4">Playground</h1>
              <p className="text-sm br-text-muted mt-2">
                Experiment with BlackRoad visual components
              </p>
            </div>

            {/* Background Effects */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Background Effect</h2>
              <div className="space-y-2">
                {effects.map((effect) => (
                  <button
                    key={effect.id}
                    onClick={() => setActiveEffect(effect.id)}
                    className={`w-full px-4 py-2 text-left border transition-all ${
                      activeEffect === effect.id
                        ? 'bg-white text-black border-white'
                        : 'bg-[var(--br-charcoal)] border-[rgba(255,255,255,0.15)] hover:border-white'
                    }`}
                  >
                    {effect.name}
                  </button>
                ))}
              </div>
            </section>

            {/* Background Color */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Background Color</h2>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setBgColor(color.hex)}
                    className={`p-4 border transition-all ${
                      bgColor === color.hex
                        ? 'border-white'
                        : 'border-[rgba(255,255,255,0.15)] hover:border-white'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className={`text-sm font-bold ${color.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`}>
                      {color.name}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Text Content */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Display Text</h2>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none"
              />
            </section>

            {/* Components */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Components</h2>
              <div className="space-y-4">
                
                <div>
                  <h3 className="text-sm font-bold mb-2">Status Emojis</h3>
                  <div className="flex gap-2">
                    <StatusEmoji status="green" />
                    <StatusEmoji status="yellow" />
                    <StatusEmoji status="red" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-2">Metric Emojis</h3>
                  <div className="flex gap-2 text-2xl">
                    <MetricEmoji type="lightning" />
                    <MetricEmoji type="rocket" />
                    <MetricEmoji type="globe" />
                    <MetricEmoji type="clock" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-2">Pulsing Dot</h3>
                  <PulsingDot />
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-2">Loading Bar</h3>
                  <LoadingBar />
                </div>

              </div>
            </section>

            {/* Export Code */}
            <section>
              <button className="w-full px-4 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all">
                📋 Copy Code
              </button>
            </section>

          </div>
        </aside>

        {/* Preview Area */}
        <div 
          className="flex-1 relative overflow-hidden transition-all duration-300"
          style={{ backgroundColor: bgColor }}
        >
          {/* Background Effect */}
          {effects.find(e => e.id === activeEffect)?.component}

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
            
            {/* Main Display */}
            <div className="text-center mb-12">
              <GlitchText text={text} />
              <div className="mt-8">
                <BlackRoadSymbol size="lg" />
              </div>
            </div>

            {/* Component Showcase */}
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              
              <div className={`p-8 border border-[rgba(255,255,255,0.15)] ${bgColor === '#ffffff' ? 'bg-[var(--br-deep-black)] text-white' : 'bg-[var(--br-charcoal)]'}`}>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  System Status <StatusEmoji status="green" />
                </h3>
                <div className="text-sm br-text-muted">
                  All systems operational
                </div>
              </div>

              <div className={`p-8 border border-[rgba(255,255,255,0.15)] ${bgColor === '#ffffff' ? 'bg-[var(--br-deep-black)] text-white' : 'bg-[var(--br-charcoal)]'}`}>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  Performance <MetricEmoji type="lightning" />
                </h3>
                <div className="text-2xl font-bold mb-1">42ms</div>
                <div className="text-sm br-text-muted">
                  Avg response time
                </div>
              </div>

              <div className={`p-8 border border-[rgba(255,255,255,0.15)] ${bgColor === '#ffffff' ? 'bg-[var(--br-deep-black)] text-white' : 'bg-[var(--br-charcoal)]'}`}>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  Deployments <MetricEmoji type="rocket" />
                </h3>
                <div className="text-2xl font-bold mb-1">1,247</div>
                <div className="text-sm br-text-muted">
                  Total this month
                </div>
              </div>

            </div>

            {/* Terminal Example */}
            <div className={`mt-12 w-full max-w-2xl border ${bgColor === '#ffffff' ? 'bg-[var(--br-deep-black)] text-white border-black' : 'bg-[var(--br-charcoal)] border-[rgba(255,255,255,0.15)]'} p-6`}>
              <CommandPrompt command="npm run build" />
              <div className="mt-4 text-sm br-text-muted font-mono">
                <div>Building production bundle...</div>
                <div className="mt-2">
                  <LoadingBar />
                </div>
                <div className="mt-4 text-[var(--br-hot-pink)]">✓ Build complete in 2.3s</div>
              </div>
            </div>

          </div>

          {/* Info Overlay */}
          <div className={`absolute bottom-6 right-6 p-4 border ${bgColor === '#ffffff' ? 'bg-[var(--br-deep-black)] text-white border-black' : 'bg-[var(--br-charcoal)] border-[rgba(255,255,255,0.15)]'} text-sm`}>
            <div className="font-bold mb-2">Current Settings</div>
            <div className="br-text-muted">
              <div>Effect: {effects.find(e => e.id === activeEffect)?.name}</div>
              <div>Color: {colors.find(c => c.hex === bgColor)?.name}</div>
              <div>Text: {text}</div>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
