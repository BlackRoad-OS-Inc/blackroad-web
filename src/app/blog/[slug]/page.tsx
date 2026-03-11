import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '../posts'
import Edge52TOPS from '../content/52-tops-on-400-dollars'

const contentMap: Record<string, React.ComponentType> = {
  '52-tops-on-400-dollars': Edge52TOPS,
}

export function generateStaticParams() {
  return posts.filter((p) => p.published).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post || !post.published) {
    notFound()
  }

  const Content = contentMap[slug]

  if (!Content) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BlackRoad OS',
      url: 'https://blackroad.io',
    },
    keywords: post.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blackroad.io/blog/${post.slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-block mb-12 text-gray-400 hover:text-white transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          &larr; Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 border border-white/20 text-gray-400"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-6 text-sm text-gray-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>{post.author}</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>{post.readTime}</span>
          </div>

          {/* Gradient divider */}
          <div
            className="h-px mt-8"
            style={{
              background:
                'linear-gradient(90deg, #FF6B2B, #FF2255, #CC00AA, #8844FF, #4488FF, #00D4FF)',
            }}
          />
        </header>

        {/* Article content */}
        <Content />

        {/* Footer gradient divider */}
        <div
          className="h-px mt-16 mb-12"
          style={{
            background:
              'linear-gradient(90deg, #FF6B2B, #FF2255, #CC00AA, #8844FF, #4488FF, #00D4FF)',
          }}
        />

        {/* Post footer */}
        <footer
          className="text-gray-400 text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p className="mb-4">
            Written by{' '}
            <span className="text-white">{post.author}</span> on{' '}
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white transition-colors"
          >
            &larr; More articles
          </Link>
        </footer>
      </article>
    </div>
  )
}
