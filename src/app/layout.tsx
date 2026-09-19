import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GENCHI Matsuri - CxO Concept by Shristi Rajpoot",
  description: "Live Remote Japanese Festival Immersion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white selection:bg-red-500 selection:text-white font-sans antialiased min-h-screen flex flex-col">
        
        {/* Global Navigation */}
        <nav className="fixed w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🏮</span>
              <span className="font-bold text-xl tracking-tight hidden sm:block">GENCHI Matsuri</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <Link href="/experience" className="hover:text-white transition-colors">The Experience</Link>
              <Link href="/market" className="hover:text-white transition-colors">Market & Strategy</Link>
              <Link href="/book" className="hover:text-white transition-colors">Pricing & Booking</Link>
            </div>
            
            <Link href="/book" className="bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-colors">
              Book Festival
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-white/10 py-12 px-6 text-center text-gray-500 mt-auto bg-black">
          <p className="mb-2">Built with Next.js, Tailwind CSS, and React.</p>
          <p>A CxO Internship Concept created by <strong className="text-white">Shristi Rajpoot</strong> for toraru Inc.</p>
        </footer>
        
      </body>
    </html>
  );
}
