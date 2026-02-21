import { FloatingShapes, StatusEmoji, MetricEmoji, GeometricPattern, BlackRoadSymbol } from '../components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Documentation, tutorials, templates, and guides for building with BlackRoad OS.',
}


export default function ResourcesPage() {
  const resources = [
    {
      category: 'Documentation',
      icon: '📚',
      items: [
        { title: 'Getting Started Guide', description: 'Deploy your first app in 5 minutes', link: '/docs/getting-started' },
        { title: 'API Reference', description: 'Complete REST API documentation', link: '/api-docs' },
        { title: 'CLI Documentation', description: 'Command-line interface guide', link: '/docs/cli' },
        { title: 'Architecture Overview', description: 'System design and principles', link: '/docs/architecture' }
      ]
    },
    {
      category: 'Tutorials',
      icon: '🎓',
      items: [
        { title: 'Deploy Next.js App', description: 'Step-by-step deployment guide', link: '/tutorials/nextjs' },
        { title: 'Multi-Region Setup', description: 'Deploy globally with edge', link: '/tutorials/multi-region' },
        { title: 'CI/CD with GitHub Actions', description: 'Automate your deployments', link: '/tutorials/github-actions' },
        { title: 'Monitoring & Alerts', description: 'Set up observability', link: '/tutorials/monitoring' }
      ]
    },
    {
      category: 'Templates',
      icon: '🎨',
      items: [
        { title: 'SaaS Starter', description: 'Auth + payments + dashboard', link: '/templates/saas' },
        { title: 'E-commerce Store', description: 'Full online store template', link: '/templates/ecommerce' },
        { title: 'Blog Platform', description: 'SEO-optimized blog template', link: '/templates/blog' },
        { title: 'API Backend', description: 'REST API with database', link: '/templates/api' }
      ]
    },
    {
      category: 'Videos',
      icon: '🎥',
      items: [
        { title: 'BlackRoad in 100 Seconds', description: 'Quick overview of the platform', link: '/videos/100-seconds' },
        { title: 'Multi-Agent Architecture', description: 'How our AI agents work', link: '/videos/multi-agent' },
        { title: 'Live Coding Session', description: 'Build and deploy in 20 minutes', link: '/videos/live-coding' },
        { title: 'Customer Stories', description: 'Hear from our users', link: '/videos/customer-stories' }
      ]
    },
    {
      category: 'Guides',
      icon: '📖',
      items: [
        { title: 'Security Best Practices', description: 'Secure your deployments', link: '/guides/security' },
        { title: 'Performance Optimization', description: 'Speed up your apps', link: '/guides/performance' },
        { title: 'Cost Optimization', description: 'Reduce infrastructure costs', link: '/guides/cost' },
        { title: 'Migration Guide', description: 'Move from other platforms', link: '/guides/migration' }
      ]
    },
    {
      category: 'Community',
      icon: '👥',
      items: [
        { title: 'Discord Community', description: '5000+ developers helping each other', link: 'https://discord.gg/blackroad' },
        { title: 'GitHub Discussions', description: 'Feature requests and feedback', link: 'https://github.com/blackroad-os/roadmap' },
        { title: 'Stack Overflow', description: 'Get answers to technical questions', link: 'https://stackoverflow.com/questions/tagged/blackroad' },
        { title: 'Blog', description: 'Latest updates and tutorials', link: '/blog' }
      ]
    }
  ]

  const tools = [
    { name: 'CLI', icon: '⚡', description: 'Command-line interface', link: '/cli' },
    { name: 'VS Code Extension', icon: '💻', description: 'Deploy from your editor', link: '/vscode' },
    { name: 'Browser Extension', icon: '🌐', description: 'Quick access toolbar', link: '/browser' },
    { name: 'Mobile App', icon: '📱', description: 'Monitor on the go', link: '/mobile' }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <GeometricPattern type="lines" opacity={0.03} />
      
      {/* Hero */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-4">
          <BlackRoadSymbol size="lg" />
        </div>
        <h1 className="text-6xl font-bold mb-6 hover-glow">
          Resources <StatusEmoji status="green" />
        </h1>
        <p className="text-2xl br-text-muted mb-8 max-w-3xl">
          Documentation, tutorials, templates, and community resources.
          Everything you need to master BlackRoad OS.
        </p>
      </section>

      {/* Quick Links */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <a 
              key={i}
              href={tool.link}
              className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all hover-lift text-center"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="font-bold mb-2">{tool.name}</h3>
              <p className="text-sm br-text-muted">{tool.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Resources Grid */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto space-y-16">
        {resources.map((section, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">{section.icon}</span>
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, j) => (
                <a 
                  key={j}
                  href={item.link}
                  className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-6 hover:border-white transition-all hover-lift"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="br-text-muted mb-4">{item.description}</p>
                  <span className="text-sm font-bold hover:underline">
                    Learn More →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Popular Resources */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-12">Most Popular</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[var(--br-charcoal)] border-2 border-white p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Quick Start</h3>
            <p className="br-text-muted mb-4">
              Get up and running in under 5 minutes. Deploy your first app today.
            </p>
            <a href="/docs/getting-started" className="font-bold hover:underline">
              Start Now →
            </a>
          </div>

          <div className="bg-[var(--br-charcoal)] border-2 border-white p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3">Multi-Agent Guide</h3>
            <p className="br-text-muted mb-4">
              Learn how our 27+ AI agents work together to manage your infrastructure.
            </p>
            <a href="/docs/multi-agent" className="font-bold hover:underline">
              Learn More →
            </a>
          </div>

          <div className="bg-[var(--br-charcoal)] border-2 border-white p-8">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-3">Join Discord</h3>
            <p className="br-text-muted mb-4">
              Connect with 5000+ developers. Get help, share ideas, and collaborate.
            </p>
            <a href="https://discord.gg/blackroad" className="font-bold hover:underline">
              Join Now →
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl br-text-muted mb-8">
            Get the latest tutorials, product updates, and community highlights.
            Join 10,000+ subscribers.
          </p>
          <div className="flex gap-4 max-w-lg mx-auto">
            <input 
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none"
            />
            <button className="px-8 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-[var(--br-pewter)] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Support */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center border-t border-[rgba(255,255,255,0.15)]">
        <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
        <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
          Our support team and community are here to help you succeed.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/contact"
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[rgba(255,255,255,0.85)] transition-all hover-lift"
          >
            Contact Support
          </a>
          <a 
            href="/docs"
            className="px-8 py-4 border border-[rgba(255,255,255,0.3)] hover:border-white font-bold text-lg transition-all hover-lift"
          >
            Browse Docs
          </a>
        </div>
      </section>
    </main>
  )
}
