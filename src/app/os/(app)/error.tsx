// Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[BlackRoad OS] App error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-black text-white p-8">
      <div className="max-w-md text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 border border-red-800/50 mb-6">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>
        <h1 className="text-xl font-bold mb-3">Something went wrong</h1>
        <p className="text-gray-500 text-sm mb-6">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-lg text-sm font-medium transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  );
}
