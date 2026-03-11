'use client'

import { SignIn } from '@clerk/nextjs'

export default function OSLoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <SignIn fallbackRedirectUrl="/os" signUpUrl="/signup" />
    </main>
  )
}
