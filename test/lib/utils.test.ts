// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { describe, it, expect } from 'vitest'
import { cn, formatDate, formatNumber, capitalize } from '../../src/lib/utils'

describe('cn', () => {
  it('should join class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('should filter falsy values', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b')
  })
})

describe('formatNumber', () => {
  it('should format thousands', () => {
    expect(formatNumber(1500)).toBe('1.5k')
  })

  it('should format millions', () => {
    expect(formatNumber(2_500_000)).toBe('2.5M')
  })

  it('should pass through small numbers', () => {
    expect(formatNumber(42)).toBe('42')
  })
})

describe('formatDate', () => {
  it('should format a Date object', () => {
    const result = formatDate(new Date('2026-01-15T00:00:00'))
    expect(result).toContain('Jan')
    expect(result).toContain('15')
    expect(result).toContain('2026')
  })

  it('should format a date string', () => {
    const result = formatDate('2025-12-25')
    expect(result).toContain('Dec')
    expect(result).toContain('2025')
  })
})

describe('capitalize', () => {
  it('should capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('')
  })
})
