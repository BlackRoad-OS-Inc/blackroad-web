import { Suspense } from "react"

const TYPE_ICONS: Record<string, string> = { world: "🌍", lore: "📖", code: "💻" }
const NODE_COLORS: Record<string, string> = { aria64: "text-purple-400", alice: "text-green-400" }

interface World {
  id: string; title: string; node: string; type: string
  path: string; timestamp: string; preview: string | null
}

async function WorldsFeed() {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  let data: any = null
  try {
    const res = await fetch(`${base}/api/worlds?limit=30`, { cache: "no-store" })
    data = await res.json()
  } catch {
    data = { error: "Could not load worlds" }
  }
  if (data.error) return <p className="text-red-400">{data.error}</p>

  const worlds: World[] = data.worlds || []
  const nodes = data.nodes || {}

  return (
    <div>
      <div className="flex gap-4 mb-8">
        <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 flex-1">
          <p className="text-neutral-400 text-sm mb-1">aria64 worlds</p>
          <p className="text-3xl font-bold text-amber-400">{nodes.aria64 ?? 0}</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 flex-1">
          <p className="text-neutral-400 text-sm mb-1">alice worlds</p>
          <p className="text-3xl font-bold text-green-400">{nodes.alice ?? 0}</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 flex-1">
          <p className="text-neutral-400 text-sm mb-1">total</p>
          <p className="text-3xl font-bold text-white">{(nodes.aria64 ?? 0) + (nodes.alice ?? 0)}</p>
        </div>
      </div>

      <div className="space-y-4">
        {worlds.map((w) => (
          <div key={w.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">{TYPE_ICONS[w.type] ?? "🌌"}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-semibold text-white">{w.title}</h3>
                  <span className={`text-xs font-mono ${NODE_COLORS[w.node] ?? "text-neutral-400"}`}>
                    @{w.node}
                  </span>
                  <span className="text-xs text-neutral-600 ml-auto">
                    {new Date(w.timestamp).toLocaleString()}
                  </span>
                </div>
                {w.preview && (
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">{w.preview}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WorldsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">🌌 Worlds</h1>
        <p className="text-neutral-400 mb-8">
          AI-generated world artifacts from autonomous Raspberry Pi nodes — aria64 & alice.
          New worlds every 4 minutes.
        </p>
        <Suspense fallback={
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 animate-pulse">
                <div className="h-4 bg-neutral-800 rounded w-1/3 mb-2" />
                <div className="h-3 bg-neutral-800 rounded w-2/3" />
              </div>
            ))}
          </div>
        }>
          <WorldsFeed />
        </Suspense>
      </div>
    </main>
  )
}
