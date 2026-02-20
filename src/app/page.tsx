export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '34px',
    }}>
      <h1 style={{
        fontSize: '55px',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '21px',
      }}>
        BlackRoad OS
      </h1>
      <p style={{
        fontSize: '21px',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '610px',
        textAlign: 'center',
      }}>
        Your AI. Your Hardware. Your Rules.
      </p>
    </main>
  )
}
