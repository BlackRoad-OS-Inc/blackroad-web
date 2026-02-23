import { NextResponse } from "next/server"

const REPO = "BlackRoad-OS-Inc/blackroad-agents"
const GITHUB_API = "https://api.github.com"
const TOKEN = process.env.GITHUB_TOKEN || process.env.BLACKROAD_GITHUB_TOKEN

interface WorldArtifact {
  id: string
  title: string
  node: string
  type: "world" | "lore" | "code"
  path: string
  timestamp: string
  preview?: string
}

function parseWorldPath(path: string): Omit<WorldArtifact, "preview"> | null {
  // e.g. alice-worlds/20260223_035248_world_relay-4.md
  //      worlds/20260223_040642_code_code-25.md
  const match = path.match(/^([\w-]+)\/((\d{8})_(\d{6})_(world|lore|code)_(.+))\.md$/)
  if (!match) return null
  const [, dir, filename, date, time, type, slug] = match
  const node = dir === "worlds" ? "aria64" : dir.replace("-worlds", "")
  const ts = `${date.slice(0,4)}-${date.slice(4,6)}-${date.slice(6,8)}T${time.slice(0,2)}:${time.slice(2,4)}:${time.slice(4,6)}Z`
  return {
    id: filename,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    node,
    type: type as "world" | "lore" | "code",
    path,
    timestamp: ts,
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Math.min(parseInt(searchParams.get("limit") || "20"), 50)
  const node = searchParams.get("node") // "aria64" | "alice" | null

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    }
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`

    const treeRes = await fetch(
      `${GITHUB_API}/repos/${REPO}/git/trees/main?recursive=1`,
      { headers, next: { revalidate: 120 } }
    )

    if (!treeRes.ok) {
      return NextResponse.json({ error: "GitHub API error", status: treeRes.status }, { status: 502 })
    }

    const tree = await treeRes.json()
    const worldPaths: string[] = tree.tree
      .map((f: { path: string }) => f.path)
      .filter((p: string) => (p.startsWith("worlds/") || p.endsWith("-worlds/") || p.includes("-worlds/")) && p.endsWith(".md"))

    const artifacts: WorldArtifact[] = worldPaths
      .map(parseWorldPath)
      .filter((a): a is Omit<WorldArtifact, "preview"> => a !== null)
      .filter(a => !node || a.node === node)
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
      .slice(0, limit)

    // Fetch preview for first 5
    const withPreviews = await Promise.all(
      artifacts.map(async (a, i) => {
        if (i >= 5) return { ...a, preview: null }
        try {
          const r = await fetch(
            `${GITHUB_API}/repos/${REPO}/contents/${a.path}`,
            { headers, next: { revalidate: 300 } }
          )
          if (r.ok) {
            const data = await r.json()
            const text = Buffer.from(data.content, "base64").toString("utf-8")
            return { ...a, preview: text.trim().slice(0, 280) }
          }
        } catch {}
        return { ...a, preview: null }
      })
    )

    return NextResponse.json({
      total: artifacts.length,
      nodes: { aria64: worldPaths.filter(p => p.startsWith("worlds/")).length, alice: worldPaths.filter(p => p.includes("alice")).length },
      worlds: withPreviews,
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
