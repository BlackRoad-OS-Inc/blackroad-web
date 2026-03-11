import { MetadataRoute } from 'next'
import { getPublishedPosts } from './blog/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const domains = [
    'https://blackroad.io',
    'https://blackroadai.com',
    'https://lucidia.earth',
    'https://roadchain.io',
    'https://blackroad.company',
    'https://blackroad.network',
    'https://blackroad.systems',
  ]

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/platform', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/alice-qi', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/lucidia', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/prism-console', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/roadchain', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/features', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/docs', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/docs/getting-started', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/docs/integrations', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/docs/multi-agent', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/docs/security', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/fleet', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/agents', priority: 0.7, changeFrequency: 'daily' as const },
    { path: '/terminal', priority: 0.7, changeFrequency: 'daily' as const },
    { path: '/dashboard', priority: 0.7, changeFrequency: 'daily' as const },
    { path: '/api-docs', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/case-studies', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/careers', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/changelog', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/roadmap', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/integrations', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/security', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/memory', priority: 0.6, changeFrequency: 'daily' as const },
    { path: '/worlds', priority: 0.6, changeFrequency: 'daily' as const },
    { path: '/metrics', priority: 0.6, changeFrequency: 'daily' as const },
    { path: '/playground', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/team', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/press-kit', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/status-page', priority: 0.5, changeFrequency: 'daily' as const },
    { path: '/style-guide', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/signup', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/legal-pages', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // Generate blog post routes dynamically
  const blogPosts = getPublishedPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.8 as const,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(post.date),
  }))

  // Generate sitemap entries for all domains
  return domains.flatMap((domain) => [
    ...routes.map((route) => ({
      url: `${domain}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${domain}${post.path}`,
      lastModified: post.lastModified,
      changeFrequency: post.changeFrequency,
      priority: post.priority,
    })),
  ])
}
