import { NextRequest, NextResponse } from 'next/server'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003'

export async function GET(req: NextRequest) {
  try {
    // In production, get customerId from authenticated user session
    const customerId = req.nextUrl.searchParams.get('customerId')
    
    if (!customerId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    // Forward to API service
    const response = await fetch(`${API_BASE}/api/portal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId,
        returnUrl: `${req.nextUrl.origin}/account`,
      }),
    })

    const data = await response.json()
    
    if (data.url) {
      return NextResponse.redirect(data.url)
    }

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
