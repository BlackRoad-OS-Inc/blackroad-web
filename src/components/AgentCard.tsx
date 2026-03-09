import type { FC } from "react";

interface Agent {
  id: string;
  name: string;
  type: string;
  status: "active" | "idle" | "busy";
  tasks: number;
  model: string;
}

const AGENT_COLORS: Record<string, string> = {
  LUCIDIA: "#FF1D6C",
  ALICE:   "#2979FF",
  OCTAVIA: "#00E676",
  PRISM:   "#F5A623",
  ECHO:    "#9C27B0",
  CIPHER:  "#212121",
};

const AgentCard: FC<{ agent: Agent }> = ({ agent }) => {
  const color = AGENT_COLORS[agent.name] ?? "#888";
  const statusDot = agent.status === "active" ? "bg-green-400" :
                    agent.status === "busy"   ? "bg-yellow-400" : "bg-gray-400";

  return (
    <div
      className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-5 hover:border-white/30 transition-all"
      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
        <span className="font-bold tracking-wide text-white">{agent.name}</span>
        <span className={`w-2 h-2 rounded-full ml-auto ${statusDot}`} />
      </div>
      
      <div className="text-xs text-white/50 uppercase tracking-widest mb-3">{agent.type}</div>
      
      <div className="flex justify-between text-sm">
        <span className="text-white/70">Tasks</span>
        <span className="text-white font-mono">{agent.tasks.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span className="text-white/70">Model</span>
        <span className="text-white/80 text-xs font-mono">{agent.model}</span>
      </div>
    </div>
  );
};

export default AgentCard;
