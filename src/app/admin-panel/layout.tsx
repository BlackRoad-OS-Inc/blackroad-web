import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Admin Panel', description: 'BlackRoad OS administration panel — system status, agent management, and infrastructure controls.' }
export default function Layout({ children }: { children: React.ReactNode }) { return children }
