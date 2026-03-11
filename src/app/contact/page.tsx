'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Get in Touch
          </h1>
          <p className="text-lg text-[#555]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Talk to our team about BlackRoad OS for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-[#050505] border border-[#111] rounded-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-[#00D4FF22] flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#00D4FF] text-xl">&#x2713;</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Message Sent</h2>
                  <p className="text-[#555] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: 'General Inquiry', message: '' }) }}
                    className="px-6 py-2.5 border border-[#222] text-white text-sm font-semibold rounded-lg hover:border-[#444] transition-all bg-transparent cursor-pointer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] text-[#444] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#333] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#444] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#333] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#444] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#333] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <option>General Inquiry</option>
                      <option>Enterprise Sales</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Press & Media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#444] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#333] transition-colors resize-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-[#FF225510] border border-[#FF225533] rounded-lg text-sm text-[#FF2255]">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-[#eee] transition-all disabled:opacity-50 cursor-pointer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Email', value: 'amundsonalexa@gmail.com', href: 'mailto:amundsonalexa@gmail.com' },
              { label: 'LinkedIn', value: '/in/alexa-amundson', href: 'https://www.linkedin.com/in/alexa-amundson' },
              { label: 'GitHub', value: 'BlackRoad-OS-Inc', href: 'https://github.com/BlackRoad-OS-Inc' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block bg-[#050505] border border-[#111] rounded-xl p-5 hover:border-[#222] transition-all no-underline"
              >
                <div className="text-[10px] text-[#333] uppercase tracking-wider mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {item.label}
                </div>
                <div className="text-sm text-[#888] group-hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.value}
                </div>
              </a>
            ))}

            <div className="bg-[#050505] border border-[#111] rounded-xl p-5">
              <div className="text-[10px] text-[#333] uppercase tracking-wider mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Response Time
              </div>
              <div className="text-sm text-[#888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Typically within 24 hours
              </div>
              <div className="text-xs text-[#333] mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Mon-Fri 9am-6pm CST
              </div>
            </div>

            <div className="bg-[#050505] border border-[#111] rounded-xl p-5">
              <div className="text-[10px] text-[#333] uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Enterprise
              </div>
              <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Need 1,000+ agents with dedicated infrastructure? Our enterprise team will design a custom deployment for your compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
