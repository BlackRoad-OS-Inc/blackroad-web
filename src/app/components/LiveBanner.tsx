import Link from "next/link"

interface WorldsData {
  total: number
  nodes: { aria64: number; alice: number }
}

async function fetchWorldCount(): Promise<WorldsData | null> {
  try {
    const token = process.env.GITHUB_TOKEN || process.env.BLACKROAD_GITHUB_TOKEN
    const headers: Record<string, string> = { Accept: "application/vnd.github.v3+json" }
    if (token) headers.Authorization = `Bearer ${token}`
    const res = await fetch(
      "https://api.github.com/repos/BlackRoad-OS-Inc/blackroad-agents/git/trees/main?recursive=1",
      { headers, next: { revalidate: 120 } }
    )
    if (!res.ok) return null
    const tree = await res.json()
    const paths: string[] = tree.tree
      .map((f: { path: string }) => f.path)
      .filter((p: string) => p.endsWith(".md") && (p.startsWith("worlds/") || p.includes("-worlds/")))
    const aria64 = paths.filter(p => p.startsWith("worlds/")).length
    const alice = paths.filter(p => p.includes("alice")).length
    return { total: paths.length, nodes: { aria64, alice } }
  } catch { return null }
}

export async function LiveBanner() {
  const data = await fetchWorldCount()
  if (!data) return null

  return (
    <div className="relative z-10 border-t border-[rgba(255,29,108,0.15)] bg-[rgba(255,29,108,0.04)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#FF1D6C" }} />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1D6C]" />
          </span>
          <span className="text-sm font-semibold text-white">Live Systems</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-[var(--br-silver)]">
          🌌
          <span className="font-bold text-white">{data.total}</span>
          world artifacts —&nbsp;
          <span className="text-purple-400">{data.nodes.aria64} aria64</span>
          &nbsp;/&nbsp;
          <span className="text-green-400">{data.nodes.alice} alice</span>
        </div>
        <Link href="/worlds" className="text-sm text-[#FF1D6C] hover:text-white transition-colors no-underline ml-auto">
          View Worlds →
        </Link>
      </div>
    </div>
  )
}
