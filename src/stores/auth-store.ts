// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: async (email: string, _password: string) => {
        // TODO: replace with real auth call to gateway
        const user: User = { id: email, email, name: email.split('@')[0] }
        const token = `br-${Date.now()}`
        set({ isAuthenticated: true, user, token })
      },
      signup: async (email: string, _password: string, name: string) => {
        // TODO: replace with real account creation via gateway
        const user: User = { id: email, email, name }
        const token = `br-${Date.now()}`
        set({ isAuthenticated: true, user, token })
      },
      logout: () => set({ isAuthenticated: false, user: null, token: null }),
    }),
    { name: 'blackroad-auth' },
  ),
)
