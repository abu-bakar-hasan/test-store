import Image from "next/image";
import Link from "next/link";
import { Menu, Star, ShieldCheck, ArrowRight, ShoppingCart, Circle, User } from "lucide-react";

const TrustBadge = ({ Icon, label }: { Icon: any, label: string }) => {
  return (
    <span className="flex flex-col items-center gap-2 w-24">
      <Icon className="w-7 h-7 text-white" />
      <span className="text-center text-xs text-blue-100 dark:text-blue-200">{label}</span>
    </span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* 1. Header (White Background) */}
      <header className="flex items-center justify-between p-6 bg-white dark:bg-slate-950 z-20 relative max-w-7xl mx-auto w-full transition-colors duration-300">
        <Link href="/">
          <Image
            src="https://ik.imagekit.io/abh/Crickzon%20web%20logo%20main.png?updatedAt=1772378410716"
            alt="Crickzon Logo"
            width={120}
            height={32}
            className="h-8 w-auto object-contain dark:invert transition-all"
            priority
          />
        </Link>
        <div className="flex items-center gap-1 -mr-2">
          <Link href="/auth/login" className="text-black dark:text-white p-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-full transition-colors">
            <User className="w-6 h-6 stroke-[1.5]" />
          </Link>
          <button className="text-black dark:text-white p-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* 2. Top Hero Typography (White/Light Background) & Overlapping Image */}
      <section className="flex justify-between px-6 relative my-8 md:my-16 max-w-5xl mx-auto w-full z-10">
        <h1 className="flex flex-col">
          <span className="font-medium text-xl italic md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400">
            Built with
          </span>
          <span className="font-bold text-5xl md:text-7xl lg:text-[6rem] md:ml-8 tracking-tighter text-black dark:text-white leading-none mt-1">
            STYLE
          </span>
        </h1>

        <div className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 z-10 w-[45%] md:w-[35%] min-w-48 max-w-md pointer-events-none">
          <Image
            src="https://res.cloudinary.com/dfkepdzps/image/upload/v1771076028/batsman-hero-pose2_lcpkkd.png"
            alt="Batsman"
            width={500}
            height={600}
            className="w-full h-auto object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.05)] translate-x-4 mix-blend-multiply dark:mix-blend-normal"
            priority
          />
        </div>

        <h1 className="flex flex-col items-end text-right mt-20 md:mt-32">
          <span className="font-medium text-xl italic md:text-2xl lg:text-3xl md:mr-8 text-slate-600 dark:text-slate-400">
            Made for
          </span>
          <span className="font-bold text-5xl md:text-7xl lg:text-[6rem] tracking-tighter text-black dark:text-white leading-none mt-1">
            SKILL
          </span>
        </h1>
      </section>

      {/* 4. The Main Blue Container */}
      <section className="bg-blue-600 dark:bg-blue-700 relative grid grid-cols-1 md:grid-cols-2 max-w-6xl text-white w-[95%] md:w-full px-6 py-10 md:py-16 rounded-[2rem] md:rounded-[3rem] mx-auto md:gap-x-12 mt-12 mb-24 overflow-visible shadow-xl border border-transparent dark:border-blue-500/20 z-20 transition-colors duration-300">
        
        {/* Box #1: Text Content */}
        <div className="flex flex-col justify-center relative z-20 md:pl-8">
          <p className="text-blue-200 dark:text-blue-300 text-sm md:text-base font-bold uppercase tracking-wider">
            New Arrivals
          </p>
          
          <h1 className="text-4xl font-extrabold w-[80%] md:w-full md:text-5xl lg:text-6xl leading-tight mt-3 mb-2 tracking-tight drop-shadow-lg text-white">
            Where Skill <br className="hidden lg:block"/> Meets Power
          </h1>

          <p className="text-sm md:text-lg tracking-wide text-blue-100 dark:text-blue-200 w-[90%] md:w-4/5 mt-2 opacity-90">
            Shop into the future of cricket accessories
          </p>

          <Link href="/shop" className="flex items-center bg-white dark:bg-slate-900 rounded-full p-1.5 mt-8 w-fit hover:scale-105 transition-transform shadow-lg group border border-transparent dark:border-slate-700">
            <span className="text-blue-600 dark:text-blue-400 px-5 font-bold text-sm md:text-base transition-colors">New Drops</span>
            <span className="bg-blue-600 dark:bg-blue-500 p-2.5 rounded-full text-white group-hover:bg-blue-700 dark:group-hover:bg-blue-400 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Box #2: Trust Badges */}
        <div className="flex justify-between items-start md:items-center w-full mt-10 md:mt-0 md:grid md:grid-cols-3 md:grid-rows-3 md:w-fit md:place-items-center md:ml-auto relative z-20 md:gap-2 lg:gap-8 lg:pr-8">
          <div className="scale-90 md:scale-100 md:col-start-1 md:row-start-2 transition-transform hover:scale-110">
            <TrustBadge Icon={Star} label={"Pro Graded Gears"} />
          </div>
          <div className="scale-90 md:scale-100 md:col-start-2 md:row-start-1 transition-transform hover:scale-110">
             <TrustBadge Icon={Circle} label={"Tournament Ready"} />
          </div>
          <div className="scale-90 md:scale-100 md:col-start-3 md:row-start-2 transition-transform hover:scale-110">
             <TrustBadge Icon={ShieldCheck} label={"Match Tested"} />
          </div>
        </div>

        {/* Box #3: COMING SOON */}
        <div className="flex items-center justify-center md:justify-start min-h-36 relative z-20 mt-12 md:mt-8 md:col-start-1 md:row-start-2 md:pl-8">
          <div className="border-2 border-dashed border-white/30 dark:border-white/20 rounded-2xl px-6 py-8 w-full md:w-4/5 flex items-center justify-center bg-blue-600/30 dark:bg-blue-900/30 backdrop-blur-sm transition-colors duration-300">
            <h2 className="text-white/60 dark:text-white/50 text-2xl md:text-2xl lg:text-3xl font-black italic uppercase tracking-wider animate-pulse text-center leading-snug">
              Tournament..! <br className="md:hidden" /> Coming Soon...
            </h2>
          </div>
        </div>

        {/* Box #4: Product Card */}
        <div className="relative z-30 p-2 bg-white dark:bg-slate-900 rounded-3xl text-blue-600 dark:text-blue-400 w-full max-w-sm mx-auto md:mx-0 md:ml-auto shadow-2xl mt-16 md:mt-8 md:col-start-2 md:row-start-2 md:-mb-24 lg:-mb-28 lg:-mr-4 transition-transform hover:-translate-y-2 border border-transparent dark:border-slate-800">
          <div className="w-full bg-[radial-gradient(ellipse_at_center,#f8fafc_0%,#cbd5e1_100%)] dark:bg-[radial-gradient(ellipse_at_center,#1e293b_0%,#0f172a_100%)] rounded-2xl aspect-[4/3] relative mb-4 flex items-center justify-center p-4 overflow-hidden transition-colors duration-300">
            <Image
              src="https://res.cloudinary.com/dfkepdzps/image/upload/v1771076173/product4_bfbajp.png"
              alt="Cricket Jersey"
              fill
              className="object-contain p-4 mix-blend-multiply dark:mix-blend-normal scale-110 transition-all"
            />
          </div>
          <div className="flex flex-col justify-between px-3 pb-3">
            <span className="text-2xl md:text-xl lg:text-2xl font-black uppercase tracking-tight text-center mt-2 text-blue-600 dark:text-blue-300">
              Cricket Jersey
            </span>
            <span className="text-sm md:text-xs lg:text-sm font-semibold text-blue-400 dark:text-blue-500 text-center mb-5 mt-1 transition-colors">
              Customizable Sports-wear
            </span>
            <span className="flex items-center bg-blue-600 dark:bg-blue-500 text-white rounded-full p-1.5 w-full shadow-md transition-colors">
              <span className="text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 rounded-full p-3 hover:scale-105 transition-all cursor-pointer border border-transparent dark:border-slate-700">
                <ShoppingCart className="w-5 h-5" />
              </span>
              <span className="flex items-center justify-center flex-1 pr-6 text-xl font-bold tracking-wide dark:text-white">
                ₹ 4,999.99
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
