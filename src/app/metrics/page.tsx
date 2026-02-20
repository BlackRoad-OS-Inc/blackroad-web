// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { MetricCard } from '@/components/metrics/metric-card'

export default function MetricsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard label="Total Requests" value="48.2k" />
        <MetricCard label="Success Rate" value="99.7%" />
        <MetricCard label="Avg Latency" value="38ms" />
        <MetricCard label="Active Agents" value="6" />
        <MetricCard label="Provider Calls" value="12.1k" />
        <MetricCard label="Cache Hit Rate" value="87%" />
      </div>
    </div>
  )
}
