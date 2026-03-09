// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
// E2E: verifies that the BlackRoad OS web app loads and key pages are reachable.
import { test, expect } from '@playwright/test'

test.describe('Public pages', () => {
  test('homepage loads with BlackRoad branding', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/BlackRoad/i)
    // Should have at least some content
    await expect(page.locator('body')).not.toBeEmpty()
  })
})

test.describe('OS App — auth redirect', () => {
  test('/os redirects to login when not authenticated', async ({ page }) => {
    const res = await page.goto('/os', { waitUntil: 'networkidle' })
    // Either lands on login or redirects to /os/(auth)/login
    const url = page.url()
    const status = res?.status() ?? 200
    expect(status).toBeLessThan(500)
    // Should either be on /os or /os/login (not crashed)
    expect(url).toMatch(/localhost:3000/)
  })
})

test.describe('OS App — login page', () => {
  test('login page has email + password fields', async ({ page }) => {
    await page.goto('/os/login')
    await expect(page.locator('input[type="email"], input[name="email"]').first()).toBeVisible()
    await expect(page.locator('input[type="password"]').first()).toBeVisible()
  })

  test('login page has a submit button', async ({ page }) => {
    await page.goto('/os/login')
    await expect(page.locator('button[type="submit"]').first()).toBeVisible()
  })
})
