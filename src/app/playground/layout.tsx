import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Playground', description: 'Interactive playground for BlackRoad OS visual effects, animations, and components.' }
export default function Layout({ children }: { children: React.ReactNode }) { return children }
