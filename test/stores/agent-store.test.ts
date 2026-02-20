// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { describe, it, expect } from 'vitest'
import { useAgentStore } from '../../src/stores/agent-store'

describe('useAgentStore', () => {
  it('should start with empty agents', () => {
    const state = useAgentStore.getState()
    expect(state.agents).toEqual([])
    expect(state.selectedAgent).toBeNull()
  })

  it('should set agents', () => {
    const agents = [{ name: 'test', title: 'T', role: 'r', description: 'd', color: '#000', capabilities: [] }]
    useAgentStore.getState().setAgents(agents)
    expect(useAgentStore.getState().agents).toEqual(agents)
  })

  it('should select an agent', () => {
    useAgentStore.getState().selectAgent('octavia')
    expect(useAgentStore.getState().selectedAgent).toBe('octavia')
  })

  it('should deselect an agent', () => {
    useAgentStore.getState().selectAgent(null)
    expect(useAgentStore.getState().selectedAgent).toBeNull()
  })
})
