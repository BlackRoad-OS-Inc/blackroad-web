import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const PLANS: Record<string, { priceId: string; name: string }> = {
  developer: {
    priceId: process.env.STRIPE_PRICE_DEVELOPER || 'price_developer',
    name: 'BlackRoad OS Developer',
  },
  professional: {
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL || 'price_professional',
    name: 'BlackRoad OS Professional',
  },
  enterprise: {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE || 'price_enterprise',
    name: 'BlackRoad OS Enterprise',
  },
}

export async function POST(request: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey) {
    return NextResponse.json(
      { error: 'Stripe not configured. Set STRIPE_SECRET_KEY in Cloudflare Pages environment variables.' },
      { status: 500 }
    )
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2024-12-18.acacia' })

  try {
    const { plan, email } = await request.json()
    const planConfig = PLANS[plan] || PLANS.professional

    const origin = request.headers.get('origin') || 'https://blackroad.io'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: email || undefined,
      line_items: [
        {
          price: planConfig.priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: {
        plan: plan,
        source: 'blackroad-web',
      },
      subscription_data: {
        metadata: {
          plan: plan,
        },
      },
    })

    return NextResponse.json({ url: session.url, sessionId: session.id })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Stripe checkout error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
