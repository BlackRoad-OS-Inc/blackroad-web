// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export interface FleetNode {
  name: string
  ip: string
  online: boolean
  latency: number
  cpu: number
  memory: { used: number; total: number }
  temp: number
  disk: { used: number; total: number }
  load: number[]
  uptime: number
}

export interface FleetState {
  nodes: FleetNode[]
  timestamp: string
  connected: boolean
  history: { timestamp: string; nodes: FleetNode[] }[]
}

export function useFleetStream() {
  const [state, setState] = useState<FleetState>({
    nodes: [],
    timestamp: '',
    connected: false,
    history: [],
  })
  const sourceRef = useRef<EventSource | null>(null)
  const retryRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const connect = useCallback(() => {
    if (sourceRef.current) {
      sourceRef.current.close()
    }

    const es = new EventSource('/api/fleet/stream')
    sourceRef.current = es

    es.onopen = () => {
      setState(s => ({ ...s, connected: true }))
    }

    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'fleet') {
          setState(s => ({
            ...s,
            nodes: data.nodes,
            timestamp: data.timestamp,
            connected: true,
            history: [...s.history.slice(-59), { timestamp: data.timestamp, nodes: data.nodes }],
          }))
        } else if (data.type === 'reconnect') {
          // Auto-reconnect
          setTimeout(connect, 1000)
        }
      } catch {
        // Ignore parse errors
      }
    }

    es.onerror = () => {
      setState(s => ({ ...s, connected: false }))
      es.close()
      // Reconnect after 3 seconds
      retryRef.current = setTimeout(connect, 3000)
    }
  }, [])

  useEffect(() => {
    connect()
    return () => {
      sourceRef.current?.close()
      if (retryRef.current) clearTimeout(retryRef.current)
    }
  }, [connect])

  const refresh = useCallback(async () => {
    try {
      const r = await fetch('/api/fleet')
      const data = await r.json()
      setState(s => ({
        ...s,
        nodes: data.nodes,
        timestamp: data.timestamp,
      }))
    } catch {
      // SSE will handle it
    }
  }, [])

  return { ...state, refresh }
}
