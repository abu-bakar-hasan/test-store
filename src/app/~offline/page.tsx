"use client";

import { WifiOff } from "lucide-react";

export default function OfflineFallbackPage() {
  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      {/* Icon */}
      <div className="mb-6">
        <WifiOff size={64} strokeWidth={1} className="text-slate-300 dark:text-slate-600" />
      </div>

      {/* Text Elements */}
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white lowercase tracking-widest mb-3">
        you're offline
      </h1>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
        Please check your connection to continue browsing tournaments and gear.
      </p>

      {/* Action Button */}
      <button 
        onClick={handleReload}
        className="px-8 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-black dark:text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm"
      >
        try again
      </button>
    </div>
  );
}
