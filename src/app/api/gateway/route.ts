import { NextRequest, NextResponse } from "next/server"

const GATEWAY_URL = process.env.BLACKROAD_GATEWAY_URL || "http://127.0.0.1:8787"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { model, messages, provider, stream = false } = body

    const res = await fetch(`${GATEWAY_URL}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-BlackRoad-Version": "1.0",
      },
      body: JSON.stringify({ model, messages, stream }),
      signal: AbortSignal.timeout(30_000),
    })

    if (!res.ok) {
      const error = await res.text()
      return NextResponse.json(
        { error: "Gateway error", detail: error },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    if (message.includes("ECONNREFUSED") || message.includes("fetch failed")) {
      return NextResponse.json(
        { error: "Gateway offline", detail: "Start the BlackRoad gateway: blackroad-core/scripts/start-gateway.sh" },
        { status: 503 }
      )
    }
    return NextResponse.json({ error: "Internal error", detail: message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const res = await fetch(`${GATEWAY_URL}/health`, { signal: AbortSignal.timeout(5_000) })
    const data = await res.json()
    return NextResponse.json({ gateway: "online", ...data })
  } catch {
    return NextResponse.json({ gateway: "offline", url: GATEWAY_URL }, { status: 503 })
  }
}
