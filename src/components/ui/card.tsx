// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'highlight'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
}: CardProps) {
  const variants = {
    default: 'bg-white/5 border border-white/10',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10',
    highlight: 'bg-white/5 border border-[#FF1D6C]/30 shadow-lg shadow-[#FF1D6C]/10',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div className={cn('rounded-xl', variants[variant], paddings[padding], className)}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-lg font-semibold text-white', className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-sm text-gray-400', className)}>{children}</p>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-4 flex items-center', className)}>{children}</div>
}

export default Card
