import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white dark:bg-slate-950 z-10">
        <Link href="/shop" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-sm font-bold text-black dark:text-white tracking-widest uppercase">{category.replace('-', ' ')}</h1>
        <button className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link 
              href={`/shop/product/prod-${category}-${item}`}
              key={item}
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-sm overflow-hidden hover:border-black dark:hover:border-white transition-colors group flex flex-col"
            >
              <div className="aspect-[4/5] w-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <span className="text-slate-400 dark:text-slate-500 dark:text-slate-500 text-[10px] font-medium tracking-widest uppercase">[IMG]</span>
              </div>
              <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col">
                <h3 className="text-[10px] sm:text-xs font-medium text-black dark:text-white uppercase tracking-wide truncate mb-1">[{category} {item}]</h3>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest">[$00.00]</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
