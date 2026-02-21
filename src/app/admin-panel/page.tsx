'use client'

import { useState } from 'react'
import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  StatusEmoji,
  MetricEmoji,
  BlackRoadSymbol,
  GeometricPattern,
  CommandPrompt,
  PulsingDot
} from '../components/BlackRoadVisuals'

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview')
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  const stats = [
    { label: 'Total Users', value: '47,392', change: '+12%', emoji: '👥' },
    { label: 'Active Sessions', value: '2,847', change: '+5%', emoji: '⚡' },
    { label: 'API Requests', value: '1.2M', change: '+23%', emoji: '📡' },
    { label: 'Error Rate', value: '0.03%', change: '-45%', emoji: '🎯' }
  ]

  const users = [
    { id: 'usr_001', name: 'Alice Chen', email: 'alice@techcorp.com', role: 'Admin', status: 'active', lastSeen: '2m ago' },
    { id: 'usr_002', name: 'Bob Martinez', email: 'bob@startup.io', role: 'User', status: 'active', lastSeen: '15m ago' },
    { id: 'usr_003', name: 'Carol Kim', email: 'carol@devshop.com', role: 'Editor', status: 'idle', lastSeen: '2h ago' },
    { id: 'usr_004', name: 'David Park', email: 'david@agency.co', role: 'User', status: 'active', lastSeen: '5m ago' },
    { id: 'usr_005', name: 'Eva Rodriguez', email: 'eva@saasco.com', role: 'Admin', status: 'offline', lastSeen: '1d ago' }
  ]

  const logs = [
    { time: '2026-02-15 00:35:12', level: 'info', message: 'User alice@techcorp.com logged in', action: 'auth.login' },
    { time: '2026-02-15 00:34:08', level: 'warning', message: 'Rate limit exceeded for IP 192.168.1.100', action: 'ratelimit.exceeded' },
    { time: '2026-02-15 00:33:45', level: 'success', message: 'Backup completed successfully', action: 'backup.complete' },
    { time: '2026-02-15 00:32:22', level: 'error', message: 'Failed to connect to database replica', action: 'db.connection.error' },
    { time: '2026-02-15 00:31:15', level: 'info', message: 'Deployment started: production-v2.4.1', action: 'deploy.start' }
  ]

  const services = [
    { name: 'API Gateway', status: 'operational', uptime: '99.99%', latency: '45ms' },
    { name: 'Database Primary', status: 'operational', uptime: '99.97%', latency: '12ms' },
    { name: 'Cache Layer', status: 'degraded', uptime: '98.50%', latency: '125ms' },
    { name: 'Message Queue', status: 'operational', uptime: '100.00%', latency: '8ms' },
    { name: 'File Storage', status: 'operational', uptime: '99.95%', latency: '67ms' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <BlackRoadSymbol size={60} />
            <div>
              <h1 className="text-5xl font-bold mb-2">
                Admin <span className="text-[var(--br-hot-pink)]">Panel</span>
              </h1>
              <p className="br-text-muted">System control center • Full access mode</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="px-6 py-2 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded transition-all disabled:opacity-50"
            >
              {refreshing ? '⟳ Refreshing...' : '↻ Refresh Data'}
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded transition-all ${
                  activeTab === 'overview' ? 'bg-[var(--br-hot-pink)] text-black' : 'bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-2 rounded transition-all ${
                  activeTab === 'users' ? 'bg-[var(--br-hot-pink)] text-black' : 'bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white'
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 rounded transition-all ${
                  activeTab === 'services' ? 'bg-[var(--br-hot-pink)] text-black' : 'bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-4 py-2 rounded transition-all ${
                  activeTab === 'logs' ? 'bg-[var(--br-hot-pink)] text-black' : 'bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white'
                }`}
              >
                Logs
              </button>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] p-6 rounded transition-all hover-lift">
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="br-text-muted mb-2">{stat.label}</div>
                  <div className={`text-sm ${stat.change.startsWith('+') ? 'text-[var(--br-hot-pink)]' : 'text-[var(--br-electric-magenta)]'}`}>
                    {stat.change} from last hour
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white p-8 rounded transition-all hover-lift">
                <div className="text-2xl mb-3">🔐</div>
                <h3 className="text-xl font-bold mb-2">Security Settings</h3>
                <p className="br-text-muted mb-4">Configure auth, roles, and permissions</p>
                <button className="text-[var(--br-hot-pink)] hover:underline">Manage →</button>
              </div>

              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white p-8 rounded transition-all hover-lift">
                <div className="text-2xl mb-3">💾</div>
                <h3 className="text-xl font-bold mb-2">Database Backup</h3>
                <p className="br-text-muted mb-4">Schedule and manage backups</p>
                <button className="text-[var(--br-hot-pink)] hover:underline">Configure →</button>
              </div>

              <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white p-8 rounded transition-all hover-lift">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="text-xl font-bold mb-2">Analytics Export</h3>
                <p className="br-text-muted mb-4">Download usage reports</p>
                <button className="text-[var(--br-hot-pink)] hover:underline">Export →</button>
              </div>
            </div>
          </>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] rounded overflow-hidden">
            <div className="p-6 border-b border-[var(--br-charcoal)]">
              <h3 className="text-2xl font-bold">User Management</h3>
              <p className="br-text-muted">View and manage all platform users</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--br-deep-black)] border-b border-[var(--br-charcoal)]">
                  <tr>
                    <th className="px-6 py-4 text-left br-text-muted">User ID</th>
                    <th className="px-6 py-4 text-left br-text-muted">Name</th>
                    <th className="px-6 py-4 text-left br-text-muted">Email</th>
                    <th className="px-6 py-4 text-left br-text-muted">Role</th>
                    <th className="px-6 py-4 text-left br-text-muted">Status</th>
                    <th className="px-6 py-4 text-left br-text-muted">Last Seen</th>
                    <th className="px-6 py-4 text-left br-text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={idx} className="border-b border-[var(--br-charcoal)] hover:bg-[var(--br-deep-black)] transition-colors">
                      <td className="px-6 py-4 font-mono text-sm br-text-muted">{user.id}</td>
                      <td className="px-6 py-4 font-bold">{user.name}</td>
                      <td className="px-6 py-4 br-text-muted">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          user.role === 'Admin' ? 'bg-[var(--br-vivid-purple)] text-white' : 
                          user.role === 'Editor' ? 'bg-[var(--br-cyber-blue)] text-black' : 
                          'bg-[var(--br-charcoal)] text-white'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <StatusEmoji status={user.status === 'active' ? 'green' : user.status === 'idle' ? 'yellow' : 'red'} />
                        <span className="ml-2 capitalize">{user.status}</span>
                      </td>
                      <td className="px-6 py-4 br-text-muted">{user.lastSeen}</td>
                      <td className="px-6 py-4">
                        <button className="text-[var(--br-hot-pink)] hover:underline mr-4">Edit</button>
                        <button className="text-[var(--br-electric-magenta)] hover:underline">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
              <h3 className="text-2xl font-bold mb-4">Service Health</h3>
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded hover:border-white transition-all">
                    <div className="flex items-center gap-4">
                      <StatusEmoji status={service.status === 'operational' ? 'green' : 'yellow'} />
                      <div>
                        <div className="font-bold">{service.name}</div>
                        <div className="text-sm br-text-muted capitalize">{service.status}</div>
                      </div>
                    </div>
                    <div className="flex gap-8 text-right">
                      <div>
                        <div className="text-sm br-text-muted">Uptime</div>
                        <div className="font-bold text-[var(--br-hot-pink)]">{service.uptime}</div>
                      </div>
                      <div>
                        <div className="text-sm br-text-muted">Latency</div>
                        <div className="font-bold">{service.latency}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Logs Tab */}
        {activeTab === 'logs' && (
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] rounded overflow-hidden">
            <div className="p-6 border-b border-[var(--br-charcoal)]">
              <h3 className="text-2xl font-bold">System Logs</h3>
              <p className="br-text-muted">Real-time activity monitoring</p>
            </div>
            <div className="p-6 space-y-3 font-mono text-sm">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded hover:border-white transition-all">
                  <div className="br-text-muted whitespace-nowrap">{log.time}</div>
                  <div className={`px-2 py-1 rounded text-xs font-bold whitespace-nowrap ${
                    log.level === 'error' ? 'bg-[var(--br-electric-magenta)] text-white' :
                    log.level === 'warning' ? 'bg-[var(--br-warm-orange)] text-black' :
                    log.level === 'success' ? 'bg-[var(--br-hot-pink)] text-black' :
                    'bg-[var(--br-cyber-blue)] text-black'
                  }`}>
                    {log.level.toUpperCase()}
                  </div>
                  <div className="flex-1">{log.message}</div>
                  <div className="br-text-muted text-xs whitespace-nowrap">{log.action}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
