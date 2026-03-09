import type { Metadata } from "next"
import { Suspense } from "react"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { LiveBanner } from "./components/LiveBanner"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://blackroad-os-web.pages.dev"),
  title: {
    default: "BlackRoad OS — The Operating System for Governed AI",
    template: "%s | BlackRoad OS",
  },
  description: "Deploy 30,000 autonomous AI agents with cryptographic identity, deterministic reasoning, and complete audit trails. Built for fintech, healthcare, education, and government.",
  keywords: ["AI platform", "agent orchestration", "governed AI", "compliance", "audit trails", "BlackRoad OS", "ALICE QI", "Lucidia", "RoadChain", "Prism Console"],
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "var(--br-font)",
        backgroundColor: "var(--br-deep-black)",
        color: "var(--br-cream)",
      }}>
        <Navigation />
        <div style={{ paddingTop: "64px" }}>
          <Suspense fallback={null}>
            <LiveBanner />
          </Suspense>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
