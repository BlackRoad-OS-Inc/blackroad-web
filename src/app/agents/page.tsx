// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { AgentGrid } from '@/components/agents/agent-grid'

export default function AgentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Agents</h1>
      <AgentGrid />
    </div>
  )
}
