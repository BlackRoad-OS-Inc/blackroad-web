import { Suspense } from "react"

async function MemoryChain() {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  let data: any = null
  try {
    const res = await fetch(`${base}/api/memory`, { cache: "no-store" })
    data = await res.json()
  } catch {
    data = { error: "Memory system offline" }
  }
  if (data.error) return <p className="text-red-400">{data.error}</p>
  const chain = data.chain || []
  return (
    <div className="space-y-3">
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6">
        <p className="text-neutral-400 text-sm">Chain length: <span className="text-white font-bold">{chain.length}</span></p>
        <p className="text-neutral-400 text-sm">Head hash: <code className="text-amber-400 font-mono text-xs">{chain[chain.length - 1]?.hash ?? "—"}</code></p>
      </div>
      {chain.map((entry: any, i: number) => (
        <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-neutral-500">#{i + 1}</span>
            <code className="text-amber-400 font-mono text-xs">{entry.hash}</code>
            <span className="text-neutral-600 text-xs ml-auto">{entry.timestamp}</span>
          </div>
          <p className="text-white text-sm">{entry.content}</p>
          {entry.prev && (
            <p className="text-neutral-600 text-xs mt-1 font-mono">← {entry.prev}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function MemoryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">🧠 Memory Chain</h1>
        <p className="text-neutral-400 mb-8">PS-SHA∞ cryptographic hash chain — tamper-evident AI memory journal.</p>
        <Suspense fallback={<div className="text-neutral-400 animate-pulse">Reading memory chain…</div>}>
          <MemoryChain />
        </Suspense>
      </div>
    </main>
  )
}
