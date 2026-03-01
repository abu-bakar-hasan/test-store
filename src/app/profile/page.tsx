import Link from "next/link";
import { Settings, ChevronRight } from "lucide-react";

export default function ProfilePage() {
  const sections = [
    {
      title: "e-commerce",
      items: [
        { title: "my orders", subtitle: "Track, return, or buy things again", href: "/profile/orders" },
        { title: "saved addresses", href: "/profile/addresses" },
      ]
    },
    {
      title: "cricket",
      items: [
        { title: "my tournaments", subtitle: "View upcoming matches and registrations", href: "/profile/tournaments" },
        { title: "player profile", subtitle: "Manage your stats and team info", href: "/profile/player" },
      ]
    },
    {
      title: "general",
      items: [
        { title: "help & support", href: "/support" },
        { title: "terms & policies", href: "/terms" },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col relative pb-6">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm z-10 w-full">
        <div className="w-8" /> {/* Placeholder for left side alignment */}
        <h1 className="text-sm font-medium text-slate-900 dark:text-white tracking-widest uppercase">profile</h1>
        <button className="p-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors rounded-full text-slate-900 dark:text-white flex items-center justify-center">
          <Settings size={20} strokeWidth={1.5} />
        </button>
      </header>

      <main className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">
        {/* User Info Card */}
        <div className="border border-slate-200 dark:border-slate-800 p-4 rounded-xl mb-8 flex items-center gap-4 bg-white dark:bg-slate-950">
          <div className="w-16 h-16 shrink-0 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
            <UserIconPlaceholder />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-black dark:text-white tracking-wide">abu bakar</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">hello@example.com</p>
          </div>
        </div>

        {/* Dashboard Menu Links */}
        <div className="space-y-8">
          {sections.map((section, sIdx) => (
            <section key={sIdx}>
              <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 px-2">
                {section.title}
              </h3>
              <div className="flex flex-col pt-1">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex justify-between items-center py-4 px-2 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-black dark:text-white lowercase tracking-wide">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                    <ChevronRight size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 px-2">
          <button className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors lowercase tracking-widest">
            log out
          </button>
        </div>
      </main>
    </div>
  );
}

function UserIconPlaceholder() {
  return (
    <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
