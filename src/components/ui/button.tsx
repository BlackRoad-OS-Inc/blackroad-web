// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary: 'bg-[var(--hot-pink)] hover:bg-[var(--hot-pink)]/90 text-white',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
  ghost: 'hover:bg-white/10 text-white',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn('rounded-lg font-medium transition-colors', variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
