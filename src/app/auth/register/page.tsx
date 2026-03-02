"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <header className="relative flex items-center p-4 h-16 w-full max-w-md mx-auto px-6">
        <Link href="/" className="z-10 -ml-2 p-2 text-slate-900 transition-opacity hover:opacity-75">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://ik.imagekit.io/abh/Crickzon%20web%20logo%20main.png?updatedAt=1772378410716" 
            alt="Crickzon" 
            className="h-8 w-auto object-contain pointer-events-auto" 
          />
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 flex flex-col justify-center w-full max-w-md mx-auto px-6 pb-20">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-slate-900 mb-8 lowercase tracking-tight">create account</h1>
          
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="e.g., abu bakar" 
              className="w-full border border-slate-200 bg-slate-50 rounded-lg py-3 px-4 mb-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input 
              type="email" 
              placeholder="email address" 
              className="w-full border border-slate-200 bg-slate-50 rounded-lg py-3 px-4 mb-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            <input 
              type="password" 
              placeholder="create password" 
              className="w-full border border-slate-200 bg-slate-50 rounded-lg py-3 px-4 mb-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
            
            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white py-3 rounded-lg mb-8 font-medium transition-opacity hover:opacity-90 lowercase"
            >
              sign up
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 lowercase">
            already have an account?{' '}
            <Link href="/auth/login" className="text-slate-900 font-medium hover:underline">
              log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
