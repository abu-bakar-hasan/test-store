import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  category: string;
  imageUrl?: string;
}

export default function ProductCard({ name, price, category, imageUrl }: ProductCardProps) {
  return (
    <div className="group border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-slate-950 hover:border-slate-300 dark:hover:border-slate-700 transition-colors p-4 flex flex-col h-full">
      <div className="aspect-square w-full bg-slate-100 dark:bg-slate-800 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={name} 
            fill 
            className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal" 
          />
        ) : (
          <span className="text-slate-400 dark:text-slate-500 text-sm font-medium tracking-wide">[No Image]</span>
        )}
      </div>
      
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">{category}</p>
          <h3 className="text-base font-semibold text-black dark:text-white leading-tight mb-2 group-hover:underline underline-offset-4 decoration-slate-200">
            {name}
          </h3>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-black dark:text-white font-medium">{price}</span>
          <button className="text-xs font-semibold px-3 py-1.5 bg-black dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors rounded-sm uppercase tracking-wider">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
