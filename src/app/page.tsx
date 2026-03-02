import Image from "next/image";
import Link from "next/link";
import { Menu, Star, ShieldCheck, ArrowRight, ShoppingCart, Circle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-hidden">
      {/* 1. Header (White Background) */}
      <header className="flex items-center justify-between p-6 bg-white z-20 relative">
        <Link href="/">
          <Image
            src="https://ik.imagekit.io/abh/Crickzon%20web%20logo%20main.png?updatedAt=1772378410716"
            alt="Crickzon Logo"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <button className="text-black p-2 -mr-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* 2. Top Hero Typography (White/Light Background) */}
      <section className="px-6 pt-2 pb-12 bg-white relative z-10">
        <div className="flex justify-between items-start max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="italic text-sm text-slate-600">Built with</span>
            <span className="font-bold text-5xl tracking-tighter text-black">STYLE</span>
          </div>
          <div className="flex flex-col items-end text-right mt-16">
            <span className="italic text-sm text-slate-600">Made for</span>
            <span className="font-bold text-5xl tracking-tighter text-black">SKILL</span>
          </div>
        </div>
      </section>

      {/* 3. The Overlapping Batsman Image */}
      <div className="relative z-30 w-full flex justify-center -mt-40 -mb-24 pointer-events-none max-w-md mx-auto">
        <Image
          src="https://res.cloudinary.com/dfkepdzps/image/upload/v1771076028/batsman-hero-pose2_lcpkkd.png"
          alt="Cricket Batsman"
          width={400}
          height={500}
          className="w-full h-auto object-contain drop-shadow-2xl translate-x-4"
          priority
        />
      </div>

      {/* 4. The Main Blue Container */}
      <section className="bg-blue-600 rounded-t-3xl text-white pb-20 pt-24 px-6 relative z-10 flex-1 flex flex-col">
        <div className="max-w-md mx-auto w-full">
          {/* Hero Text */}
          <div className="space-y-1">
            <p className="text-sm font-bold uppercase tracking-wider text-white">New Arrivals</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight mt-1">
              Where Skill <br />
              Meets Power
            </h1>
            <p className="text-white/80 text-sm mt-3 pb-1">
              Shop into the future of cricket accessories
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-white text-blue-600 rounded-full py-2 px-4 shadow-lg hover:bg-slate-50 transition-colors font-bold"
            >
              <span>New Drops</span>
              <div className="bg-blue-600 text-white rounded-full p-1 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-3 gap-2 mt-8">
            <div className="flex flex-col items-center text-center gap-2">
              <Star className="w-6 h-6 text-white" />
              <span className="text-xs font-medium leading-tight mt-1">Pro Graded<br/>Gears</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Circle className="w-6 h-6 text-white" />
              <span className="text-xs font-medium leading-tight mt-1">Tournament<br/>Ready</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-white" />
              <span className="text-xs font-medium leading-tight mt-1">Match<br/>Tested</span>
            </div>
          </div>

          {/* Tournament Teaser Box */}
          <div className="mt-8 border-2 border-dashed border-white/30 rounded-xl p-6 flex items-center justify-center">
            <p className="italic font-bold text-white/50 tracking-wider">
              TOURNAMENT..! COMING SOON...
            </p>
          </div>

          {/* 5. Featured Product Card */}
          {/* Card Container nested inside the blue section overlapping at the bottom */}
          <div className="bg-white rounded-2xl p-4 shadow-xl text-center text-blue-600 mt-8 relative z-10 flex flex-col items-center">
            
            {/* Product Image */}
            <div className="w-full bg-slate-50 rounded-xl aspect-[4/3] relative mb-4 flex items-center justify-center p-4">
              <Image
                src="https://res.cloudinary.com/dfkepdzps/image/upload/v1771076173/product4_bfbajp.png"
                alt="Cricket Jersey"
                fill
                className="object-contain p-4 mix-blend-multiply"
              />
            </div>

            {/* Product Info */}
            <div className="w-full text-left">
              <h3 className="text-2xl font-black text-blue-600 uppercase tracking-tight leading-none mb-1">Cricket Jersey</h3>
              <p className="text-sm font-semibold text-blue-400">Customizable Sports-wear</p>
              
              {/* Price Bar */}
              <div className="bg-blue-600 text-white rounded-full p-1.5 flex items-center justify-between w-full shadow-md mt-4">
                <button className="bg-white text-blue-600 rounded-full p-2.5 flex items-center justify-center hover:bg-slate-100 transition-colors shrink-0">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <div className="flex-1 flex justify-end pr-4">
                  <span className="font-bold text-lg">₹ 4,999.99</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
