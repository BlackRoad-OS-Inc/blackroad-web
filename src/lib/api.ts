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
  conversation_id?: string
}

export interface ChatResponse {
  id: string
  content: string
  model: string
  provider: string
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number }
}

export interface ModelEntry {
  provider: string
  models: string[]
  available: boolean
}

export interface ModelsResponse {
  providers: ModelEntry[]
}

export interface Conversation {
  id: string
  title: string
  model: string
  created_at: number
  updated_at: number
}

export interface ConversationMessage {
  id: string
  conversation_id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  created_at: number
}

export interface ConversationWithMessages extends Conversation {
  messages: ConversationMessage[]
}

export const api = {
  // Gateway — AI inference + metadata
  health: () => gateway<HealthResponse>('/v1/health'),
  models: () => gateway<ModelsResponse>('/v1/models'),
  chat: (req: ChatRequest) =>
    gateway<ChatResponse>('/v1/chat/completions', { method: 'POST', body: JSON.stringify(req) }),

  // Streaming chat — returns async generator of text chunks
  async *chatStream(req: ChatRequest): AsyncGenerator<string> {
    const res = await fetch(`${GATEWAY_URL}/v1/chat/stream`, {
      method: 'POST',
      headers: { ...gatewayHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    })
    if (!res.ok || !res.body) throw new Error(`Stream error: ${res.status}`)

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buf = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buf += decoder.decode(value, { stream: true })
      const lines = buf.split('\n')
      buf = lines.pop() ?? ''
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const raw = line.slice(6).trim()
          if (raw === '[DONE]') return
          try {
            const ev = JSON.parse(raw) as { content?: string; done?: boolean }
            if (ev.content) yield ev.content
          } catch { /* skip malformed */ }
        }
      }
    }
  },

  // Agents registry — live agent list (no auth, read-only)
  agents: () => registryFetch<{ agents: Agent[]; count: number }>('/agents'),
  agent: (name: string) => registryFetch<Agent>(`/agents/${name}`),
  registryHealth: () => registryFetch<RegistryHealth>('/health'),

  // Task marketplace
  tasks: (status?: string) =>
    registryFetch<{ tasks: unknown[]; count: number }>(`/tasks${status ? `?status=${status}` : ''}`),
  createTask: (task: { title: string; description?: string; priority?: string; tags?: string[]; requiredCapabilities?: string[] }) =>
    registryFetch<{ task: unknown }>('/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    }),

  // Conversation persistence
  conversations: () => gateway<{ conversations: Conversation[] }>('/v1/conversations'),
  getConversation: (id: string) => gateway<ConversationWithMessages>(`/v1/conversations/${id}`),
  createConversation: (title: string, model?: string) =>
    gateway<Conversation>('/v1/conversations', { method: 'POST', body: JSON.stringify({ title, model }) }),
  deleteConversation: (id: string) =>
    gateway<{ deleted: boolean }>(`/v1/conversations/${id}`, { method: 'DELETE' }),
}
