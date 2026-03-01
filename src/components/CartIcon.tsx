"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartIcon() {
  const { getCartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const count = getCartCount();

  return (
    <Link href="/shop/cart" className="relative text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors p-2 flex items-center justify-center">
      <span className="sr-only">Cart</span>
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {mounted && count > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-black dark:bg-white dark:text-black transform translate-x-1/4 -translate-y-1/4 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
}
