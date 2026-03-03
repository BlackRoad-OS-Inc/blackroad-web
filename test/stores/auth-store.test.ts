// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useAuthStore } from '../../src/stores/auth-store'

// Reset store state before each test
beforeEach(() => {
  useAuthStore.setState({ isAuthenticated: false, user: null, token: null })
})

describe('useAuthStore — initial state', () => {
  it('should start unauthenticated', () => {
    const state = useAuthStore.getState()
    expect(state.isAuthenticated).toBe(false)
    expect(state.user).toBeNull()
    expect(state.token).toBeNull()
  })
})

describe('useAuthStore — logout', () => {
  it('should clear auth state on logout', () => {
    useAuthStore.setState({
      isAuthenticated: true,
      user: { id: '1', email: 'a@b.com', name: 'Alice' },
      token: 'tok123',
    })
    useAuthStore.getState().logout()
    const state = useAuthStore.getState()
    expect(state.isAuthenticated).toBe(false)
    expect(state.user).toBeNull()
    expect(state.token).toBeNull()
  })
})

describe('useAuthStore — login', () => {
  it('should set auth state on successful login', async () => {
    const mockUser = { id: '1', email: 'test@example.com', name: 'Test User' }
    const mockToken = 'jwt-token-abc'

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: mockToken, user: mockUser }),
    } as Response)

    await useAuthStore.getState().login('test@example.com', 'password123')

    const state = useAuthStore.getState()
    expect(state.isAuthenticated).toBe(true)
    expect(state.user).toEqual(mockUser)
    expect(state.token).toBe(mockToken)
  })

  it('should throw on failed login', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: { message: 'Invalid credentials' } }),
    } as Response)

    await expect(
      useAuthStore.getState().login('bad@example.com', 'wrongpassword')
    ).rejects.toThrow('Invalid credentials')

    expect(useAuthStore.getState().isAuthenticated).toBe(false)
  })
})
