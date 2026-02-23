// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
// Server component wrapper — required to export generateStaticParams
// while the actual UI lives in ConversationContent.tsx ('use client')
import ConversationContent from './ConversationContent'

export function generateStaticParams() {
  // Conversation IDs are runtime-only; static shell renders empty
  return []
}

export default function ConversationPage() {
  return <ConversationContent />
}
