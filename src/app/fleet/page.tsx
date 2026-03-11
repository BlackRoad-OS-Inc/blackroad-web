'use client'

import { useState, useEffect, useMemo } from 'react'
import { useFleetStream, type FleetNode } from '@/hooks/use-fleet-stream'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'

const GRAD_STOPS = ['#FF6B2B', '#FF2255', '#CC00AA', '#8844FF', '#4488FF', '#00D4FF']
const GRAD = 'linear-gradient(90deg, #FF6B2B, #FF2255, #CC00AA, #8844FF, #4488FF, #00D4FF)'

function NodeCard({ node, index }: { node: FleetNode; index: number }) {
  const memPct = node.memory.total > 0 ? (node.memory.used / node.memory.total) * 100 : 0
  const diskPct = node.disk.total > 0 ? (node.disk.used / node.disk.total) * 100 : 0
  const color = GRAD_STOPS[index % GRAD_STOPS.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="relative group"
    >
      <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: GRAD, filter: 'blur(1px)' }} />
      <div className="relative bg-[#050505] border border-[#111] rounded-xl p-5 hover:border-[#222] transition-all">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: node.online ? '#00D4FF' : '#FF2255' }} />
              {node.online && (
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping" style={{ background: '#00D4FF', opacity: 0.4 }} />
              )}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {node.name}
              </h3>
              <span className="text-[10px] text-[#444]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {node.ip}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] px-2 py-0.5 rounded border"
              style={{
                color: node.online ? '#00D4FF' : '#FF2255',
                borderColor: node.online ? '#00D4FF22' : '#FF225522',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
              {node.online ? `${node.latency}ms` : 'OFFLINE'}
            </span>
          </div>
        </div>

        {node.online ? (
          <>
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <MetricBar label="CPU" value={node.cpu} unit="%" color={color} />
              <MetricBar label="TEMP" value={node.temp} unit="°C" color={node.temp > 70 ? '#FF2255' : color} />
              <MetricBar label="MEM" value={memPct} unit="%" color={color} />
              <MetricBar label="DISK" value={diskPct} unit="%" color={diskPct > 85 ? '#FF6B2B' : color} />
            </div>

            {/* Load Average */}
            <div className="flex gap-2 text-[10px] text-[#333]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span>load</span>
              {node.load.map((l, i) => (
                <span key={i} className="text-[#555]">{typeof l === 'number' ? l.toFixed(2) : '—'}</span>
              ))}
              <span className="ml-auto text-[#333]">
                up {formatUptime(node.uptime)}
              </span>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-[#222] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              unreachable
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function MetricBar({ label, value, unit, color }: { label: string; value: number; unit: string; color: string }) {
  const pct = Math.min(100, Math.max(0, value))
  return (
    <div className="bg-[#0a0a0a] rounded-md p-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[9px] text-[#333] uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {label}
        </span>
        <span className="text-[11px] text-[#666] font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {value.toFixed(1)}{unit}
        </span>
      </div>
      <div className="h-1 bg-[#111] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function FleetChart({ history }: { history: { timestamp: string; nodes: FleetNode[] }[] }) {
  const chartData = useMemo(() => {
    return history.map(h => {
      const entry: Record<string, unknown> = {
        t: new Date(h.timestamp).toLocaleTimeString('en-US', { hour12: false, minute: '2-digit', second: '2-digit' }),
      }
      h.nodes.forEach(n => {
        if (n.online) {
          entry[n.name] = n.cpu
        }
      })
      return entry
    })
  }, [history])

  if (chartData.length < 2) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-[#050505] border border-[#111] rounded-xl p-5"
    >
      <h3 className="text-xs text-[#333] uppercase tracking-wider mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        CPU Usage — Live
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData}>
          <defs>
            {GRAD_STOPS.map((color, i) => (
              <linearGradient key={i} id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <XAxis dataKey="t" tick={{ fill: '#222', fontSize: 9, fontFamily: "'JetBrains Mono'" }} axisLine={{ stroke: '#111' }} tickLine={false} />
          <YAxis domain={[0, 100]} tick={{ fill: '#222', fontSize: 9, fontFamily: "'JetBrains Mono'" }} axisLine={{ stroke: '#111' }} tickLine={false} width={30} />
          <Tooltip
            contentStyle={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: 8, fontFamily: "'JetBrains Mono'", fontSize: 10 }}
            labelStyle={{ color: '#555' }}
          />
          {['Alice', 'Cecilia', 'Octavia', 'Aria', 'Lucidia'].map((name, i) => (
            <Area
              key={name}
              type="monotone"
              dataKey={name}
              stroke={GRAD_STOPS[i]}
              fill={`url(#grad-${i})`}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function formatUptime(seconds: number): string {
  if (!seconds) return '—'
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  if (d > 0) return `${d}d ${h}h`
  const m = Math.floor((seconds % 3600) / 60)
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}

export default function FleetPage() {
  const { nodes, connected, timestamp, history } = useFleetStream()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const online = nodes.filter(n => n.online).length
  const avgCpu = nodes.filter(n => n.online).reduce((a, n) => a + n.cpu, 0) / (online || 1)
  const avgTemp = nodes.filter(n => n.online).reduce((a, n) => a + n.temp, 0) / (online || 1)
  const totalMem = nodes.reduce((a, n) => a + (n.memory?.total || 0), 0)
  const usedMem = nodes.reduce((a, n) => a + (n.memory?.used || 0), 0)

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient top bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: GRAD, backgroundSize: '200% 100%' }}>
        <style>{`@keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex gap-[3px]">
                {GRAD_STOPS.map((c, i) => (
                  <motion.div
                    key={c}
                    className="w-[3px] h-4 rounded-sm"
                    style={{ background: c }}
                    animate={{ scaleY: [1, 1.5, 1] }}
                    transition={{ duration: 2, delay: i * 0.12, repeat: Infinity }}
                  />
                ))}
              </div>
              <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Fleet
              </h1>
            </div>
            <p className="text-xs text-[#333]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {timestamp ? `Last update ${new Date(timestamp).toLocaleTimeString()}` : 'Connecting...'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${connected ? 'bg-[#00D4FF]' : 'bg-[#FF2255]'}`} />
              <span className="text-[10px] text-[#444]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {connected ? 'LIVE' : 'DISCONNECTED'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'NODES', value: `${online}/${nodes.length}`, sub: 'online', color: online === nodes.length ? '#00D4FF' : '#FF6B2B' },
            { label: 'AVG CPU', value: `${avgCpu.toFixed(1)}%`, sub: 'across fleet', color: '#8844FF' },
            { label: 'AVG TEMP', value: `${avgTemp.toFixed(1)}°C`, sub: 'thermal', color: avgTemp > 65 ? '#FF2255' : '#4488FF' },
            { label: 'MEMORY', value: totalMem > 0 ? `${((usedMem / totalMem) * 100).toFixed(0)}%` : '—', sub: `${(usedMem / 1024 / 1024 / 1024).toFixed(1)}GB used`, color: '#CC00AA' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-[#050505] border border-[#111] rounded-lg p-4"
            >
              <div className="text-[9px] text-[#333] uppercase tracking-wider mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {stat.label}
              </div>
              <div className="text-2xl font-bold" style={{ color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-[10px] text-[#222]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live CPU Chart */}
        <FleetChart history={history} />

        {/* Node Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <AnimatePresence>
            {nodes.map((node, i) => (
              <NodeCard key={node.name} node={node} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {nodes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="flex justify-center gap-1 mb-4">
              {GRAD_STOPS.map((c) => (
                <motion.div
                  key={c}
                  className="w-2 h-8 rounded"
                  style={{ background: c }}
                  animate={{ scaleY: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() }}
                />
              ))}
            </div>
            <p className="text-[#333] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Connecting to fleet...
            </p>
          </motion.div>
        )}
      </div>
    </main>
  )
}
