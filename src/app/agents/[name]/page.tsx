// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 capitalize">{name}</h1>
      <Card>
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="active">Active</Badge>
        </div>
        <p className="text-gray-400">
          Agent detail view for <strong>{name}</strong>. Connect to the gateway to see live data.
        </p>
      </Card>
    </div>
  )
}
