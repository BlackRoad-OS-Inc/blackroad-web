import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Dashboard', description: 'Monitor your BlackRoad OS services, agent health, and system metrics in real time.' }
export default function Layout({ children }: { children: React.ReactNode }) { return children }
