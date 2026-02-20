// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'
import { useEffect, useState } from 'react'
import { api, type Agent } from '@/lib/api'

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api.agents()
      .then((data) => setAgents(data.agents))
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load agents'))
      .finally(() => setLoading(false))
  }, [])

  return { agents, loading, error }
}
