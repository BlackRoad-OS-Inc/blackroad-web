// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'
import { useEffect, useState } from 'react'
import { api, type HealthResponse } from '@/lib/api'

export function useMetrics() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHealth = () => {
      api.health()
        .then(setHealth)
        .catch(() => setHealth(null))
        .finally(() => setLoading(false))
    }
    fetchHealth()
    const interval = setInterval(fetchHealth, 10_000)
    return () => clearInterval(interval)
  }, [])

  return { health, loading }
}
