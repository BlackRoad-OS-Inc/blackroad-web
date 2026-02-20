// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm', className)}
      {...props}
    >
      {children}
    </div>
  )
}
