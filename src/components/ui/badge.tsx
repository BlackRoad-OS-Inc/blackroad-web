// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'inactive' | 'busy'
}

const badgeVariants = {
  active: 'bg-green-500/20 text-green-400 border-green-500/30',
  inactive: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  busy: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
}

export function Badge({ variant = 'active', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border', badgeVariants[variant], className)}
      {...props}
    />
  )
}
