// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export function useWebSocket(url: string) {
  const wsRef = useRef<WebSocket | null>(null)
  const [connected, setConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState<string | null>(null)

  useEffect(() => {
    const ws = new WebSocket(url)
    wsRef.current = ws

    ws.onopen = () => setConnected(true)
    ws.onclose = () => setConnected(false)
    ws.onmessage = (event) => setLastMessage(event.data as string)

    return () => {
      ws.close()
    }
  }, [url])

  const send = useCallback((data: string) => {
    wsRef.current?.send(data)
  }, [])

  return { connected, lastMessage, send }
}
