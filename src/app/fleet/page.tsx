import { Suspense } from "react"

async function FleetData() {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  let data: any = null
  try {
    const res = await fetch(`${base}/api/fleet`, { cache: "no-store" })
    data = await res.json()
  } catch {
    data = { error: "Could not reach Pi fleet" }
  }
  if (data.error) return <p className="text-red-400">{data.error}</p>
  const nodes = data.nodes || []
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {nodes.map((n: any) => (
        <div key={n.name} className="bg-neutral-900 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🍓</span>
            <div>
              <h2 className="text-lg font-bold text-white">{n.name}</h2>
              <p className="text-neutral-400 text-sm">{n.ip} · {n.role}</p>
            </div>
            <span className={`ml-auto text-xs px-2 py-1 rounded-full ${n.online ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}>
              {n.online ? "ONLINE" : "OFFLINE"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-neutral-800 rounded-lg p-3">
              <p className="text-neutral-400">Worlds</p>
              <p className="text-2xl font-bold text-amber-400">{n.worlds ?? "—"}</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-3">
              <p className="text-neutral-400">Model</p>
              <p className="text-white font-mono text-xs">{n.model ?? "—"}</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-3">
              <p className="text-neutral-400">CPU</p>
              <p className="text-white">{n.cpu ?? "—"}</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-3">
              <p className="text-neutral-400">Disk Free</p>
              <p className="text-white">{n.disk ?? "—"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">🍓 Pi Fleet</h1>
        <p className="text-neutral-400 mb-8">Live status of autonomous world-generating Raspberry Pi nodes.</p>
        <Suspense fallback={<div className="text-neutral-400 animate-pulse">Loading fleet…</div>}>
          <FleetData />
        </Suspense>
      </div>
    </main>
  )
}
