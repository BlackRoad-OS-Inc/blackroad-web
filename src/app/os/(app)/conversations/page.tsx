// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Bot, User, AlertCircle } from 'lucide-react'
import { api } from '@/lib/api'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  error?: boolean
}

const SYSTEM_PROMPT =
  "You are Lucidia, a creative and thoughtful AI companion built on BlackRoad OS. You help with planning, ideation, and creative thinking. Be concise and warm."

export default function ConversationsPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm Lucidia, your AI companion on BlackRoad OS. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const trimmed = input.trim()
      if (!trimmed || isLoading) return

      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMsg])
      setInput('')
      setIsLoading(true)

      // Build message history for the gateway (last 20 messages for context)
      const history = [...messages, userMsg]
        .slice(-20)
        .map((m) => ({ role: m.role, content: m.content }))

      try {
        const response = await api.chat({
          model: 'qwen2.5:7b',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history,
          ],
          temperature: 0.7,
          max_tokens: 1024,
        })

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: response.content,
            timestamp: new Date(),
          },
        ])
      } catch (err) {
        const isOffline = err instanceof Error && err.message.includes('fetch')
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: isOffline
              ? 'Gateway is offline. Start blackroad-core on :8787 to enable AI responses.'
              : 'Something went wrong. Please try again.',
            timestamp: new Date(),
            error: true,
          },
        ])
      } finally {
        setIsLoading(false)
        inputRef.current?.focus()
      }
    },
    [input, isLoading, messages],
  )

  return (
    <div className="flex flex-col h-full bg-black text-white">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-500 flex items-center justify-center">
                  {message.error ? (
                    <AlertCircle className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-lg px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-blue-700 text-white'
                    : message.error
                      ? 'bg-red-950 border border-red-800 text-red-200'
                      : 'bg-zinc-900 border border-white/10 text-gray-100'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
              {message.role === 'user' && (
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-500 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3">
                <div className="flex gap-1 items-center">
                  <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" />
                  <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-white/10 bg-zinc-950 px-4 py-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Lucidia…"
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-5 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
