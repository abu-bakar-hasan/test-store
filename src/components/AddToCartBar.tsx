"use client";

import { useCart } from "@/context/CartContext";

interface AddToCartBarProps {
  product: {
    id: string;
    name: string;
    price: number;
    variant: string;
  };
}

export function AddToCartBar({ product }: AddToCartBarProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 flex gap-4 z-20">
      <button 
        onClick={handleAddToCart}
        className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-black dark:text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
      >
        Add to Cart
      </button>
      <button 
        className="flex-1 bg-black dark:bg-white border border-black dark:border-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest py-3 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
}
