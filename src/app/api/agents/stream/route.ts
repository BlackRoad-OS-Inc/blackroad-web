// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
// SSE endpoint for real-time agent activity feed (issues #3, #15)

export const runtime = 'edge'

type AgentEvent = {
  type: 'task_started' | 'task_completed' | 'agent_online' | 'agent_offline'
  agent: string
  detail?: string
  timestamp: string
}

const AGENTS = ['Octavia', 'Lucidia', 'Alice', 'Aria', 'Shellfish']
const EVENT_TYPES: AgentEvent['type'][] = ['task_started', 'task_completed', 'agent_online', 'agent_offline']

function randomEvent(): AgentEvent {
  const agent = AGENTS[Math.floor(Math.random() * AGENTS.length)]
  const type = EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length)]
  const details: Record<string, string> = {
    task_started: 'Processing inference request',
    task_completed: 'Completed batch analysis',
    agent_online: 'Connected to cluster',
    agent_offline: 'Graceful shutdown',
  }
  return {
    type,
    agent,
    detail: details[type],
    timestamp: new Date().toISOString(),
  }
}

export async function GET() {
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection event
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: 'connected', timestamp: new Date().toISOString() })}\n\n`),
      )

      const interval = setInterval(() => {
        try {
          const event = randomEvent()
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`))
        } catch {
          clearInterval(interval)
        }
      }, 3000)

      // Clean up after 5 minutes to prevent resource leaks
      setTimeout(() => {
        clearInterval(interval)
        try {
          controller.enqueue(encoder.encode('data: {"type":"timeout","message":"Reconnect to continue"}\n\n'))
          controller.close()
        } catch { /* already closed */ }
      }, 5 * 60 * 1000)
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
