// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { create } from 'zustand'

interface UIState {
  sidebarOpen: boolean
  theme: 'dark' | 'light'
  toggleSidebar: () => void
  setTheme: (theme: 'dark' | 'light') => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  theme: 'dark',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setTheme: (theme) => set({ theme }),
}))
