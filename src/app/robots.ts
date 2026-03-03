import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/os/workspace', '/os/conversations', '/os/tasks', '/os/metrics', '/os/monitoring', '/os/governance', '/os/settings', '/os/agents', '/dashboard', '/dashboard-2', '/account', '/settings-page', '/admin-panel', '/checkout'],
      },
    ],
    sitemap: 'https://blackroad-os-web.pages.dev/sitemap.xml',
  }
}
