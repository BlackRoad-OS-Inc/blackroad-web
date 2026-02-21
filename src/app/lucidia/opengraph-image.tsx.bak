import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Lucidia — AI Orchestration Language'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0A0A0A', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', fontFamily: 'monospace' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #7700FF, #0066FF)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #FF9D00, #FF0066)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 900 }}>BR</div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', letterSpacing: '4px' }}>BLACKROAD OS</span>
        </div>
        <div style={{ fontSize: '56px', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>Lucidia</div>
        <div style={{ fontSize: '32px', color: '#7700FF', marginBottom: '16px' }}>AI Orchestration Language</div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)' }}>10 domain agents with breath-sync timing for human-readable AI workflows.</div>
      </div>
    ),
    { ...size }
  )
}
