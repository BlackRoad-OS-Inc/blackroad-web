import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'BlackRoad OS — The Operating System for Governed AI'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FF9D00, #FF0066, #7700FF, #0066FF)',
          }}
        />

        {/* Logo mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #FF9D00, #FF0066)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 900,
            }}
          >
            BR
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', letterSpacing: '4px' }}>
            BLACKROAD OS
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          The Operating System
          <br />
          for Governed AI
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
          Deploy 30,000 autonomous agents with cryptographic identity,
          <br />
          deterministic reasoning, and complete audit trails.
        </div>

        {/* Bottom pills */}
        <div style={{ display: 'flex', gap: '12px', position: 'absolute', bottom: '60px', left: '80px' }}>
          {['Fintech', 'Healthcare', 'Education', 'Government'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
