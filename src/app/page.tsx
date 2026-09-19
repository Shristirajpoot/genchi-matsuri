import React from 'react';
import { Zap, Users, AlertTriangle, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      {/* Executive Summary Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden flex flex-col justify-center border-b border-white/5 bg-black">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap size={14} /> toraru CxO Assignment Q19
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Assignment Response: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              GENCHI Matsuri
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-3xl mb-8 leading-relaxed">
            This application is designed specifically to address the 4 pillars of the Question 19 assignment. Below is the executive breakdown of the GENCHI Matsuri product concept, answering exactly who it is for, the problem it solves, the user experience, and why it scales.
          </p>
        </div>
      </section>

      {/* The 4 Assignment Pillars */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Pillar 1: Target Users */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="flex items-center gap-3 text-2xl font-bold mb-4">
                <Users className="text-blue-400" /> Target Users
              </div>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Who is this experience for?</p>
            </div>
            <div className="md:col-span-8 bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-blue-400">The 100M+ Missing Market</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong>Primary:</strong> International Japanophiles aged 18–35 across South/Southeast Asia, Latin America, and the Middle East. These are people deeply passionate about Japanese anime, culture, and food, but who face severe barriers to physical travel (visas, geography, cost). 
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Secondary:</strong> US/European culture enthusiasts seeking authentic, non-touristy deep dives; mobility-limited or elderly individuals worldwide who can no longer travel; and corporate teams seeking unique cultural immersion for team-building.
              </p>
            </div>
          </div>

          {/* Pillar 2: Problem */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="flex items-center gap-3 text-2xl font-bold mb-4">
                <AlertTriangle className="text-orange-400" /> Problem
              </div>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">What unmet need does it solve?</p>
            </div>
            <div className="md:col-span-8 bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-orange-400">The Empathy & Accessibility Gap</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Japan hosts over <strong>300,000 matsuri (festivals)</strong> annually—they are the true, living heartbeat of the culture. Yet, 99% of them are completely inaccessible to international fans. 
              </p>
              <p className="text-gray-300 leading-relaxed">
                Current alternatives fail entirely: VR tours are simulated and lifeless. YouTube videos are passive. Fans have a desperate, unmet need to <strong>participate and feel present</strong> at real cultural events, not just watch recordings of them. They want human connection, spontaneity, and agency in their exploration.
              </p>
            </div>
          </div>

          {/* Pillar 3: Concept */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="flex items-center gap-3 text-2xl font-bold mb-4">
                <Lightbulb className="text-yellow-400" /> Concept
              </div>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">What would users experience?</p>
            </div>
            <div className="md:col-span-8 bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Live Remote Festival Immersion</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Users book a 90-minute live session through GENCHI. They connect via browser to a trained, local human avatar physically present at the festival. The user sees what the avatar sees and directs them in real-time.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8 list-disc pl-5">
                <li><strong>Taste & Buy:</strong> Direct the avatar to buy street food; the avatar describes it live, and users can purchase non-perishables for international shipping.</li>
                <li><strong>Interact:</strong> Walk up to local artisans (e.g., mask carvers) and converse directly through the avatar's real-time translation.</li>
                <li><strong>Participate:</strong> Instruct the avatar to write your specific wish on an ema plaque and hang it at the shrine on your behalf.</li>
              </ul>
              <Link href="/experience" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition-colors">
                Read the full minute-by-minute experience breakdown <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Pillar 4: Why it hits */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="flex items-center gap-3 text-2xl font-bold mb-4">
                <TrendingUp className="text-green-400" /> Why it Hits
              </div>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Why use, share, or repeat?</p>
            </div>
            <div className="md:col-span-8 bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-green-400">Viral, Repeatable, and Scalable</h3>
              <div className="space-y-6">
                <div>
                  <strong className="text-white">1. Unmatched Virality (Share):</strong> A user in India directing a real human through Kyoto's Gion Matsuri is inherently viral content. Every screen-recorded TikTok clip acts as free, zero-CAC marketing.
                </div>
                <div>
                  <strong className="text-white">2. Built-in Seasonality (Repeat):</strong> Japan has 4 distinct seasons of festivals (Spring Hanami, Summer Fireworks, Autumn Harvest, Winter Snow). Experiencing one naturally drives the urge to subscribe to an "Annual Pass" to see the next season. No two festivals are alike.
                </div>
                <div>
                  <strong className="text-white">3. Premium Liveness (Use):</strong> Knowing an event is happening <em>right now</em>, and that you have agency over a real human's actions across the world, creates a psychological premium that passive streaming can never match. It turns an audience member into a participant.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center border-t border-white/5">
        <h2 className="text-3xl font-bold mb-8">Ready to see the product details?</h2>
        <div className="flex justify-center gap-6">
          <Link href="/experience" className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-colors">
            View Experience Flow
          </Link>
          <Link href="/book" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition-colors">
            View Pricing & Booking
          </Link>
        </div>
      </section>
    </div>
  );
}
