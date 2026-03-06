// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
export default function OSLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-[#FF1D6C] to-violet-600 animate-pulse" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}
