'use client'

import { SignIn } from '@clerk/nextjs'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-[#0a0a0a] border border-[#222] shadow-2xl rounded-xl",
          },
        }}
        fallbackRedirectUrl="/os"
        signUpUrl="/signup"
      />
    </main>
  )
}
