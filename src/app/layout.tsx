import type { Metadata } from "next"
import { Suspense } from "react"
import { ClerkProvider } from "@clerk/nextjs"
// Clerk dark theme applied via appearance variables below
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { LiveBanner } from "./components/LiveBanner"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://blackroad.io"),
  title: {
    default: "BlackRoad OS — The Operating System for Governed AI",
    template: "%s | BlackRoad OS",
  },
  description: "Deploy 30,000 autonomous AI agents with cryptographic identity, deterministic reasoning, and complete audit trails. Built for fintech, healthcare, education, and government.",
  keywords: ["AI platform", "agent orchestration", "governed AI", "compliance", "audit trails", "BlackRoad OS", "ALICE QI", "Lucidia", "RoadChain", "Prism Console", "sovereign AI", "deterministic reasoning", "cryptographic identity", "AI operating system"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BlackRoad OS",
    title: "BlackRoad OS — The Operating System for Governed AI",
    description: "Deploy 30,000 autonomous AI agents with cryptographic identity, deterministic reasoning, and complete audit trails.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackRoad OS — The Operating System for Governed AI",
    description: "Deploy 30,000 autonomous AI agents with cryptographic identity, deterministic reasoning, and complete audit trails.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://blackroad.io",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        // Dark theme via variables
        variables: {
          colorPrimary: "#FF2255",
          colorBackground: "#0a0a0a",
          colorInputBackground: "#111",
          colorInputText: "#f5f5f5",
          borderRadius: "0.5rem",
          fontFamily: "'Space Grotesk', sans-serif",
          fontFamilyButtons: "'Space Grotesk', sans-serif",
        },
        elements: {
          card: "bg-[#0a0a0a] border border-[#222] shadow-2xl",
          headerTitle: "text-white",
          headerSubtitle: "text-[#666]",
          socialButtonsBlockButton: "border-[#222] hover:bg-[#111]",
          formButtonPrimary: "bg-white text-black hover:bg-[#eee]",
          footerActionLink: "text-[#FF2255] hover:text-[#FF6B2B]",
          identityPreview: "bg-[#111] border-[#222]",
          userButtonPopoverCard: "bg-[#0a0a0a] border-[#222]",
          userButtonPopoverActionButton: "text-[#888] hover:text-white hover:bg-[#111]",
        },
      }}
    >
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </head>
        <body style={{
          margin: 0,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "#000",
          color: "#eee",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}>
          <Navigation />
          <div style={{ paddingTop: "58px" }}>
            <Suspense fallback={null}>
              <LiveBanner />
            </Suspense>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
