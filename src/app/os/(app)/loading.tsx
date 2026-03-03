// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.

export default function AppLoading() {
  return (
    <div className="flex items-center justify-center min-h-full bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#FF1D6C]/30 border-t-[#FF1D6C] rounded-full animate-spin" />
        <p className="text-xs text-gray-600">Loading…</p>
      </div>
    </div>
  );
}
