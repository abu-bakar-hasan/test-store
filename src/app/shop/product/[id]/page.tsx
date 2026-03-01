import Link from 'next/link';
import { AddToCartBar } from '@/components/AddToCartBar';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col relative pb-20">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm z-10 w-full left-0">
        <Link href="/shop" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white flex items-center justify-center">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <Link href="/shop/cart" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white">
           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </Link>
      </header>

      {/* Image */}
      <div className="w-full aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
         <span className="text-slate-400 dark:text-slate-500 dark:text-slate-500 font-medium tracking-widest uppercase">[Product Image Area]</span>
      </div>

      {/* Details */}
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-black dark:text-white uppercase tracking-wide mb-2">[{id.replace(/-/g, ' ')}]</h1>
          <p className="text-lg font-medium text-slate-800 dark:text-slate-200 tracking-widest">[$00.00]</p>
        </div>

        <div className="border border-slate-200 dark:border-slate-800 rounded-sm p-4 bg-slate-50 dark:bg-slate-900 mb-8">
           <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">Specifications</h3>
           <ul className="space-y-4">
             <li className="flex justify-between items-center text-xs">
               <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">Material</span>
               <span className="text-black dark:text-white font-medium uppercase tracking-wider">[Spec 1]</span>
             </li>
             <li className="flex justify-between items-center text-xs">
               <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">Weight</span>
               <span className="text-black dark:text-white font-medium uppercase tracking-wider">[Spec 2]</span>
             </li>
             <li className="flex justify-between items-center text-xs">
               <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">Size</span>
               <span className="text-black dark:text-white font-medium uppercase tracking-wider">[Spec 3]</span>
             </li>
           </ul>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <AddToCartBar 
        product={{
          id,
          name: id.replace(/-/g, ' '),
          price: 150, // mock price
          variant: "Standard"
        }} 
      />
    </div>
  );
}
