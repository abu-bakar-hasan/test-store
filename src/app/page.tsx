import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-200 dark:border-slate-800 p-8 lg:p-12 rounded-xl bg-slate-50 dark:bg-slate-900">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
            Premium Cricket Gear, Defined.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md">
            Engineered for performance. Crafted for professionals. Experience the
            pinnacle of cricket accessories with our minimalistic, zero-compromise selection.
          </p>
          <div className="pt-4">
            <Link 
              href="/shop" 
              className="inline-block bg-black dark:bg-white text-white dark:text-slate-950 font-medium px-8 py-3 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors uppercase tracking-widest text-sm"
            >
              Explore Collection
            </Link>
          </div>
        </div>
        
        {/* Placeholder Box for Hero Image */}
        <div className="w-full md:w-1/2 h-80 lg:h-96 border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center rounded-lg">
          <span className="text-slate-400 dark:text-slate-500 dark:text-slate-500 font-medium tracking-widest uppercase text-sm">
            [Hero Image Placeholder]
          </span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">Featured Products</h2>
          <Link href="/shop" className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white uppercase tracking-wider transition-colors">
            View All &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard name="Pro-Grade English Willow" price="$450" category="Bat" />
          <ProductCard name="Test Match Leather Ball" price="$25" category="Ball" />
          <ProductCard name="Elite Batting Gloves" price="$85" category="Protection" />
          <ProductCard name="High-Impact Leg Guards" price="$110" category="Protection" />
        </div>
      </section>

      {/* Upcoming Tournaments List */}
      <section>
        <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          Upcoming Tournaments
        </h2>
        
        <div className="space-y-4">
          {[
            { name: "Summer Bash T20", date: "August 15, 2026", location: "Central Ground" },
            { name: "Premier Corporate League", date: "September 02, 2026", location: "Northside Arena" },
            { name: "Winter Test Championship", date: "November 20, 2026", location: "National Stadium" }
          ].map((tournament, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200 dark:border-slate-800 p-6 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors bg-white dark:bg-slate-950 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-1">{tournament.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 capitalize tracking-wide">
                  {tournament.location}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                  {tournament.date}
                </span>
                <button className="text-sm border border-black dark:border-white text-black dark:text-white px-4 py-1.5 rounded-sm hover:bg-black dark:hover:bg-white hover:text-white transition-colors uppercase font-bold tracking-wider">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
