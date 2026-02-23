// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Bot, User, AlertCircle, ChevronDown } from 'lucide-react'
import { api } from '@/lib/api'
import type { ModelEntry } from '@/lib/api'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  error?: boolean
  streaming?: boolean
}

const SYSTEM_PROMPT =
  "You are Lucidia, a creative and thoughtful AI companion built on BlackRoad OS. You help with planning, ideation, and creative thinking. Be concise and warm."

const DEFAULT_MODEL = 'qwen2.5:7b'

function ModelSelector({
  providers,
  selected,
  onSelect,
}: {
  providers: ModelEntry[]
  selected: string
  onSelect: (m: string) => void
}) {
  const [open, setOpen] = useState(false)
  const allModels = providers.flatMap((p) =>
    p.models.map((m) => ({ label: m, provider: p.provider, available: p.available })),
  )
  if (allModels.length === 0) return null
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white border border-white/10 rounded-md transition-colors"
      >
        {selected}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 left-0 z-50 min-w-[180px] bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1">
          {allModels.map(({ label, provider, available }) => (
            <button
              key={`${provider}/${label}`}
              type="button"
              onClick={() => { onSelect(label); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-xs transition-colors ${
                label === selected ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:bg-white/5'
              } ${!available ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!available}
            >
              <span className="text-gray-500 mr-1">{provider}/</span>{label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

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
  const [selectedModel, setSelectedModel] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('br_model') ?? DEFAULT_MODEL
    return DEFAULT_MODEL
  })
  const [providers, setProviders] = useState<ModelEntry[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load available models once
  useEffect(() => {
    api.models()
      .then((data) => setProviders(data.providers))
      .catch(() => {/* offline — no model selector */})
  }, [])

  // Persist model choice
  const handleModelSelect = useCallback((m: string) => {
    setSelectedModel(m)
    localStorage.setItem('br_model', m)
  }, [])

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

      const history = [...messages, userMsg]
        .slice(-20)
        .map((m) => ({ role: m.role as 'user' | 'assistant' | 'system', content: m.content }))

      const assistantId = (Date.now() + 1).toString()

      // Add placeholder streaming message
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: 'assistant', content: '', timestamp: new Date(), streaming: true },
      ])

      try {
        let accumulated = ''
        for await (const chunk of api.chatStream({
          model: selectedModel,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
          temperature: 0.7,
          max_tokens: 1024,
        })) {
          accumulated += chunk
          setMessages((prev) =>
            prev.map((m) => m.id === assistantId ? { ...m, content: accumulated } : m),
          )
        }
        // Mark streaming done
        setMessages((prev) =>
          prev.map((m) => m.id === assistantId ? { ...m, streaming: false } : m),
        )
      } catch (err) {
        const isOffline = err instanceof Error && (err.message.includes('fetch') || err.message.includes('connect'))
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  streaming: false,
                  error: true,
                  content: isOffline
                    ? 'Gateway is offline. Start blackroad-core on :8787 to enable AI responses.'
                    : 'Something went wrong. Please try again.',
                }
              : m,
          ),
        )
      } finally {
        setIsLoading(false)
        inputRef.current?.focus()
      }
    },
    [input, isLoading, messages, selectedModel],
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
                <p className="text-sm whitespace-pre-wrap">
                  {message.content}
                  {message.streaming && (
                    <span className="inline-block w-1.5 h-4 ml-0.5 bg-cyan-400 animate-pulse align-middle" />
                  )}
                  {!message.content && !message.streaming && !message.error && '…'}
                </p>
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
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-white/10 bg-zinc-950 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-3">
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
          <div className="flex items-center justify-between mt-2 px-1">
            <ModelSelector providers={providers} selected={selectedModel} onSelect={handleModelSelect} />
            <span className="text-xs text-gray-600">BlackRoad OS Gateway · {selectedModel}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
