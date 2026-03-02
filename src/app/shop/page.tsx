import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col">

      {/* Navigation Div */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="flex-1 flex items-center border border-slate-200 dark:border-slate-800 rounded-sm px-3 py-2 bg-slate-50 dark:bg-slate-900">
          <svg className="h-5 w-5 text-slate-400 dark:text-slate-500 dark:text-slate-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-transparent text-sm text-black dark:text-white placeholder-slate-400 outline-none"
          />
        </div>
        <button 
          className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 rounded-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" 
          aria-label="Filter"
        >
          <svg className="h-5 w-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="px-4 py-6">
        
        {/* Brands Carousel Section */}
        <section className="mb-8">
          <h2 className="text-black dark:text-white font-semibold text-sm uppercase tracking-widest mb-4">Brands</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Link
                href={`/shop/brand/brand-${item}`}
                key={item} 
                className="snap-start shrink-0 w-32 h-20 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-white hover:border-black dark:hover:border-white transition-colors flex items-center justify-center text-center rounded-sm"
              >
                <span className="text-xs text-slate-400 dark:text-slate-500 dark:text-slate-500 uppercase tracking-widest font-medium">Brand {item}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop by Categories Section */}
        <section>
          <h2 className="text-black dark:text-white font-semibold text-sm uppercase tracking-widest mb-4">Shop by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Bats", "Balls", "Protective Gear", "Clothing", "Accessories"].map((category, idx) => {
              const categorySlug = category.toLowerCase().replace(" ", "-");
              return (
              <Link
                href={`/shop/category/${categorySlug}`}
                key={idx}
                className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-sm overflow-hidden hover:border-black dark:hover:border-white transition-colors cursor-pointer group flex flex-col"
              >
                <div className="aspect-square w-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-500 dark:text-slate-500 text-xs font-medium tracking-widest uppercase">[Image]</span>
                </div>
                <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between">
                  <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wide">{category}</h3>
                  <span className="text-black dark:text-white text-sm leading-none opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </div>
              </Link>
            )})}
          </div>
        </section>

      </main>
    </div>
  );
}
