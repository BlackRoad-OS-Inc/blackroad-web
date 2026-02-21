import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Prism Console — Real-Time AI Monitoring'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0A0A0A', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', fontFamily: 'monospace' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #0066FF, #7700FF)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #FF9D00, #FF0066)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 900 }}>BR</div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', letterSpacing: '4px' }}>BLACKROAD OS</span>
        </div>
        <div style={{ fontSize: '56px', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>Prism Console</div>
        <div style={{ fontSize: '32px', color: '#0066FF', marginBottom: '16px' }}>Real-Time AI Monitoring Dashboard</div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)' }}>Agent health, performance metrics, and policy enforcement in one view.</div>
      </div>
    ),
    { ...size }
  )
}
