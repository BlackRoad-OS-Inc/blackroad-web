// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlackRoad OS',
  description: 'AI Agent Orchestration Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
