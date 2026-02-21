import { CommandPrompt, StatusEmoji, MetricEmoji } from '@/components/BlackRoadVisuals'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Documentation',
  description: 'Complete API reference for BlackRoad OS — agent management, RoadChain queries, Lucidia workflows, and PS-SHA-infinity identity.',
}


export default function APIDocsPage() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/status',
      desc: 'Get system status',
      emoji: '🟢'
    },
    {
      method: 'POST',
      path: '/api/agents',
      desc: 'Create new agent',
      emoji: '🤖'
    },
    {
      method: 'GET',
      path: '/api/agents/:id',
      desc: 'Get agent details',
      emoji: '🔍'
    },
    {
      method: 'POST',
      path: '/api/memory',
      desc: 'Write to memory',
      emoji: '💾'
    },
    {
      method: 'GET',
      path: '/api/metrics',
      desc: 'Get system metrics',
      emoji: '📊'
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-7xl font-bold mb-4 hover-glow">API Reference 🔌</h1>
          <p className="text-2xl text-gray-400">
            Complete REST API documentation for BlackRoad OS
          </p>
        </div>

        {/* Quick Start */}
        <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Authentication 🔑</h2>
          <p className="text-gray-400 mb-4">
            All API requests require an API key in the Authorization header:
          </p>
          <CommandPrompt>curl -H "Authorization: Bearer YOUR_API_KEY"</CommandPrompt>
        </div>

        {/* Base URL */}
        <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Base URL 🌐</h2>
          <div className="font-mono text-lg text-[var(--br-warm-orange)]">
            https://api.blackroad.io/v1
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Endpoints 📋</h2>
          <div className="space-y-6">
            {endpoints.map((endpoint) => (
              <div key={endpoint.path} className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-6 hover-lift transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{endpoint.emoji}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded font-mono text-xs ${
                        endpoint.method === 'GET' ? 'bg-[var(--br-cyber-blue)]' : 'bg-[var(--br-hot-pink)]'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-lg">{endpoint.path}</code>
                    </div>
                    <p className="text-gray-400">{endpoint.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Request */}
        <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Example Request 💻</h2>
          <pre className="bg-black border border-[var(--br-charcoal)] rounded p-6 overflow-x-auto font-mono text-sm text-[var(--br-warm-orange)]">
            <code>{`POST /api/agents HTTP/1.1
Host: api.blackroad.io
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "my-agent",
  "role": "worker",
  "capabilities": ["compute", "storage"]
}`}</code>
          </pre>
        </div>

        {/* Example Response */}
        <div className="bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Example Response ✅</h2>
          <pre className="bg-black border border-[var(--br-charcoal)] rounded p-6 overflow-x-auto font-mono text-sm text-[var(--br-cyber-blue)]">
            <code>{`{
  "id": "agent_abc123",
  "name": "my-agent",
  "role": "worker",
  "status": "online",
  "created_at": "2026-02-15T00:00:00Z",
  "capabilities": ["compute", "storage"]
}`}</code>
          </pre>
        </div>

        {/* Rate Limits */}
        <div className="mt-12 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Rate Limits ⚡</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase text-gray-500 mb-2">Free Tier</div>
              <div className="text-3xl font-bold">1,000 <span className="text-lg text-gray-400">/ hour</span></div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-500 mb-2">Pro Tier</div>
              <div className="text-3xl font-bold">10,000 <span className="text-lg text-gray-400">/ hour</span></div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-500 mb-2">Enterprise</div>
              <div className="text-3xl font-bold">Unlimited</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
