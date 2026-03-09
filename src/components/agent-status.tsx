'use client';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { Agent } from '@/lib/api';

export function AgentStatus() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function fetchAgents() {
      try {
        const data = await api.getAgents();
        if (mounted) { setAgents(data); setLoading(false); }
      } catch (err) {
        if (mounted) { setError(err instanceof Error ? err.message : 'Failed to fetch agents'); setLoading(false); }
      }
    }
    fetchAgents();
    const interval = setInterval(fetchAgents, 5000);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  if (loading) return <div className="animate-pulse p-4">Loading agents...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  const statusColor: Record<string, string> = { online: 'bg-green-500', offline: 'bg-gray-500', busy: 'bg-amber-500' };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {agents.map((agent) => (
        <div key={agent.id} className="border border-zinc-800 rounded-lg p-4 bg-zinc-950 hover:border-pink-500/50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-white">{agent.name}</h3>
            <span className={`w-2.5 h-2.5 rounded-full ${statusColor[agent.status]}`} />
          </div>
          <p className="text-sm text-zinc-400 mb-2">{agent.role}</p>
          <div className="flex flex-wrap gap-1">
            {agent.capabilities.slice(0, 3).map((cap) => (
              <span key={cap} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">{cap}</span>
            ))}
          </div>
          <p className="text-xs text-zinc-500 mt-2">Last seen: {new Date(agent.lastSeen).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
