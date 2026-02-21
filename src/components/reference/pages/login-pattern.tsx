'use client'

import { useState } from 'react'
import { FloatingShapes, GeometricPattern, BlackRoadSymbol, StatusEmoji } from '@/components/BlackRoadVisuals'

export default function Login2Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden flex items-center justify-center">
      <FloatingShapes />
      <GeometricPattern type="diagonal" opacity={0.03} />
      
      <div className="relative z-10 w-full max-w-md px-6">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BlackRoadSymbol size="lg" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="br-text-muted">Sign in to your BlackRoad OS account</p>
        </div>

        {/* Login Card */}
        <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8">
          
          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full px-4 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all flex items-center justify-center gap-2">
              <span>🔑</span>
              Continue with GitHub
            </button>
            <button className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] hover:border-white transition-all flex items-center justify-center gap-2">
              <span>🔐</span>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-[rgba(255,255,255,0.15)]" />
            <span className="text-sm br-text-muted">OR</span>
            <div className="flex-1 border-t border-[rgba(255,255,255,0.15)]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-[var(--br-deep-black)] border border-[rgba(255,255,255,0.15)] focus:border-white transition-all outline-none"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="br-text-muted">Remember me</span>
              </label>
              <a href="/contact" className="text-white hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm br-text-muted">
            Don't have an account?{' '}
            <a href="/signup" className="text-white hover:underline font-bold">
              Sign up
            </a>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center text-xs br-text-muted flex items-center justify-center gap-2">
          <StatusEmoji status="green" />
          <span>Secured with end-to-end encryption</span>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs">
          <div>
            <div className="text-2xl mb-2">🔐</div>
            <div className="br-text-muted">Zero-trust security</div>
          </div>
          <div>
            <div className="text-2xl mb-2">⚡</div>
            <div className="br-text-muted">Instant access</div>
          </div>
          <div>
            <div className="text-2xl mb-2">🌐</div>
            <div className="br-text-muted">Global edge</div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 text-center text-xs text-[var(--br-pewter)]">
          By signing in, you agree to our{' '}
          <a href="/legal-pages" className="hover:br-text-muted">Terms</a>
          {' '}and{' '}
          <a href="/legal-pages" className="hover:br-text-muted">Privacy Policy</a>
        </div>

      </div>
    </main>
  )
}
