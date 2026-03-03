// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client';

import Link from 'next/link';
import { MessageSquare, Plus, CheckSquare, Activity, Bot } from 'lucide-react';

const QUICK_LINKS = [
  {
    href: '/os/conversations',
    icon: MessageSquare,
    title: 'Conversations',
    description: 'Chat with Lucidia and your AI agents',
    gradient: 'from-cyan-700 to-cyan-500',
  },
  {
    href: '/os/tasks',
    icon: CheckSquare,
    title: 'Task Queue',
    description: 'Create and monitor agent tasks',
    gradient: 'from-violet-700 to-violet-500',
  },
  {
    href: '/os/metrics',
    icon: Activity,
    title: 'Metrics',
    description: 'Gateway performance and analytics',
    gradient: 'from-emerald-700 to-emerald-500',
  },
];

export default function WorkspacePage() {
  return (
    <div className="min-h-full bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">Workspace</h1>
          <p className="text-gray-500 text-sm">BlackRoad OS operations dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUICK_LINKS.map(({ href, icon: Icon, title, description, gradient }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-white/20 hover:bg-zinc-800 transition-all"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-white mb-1">{title}</h2>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/os/conversations"
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#FF1D6C] to-violet-600 hover:from-[#FF1D6C]/90 hover:to-violet-600/90 rounded-lg text-sm font-medium transition-all"
          >
            <Plus className="h-4 w-4" />
            New Conversation
          </Link>
          <Link
            href="/os/agents"
            className="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:bg-white/5 rounded-lg text-sm text-gray-400 hover:text-white transition-all"
          >
            <Bot className="h-4 w-4" />
            Browse Agents
          </Link>
        </div>
      </div>
    </div>
  );
}
