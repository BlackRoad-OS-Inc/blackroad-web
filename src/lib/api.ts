// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.

const GATEWAY_URL = process.env['NEXT_PUBLIC_GATEWAY_URL'] ?? 'http://127.0.0.1:8787'

export async function gateway<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${GATEWAY_URL}${path}`, init)
  if (!res.ok) {
    throw new Error(`Gateway error: ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}

export interface Agent {
  name: string
  title: string
  role: string
  description: string
  color: string
  capabilities: string[]
}

export interface HealthResponse {
  status: string
  version: string
  uptime: number
}

export const api = {
  health: () => gateway<HealthResponse>('/v1/health'),
  agents: () => gateway<{ agents: Agent[] }>('/v1/agents'),
  agent: (name: string) => gateway<Agent>(`/v1/agents/${name}`),
}
