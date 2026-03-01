export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <span className="text-xl font-bold bg-clip-text text-black dark:text-white">
              Crickzon
            </span>
          </div>
          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 md:mt-0 md:order-1">
            &copy; 2026 Crickzon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
