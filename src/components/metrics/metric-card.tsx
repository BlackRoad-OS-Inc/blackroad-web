// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { Card } from '@/components/ui/card'

interface MetricCardProps {
  label: string
  value: string
  change?: string
}

export function MetricCard({ label, value, change }: MetricCardProps) {
  return (
    <Card>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      {change && <p className="text-xs text-green-400 mt-1">{change}</p>}
    </Card>
  )
}
