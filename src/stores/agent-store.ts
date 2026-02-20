// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { create } from 'zustand'
import type { Agent } from '@/lib/api'

interface AgentState {
  agents: Agent[]
  selectedAgent: string | null
  setAgents: (agents: Agent[]) => void
  selectAgent: (name: string | null) => void
}

export const useAgentStore = create<AgentState>((set) => ({
  agents: [],
  selectedAgent: null,
  setAgents: (agents) => set({ agents }),
  selectAgent: (name) => set({ selectedAgent: name }),
}))
