// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { describe, it, expect, beforeEach } from 'vitest'
import { useUIStore } from '../../src/stores/ui-store'

beforeEach(() => {
  useUIStore.setState({ sidebarOpen: true, theme: 'dark' })
})

describe('useUIStore — initial state', () => {
  it('should start with sidebar open and dark theme', () => {
    const state = useUIStore.getState()
    expect(state.sidebarOpen).toBe(true)
    expect(state.theme).toBe('dark')
  })
})

describe('useUIStore — toggleSidebar', () => {
  it('should toggle sidebar from open to closed', () => {
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarOpen).toBe(false)
  })

  it('should toggle sidebar from closed to open', () => {
    useUIStore.setState({ sidebarOpen: false })
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarOpen).toBe(true)
  })
})

describe('useUIStore — setTheme', () => {
  it('should set theme to light', () => {
    useUIStore.getState().setTheme('light')
    expect(useUIStore.getState().theme).toBe('light')
  })

  it('should set theme back to dark', () => {
    useUIStore.setState({ theme: 'light' })
    useUIStore.getState().setTheme('dark')
    expect(useUIStore.getState().theme).toBe('dark')
  })
})
