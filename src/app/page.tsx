// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { AgentGrid } from '@/components/agents/agent-grid'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <AgentGrid />
        </main>
      </div>
    </div>
  )
}
