import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domain → route mapping for multi-domain serving
const DOMAIN_ROUTES: Record<string, string> = {
  'blackroad.io': '/',
  'www.blackroad.io': '/',
  'blackroadai.com': '/alice-qi',
  'www.blackroadai.com': '/alice-qi',
  'lucidia.earth': '/lucidia',
  'www.lucidia.earth': '/lucidia',
  'roadchain.io': '/roadchain',
  'www.roadchain.io': '/roadchain',
  'status.blackroad.io': '/status-page',
  'dashboard.blackroad.io': '/dashboard',
  'fleet.blackroad.io': '/fleet',
  'docs.blackroad.io': '/docs',
  'api.blackroad.io': '/api-docs',
  'console.blackroad.io': '/os',
  'os.blackroad.io': '/os',
  'terminal.blackroad.io': '/terminal',
  'brand.blackroad.io': '/style-guide',
  'blog.blackroad.io': '/blog',
  'careers.blackroad.io': '/careers',
  'contact.blackroad.io': '/contact',
  'pricing.blackroad.io': '/pricing',
  'security.blackroad.io': '/security',
  'team.blackroad.io': '/team',
  'changelog.blackroad.io': '/changelog',
  'agents.blackroad.io': '/agents',
  'alice.blackroad.io': '/alice-qi',
  'prism.blackroad.io': '/prism-console',
  'lucidia.blackroad.io': '/lucidia',
  'blackroad.company': '/about',
  'blackroad.network': '/fleet',
  'blackroad.systems': '/platform',
  'blackroad.me': '/portfolio',
}

const isProtectedRoute = createRouteMatcher([
  '/os/(.*)',
  '/admin-panel(.*)',
  '/settings-page(.*)',
  '/account(.*)',
])

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host')?.replace(':3000', '') ?? ''

  // Multi-domain routing
  if (hostname && DOMAIN_ROUTES[hostname]) {
    const targetPath = DOMAIN_ROUTES[hostname]
    if (pathname === '/' && targetPath !== '/') {
      const url = request.nextUrl.clone()
      url.pathname = targetPath
      return NextResponse.rewrite(url)
    }
  }

  // Protect authenticated routes
  if (isProtectedRoute(request)) {
    await auth.protect()
  }

  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'index, follow')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  return response
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
