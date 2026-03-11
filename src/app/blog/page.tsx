import Link from 'next/link'
import type { Metadata } from 'next'
import { posts, getPublishedPosts } from './posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Engineering insights on edge AI, distributed infrastructure, mesh networking, and sovereign computing from the BlackRoad OS team.',
  keywords: [
    'edge AI',
    'raspberry pi cluster',
    'hailo-8',
    'mesh networking',
    'self-hosted infrastructure',
    'WireGuard',
    'AI inference',
    'distributed systems',
    'BlackRoad OS',
  ],
}

export default function BlogPage() {
  const published = getPublishedPosts()
  const upcoming = posts.filter((p) => !p.published)

  const featured = published[0]
  const rest = published.slice(1)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-block mb-8 text-gray-400 hover:text-white transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1
            className="text-7xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Blog
          </h1>
          <p className="text-2xl text-gray-400">
            Engineering insights from building BlackRoad OS
          </p>
        </div>

        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block">
            <div className="bg-[var(--br-deep-black)] border-2 border-white/20 rounded-lg p-10 mb-12 hover:border-white/40 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs uppercase text-gray-500"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Featured
                </span>
              </div>
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {featured.title}
              </h2>
              <p className="text-xl text-gray-400 mb-6">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 border border-white/10 text-gray-500"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="flex items-center gap-6 text-sm text-gray-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>{featured.author}</span>
                <span>
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Other published posts */}
        {rest.length > 0 && (
          <div className="space-y-8 mb-12">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <article className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8 hover:border-white/30 transition-all">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-white/10 text-gray-500"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-6 text-sm text-gray-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Upcoming posts */}
        {upcoming.length > 0 && (
          <>
            <h2
              className="text-2xl font-bold mb-6 text-gray-500"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Coming Soon
            </h2>
            <div className="space-y-6 mb-16">
              {upcoming.map((post) => (
                <article
                  key={post.slug}
                  className="border border-white/5 rounded-lg p-8 opacity-60"
                >
                  <h3
                    className="text-xl font-bold mb-2 text-gray-400"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{post.excerpt}</p>
                  <div
                    className="flex items-center gap-6 text-xs text-gray-600"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span>{post.readTime}</span>
                    <span>
                      {post.tags.slice(0, 3).join(' / ')}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Subscribe CTA */}
        <div className="mt-16 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-10 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-6">
            Get the latest engineering insights delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-black border border-[var(--br-charcoal)] rounded px-4 py-3 focus:outline-none focus:border-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              className="px-8 py-3 bg-white text-black text-sm hover:bg-gray-200 transition-all"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
