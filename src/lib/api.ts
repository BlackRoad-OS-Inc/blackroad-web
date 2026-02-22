// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.

const GATEWAY_URL = (process.env['NEXT_PUBLIC_GATEWAY_URL'] ?? 'http://127.0.0.1:8787').replace(/\/$/, '')
const AGENTS_URL = (process.env['NEXT_PUBLIC_AGENTS_API_URL'] ?? 'http://127.0.0.1:3001').replace(/\/$/, '')
const GATEWAY_TOKEN = process.env['NEXT_PUBLIC_GATEWAY_TOKEN'] ?? 'dashboard-readonly'

function gatewayHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${GATEWAY_TOKEN}`,
  }
}

export async function gateway<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${GATEWAY_URL}${path}`, {
    ...init,
    headers: { ...gatewayHeaders(), ...(init?.headers ?? {}) },
  })
  if (!res.ok) {
    throw new Error(`Gateway error: ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}

async function registryFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${AGENTS_URL}${path}`, init)
  if (!res.ok) {
    throw new Error(`Registry error: ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}

export interface Agent {
  name: string
  title: string
  role: string
  description: string
  color?: string
  capabilities: string[]
  providers?: string[]
  status?: 'available' | 'busy' | 'unavailable'
}

export interface HealthResponse {
  status: string
  version: string
  uptime: number
}

export interface RegistryHealth {
  status: string
  service: string
  version: string
  uptime: number
  agentCount: number
}

export interface ChatRequest {
  model: string
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
  temperature?: number
  max_tokens?: number
}

export interface ChatResponse {
  id: string
  content: string
  model: string
  provider: string
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number }
}

export const api = {
  // Gateway — AI inference + metadata
  health: () => gateway<HealthResponse>('/v1/health'),
  chat: (req: ChatRequest) =>
    gateway<ChatResponse>('/v1/chat/completions', { method: 'POST', body: JSON.stringify(req) }),

  // Agents registry — live agent list (no auth, read-only)
  agents: () => registryFetch<{ agents: Agent[]; count: number }>('/agents'),
  agent: (name: string) => registryFetch<Agent>(`/agents/${name}`),
  registryHealth: () => registryFetch<RegistryHealth>('/health'),
}
