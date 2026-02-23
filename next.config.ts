// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export', // removed — API routes require server/edge runtime
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: __dirname,
}

export default nextConfig
