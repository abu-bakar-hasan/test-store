import Link from 'next/link';

export default function CartPage() {
  const cartItems = [
    { id: 1, name: "Pro-Grade English Willow", variant: "Size: SH", price: 450, quantity: 1 },
    { id: 2, name: "Elite Batting Gloves", variant: "Size: M", price: 85, quantity: 2 },
    { id: 3, name: "Test Match Leather Ball", variant: "Color: Red", price: 25, quantity: 6 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col relative pb-32">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm z-10 w-full">
        <Link href="/shop" className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-black dark:text-white flex items-center justify-center">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-sm font-medium text-black dark:text-white tracking-widest uppercase">cart</h1>
        <button className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors">
          Clear All
        </button>
      </header>

      {/* Cart Items List */}
      <main className="flex-1 px-4 py-2">
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 py-6 border-b border-slate-200 dark:border-slate-800 relative">
              {/* Image Placeholder */}
              <div className="w-20 h-20 shrink-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">[img]</span>
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wide pr-8">{item.name}</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">{item.variant}</p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-full bg-white dark:bg-slate-950">
                    <button className="px-2 py-1 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-l-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-xs font-medium text-black dark:text-white px-2 min-w-[32px] text-center">{item.quantity}</span>
                    <button className="px-2 py-1 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-r-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Price */}
                  <span className="text-sm font-bold text-black dark:text-white tracking-widest">${item.price}</span>
                </div>
              </div>

              {/* Trash Icon */}
              <button className="absolute top-6 right-0 p-1 text-slate-400 dark:text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800 rounded-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-8 bg-slate-50 dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-sm">
          <h2 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">Subtotal</span>
              <span className="text-black dark:text-white font-medium tracking-widest">${subtotal}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">Shipping</span>
              <span className="text-black dark:text-white font-medium tracking-widest">${shipping}</span>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm">
               <span className="text-black dark:text-white font-bold uppercase tracking-wider">Total</span>
               <span className="text-black dark:text-white font-bold tracking-widest">${total}</span>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-0 w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 z-20">
        <button className="w-full bg-black dark:bg-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest py-4 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
