import Link from "next/link";
import Image from "next/image";

const categoryImages: Record<string, string> = {
  shoes: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769347110/shoes-crickzon_nslnil.png",
  "cricket-kit": "https://res.cloudinary.com/dfkepdzps/image/upload/v1769347111/kit-crickzon_vecjiw.png",
  "protective-gear": "https://res.cloudinary.com/dfkepdzps/image/upload/v1769607650/Pads_xadsdx.png",
  pads: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769607650/Pads_xadsdx.png",
  "elbow-pad": "https://res.cloudinary.com/dfkepdzps/image/upload/v1769607650/ElbowGuards_zyjcik.png",
  helmet: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769607651/Helmet_csnvgf.png",
  balls: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769347111/ball-crickzon_xixv3w.png",
  wicket: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769347111/wicket-crickzon_qgqdyg.png",
  bats: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769347110/bat-crickzon_rrskpn.png",
  "keeping-gloves": "https://res.cloudinary.com/dfkepdzps/image/upload/v1769607650/KeepingGloves_dqsvl6.png",
  "batting-gloves": "https://res.cloudinary.com/dfkepdzps/image/upload/v1769347110/gloves-crickzon_agnplq.png",
  "ball-throwers": "https://res.cloudinary.com/dfkepdzps/image/upload/v1769607651/BallThrowers_mju36b.png",
  clothing: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769658553/DefaultCricketKits_owxyeq.png",
  accessories: "https://res.cloudinary.com/dfkepdzps/image/upload/v1769649533/DefaultWicketNgills_twatbl.png",
};

const brandLogos = [
  { id: "mrf", name: "MRF", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Mrf-logo.png" },
  { id: "kookaburra", name: "Kookaburra", url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Kookaburra_sports.png" },
  { id: "ceat", name: "CEAT", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/CEAT_Logo.svg" },
  { id: "sg", name: "SG", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/SG-Logo.png" },
  { id: "ss", name: "SS", url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sareen_Sports_Industries_Logos%2C_2022.png" },
];

export default function ShopPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col">

      {/* Navigation Div */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="flex-1 flex items-center border border-slate-200 dark:border-slate-800 rounded-sm px-3 py-2 bg-slate-50 dark:bg-slate-900">
          <svg className="h-5 w-5 text-slate-400 dark:text-slate-500 dark:text-slate-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-transparent text-sm text-black dark:text-white placeholder-slate-400 outline-none"
          />
        </div>
        <button 
          className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 rounded-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" 
          aria-label="Filter"
        >
          <svg className="h-5 w-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="px-4 py-6">
        
        {/* Brands Carousel Section */}
        <section className="mb-8">
          <h2 className="text-black dark:text-white font-semibold text-sm uppercase tracking-widest mb-4">Brands</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {brandLogos.map((brand) => (
              <Link
                href={`/shop/brand/${brand.id}`}
                key={brand.id} 
                className="snap-start shrink-0 w-32 h-20 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-200 hover:bg-white dark:hover:bg-white hover:border-black dark:hover:border-slate-400 transition-colors flex items-center justify-center text-center rounded-sm relative group overflow-hidden"
              >
                <Image 
                  src={brand.url}
                  alt={brand.name}
                  fill
                  className="object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Shop by Categories Section */}
        <section>
          <h2 className="text-black dark:text-white font-semibold text-sm uppercase tracking-widest mb-4">Shop by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Bats", "Balls", "Batting Gloves", "Keeping Gloves", 
              "Pads", "Helmet", "Shoes", "Cricket Kit",
              "Elbow Pad", "Ball Throwers", "Wicket"
            ].map((category, idx) => {
              const categorySlug = category.toLowerCase().replace(" ", "-");
              return (
              <Link
                href={`/shop/category/${categorySlug}`}
                key={idx}
                className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-sm overflow-hidden hover:border-black dark:hover:border-white transition-colors cursor-pointer group flex flex-col"
              >
                <div className="aspect-square w-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 relative">
                  {categoryImages[categorySlug] ? (
                    <Image 
                      src={categoryImages[categorySlug]} 
                      alt={category} 
                      fill 
                      className="object-contain p-4 mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform" 
                    />
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500 text-xs font-medium tracking-widest uppercase">[Image]</span>
                  )}
                </div>
                <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between">
                  <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wide">{category}</h3>
                  <span className="text-black dark:text-white text-sm leading-none opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </div>
              </Link>
            )})}
          </div>
        </section>

      </main>
    </div>
  );
}
