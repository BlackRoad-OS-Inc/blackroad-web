// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { MetricCard } from '@/components/metrics/metric-card'

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">System Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="Agents" value="6" />
        <MetricCard label="Uptime" value="99.9%" />
        <MetricCard label="Requests" value="12.4k" />
        <MetricCard label="Latency" value="42ms" />
      </div>
    </div>
  )
}
