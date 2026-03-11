'use client'

import { SignUp } from '@clerk/nextjs'

export default function OSSignUpPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <SignUp fallbackRedirectUrl="/os" signInUrl="/login" />
    </main>
  )
}
