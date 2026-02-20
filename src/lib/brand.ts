// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.

export const colors = {
  hotPink: '#FF1D6C',
  amber: '#F5A623',
  electricBlue: '#2979FF',
  violet: '#9C27B0',
  black: '#000000',
  white: '#FFFFFF',
} as const

export const spacing = {
  xs: 8,
  sm: 13,
  md: 21,
  lg: 34,
  xl: 55,
  '2xl': 89,
  '3xl': 144,
} as const

export const gradient = `linear-gradient(135deg, ${colors.amber} 0%, ${colors.hotPink} 38.2%, ${colors.violet} 61.8%, ${colors.electricBlue} 100%)`
