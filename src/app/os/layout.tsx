// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BlackRoad OS',
  description: 'The operating system for governed AI agents',
}

export default function OSLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
