import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard', '/dashboard-2', '/account', '/settings-page', '/admin-panel', '/checkout'],
      },
    ],
    sitemap: 'https://blackroad.io/sitemap.xml',
  }
}
