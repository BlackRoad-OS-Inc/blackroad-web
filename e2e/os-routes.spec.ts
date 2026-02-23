// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
// E2E: OS dashboard routes — verifies they load without crashing.
// The gateway is mocked via env vars pointing at a stub or offline server.
import { test, expect } from '@playwright/test'

// We need to be logged in for these routes — skip if they redirect
test.describe('OS Conversations page', () => {
  test('conversations page structure loads', async ({ page }) => {
    // May redirect to login — both outcomes are acceptable (no 500 errors)
    const res = await page.goto('/os/conversations', { waitUntil: 'domcontentloaded' })
    expect(res?.status()).toBeLessThan(500)
    // Page should render something
    await expect(page.locator('body')).not.toBeEmpty()
  })
})

test.describe('OS Tasks page', () => {
  test('tasks page loads without crashing', async ({ page }) => {
    const res = await page.goto('/os/tasks', { waitUntil: 'domcontentloaded' })
    expect(res?.status()).toBeLessThan(500)
    await expect(page.locator('body')).not.toBeEmpty()
  })
})

test.describe('OS Workspace page', () => {
  test('workspace page loads without crashing', async ({ page }) => {
    const res = await page.goto('/os/workspace', { waitUntil: 'domcontentloaded' })
    expect(res?.status()).toBeLessThan(500)
  })
})
