import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Task Board', description: 'Kanban-style task management for BlackRoad OS projects and agent workflows.' }
export default function Layout({ children }: { children: React.ReactNode }) { return children }
