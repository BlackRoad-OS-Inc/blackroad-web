// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/agents', label: 'Agents' },
  { href: '/metrics', label: 'Metrics' },
]

export function Sidebar() {
  return (
    <aside className="w-56 border-r border-white/10 p-6 flex flex-col">
      <div className="text-xl font-bold mb-8" style={{ color: 'var(--hot-pink)' }}>
        BR
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
