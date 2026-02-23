// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { create } from 'zustand'

interface Workspace {
  id: string
  name: string
  createdAt: string
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
    // TODO: fetch from blackroad-agents registry API
    set({ workspaces: [], isLoading: false })
  },
  setActiveWorkspace: (workspace) =>
    set({ activeWorkspace: workspace, currentWorkspace: workspace }),
}))
