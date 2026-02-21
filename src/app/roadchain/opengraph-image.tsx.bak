import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'RoadChain — Immutable Audit Ledger'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0A0A0A', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', fontFamily: 'monospace' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #FF0066, #D600AA)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #FF9D00, #FF0066)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 900 }}>BR</div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', letterSpacing: '4px' }}>BLACKROAD OS</span>
        </div>
        <div style={{ fontSize: '56px', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>RoadChain</div>
        <div style={{ fontSize: '32px', color: '#FF0066', marginBottom: '16px' }}>Immutable Audit Ledger</div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)' }}>Blockchain-inspired compliance logging for HIPAA, SOC 2, FERPA, and FedRAMP.</div>
      </div>
    ),
    { ...size }
  )
}
