// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const GATEWAY_URL = (
  typeof window !== 'undefined'
    ? (process.env['NEXT_PUBLIC_GATEWAY_URL'] ?? 'http://127.0.0.1:8787')
    : 'http://127.0.0.1:8787'
).replace(/\/$/, '')

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

async function authFetch<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${GATEWAY_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) {
    const msg = (data as { error?: { message?: string } }).error?.message ?? `Auth error ${res.status}`
    throw new Error(msg)
  }
  return data as T
}

interface AuthResponse {
  token: string
  user: User
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,

      login: async (email: string, password: string) => {
        const { token, user } = await authFetch<AuthResponse>('/v1/auth/login', { email, password })
        set({ isAuthenticated: true, user, token })
      },

      signup: async (email: string, password: string, name: string) => {
        const { token, user } = await authFetch<AuthResponse>('/v1/auth/register', {
          email,
          password,
          name,
        })
        set({ isAuthenticated: true, user, token })
      },

      logout: () => set({ isAuthenticated: false, user: null, token: null }),
    }),
    { name: 'blackroad-auth' },
  ),
)
