// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'

import { useEffect, useState } from 'react'
import { AgentCard } from './agent-card'
import { api, type Agent } from '@/lib/api'

const FALLBACK_AGENTS: Agent[] = [
  { name: 'octavia', title: 'The Architect', role: 'Systems design and strategy', description: '', color: '#9C27B0', capabilities: [] },
  { name: 'lucidia', title: 'The Dreamer', role: 'Creative vision and innovation', description: '', color: '#00BCD4', capabilities: [] },
  { name: 'alice', title: 'The Operator', role: 'DevOps and automation', description: '', color: '#22C55E', capabilities: [] },
  { name: 'cipher', title: 'The Sentinel', role: 'Security and access control', description: '', color: '#F44336', capabilities: [] },
  { name: 'prism', title: 'The Analyst', role: 'Data analysis and patterns', description: '', color: '#F5A623', capabilities: [] },
  { name: 'echo', title: 'The Librarian', role: 'Memory and recall', description: '', color: '#7AC2E0', capabilities: [] },
  { name: 'aria', title: 'The Interface', role: 'Frontend and UX', description: '', color: '#818CF8', capabilities: [] },
  { name: 'planner', title: 'The Strategist', role: 'Multi-step coordination', description: '', color: '#FF1D6C', capabilities: [] },
]

export function AgentGrid() {
  const [agents, setAgents] = useState<Agent[]>(FALLBACK_AGENTS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .agents()
      .then(({ agents }) => setAgents(agents))
      .catch(() => { /* use fallback */ })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading && (
        <p className="text-xs text-gray-500 mb-4">Loading live agent status…</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard
            key={agent.name}
            name={agent.name}
            title={agent.title}
            role={agent.role}
            color={agent.color ?? '#666'}
            status={agent.status === 'busy' ? 'busy' : agent.status === 'unavailable' ? 'inactive' : 'active'}
          />
        ))}
      </div>
    </div>
  )
}
