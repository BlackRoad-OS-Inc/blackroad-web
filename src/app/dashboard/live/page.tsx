// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
// Real-time agent activity feed page (issues #3, #15)
'use client'

import { useEffect, useState, useCallback } from 'react'
import { Activity, Wifi, WifiOff } from 'lucide-react'

interface AgentEvent {
  type: 'task_started' | 'task_completed' | 'agent_online' | 'agent_offline' | 'connected' | 'timeout'
  agent?: string
  detail?: string
  message?: string
  timestamp: string
}

const EVENT_COLORS: Record<string, string> = {
  task_started: 'text-amber-400',
  task_completed: 'text-green-400',
  agent_online: 'text-blue-400',
  agent_offline: 'text-red-400',
  connected: 'text-gray-400',
}

const EVENT_LABELS: Record<string, string> = {
  task_started: 'TASK STARTED',
  task_completed: 'TASK COMPLETED',
  agent_online: 'ONLINE',
  agent_offline: 'OFFLINE',
  connected: 'CONNECTED',
}

export default function LiveFeedPage() {
  const [events, setEvents] = useState<AgentEvent[]>([])
  const [connected, setConnected] = useState(false)

  const connect = useCallback(() => {
    const es = new EventSource('/api/agents/stream')

    es.onmessage = (e) => {
      try {
        const event: AgentEvent = JSON.parse(e.data)
        if (event.type === 'timeout') {
          es.close()
          setConnected(false)
          // Auto-reconnect
          setTimeout(connect, 2000)
          return
        }
        setConnected(true)
        setEvents((prev) => [event, ...prev].slice(0, 100))
      } catch { /* skip malformed */ }
    }

    es.onerror = () => {
      setConnected(false)
      es.close()
      // Auto-reconnect
      setTimeout(connect, 3000)
    }

    return es
  }, [])

  useEffect(() => {
    const es = connect()
    return () => es.close()
  }, [connect])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-[#FF1D6C]" />
            <h1 className="text-2xl font-bold">Live Agent Feed</h1>
          </div>
          <div className="flex items-center gap-2">
            {connected ? (
              <>
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Connected</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400">Reconnecting...</span>
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {events.length === 0 && (
            <p className="text-gray-500 text-center py-12">Waiting for events...</p>
          )}
          {events.map((event, i) => (
            <div
              key={`${event.timestamp}-${i}`}
              className="flex items-center gap-4 px-4 py-3 bg-white/5 rounded-lg border border-white/10 animate-fade-in"
            >
              <span className={`text-xs font-mono font-bold ${EVENT_COLORS[event.type] || 'text-gray-400'}`}>
                {EVENT_LABELS[event.type] || event.type}
              </span>
              {event.agent && (
                <span className="text-sm font-semibold text-white">{event.agent}</span>
              )}
              {event.detail && (
                <span className="text-sm text-gray-400">{event.detail}</span>
              )}
              <span className="ml-auto text-xs text-gray-600 font-mono">
                {new Date(event.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
