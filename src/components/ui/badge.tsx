// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'active'
  | 'busy'
  | 'inactive'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    default:  'bg-white/10 text-gray-300 border-white/20',
    success:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    active:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning:  'bg-amber-500/10 text-amber-400 border-amber-500/20',
    busy:     'bg-amber-500/10 text-amber-400 border-amber-500/20',
    error:    'bg-red-500/10 text-red-400 border-red-500/20',
    inactive: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
    info:     'bg-[#2979FF]/10 text-[#2979FF] border-[#2979FF]/20',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
