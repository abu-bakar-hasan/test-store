"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export function BottomNav() {
  const pathname = usePathname();
  const { getCartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = getCartCount();

  const navItems = [
    { label: "home", href: "/", icon: Home },
    { label: "store", href: "/shop", icon: ShoppingBag },
    { label: "search", href: "/shop/search", icon: Search },
    { label: "cart", href: "/shop/cart", icon: ShoppingCart, badge: mounted ? cartCount : 0 },
    { label: "profile", href: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 h-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center px-2 pb-[env(safe-area-inset-bottom)] md:hidden">
      {navItems.map((item, idx) => {
        const isActive = pathname === item.href;
        // active colors
        const activeColor = "text-black dark:text-white";
        // inactive colors
        const inactiveColor = "text-slate-400 dark:text-slate-500";
        const colorClass = isActive ? activeColor : inactiveColor;
        const Icon = item.icon;

        return (
          <Link
            key={idx}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${colorClass}`}
          >
            <div className="relative flex items-center justify-center">
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-[8px] font-bold leading-none text-white bg-black dark:bg-white dark:text-black transform translate-x-1/2 -translate-y-1/2 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
