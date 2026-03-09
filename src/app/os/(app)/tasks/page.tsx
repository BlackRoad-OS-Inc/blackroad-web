// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'

import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, Plus, CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react'
import { api } from '@/lib/api'

interface Task {
  id: string
  title: string
  description?: string
  status: 'pending' | 'claimed' | 'completed' | 'failed'
  priority: string
  tags: string[]
  requiredCapabilities: string[]
  claimedBy?: string
  createdAt: string
  completedAt?: string
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-900/50 text-yellow-300 border-yellow-700/50',
  claimed: 'bg-blue-900/50 text-blue-300 border-blue-700/50',
  completed: 'bg-green-900/50 text-green-300 border-green-700/50',
  failed: 'bg-red-900/50 text-red-300 border-red-700/50',
}

const STATUS_ICONS: Record<string, React.ReactNode> = {
  pending: <Clock className="h-3 w-3" />,
  claimed: <Loader2 className="h-3 w-3 animate-spin" />,
  completed: <CheckCircle className="h-3 w-3" />,
  failed: <AlertCircle className="h-3 w-3" />,
}

const PRIORITY_COLORS: Record<string, string> = {
  critical: 'text-red-400',
  high: 'text-orange-400',
  medium: 'text-yellow-400',
  low: 'text-gray-400',
}

function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 space-y-2 hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-white">{task.title}</p>
          {task.description && <p className="text-xs text-gray-500 mt-0.5">{task.description}</p>}
        </div>
        <span className={`flex items-center gap-1 px-2 py-0.5 text-xs border rounded-full flex-shrink-0 ${STATUS_COLORS[task.status] ?? ''}`}>
          {STATUS_ICONS[task.status]}
          {task.status}
        </span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-medium ${PRIORITY_COLORS[task.priority] ?? 'text-gray-400'}`}>
          {task.priority}
        </span>
        {task.tags.map((t) => (
          <span key={t} className="text-xs px-1.5 py-0.5 bg-white/5 text-gray-400 rounded">
            {t}
          </span>
        ))}
        {task.requiredCapabilities.map((c) => (
          <span key={c} className="text-xs px-1.5 py-0.5 bg-cyan-900/30 text-cyan-400 border border-cyan-800/40 rounded">
            {c}
          </span>
        ))}
      </div>
      {task.claimedBy && (
        <p className="text-xs text-gray-600">Claimed by: {task.claimedBy}</p>
      )}
      <p className="text-xs text-gray-700">
        {new Date(task.createdAt).toLocaleString()}
        {task.completedAt && ` → ${new Date(task.completedAt).toLocaleString()}`}
      </p>
    </div>
  )
}

interface NewTaskForm {
  title: string
  description: string
  priority: string
  tags: string
  requiredCapabilities: string
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<NewTaskForm>({ title: '', description: '', priority: 'medium', tags: '', requiredCapabilities: '' })
  const [error, setError] = useState<string | null>(null)

  const loadTasks = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.tasks(filter === 'all' ? undefined : filter)
      setTasks(data.tasks as Task[])
    } catch {
      setError('Registry offline — start blackroad-agents on :3001')
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => { void loadTasks() }, [loadTasks])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim()) return
    setSubmitting(true)
    try {
      await api.createTask({
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        priority: form.priority,
        tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : undefined,
        requiredCapabilities: form.requiredCapabilities
          ? form.requiredCapabilities.split(',').map((c) => c.trim()).filter(Boolean)
          : undefined,
      })
      setForm({ title: '', description: '', priority: 'medium', tags: '', requiredCapabilities: '' })
      setShowForm(false)
      await loadTasks()
    } catch {
      setError('Failed to create task')
    } finally {
      setSubmitting(false)
    }
  }, [form, loadTasks])

  const counts = {
    all: tasks.length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    claimed: tasks.filter((t) => t.status === 'claimed').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
  }

  const filtered = filter === 'all' ? tasks : tasks.filter((t) => t.status === filter)

  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <h1 className="text-lg font-semibold">Task Queue</h1>
          <p className="text-xs text-gray-500 mt-0.5">Agent task marketplace</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => void loadTasks()}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-700 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            New Task
          </button>
        </div>
      </div>

      {/* New Task Form */}
      {showForm && (
        <div className="px-6 py-4 border-b border-white/10 bg-zinc-950">
          <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl">
            <input
              type="text"
              placeholder="Task title *"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <div className="flex gap-3">
              <select
                value={form.priority}
                onChange={(e) => setForm((f) => ({ ...f, priority: e.target.value }))}
                className="px-3 py-2 bg-zinc-900 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                {['critical', 'high', 'medium', 'low'].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Tags (comma-separated)"
                value={form.tags}
                onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
                className="flex-1 px-3 py-2 bg-zinc-900 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <input
                type="text"
                placeholder="Required capabilities"
                value={form.requiredCapabilities}
                onChange={(e) => setForm((f) => ({ ...f, requiredCapabilities: e.target.value }))}
                className="flex-1 px-3 py-2 bg-zinc-900 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting || !form.title.trim()}
                className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white text-sm rounded-md transition-colors disabled:opacity-40"
              >
                {submitting ? 'Creating…' : 'Create Task'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex items-center gap-1 px-6 py-3 border-b border-white/5">
        {(['all', 'pending', 'claimed', 'completed'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 text-xs rounded-md transition-colors ${
              filter === s
                ? 'bg-white/10 text-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {s} {counts[s] !== undefined ? `(${counts[s]})` : ''}
          </button>
        ))}
      </div>

      {/* Task list */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {error && (
          <div className="text-sm text-red-400 bg-red-900/20 border border-red-800/40 rounded-lg px-4 py-3 mb-4">
            {error}
          </div>
        )}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 text-gray-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-600 text-sm">
            No {filter === 'all' ? '' : filter} tasks. Click &quot;New Task&quot; to create one.
          </div>
        ) : (
          <div className="max-w-3xl space-y-3">
            {filtered.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
