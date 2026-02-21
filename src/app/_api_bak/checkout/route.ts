import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const priceId = formData.get('priceId')

  if (!priceId || typeof priceId !== 'string') {
    return NextResponse.json(
      { error: 'Missing priceId' },
      { status: 400 }
    )
  }

  const url = new URL('/checkout', request.url)
  url.searchParams.set('priceId', priceId)

  return NextResponse.redirect(url)
}

export async function GET() {
  return NextResponse.json({
    service: 'checkout',
    status: 'ready',
  })
}
