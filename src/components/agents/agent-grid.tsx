// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { AgentCard } from './agent-card'

const defaultAgents = [
  { name: 'octavia', title: 'The Architect', role: 'Systems design and strategy', color: '#9C27B0' },
  { name: 'lucidia', title: 'The Dreamer', role: 'Creative vision and innovation', color: '#2979FF' },
  { name: 'alice', title: 'The Operator', role: 'DevOps and automation', color: '#4CAF50' },
  { name: 'cipher', title: 'The Sentinel', role: 'Security and access control', color: '#F44336' },
  { name: 'prism', title: 'The Analyst', role: 'Data analysis and patterns', color: '#F5A623' },
  { name: 'planner', title: 'The Strategist', role: 'Multi-step coordination', color: '#FF1D6C' },
]

export function AgentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {defaultAgents.map((agent) => (
        <AgentCard key={agent.name} {...agent} />
      ))}
    </div>
  )
}
