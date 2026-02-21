import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Account', description: 'Manage your BlackRoad OS subscription, usage, API keys, and billing.' }
export default function Layout({ children }: { children: React.ReactNode }) { return children }
