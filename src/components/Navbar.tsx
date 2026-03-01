import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-black dark:text-white font-bold text-xl tracking-tight">
              Crickzon
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors px-3 py-2 text-sm font-medium">
              Shop
            </Link>
            <Link href="/tournaments" className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors px-3 py-2 text-sm font-medium">
              Tournaments
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/shop/cart" className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors p-2">
              <span className="sr-only">Cart</span>
              {/* Simple Cart Wireframe Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
