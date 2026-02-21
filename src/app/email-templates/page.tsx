'use client'

import { useState } from 'react'
import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  BlackRoadSymbol,
  CommandPrompt
} from '../components/BlackRoadVisuals'

export default function EmailTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState('welcome')
  const [copied, setCopied] = useState(false)

  const templates = [
    {
      id: 'welcome',
      name: 'Welcome Email',
      subject: 'Welcome to BlackRoad OS! 🚀',
      category: 'Onboarding',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0A0A0A; color: #fff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border: 1px solid #1A1A1A; padding: 40px; }
    h1 { color: #FF0066; font-size: 32px; margin-bottom: 10px; }
    p { color: #888888; line-height: 1.6; margin-bottom: 20px; }
    .cta { background: #FF0066; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Welcome to BlackRoad OS!</h1>
    <p>Hi there,</p>
    <p>We're excited to have you on board. You now have access to the most powerful distributed AI operating system.</p>
    <p>Get started in 3 steps:</p>
    <p>1. Complete your profile<br>2. Connect your first service<br>3. Deploy your first agent</p>
    <a href="https://blackroad.io/dashboard" class="cta">Go to Dashboard →</a>
    <p style="margin-top: 40px; color: #444444; font-size: 12px;">If you didn't sign up, ignore this email.</p>
  </div>
</body>
</html>`
    },
    {
      id: 'reset',
      name: 'Password Reset',
      subject: 'Reset your BlackRoad password',
      category: 'Auth',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0A0A0A; color: #fff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border: 1px solid #1A1A1A; padding: 40px; }
    h1 { color: #FF6B00; font-size: 28px; margin-bottom: 10px; }
    p { color: #888888; line-height: 1.6; margin-bottom: 20px; }
    .cta { background: #FF6B00; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; }
    .code { background: #0A0A0A; border: 1px solid #1A1A1A; padding: 20px; font-size: 24px; letter-spacing: 4px; text-align: center; color: #FF0066; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔐 Password Reset Request</h1>
    <p>We received a request to reset your password. Use the code below:</p>
    <div class="code">A3X9K2</div>
    <p>This code expires in 15 minutes.</p>
    <a href="https://blackroad.io/reset?code=A3X9K2" class="cta">Reset Password →</a>
    <p style="margin-top: 40px; color: #444444; font-size: 12px;">Didn't request this? Contact support immediately.</p>
  </div>
</body>
</html>`
    },
    {
      id: 'invoice',
      name: 'Invoice',
      subject: 'Invoice #12345 from BlackRoad',
      category: 'Billing',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0A0A0A; color: #fff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border: 1px solid #1A1A1A; padding: 40px; }
    h1 { color: #0066FF; font-size: 28px; margin-bottom: 10px; }
    p { color: #888888; line-height: 1.6; margin-bottom: 20px; }
    .invoice { background: #0A0A0A; border: 1px solid #1A1A1A; padding: 20px; margin: 20px 0; }
    .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #1A1A1A; }
    .total { color: #FF0066; font-size: 24px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h1>💳 Invoice #12345</h1>
    <p>Thank you for your payment!</p>
    <div class="invoice">
      <div class="row"><span>Pro Plan</span><span>$99.00</span></div>
      <div class="row"><span>API Usage</span><span>$47.50</span></div>
      <div class="row"><span>Storage</span><span>$12.00</span></div>
      <div class="row"><span class="total">Total</span><span class="total">$158.50</span></div>
    </div>
    <p>Date: Feb 15, 2026</p>
    <p>Payment method: •••• 4242</p>
    <a href="https://blackroad.io/invoices/12345.pdf" style="color: #0066FF;">Download PDF →</a>
  </div>
</body>
</html>`
    },
    {
      id: 'alert',
      name: 'System Alert',
      subject: '⚠️ Service degradation detected',
      category: 'Notifications',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0A0A0A; color: #fff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border: 2px solid #FF6B00; padding: 40px; }
    h1 { color: #FF6B00; font-size: 28px; margin-bottom: 10px; }
    p { color: #888888; line-height: 1.6; margin-bottom: 20px; }
    .alert { background: #FF6B00; color: #000; padding: 20px; border-radius: 4px; font-weight: bold; margin: 20px 0; }
    .cta { background: #FF6B00; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚠️ System Alert</h1>
    <div class="alert">API Gateway latency increased to 2.5s (normal: 45ms)</div>
    <p><strong>Service:</strong> api.blackroad.io</p>
    <p><strong>Detected:</strong> 2026-02-15 00:35 UTC</p>
    <p><strong>Impact:</strong> Some requests may be slow</p>
    <p>Our team is investigating. Check status page for updates.</p>
    <a href="https://status.blackroad.io" class="cta">View Status →</a>
  </div>
</body>
</html>`
    },
    {
      id: 'report',
      name: 'Weekly Report',
      subject: '📊 Your weekly BlackRoad report',
      category: 'Analytics',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0A0A0A; color: #fff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border: 1px solid #1A1A1A; padding: 40px; }
    h1 { color: #7700FF; font-size: 28px; margin-bottom: 10px; }
    p { color: #888888; line-height: 1.6; margin-bottom: 20px; }
    .stat { background: #0A0A0A; border: 1px solid #1A1A1A; padding: 20px; margin: 10px 0; }
    .stat-value { color: #FF0066; font-size: 32px; font-weight: bold; }
    .stat-label { color: #888888; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Weekly Report</h1>
    <p>Here's what happened this week (Feb 8-14):</p>
    <div class="stat">
      <div class="stat-value">12,483</div>
      <div class="stat-label">API Requests (+23%)</div>
    </div>
    <div class="stat">
      <div class="stat-value">847</div>
      <div class="stat-label">Active Users (+15%)</div>
    </div>
    <div class="stat">
      <div class="stat-value">99.97%</div>
      <div class="stat-label">Uptime</div>
    </div>
    <p>Your top performing endpoint: /api/agents (4.2K requests)</p>
    <a href="https://blackroad.io/analytics" style="color: #7700FF;">View Full Report →</a>
  </div>
</body>
</html>`
    },
    {
      id: 'launch',
      name: 'Product Launch',
      subject: '🚀 New feature: Multi-Agent Collaboration',
      category: 'Announcements',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0A0A0A; color: #fff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border: 1px solid #1A1A1A; padding: 40px; }
    h1 { color: #FF0066; font-size: 32px; margin-bottom: 10px; }
    p { color: #888888; line-height: 1.6; margin-bottom: 20px; }
    .feature { background: #0A0A0A; border-left: 3px solid #FF0066; padding: 15px; margin: 15px 0; }
    .cta { background: #FF0066; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 New Feature Launch</h1>
    <p>We're excited to announce Multi-Agent Collaboration!</p>
    <div class="feature">✅ Run 1000+ agents simultaneously</div>
    <div class="feature">✅ Shared memory and context</div>
    <div class="feature">✅ Real-time coordination</div>
    <div class="feature">✅ Zero configuration required</div>
    <p>Available now on all plans. Try it today!</p>
    <a href="https://blackroad.io/features/multi-agent" class="cta">Learn More →</a>
  </div>
</body>
</html>`
    }
  ]

  const currentTemplate = templates.find(t => t.id === selectedTemplate) || templates[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTemplate.html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <BlackRoadSymbol size={60} />
            <div>
              <h1 className="text-5xl font-bold mb-2">
                Email <span className="text-[#FF0066]">Templates</span>
              </h1>
              <p className="br-text-muted">Production-ready HTML email designs</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Template List */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4">Templates ({templates.length})</h3>
            {templates.map(template => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`w-full text-left p-4 rounded transition-all ${
                  selectedTemplate === template.id
                    ? 'bg-[#FF0066] text-black'
                    : 'bg-[#1A1A1A] border border-[#1A1A1A] hover:border-white'
                }`}
              >
                <div className="font-bold mb-1">{template.name}</div>
                <div className={`text-sm ${selectedTemplate === template.id ? 'text-black' : 'br-text-muted'}`}>
                  {template.category}
                </div>
              </button>
            ))}
          </div>

          {/* Preview & Code */}
          <div className="md:col-span-2 space-y-6">
            {/* Template Info */}
            <div className="bg-[#1A1A1A] border border-[#1A1A1A] p-6 rounded">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{currentTemplate.name}</h2>
                  <p className="br-text-muted">Subject: {currentTemplate.subject}</p>
                  <p className="text-sm br-text-muted mt-1">Category: {currentTemplate.category}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-[#FF0066] text-black rounded font-bold hover:bg-white transition-all"
                >
                  {copied ? '✓ Copied!' : '📋 Copy HTML'}
                </button>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-[#1A1A1A] border border-[#1A1A1A] p-6 rounded">
              <h3 className="text-xl font-bold mb-4">Preview</h3>
              <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-4 rounded overflow-auto max-h-[500px]">
                <div dangerouslySetInnerHTML={{ __html: currentTemplate.html }} />
              </div>
            </div>

            {/* HTML Code */}
            <div className="bg-[#1A1A1A] border border-[#1A1A1A] p-6 rounded">
              <h3 className="text-xl font-bold mb-4">HTML Code</h3>
              <pre className="bg-[#0A0A0A] border border-[#1A1A1A] p-4 rounded overflow-x-auto text-xs">
                <code className="text-[#FF0066]">{currentTemplate.html}</code>
              </pre>
            </div>

            {/* Usage Instructions */}
            <div className="bg-[#1A1A1A] border border-[#1A1A1A] p-6 rounded">
              <h3 className="text-xl font-bold mb-4">💡 Usage Instructions</h3>
              <div className="space-y-3 text-sm br-text-muted">
                <p>1. Copy the HTML code above</p>
                <p>2. Paste into your email service (SendGrid, Mailgun, Postmark, etc.)</p>
                <p>3. Replace placeholder values (URLs, names, data)</p>
                <p>4. Test across email clients (Gmail, Outlook, Apple Mail)</p>
                <p>5. Monitor open rates and engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
