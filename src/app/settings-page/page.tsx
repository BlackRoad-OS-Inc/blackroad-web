'use client'

import { useState } from 'react'
import {
  FloatingShapes,
  AnimatedGrid,
  ScanLine,
  BlackRoadSymbol,
  StatusEmoji
} from '../components/BlackRoadVisuals'

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white relative overflow-hidden">
      <FloatingShapes />
      <AnimatedGrid />
      <ScanLine />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <BlackRoadSymbol size={60} />
            <div>
              <h1 className="text-5xl font-bold mb-2">
                Settings <span className="text-[var(--br-hot-pink)]">&</span> Preferences
              </h1>
              <p className="br-text-muted">Configure your BlackRoad experience</p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Profile */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">👤 Profile</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm br-text-muted mb-2">Full Name</label>
                  <input type="text" placeholder="Alice Chen" className="w-full bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] px-4 py-3 rounded focus:border-[var(--br-hot-pink)] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm br-text-muted mb-2">Email</label>
                  <input type="email" placeholder="alice@techcorp.com" className="w-full bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] px-4 py-3 rounded focus:border-[var(--br-hot-pink)] outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm br-text-muted mb-2">Bio</label>
                <textarea rows={3} placeholder="Tell us about yourself..." className="w-full bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] px-4 py-3 rounded focus:border-[var(--br-hot-pink)] outline-none transition-all resize-none"></textarea>
              </div>
              <button className="px-6 py-2 bg-[var(--br-hot-pink)] text-black rounded font-bold hover:bg-white transition-all">
                Save Profile
              </button>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">🎨 Appearance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div>
                  <div className="font-bold">Dark Mode</div>
                  <div className="text-sm br-text-muted">Use dark theme across the app</div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-14 h-7 rounded-full transition-all ${darkMode ? 'bg-[var(--br-hot-pink)]' : 'bg-[var(--br-charcoal)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all ${darkMode ? 'ml-8' : 'ml-1'}`}></div>
                </button>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-3">Accent Color</div>
                <div className="flex gap-3">
                  {['var(--br-hot-pink)', 'var(--br-cyber-blue)', 'var(--br-vivid-purple)', 'var(--br-warm-orange)', 'var(--br-electric-magenta)', 'var(--br-white)'].map(color => (
                    <button key={color} className="w-10 h-10 rounded border-2 border-[var(--br-charcoal)] hover:border-white transition-all" style={{ backgroundColor: color }}></button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-3">Font Size</div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded transition-all">Small</button>
                  <button className="px-4 py-2 bg-[var(--br-hot-pink)] text-black rounded font-bold">Medium</button>
                  <button className="px-4 py-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded transition-all">Large</button>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">🔔 Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div>
                  <div className="font-bold">Push Notifications</div>
                  <div className="text-sm br-text-muted">Receive desktop notifications</div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-14 h-7 rounded-full transition-all ${notifications ? 'bg-[var(--br-hot-pink)]' : 'bg-[var(--br-charcoal)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all ${notifications ? 'ml-8' : 'ml-1'}`}></div>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div>
                  <div className="font-bold">Email Updates</div>
                  <div className="text-sm br-text-muted">Receive weekly digest emails</div>
                </div>
                <button
                  onClick={() => setEmailUpdates(!emailUpdates)}
                  className={`w-14 h-7 rounded-full transition-all ${emailUpdates ? 'bg-[var(--br-hot-pink)]' : 'bg-[var(--br-charcoal)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all ${emailUpdates ? 'ml-8' : 'ml-1'}`}></div>
                </button>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-3">Notification Types</div>
                <div className="space-y-2">
                  {['Deployments', 'Alerts', 'Team Activity', 'System Updates', 'Security'].map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer hover:text-[var(--br-hot-pink)] transition-colors">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">🔒 Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div>
                  <div className="font-bold">Two-Factor Authentication</div>
                  <div className="text-sm br-text-muted">Add extra security to your account</div>
                </div>
                <button
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`w-14 h-7 rounded-full transition-all ${twoFactor ? 'bg-[var(--br-hot-pink)]' : 'bg-[var(--br-charcoal)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all ${twoFactor ? 'ml-8' : 'ml-1'}`}></div>
                </button>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-2">Change Password</div>
                <div className="text-sm br-text-muted mb-3">Last changed 45 days ago</div>
                <button className="px-4 py-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded transition-all">
                  Update Password
                </button>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-3">Active Sessions</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">MacBook Pro • San Francisco</div>
                      <div className="text-xs br-text-muted">Current session</div>
                    </div>
                    <StatusEmoji status="green" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">iPhone • San Francisco</div>
                      <div className="text-xs br-text-muted">Last active 2h ago</div>
                    </div>
                    <button className="text-[var(--br-electric-magenta)] text-sm hover:underline">Revoke</button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-2">API Keys</div>
                <div className="text-sm br-text-muted mb-3">Manage API access tokens</div>
                <button className="px-4 py-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded transition-all">
                  Manage Keys
                </button>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">⚙️ Advanced</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div>
                  <div className="font-bold">Auto-Save</div>
                  <div className="text-sm br-text-muted">Automatically save changes</div>
                </div>
                <button
                  onClick={() => setAutoSave(!autoSave)}
                  className={`w-14 h-7 rounded-full transition-all ${autoSave ? 'bg-[var(--br-hot-pink)]' : 'bg-[var(--br-charcoal)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all ${autoSave ? 'ml-8' : 'ml-1'}`}></div>
                </button>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] rounded">
                <div className="font-bold mb-2">Export Data</div>
                <div className="text-sm br-text-muted mb-3">Download all your data</div>
                <button className="px-4 py-2 bg-[var(--br-deep-black)] border border-[var(--br-charcoal)] hover:border-[var(--br-hot-pink)] rounded transition-all">
                  Request Export
                </button>
              </div>

              <div className="p-4 bg-[var(--br-deep-black)] border border-[var(--br-electric-magenta)] rounded">
                <div className="font-bold mb-2 text-[var(--br-electric-magenta)]">Delete Account</div>
                <div className="text-sm br-text-muted mb-3">Permanently delete your account and all data</div>
                <button className="px-4 py-2 bg-[var(--br-electric-magenta)] text-white rounded font-bold hover:bg-white hover:text-[var(--br-electric-magenta)] transition-all">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
