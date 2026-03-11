// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  outputFileTracingRoot: __dirname,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/login', destination: '/os/login', permanent: true },
      { source: '/signup-old', destination: '/signup', permanent: true },
    ]
  },
}

export default nextConfig
