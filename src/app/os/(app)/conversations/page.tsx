// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Bot, User, AlertCircle, ChevronDown, Plus, Trash2, MessageSquare } from 'lucide-react'
import { api } from '@/lib/api'
import type { ModelEntry, Conversation, ConversationMessage } from '@/lib/api'

interface UiMessage {
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

function ModelSelector({ providers, selected, onSelect }: { providers: ModelEntry[]; selected: string; onSelect: (m: string) => void }) {
  const [open, setOpen] = useState(false)
  const allModels = providers.flatMap((p) => p.models.map((m) => ({ label: m, provider: p.provider, available: p.available })))
  if (allModels.length === 0) return null
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white border border-white/10 rounded-md transition-colors">
        {selected}<ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 left-0 z-50 min-w-[180px] bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1">
          {allModels.map(({ label, provider, available }) => (
            <button key={`${provider}/${label}`} type="button" onClick={() => { onSelect(label); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-xs transition-colors ${label === selected ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:bg-white/5'} ${!available ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!available}>
              <span className="text-gray-500 mr-1">{provider}/</span>{label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function dbMessagesToUi(msgs: ConversationMessage[]): UiMessage[] {
  return msgs.map((m) => ({ id: m.id, role: m.role as 'user' | 'assistant', content: m.content, timestamp: new Date(m.created_at) }))
}

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConvId, setActiveConvId] = useState<string | null>(null)
  const [messages, setMessages] = useState<UiMessage[]>([{
    id: 'welcome', role: 'assistant', content: "Hello! I'm Lucidia, your AI companion on BlackRoad OS. How can I help you today?", timestamp: new Date(),
  }])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('br_model') ?? DEFAULT_MODEL
    return DEFAULT_MODEL
  })
  const [providers, setProviders] = useState<ModelEntry[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load conversations list + models
  useEffect(() => {
    api.conversations().then((d) => setConversations(d.conversations)).catch(() => {})
    api.models().then((d) => setProviders(d.providers)).catch(() => {})
  }, [])

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const handleModelSelect = useCallback((m: string) => { setSelectedModel(m); localStorage.setItem('br_model', m) }, [])

  const selectConversation = useCallback(async (conv: Conversation) => {
    setActiveConvId(conv.id)
    try {
      const full = await api.getConversation(conv.id)
      const uiMsgs = dbMessagesToUi(full.messages)
      setMessages(uiMsgs.length > 0 ? uiMsgs : [{ id: 'empty', role: 'assistant', content: 'Start the conversation…', timestamp: new Date() }])
    } catch {
      setMessages([{ id: 'err', role: 'assistant', content: 'Failed to load conversation.', timestamp: new Date(), error: true }])
    }
  }, [])

  const newConversation = useCallback(() => {
    setActiveConvId(null)
    setMessages([{ id: 'welcome', role: 'assistant', content: "Hello! I'm Lucidia, your AI companion. Start a new conversation below.", timestamp: new Date() }])
    inputRef.current?.focus()
  }, [])

  const deleteConversation = useCallback(async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    await api.deleteConversation(id).catch(() => {})
    setConversations((prev) => prev.filter((c) => c.id !== id))
    if (activeConvId === id) newConversation()
  }, [activeConvId, newConversation])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMsg: UiMessage = { id: Date.now().toString(), role: 'user', content: trimmed, timestamp: new Date() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    // Auto-create conversation on first message if no active one
    let convId = activeConvId
    if (!convId) {
      try {
        const conv = await api.createConversation(trimmed.slice(0, 60), selectedModel)
        convId = conv.id
        setActiveConvId(conv.id)
        setConversations((prev) => [conv, ...prev])
      } catch { /* offline — still chat without persistence */ }
    }

    const history = [...messages.filter((m) => !m.error && m.id !== 'welcome' && m.id !== 'empty'), userMsg]
      .slice(-20)
      .map((m) => ({ role: m.role as 'user' | 'assistant' | 'system', content: m.content }))

    const assistantId = (Date.now() + 1).toString()
    setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '', timestamp: new Date(), streaming: true }])

    try {
      let accumulated = ''
      for await (const chunk of api.chatStream({
        model: selectedModel,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
        temperature: 0.7,
        max_tokens: 1024,
        ...(convId ? { conversation_id: convId } : {}),
      })) {
        accumulated += chunk
        setMessages((prev) => prev.map((m) => m.id === assistantId ? { ...m, content: accumulated } : m))
      }
      setMessages((prev) => prev.map((m) => m.id === assistantId ? { ...m, streaming: false } : m))
      // Refresh conv title if it was a new one (first message becomes the title)
      if (convId && conversations.find((c) => c.id === convId)?.title === trimmed.slice(0, 60)) {
        api.conversations().then((d) => setConversations(d.conversations)).catch(() => {})
      }
    } catch (err) {
      const offline = err instanceof Error && (err.message.includes('fetch') || err.message.includes('connect'))
      setMessages((prev) => prev.map((m) => m.id === assistantId ? {
        ...m, streaming: false, error: true,
        content: offline ? 'Gateway is offline. Start blackroad-core on :8787.' : 'Something went wrong. Please try again.',
      } : m))
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }, [input, isLoading, messages, selectedModel, activeConvId, conversations])

  return (
    <div className="flex h-full bg-black text-white">
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 border-r border-white/10 flex flex-col bg-zinc-950">
        <div className="p-3 border-b border-white/10">
          <button onClick={newConversation} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Plus className="h-4 w-4" /><span>New Chat</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {conversations.length === 0 ? (
            <p className="text-xs text-gray-600 text-center mt-4 px-3">No conversations yet</p>
          ) : (
            conversations.map((conv) => (
              <div key={conv.id} onClick={() => selectConversation(conv)}
                className={`group flex items-center gap-2 px-3 py-2 mx-1 rounded-lg cursor-pointer transition-colors ${activeConvId === conv.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}>
                <MessageSquare className="h-3.5 w-3.5 flex-shrink-0 opacity-60" />
                <span className="flex-1 text-xs truncate">{conv.title}</span>
                <button onClick={(e) => deleteConversation(conv.id, e)} className="opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-2xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-500 flex items-center justify-center">
                    {message.error ? <AlertCircle className="h-4 w-4 text-white" /> : <Bot className="h-5 w-5 text-white" />}
                  </div>
                )}
                <div className={`max-w-[72%] rounded-lg px-4 py-3 ${
                  message.role === 'user' ? 'bg-blue-700 text-white' :
                  message.error ? 'bg-red-950 border border-red-800 text-red-200' :
                  'bg-zinc-900 border border-white/10 text-gray-100'}`}>
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                    {message.streaming && <span className="inline-block w-1.5 h-4 ml-0.5 bg-cyan-400 animate-pulse align-middle" />}
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
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Message Lucidia…" disabled={isLoading}
                className="flex-1 px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:opacity-50" />
              <button type="submit" disabled={isLoading || !input.trim()}
                className="px-5 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 flex items-center gap-2">
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
    </div>
  )
}
