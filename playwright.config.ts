import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 1 : 0,
  workers: process.env['CI'] ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env['PLAYWRIGHT_BASE_URL'] ?? 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: process.env['CI'] ? {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: false,
    timeout: 120_000,
    env: {
      NEXT_PUBLIC_GATEWAY_URL: process.env['NEXT_PUBLIC_GATEWAY_URL'] ?? 'http://localhost:18787',
      NEXT_PUBLIC_AGENTS_API_URL: process.env['NEXT_PUBLIC_AGENTS_API_URL'] ?? 'http://localhost:3001',
    },
  } : undefined,
})
