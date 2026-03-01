"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, X, ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export default function SearchPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Auto-focus the search input when the page mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col relative pb-20">
      {/* Search Header */}
      <header className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white dark:bg-slate-950 z-10 w-full">
        <button 
          onClick={() => router.back()} 
          className="p-1 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full flex items-center justify-center shrink-0"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        
        <div className="relative flex-1">
          <input 
            ref={inputRef}
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-2 pl-3 pr-10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-base"
          />
          {query.length > 0 && (
            <button 
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X size={16} strokeWidth={2} />
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 px-4">
        {/* Recent Searches Section */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 lowercase uppercase-none tracking-wide mt-6 mb-3">
            recent
          </h2>
          <div className="flex flex-wrap gap-2">
            {[ "english willow bat", "batting gloves", "sg tournament ball" ].map((pill, idx) => (
              <Link 
                key={idx} 
                href="#"
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white transition-colors"
              >
                {pill}
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 lowercase tracking-wide mt-8 mb-3">
            trending now
          </h2>
          <div className="flex flex-col">
            {[ 
              "kookaburra ghost", 
              "mrf genius grand", 
              "gray-nicolls shockwave" 
            ].map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group"
              >
                <span className="text-sm font-medium text-black dark:text-white lowercase tracking-wide">
                  {item}
                </span>
                <ArrowUpLeft size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
