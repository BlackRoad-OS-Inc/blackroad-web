// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { create } from 'zustand'
import { api } from '@/lib/api'

interface Workspace {
  id: string
  name: string
  createdAt: string
  plan?: string
  agentCount?: number
}

interface WorkspaceState {
  workspaces: Workspace[]
  activeWorkspace: Workspace | null
  currentWorkspace: Workspace | null  // alias for activeWorkspace
  isLoading: boolean
  fetchWorkspaces: () => Promise<void>
  setActiveWorkspace: (workspace: Workspace) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  workspaces: [],
  activeWorkspace: null,
  currentWorkspace: null,
  isLoading: false,
  fetchWorkspaces: async () => {
    set({ isLoading: true })
    try {
      const { count } = await api.agents()
      const workspace: Workspace = {
        id: 'default',
        name: 'BlackRoad OS',
        createdAt: new Date().toISOString(),
        plan: 'enterprise',
        agentCount: count,
      }
      set({ workspaces: [workspace], activeWorkspace: workspace, currentWorkspace: workspace })
    } catch {
      // Registry not reachable — set default workspace so the app still works
      const workspace: Workspace = {
        id: 'default',
        name: 'BlackRoad OS',
        createdAt: new Date().toISOString(),
        plan: 'enterprise',
      }
      set({ workspaces: [workspace], activeWorkspace: workspace, currentWorkspace: workspace })
    } finally {
      set({ isLoading: false })
    }
  },
  setActiveWorkspace: (workspace) =>
    set({ activeWorkspace: workspace, currentWorkspace: workspace }),
}))
