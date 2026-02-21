import { StatusEmoji, MetricEmoji } from '@/components/BlackRoadVisuals'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News, tutorials, and insights from the BlackRoad OS team on governed AI, agent orchestration, and compliance.',
}


export default function BlogPage() {
  const posts = [
    {
      title: 'Building 30K Agents: Lessons Learned',
      date: 'Feb 14, 2026',
      author: 'Alexa Amundson',
      excerpt: 'How we scaled from 10 agents to 30,000 in production, and what broke along the way.',
      emoji: '🤖',
      readTime: '8 min read'
    },
    {
      title: 'PS-SHA-∞: Quantum-Resistant Memory',
      date: 'Feb 12, 2026',
      author: 'Alexa Amundson',
      excerpt: 'Our cryptographic hash function that withstands quantum attacks while maintaining perfect memory integrity.',
      emoji: '🔐',
      readTime: '12 min read'
    },
    {
      title: 'Why We Chose Cloudflare + Railway',
      date: 'Feb 10, 2026',
      author: 'Alexa Amundson',
      excerpt: 'Multi-cloud architecture decisions: edge computing meets traditional backends.',
      emoji: '🌐',
      readTime: '6 min read'
    },
    {
      title: 'Self-Healing Infrastructure in Production',
      date: 'Feb 8, 2026',
      author: 'Alexa Amundson',
      excerpt: 'How our systems detect, diagnose, and fix issues automatically—without human intervention.',
      emoji: '🔧',
      readTime: '10 min read'
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-7xl font-bold mb-4 hover-glow">Blog 📝</h1>
          <p className="text-2xl text-gray-400">
            Engineering insights from building BlackRoad OS
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-[var(--br-deep-black)] border-2 border-white/20 rounded-lg p-10 mb-12 hover-lift transition-all">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase font-mono text-gray-500">Featured</span>
            <StatusEmoji status="success" />
          </div>
          <div className="text-5xl mb-6">{posts[0].emoji}</div>
          <h2 className="text-4xl font-bold mb-4">
            {posts[0].title}
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            {posts[0].excerpt}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>{posts[0].author}</span>
            <span>{posts[0].date}</span>
            <span><MetricEmoji type="uptime" />{posts[0].readTime}</span>
          </div>
        </div>

        {/* All Posts */}
        <div className="space-y-8">
          {posts.slice(1).map((post) => (
            <article key={post.title} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8 hover-lift transition-all">
              <div className="flex gap-6">
                <div className="text-4xl">{post.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span><MetricEmoji type="uptime" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated 📬</h2>
          <p className="text-gray-400 mb-6">
            Get the latest engineering insights delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 bg-black border border-[var(--br-charcoal)] rounded px-4 py-3 focus:outline-none focus:border-white transition-colors"
            />
            <button className="px-8 py-3 bg-white text-black font-mono text-sm hover-lift transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
