import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BlackRoad OS',
  description: 'Your AI. Your Hardware. Your Rules.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        lineHeight: 1.618,
      }}>
        {children}
      </body>
    </html>
  )
}
