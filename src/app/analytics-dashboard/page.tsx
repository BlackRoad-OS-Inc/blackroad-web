'use client'

import { useState } from 'react'
import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  MetricEmoji,
  BlackRoadSymbol,
  GeometricPattern,
  PulsingDot
} from '../components/BlackRoadVisuals'

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d')
  const [chartType, setChartType] = useState('users')

  const metrics = [
    { label: 'Total Users', value: '94,328', change: '+18.2%', trend: 'up', emoji: '👥' },
    { label: 'Revenue', value: '$487,293', change: '+24.5%', trend: 'up', emoji: '💰' },
    { label: 'Conversion', value: '3.42%', change: '+0.8%', trend: 'up', emoji: '🎯' },
    { label: 'Churn Rate', value: '1.2%', change: '-0.3%', trend: 'down', emoji: '📉' }
  ]

  const pageViews = [
    { page: '/dashboard', views: '124,382', uniques: '43,211', avgTime: '4m 32s', bounce: '32%' },
    { page: '/features', views: '89,234', uniques: '67,892', avgTime: '3m 15s', bounce: '45%' },
    { page: '/pricing', views: '76,123', uniques: '54,321', avgTime: '2m 48s', bounce: '38%' },
    { page: '/docs', views: '54,891', uniques: '32,145', avgTime: '6m 12s', bounce: '28%' },
    { page: '/blog', views: '43,765', uniques: '38,902', avgTime: '5m 03s', bounce: '52%' }
  ]

  const traffic = [
    { source: 'Organic Search', users: '42,384', sessions: '68,234', conversion: '4.2%', color: 'var(--br-hot-pink)' },
    { source: 'Direct', users: '28,192', sessions: '45,328', conversion: '3.8%', color: 'var(--br-cyber-blue)' },
    { source: 'Social Media', users: '15,483', sessions: '23,891', conversion: '2.1%', color: 'var(--br-vivid-purple)' },
    { source: 'Email', users: '8,291', sessions: '12,384', conversion: '5.7%', color: 'var(--br-warm-orange)' },
    { source: 'Referral', users: '6,128', sessions: '9,432', conversion: '3.2%', color: 'var(--br-white)' }
  ]

  const goals = [
    { name: 'Sign Up', completions: 1847, rate: '3.8%', value: '$18,470', status: 'up' },
    { name: 'Subscribe', completions: 423, rate: '22.9%', value: '$42,300', status: 'up' },
    { name: 'Download', completions: 3214, rate: '15.2%', value: '$0', status: 'stable' },
    { name: 'Contact', completions: 892, rate: '8.4%', value: '$44,600', status: 'down' }
  ]

  const devices = [
    { type: 'Desktop', percentage: 52.3, users: 49234, color: 'var(--br-hot-pink)' },
    { type: 'Mobile', percentage: 38.7, users: 36482, color: 'var(--br-cyber-blue)' },
    { type: 'Tablet', percentage: 9.0, users: 8485, color: 'var(--br-vivid-purple)' }
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
                Analytics <span className="text-[var(--br-hot-pink)]">Dashboard</span>
              </h1>
              <p className="br-text-muted">Real-time insights and performance metrics</p>
            </div>
          </div>

          <div className="flex gap-3">
            {['24h', '7d', '30d', '90d', 'all'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded transition-all ${
                  timeRange === range ? 'bg-[var(--br-hot-pink)] text-black' : 'bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-white'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] p-6 rounded transition-all hover-lift">
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl">{metric.emoji}</div>
                <div className={`text-sm font-bold ${metric.trend === 'up' ? 'text-[var(--br-hot-pink)]' : 'text-[var(--br-electric-magenta)]'}`}>
                  {metric.change}
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="br-text-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">User Growth</h3>
            <div className="flex gap-2">
              {['users', 'sessions', 'revenue'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`px-4 py-2 rounded text-sm transition-all capitalize ${
                    chartType === type ? 'bg-[var(--br-hot-pink)] text-black' : 'bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Simple ASCII Chart */}
          <div className="font-mono text-sm space-y-1">
            <div className="flex items-center gap-2">
              <span className="br-text-muted w-12">100K</span>
              <div className="flex-1 h-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded overflow-hidden">
                <div className="h-full bg-[var(--br-hot-pink)]" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="br-text-muted w-12">75K</span>
              <div className="flex-1 h-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded overflow-hidden">
                <div className="h-full bg-[var(--br-hot-pink)]" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="br-text-muted w-12">50K</span>
              <div className="flex-1 h-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded overflow-hidden">
                <div className="h-full bg-[var(--br-hot-pink)]" style={{ width: '68%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="br-text-muted w-12">25K</span>
              <div className="flex-1 h-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded overflow-hidden">
                <div className="h-full bg-[var(--br-hot-pink)]" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="br-text-muted w-12">0</span>
              <div className="flex-1 h-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded"></div>
            </div>
            <div className="flex justify-between br-text-muted mt-4 ml-12">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Traffic Sources */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
            <h3 className="text-2xl font-bold mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {traffic.map((source, idx) => (
                <div key={idx} className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold" style={{ color: source.color }}>{source.source}</div>
                    <div className="text-sm br-text-muted">{source.conversion} CVR</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="br-text-muted">Users</div>
                      <div className="font-bold">{source.users}</div>
                    </div>
                    <div>
                      <div className="br-text-muted">Sessions</div>
                      <div className="font-bold">{source.sessions}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 rounded">
            <h3 className="text-2xl font-bold mb-6">Device Breakdown</h3>
            <div className="space-y-6">
              {devices.map((device, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold">{device.type}</div>
                    <div className="text-sm">
                      <span className="font-bold" style={{ color: device.color }}>{device.percentage}%</span>
                      <span className="br-text-muted ml-2">({device.users.toLocaleString()} users)</span>
                    </div>
                  </div>
                  <div className="h-3 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded overflow-hidden">
                    <div className="h-full" style={{ width: `${device.percentage}%`, backgroundColor: device.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] rounded overflow-hidden mb-12">
          <div className="p-6 border-b border-[var(--br-charcoal)]">
            <h3 className="text-2xl font-bold">Top Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--br-deep-black)] border-b border-[var(--br-charcoal)]">
                <tr>
                  <th className="px-6 py-4 text-left br-text-muted">Page</th>
                  <th className="px-6 py-4 text-right br-text-muted">Views</th>
                  <th className="px-6 py-4 text-right br-text-muted">Unique</th>
                  <th className="px-6 py-4 text-right br-text-muted">Avg Time</th>
                  <th className="px-6 py-4 text-right br-text-muted">Bounce</th>
                </tr>
              </thead>
              <tbody>
                {pageViews.map((page, idx) => (
                  <tr key={idx} className="border-b border-[var(--br-charcoal)] hover:bg-[var(--br-deep-black)] transition-colors">
                    <td className="px-6 py-4 font-mono text-[var(--br-hot-pink)]">{page.page}</td>
                    <td className="px-6 py-4 text-right font-bold">{page.views}</td>
                    <td className="px-6 py-4 text-right br-text-muted">{page.uniques}</td>
                    <td className="px-6 py-4 text-right br-text-muted">{page.avgTime}</td>
                    <td className="px-6 py-4 text-right br-text-muted">{page.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Goal Completions */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
          <h3 className="text-2xl font-bold mb-6">Goal Completions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {goals.map((goal, idx) => (
              <div key={idx} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-6 rounded hover:border-white transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold">{goal.name}</div>
                  <div className={`text-sm ${
                    goal.status === 'up' ? 'text-[var(--br-hot-pink)]' : 
                    goal.status === 'down' ? 'text-[var(--br-electric-magenta)]' : 
                    'br-text-muted'
                  }`}>
                    {goal.status === 'up' ? '↑' : goal.status === 'down' ? '↓' : '→'}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{goal.completions.toLocaleString()}</div>
                <div className="text-sm br-text-muted mb-2">{goal.rate} completion rate</div>
                <div className="text-sm text-[var(--br-hot-pink)]">{goal.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
