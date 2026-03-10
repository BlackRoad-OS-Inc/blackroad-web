// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
import { describe, it, expect } from 'vitest'
import { colors, spacing, gradient } from '../../src/lib/brand'

describe('brand colors', () => {
  it('should have all brand colors defined', () => {
    expect(colors.hotPink).toBe('#FF1D6C')
    expect(colors.amber).toBe('#F5A623')
    expect(colors.electricBlue).toBe('#2979FF')
    expect(colors.violet).toBe('#9C27B0')
    expect(colors.black).toBe('#000000')
    expect(colors.white).toBe('#FFFFFF')
  })
})

describe('brand spacing', () => {
  it('should follow golden ratio progression', () => {
    const values = [spacing.xs, spacing.sm, spacing.md, spacing.lg, spacing.xl]
    expect(values).toEqual([8, 13, 21, 34, 55])
  })

  it('should include extended sizes', () => {
    expect(spacing['2xl']).toBe(89)
    expect(spacing['3xl']).toBe(144)
  })
})

describe('gradient', () => {
  it('should contain all brand colors', () => {
    expect(gradient).toContain(colors.amber)
    expect(gradient).toContain(colors.hotPink)
    expect(gradient).toContain(colors.violet)
    expect(gradient).toContain(colors.electricBlue)
  })

  it('should be a 135deg linear gradient', () => {
    expect(gradient).toMatch(/^linear-gradient\(135deg,/)
  })
})
