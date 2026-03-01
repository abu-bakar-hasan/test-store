import Link from 'next/link';

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  
  // Mock categories
  const categories = ["bats", "balls", "padding", "accessories"];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white dark:bg-slate-950 z-10">
        <Link href="/shop" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-sm font-bold text-black dark:text-white tracking-widest uppercase">{brand.replace('-', ' ')}</h1>
        <Link href="/shop/cart" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white">
           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 p-4">
        <h2 className="text-black dark:text-white font-semibold text-xs uppercase tracking-widest mb-6 mt-4">Categories by {brand.replace('-', ' ')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, idx) => (
            <Link 
              href={`/shop/brand/${brand}/${category}`}
              key={idx}
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-sm overflow-hidden hover:border-black dark:hover:border-white transition-colors group flex flex-col"
            >
              <div className="aspect-square w-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <span className="text-slate-400 dark:text-slate-500 dark:text-slate-500 text-xs font-medium tracking-widest uppercase">[{category}]</span>
              </div>
              <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between">
                <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wide">{category}</h3>
                <span className="text-black dark:text-white text-sm leading-none opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
