// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { gateway } from '../../src/lib/api'

describe('gateway', () => {
  const originalFetch = globalThis.fetch

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
  })

  it('should call fetch with the correct URL', async () => {
    const mockResponse = { status: 'ok' }
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    } as Response)

    const result = await gateway('/v1/health')
    expect(fetch).toHaveBeenCalledWith('http://127.0.0.1:8787/v1/health', undefined)
    expect(result).toEqual(mockResponse)
  })

  it('should pass request init options', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    } as Response)

    const init = { method: 'POST', body: '{}' }
    await gateway('/v1/agents', init)
    expect(fetch).toHaveBeenCalledWith('http://127.0.0.1:8787/v1/agents', init)
  })

  it('should throw on non-ok response', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    } as Response)

    await expect(gateway('/v1/health')).rejects.toThrow(
      'Gateway error: 500 Internal Server Error',
    )
  })

  it('should throw on network error', async () => {
    vi.mocked(fetch).mockRejectedValue(new TypeError('fetch failed'))

    await expect(gateway('/v1/health')).rejects.toThrow('fetch failed')
  })
})
