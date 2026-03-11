'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import AppHeader from '@/components/AppHeader'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/signup')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="flex gap-1">
          {['#FF6B2B', '#FF2255', '#CC00AA', '#8844FF', '#4488FF', '#00D4FF'].map((c, i) => (
            <div
              key={c}
              className="w-1 h-6 rounded-sm"
              style={{
                background: c,
                animation: `barPulse 1.5s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (!isSignedIn) return null

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-black">
          {children}
        </main>
      </div>
    </div>
  )
}
