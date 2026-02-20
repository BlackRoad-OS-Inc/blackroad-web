// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.

export function Header() {
  return (
    <header className="h-16 border-b border-white/10 flex items-center px-8">
      <div
        className="h-1 w-32 rounded-full mr-4"
        style={{ background: 'var(--gradient-brand)' }}
      />
      <h2 className="text-lg font-semibold">BlackRoad OS</h2>
      <div className="flex-1" />
      <span className="text-sm text-gray-400">v0.1.0</span>
    </header>
  )
}
