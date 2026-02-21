import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  BlackRoadSymbol,
  GlitchText
} from '../components/BlackRoadVisuals'
import Link from 'next/link'

export default function ErrorPages() {
  const errors = [
    {
      code: '404',
      title: 'Page Not Found',
      message: 'The page you\'re looking for doesn\'t exist or has been moved.',
      emoji: '🔍',
      actions: [
        { label: 'Go Home', href: '/' },
        { label: 'View Docs', href: '/docs' },
        { label: 'Contact Support', href: '/support' }
      ]
    },
    {
      code: '500',
      title: 'Internal Server Error',
      message: 'Something went wrong on our end. Our team has been notified.',
      emoji: '⚠️',
      actions: [
        { label: 'Try Again', href: '#' },
        { label: 'Status Page', href: '/status' },
        { label: 'Report Issue', href: '/support' }
      ]
    },
    {
      code: '403',
      title: 'Access Forbidden',
      message: 'You don\'t have permission to access this resource.',
      emoji: '🔒',
      actions: [
        { label: 'Sign In', href: '/login' },
        { label: 'Upgrade Plan', href: '/pricing' },
        { label: 'Contact Admin', href: '/support' }
      ]
    },
    {
      code: '503',
      title: 'Service Unavailable',
      message: 'We\'re temporarily down for maintenance. We\'ll be back soon!',
      emoji: '🔧',
      actions: [
        { label: 'Status Updates', href: '/status' },
        { label: 'Follow on Twitter', href: 'https://twitter.com/blackroados' },
        { label: 'Email Updates', href: '/subscribe' }
      ]
    },
    {
      code: '429',
      title: 'Too Many Requests',
      message: 'You\'ve exceeded the rate limit. Please wait before trying again.',
      emoji: '⏱️',
      actions: [
        { label: 'View Limits', href: '/docs/rate-limits' },
        { label: 'Upgrade Plan', href: '/pricing' },
        { label: 'Optimize Usage', href: '/docs/best-practices' }
      ]
    },
    {
      code: '401',
      title: 'Unauthorized',
      message: 'Authentication required. Please sign in to continue.',
      emoji: '🔑',
      actions: [
        { label: 'Sign In', href: '/login' },
        { label: 'Create Account', href: '/signup' },
        { label: 'Reset Password', href: '/reset' }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <BlackRoadSymbol size={80} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">
            Error <span className="text-[var(--br-electric-magenta)]">Pages</span>
          </h1>
          <p className="br-text-muted text-xl">Beautiful error pages for every situation</p>
        </div>

        {/* Error Page Examples */}
        <div className="space-y-12">
          {errors.map((error, idx) => (
            <div key={idx} className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] hover:border-[var(--br-electric-magenta)] rounded p-12 transition-all">
              <div className="max-w-3xl mx-auto text-center">
                {/* Error Code */}
                <div className="text-8xl font-bold mb-6">
                  <GlitchText text={error.code} />
                </div>

                {/* Emoji */}
                <div className="text-6xl mb-6">{error.emoji}</div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4">{error.title}</h2>

                {/* Message */}
                <p className="text-xl br-text-muted mb-8 max-w-2xl mx-auto">
                  {error.message}
                </p>

                {/* Actions */}
                <div className="flex gap-4 justify-center flex-wrap">
                  {error.actions.map((action, actionIdx) => (
                    <Link
                      key={actionIdx}
                      href={action.href}
                      className={`px-6 py-3 rounded font-bold transition-all ${
                        actionIdx === 0
                          ? 'bg-[var(--br-electric-magenta)] text-white hover:bg-white hover:text-black'
                          : 'bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-white'
                      }`}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>

                {/* Error ID */}
                <div className="mt-8 pt-8 border-t border-[var(--br-charcoal)]">
                  <p className="text-sm br-text-faint font-mono">
                    Error ID: {Math.random().toString(36).substring(7).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Guide */}
        <div className="mt-16 bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
          <h3 className="text-2xl font-bold mb-6">📚 Implementation Guide</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-3 text-[var(--br-hot-pink)]">Next.js App Router</h4>
              <pre className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-4 rounded overflow-x-auto text-sm">
                <code className="br-text-muted">{`// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>404 - Page Not Found</h1>
    </div>
  )
}

// app/error.tsx
'use client'
export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>500 - Something went wrong</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3 text-[var(--br-cyber-blue)]">Express.js</h4>
              <pre className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] p-4 rounded overflow-x-auto text-sm">
                <code className="br-text-muted">{`// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found'
  })
})

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).render('error', {
    message: err.message
  })
})`}</code>
              </pre>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3 text-[var(--br-vivid-purple)]">Best Practices</h4>
              <ul className="space-y-2 br-text-muted">
                <li>✓ Keep error messages clear and actionable</li>
                <li>✓ Provide multiple paths forward (links)</li>
                <li>✓ Include error IDs for support tracking</li>
                <li>✓ Log errors server-side for debugging</li>
                <li>✓ Monitor error rates and patterns</li>
                <li>✓ Test error pages regularly</li>
                <li>✓ Match your brand design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
