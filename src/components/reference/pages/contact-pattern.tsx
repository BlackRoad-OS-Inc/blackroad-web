'use client'

import { StatusEmoji, CommandPrompt } from '../components/BlackRoadVisuals'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold mb-4 hover-glow">
            Get in Touch 💬
          </h1>
          <p className="text-2xl text-gray-400">
            Let's build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-gray-400 mb-8">
                    We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-white text-black font-mono text-sm hover-lift transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-black border border-[var(--br-charcoal)] rounded px-4 py-3 focus:outline-none focus:border-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-black border border-[var(--br-charcoal)] rounded px-4 py-3 focus:outline-none focus:border-white transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2">Subject</label>
                    <select className="w-full bg-black border border-[var(--br-charcoal)] rounded px-4 py-3 focus:outline-none focus:border-white transition-colors">
                      <option>General Inquiry</option>
                      <option>Sales & Pricing</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2">Message</label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full bg-black border border-[var(--br-charcoal)] rounded px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black font-mono text-sm hover-lift transition-all"
                  >
                    🚀 Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Other Ways to Reach Us 📫</h2>
              
              <div className="space-y-6">
                <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-6 hover-lift transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📧</span>
                    <h3 className="text-xl font-bold">Email</h3>
                  </div>
                  <a href="mailto:amundsonalexa@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    amundsonalexa@gmail.com
                  </a>
                </div>

                <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-6 hover-lift transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💼</span>
                    <h3 className="text-xl font-bold">LinkedIn</h3>
                  </div>
                  <a href="https://www.linkedin.com/in/alexa-amundson" className="text-gray-400 hover:text-white transition-colors">
                    /in/alexa-amundson
                  </a>
                </div>

                <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-6 hover-lift transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🐙</span>
                    <h3 className="text-xl font-bold">GitHub</h3>
                  </div>
                  <a href="https://github.com/BlackRoad-OS" className="text-gray-400 hover:text-white transition-colors">
                    github.com/BlackRoad-OS
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <StatusEmoji status="online" />
                <h3 className="text-xl font-bold">Availability</h3>
              </div>
              <p className="text-gray-400 mb-4">
                We typically respond within 24 hours during business days.
              </p>
              <div className="font-mono text-sm text-gray-500">
                <div>Mon-Fri: 9am-6pm PST</div>
                <div>Weekends: Limited support</div>
              </div>
            </div>

            <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-6">
              <CommandPrompt>blackroad contact --urgent</CommandPrompt>
              <p className="text-gray-400 mt-4 text-sm">
                For urgent technical issues, use our emergency support channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
