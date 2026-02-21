import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'BlackRoad OS Platform — Governed AI Operating System'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0A0A0A', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', fontFamily: 'monospace' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #FF9D00, #FF0066, #7700FF, #0066FF)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #FF9D00, #FF0066)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 900 }}>BR</div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', letterSpacing: '4px' }}>BLACKROAD OS</span>
        </div>
        <div style={{ fontSize: '56px', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>BlackRoad OS Platform</div>
        <div style={{ fontSize: '28px', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>Deploy 30,000 agents with cryptographic identity and full audit trails.</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {['PS-SHA-infinity', 'ALICE QI', 'Lucidia', 'RoadChain', 'Prism Console'].map((t) => (
            <div key={t} style={{ padding: '8px 16px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>{t}</div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
