import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { CartIcon } from "./CartIcon";

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
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
