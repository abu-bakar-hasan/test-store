import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/context/CartContext";
import { BottomNav } from "@/components/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Crickzon",
  description: "Premium cricket accessories and tournaments.",
  manifest: "/manifest.json",
  icons: {
    icon: "https://ik.imagekit.io/abh/crickzonapplogo.png?updatedAt=1772378568642",
    apple: "https://ik.imagekit.io/abh/crickzonapplogo.png?updatedAt=1772378568642",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Crickzon",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 pb-16`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <BottomNav />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
