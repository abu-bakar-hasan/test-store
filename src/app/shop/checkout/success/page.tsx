import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center px-6 pb-20">
      <div className="flex flex-col items-center w-full max-w-sm">
        {/* Check Circle Icon */}
        <svg 
          className="w-24 h-24 mb-6 stroke-slate-900 dark:stroke-slate-100" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h1 className="text-xl font-bold text-black dark:text-white uppercase tracking-widest mb-1 text-center">
          order confirmed
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 text-center">
          Order #CRK-987654
        </p>

        <div className="w-full flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-sm p-4 mb-10 bg-slate-50 dark:bg-slate-900">
          <p className="text-sm font-medium text-black dark:text-white tracking-wide">
            Arriving by March 5
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <button className="w-full bg-black dark:bg-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest py-4 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
            track order
          </button>
          <Link 
            href="/shop" 
            className="w-full flex items-center justify-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-black dark:text-white text-xs font-bold uppercase tracking-widest py-4 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
