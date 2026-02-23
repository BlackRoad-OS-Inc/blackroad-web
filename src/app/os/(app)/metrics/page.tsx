// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client'

import { useState, useEffect, useCallback } from 'react'
import { Activity, Zap, AlertTriangle, Clock, RefreshCw, TrendingUp } from 'lucide-react'
import { api } from '@/lib/api'

interface MetricsSnapshot {
  total_requests: number
  uptime_seconds: number
  rpm: number
  error_rate_pct: number
  errors: number
  by_provider: Record<string, number>
  by_agent: Record<string, number>
}

function StatCard({ icon: Icon, label, value, sub, color = 'cyan' }: {
  icon: React.ElementType
  label: string
  value: string | number
  sub?: string
  color?: 'cyan' | 'green' | 'red' | 'yellow'
}) {
  const colorMap = {
    cyan: 'text-cyan-400 bg-cyan-400/10',
    green: 'text-green-400 bg-green-400/10',
    red: 'text-red-400 bg-red-400/10',
    yellow: 'text-yellow-400 bg-yellow-400/10',
  }
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${colorMap[color]}`}>
          <Icon className={`h-4 w-4 ${colorMap[color].split(' ')[0]}`} />
        </div>
        <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white tabular-nums">{value}</div>
      {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
    </div>
  )
}

function BarChart({ data, label }: { data: Record<string, number>; label: string }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1])
  const max = Math.max(...entries.map(([, v]) => v), 1)
  if (entries.length === 0) return <p className="text-xs text-gray-600 py-4">No data yet</p>
  return (
    <div className="space-y-3">
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      {entries.map(([key, val]) => (
        <div key={key} className="flex items-center gap-3">
          <span className="text-xs text-gray-400 w-24 truncate shrink-0">{key}</span>
          <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${(val / max) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-400 tabular-nums w-8 text-right">{val}</span>
        </div>
      ))}
    </div>
  )
}

function formatUptime(seconds: number): string {
  if (seconds < 60) return `${Math.floor(seconds)}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return `${h}h ${m}m`
}

export default function MetricsPage() {
  const [metrics, setMetrics] = useState<MetricsSnapshot | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const load = useCallback(async (manual = false) => {
    if (manual) setRefreshing(true)
    try {
      const data = await api.health().then(() =>
        fetch(`${(process.env['NEXT_PUBLIC_GATEWAY_URL'] ?? 'http://127.0.0.1:8787').replace(/\/$/, '')}/v1/metrics`, {
          headers: { Authorization: `Bearer ${process.env['NEXT_PUBLIC_GATEWAY_TOKEN'] ?? 'dashboard-readonly'}` },
        }).then((r) => r.json() as Promise<MetricsSnapshot>)
      )
      setMetrics(data)
      setError(null)
      setLastUpdated(new Date())
    } catch {
      setError('Gateway offline — start blackroad-core on :8787')
    } finally {
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    void load()
    const interval = setInterval(() => void load(), 10_000)
    return () => clearInterval(interval)
  }, [load])

  return (
    <div className="min-h-full bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold">Gateway Metrics</h1>
            <p className="text-sm text-gray-500 mt-1">
              {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Loading…'}
            </p>
          </div>
          <button
            onClick={() => void load(true)}
            disabled={refreshing}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors disabled:opacity-40"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-red-950 border border-red-800 rounded-lg text-red-300 text-sm">
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {metrics ? (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard icon={Activity} label="Total Requests" value={metrics.total_requests.toLocaleString()} color="cyan" />
              <StatCard icon={TrendingUp} label="Req / Min" value={metrics.rpm.toFixed(1)} sub="rolling 60s" color="green" />
              <StatCard
                icon={AlertTriangle} label="Error Rate" value={`${metrics.error_rate_pct.toFixed(1)}%`}
                sub={`${metrics.errors} errors`} color={metrics.error_rate_pct > 5 ? 'red' : 'yellow'}
              />
              <StatCard icon={Clock} label="Uptime" value={formatUptime(metrics.uptime_seconds)} color="cyan" />
            </div>

            {/* Bar charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-cyan-400" />Requests by Provider
                </h2>
                <BarChart data={metrics.by_provider} label="provider" />
              </div>
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-purple-400" />Requests by Agent
                </h2>
                <BarChart data={metrics.by_agent} label="agent" />
              </div>
            </div>

            {/* Live indicator */}
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-600">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Auto-refreshing every 10 seconds
            </div>
          </>
        ) : !error && (
          <div className="flex items-center justify-center h-48 text-gray-600">
            <div className="text-center">
              <Activity className="h-8 w-8 mx-auto mb-3 animate-pulse" />
              <p className="text-sm">Connecting to gateway…</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
