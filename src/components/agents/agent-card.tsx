// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface AgentCardProps {
  name: string
  title: string
  role: string
  color: string
  status?: 'active' | 'inactive' | 'busy'
}

export function AgentCard({ name, title, role, color, status = 'active' }: AgentCardProps) {
  return (
    <Card className="hover:border-white/20 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        <h3 className="font-semibold capitalize">{name}</h3>
        <Badge variant={status}>{status}</Badge>
      </div>
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </Card>
  )
}
