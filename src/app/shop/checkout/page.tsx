import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col relative pb-32">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm z-10 w-full">
        <Link href="/shop/cart" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white flex items-center justify-center">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-sm font-medium text-black dark:text-white tracking-widest uppercase">checkout</h1>
        <div className="w-8" /> {/* Placeholder for right side alignment */}
      </header>

      <main className="flex-1 px-4 py-6 space-y-8">
        {/* Contact & Shipping */}
        <section>
          <h2 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-4">Contact & Shipping</h2>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-black dark:text-white text-sm px-4 py-3 placeholder-slate-400 dark:placeholder-slate-500 rounded-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-black dark:text-white text-sm px-4 py-3 placeholder-slate-400 dark:placeholder-slate-500 rounded-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-black dark:text-white text-sm px-4 py-3 placeholder-slate-400 dark:placeholder-slate-500 rounded-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            <textarea 
              placeholder="Delivery Address" 
              rows={3}
              className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-black dark:text-white text-sm px-4 py-3 placeholder-slate-400 dark:placeholder-slate-500 rounded-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
            />
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-4">payment</h2>
          <div className="space-y-3">
            {[ "UPI", "Credit/Debit Card", "Cash on Delivery" ].map((method, idx) => (
              <label key={idx} className="flex items-center justify-between border border-slate-200 dark:border-slate-800 p-4 rounded-sm cursor-pointer hover:border-black dark:hover:border-white transition-colors">
                <span className="text-sm font-medium text-black dark:text-white">{method}</span>
                <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600"></div>
              </label>
            ))}
          </div>
        </section>

        {/* Order Summary Snippet */}
        <section className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
           <span className="text-black dark:text-white font-bold uppercase tracking-wider text-sm">Total to pay:</span>
           <span className="text-black dark:text-white font-bold tracking-widest text-lg">$165.00</span>
        </section>
      </main>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-0 w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 z-20">
        <Link 
          href="/shop/checkout/success"
          className="w-full flex items-center justify-center bg-black dark:bg-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest py-4 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
        >
          Pay Now
        </Link>
      </div>
    </div>
  );
}
