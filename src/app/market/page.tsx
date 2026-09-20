import React from 'react';
import { Target, AlertTriangle, TrendingUp, Share2, Globe2, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Market() {
  return (
    <div className="w-full pb-24">
      <section className="pt-24 pb-12 px-6 text-center bg-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Target Users & Market Potential</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Who is this for, what unmet need does it solve, and why will it become a hit?
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-12">
        
        {/* Left Column: Users & Problem */}
        <div className="space-y-12">
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Target size={24} /></div>
              <h2 className="text-2xl font-bold">Target Users</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Primary:</strong> International Japanophiles aged 18–35 across South/Southeast Asia, Latin America, and the Middle East. People passionate about anime, food, and culture, but barred from physical travel due to visa or cost barriers.</li>
              <li><strong className="text-white">Secondary:</strong> Enthusiasts in the US/Europe seeking authentic non-touristy experiences, mobility-limited individuals, and corporate teams.</li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl"><AlertTriangle size={24} /></div>
              <h2 className="text-2xl font-bold">The Unmet Need</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Japan hosts over <strong>300,000 matsuri (festivals)</strong> annually, representing the true heartbeat of Japanese culture.
            </p>
            <p className="text-gray-300">
              Yet, this world is invisible to international audiences. VR tours and YouTube are passive and lifeless—they fail to convey the feeling of being there. Millions want to experience a festival live and interactively, but no product makes that possible.
            </p>
          </div>

        </div>

        {/* Right Column: Why it's a hit */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-500/20 text-red-400 rounded-xl"><TrendingUp size={24} /></div>
            <h2 className="text-3xl font-bold">Why it becomes a hit</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 border-b border-white/10 pb-6">
              <Globe2 className="text-gray-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">1. Massive Untapped Demand</h3>
                <p className="text-gray-400">100M+ Japan fans globally who can't visit. This is a continent-sized market hidden in plain sight. 42M visited Japan in 2025, but 50x that number wanted to but couldn't.</p>
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-white/10 pb-6">
              <Share2 className="text-gray-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">2. Inherently Viral</h3>
                <p className="text-gray-400">A user in Lagos directing an avatar through Kyoto's Gion Matsuri is inherently shareable content. Every TikTok or Instagram clip equals free customer acquisition.</p>
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-white/10 pb-6">
              <TrendingUp className="text-gray-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">3. Built-in Repeat Behavior</h3>
                <p className="text-gray-400">300,000 unique festivals across 4 seasons. A spring cherry blossom session naturally leads to a summer fireworks session. High retention through seasonal variety.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <LinkIcon className="text-gray-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">4. Natural B2B Extension</h3>
                <p className="text-gray-400">Tourism boards will pay to feature their festivals. Corporates will pay for team-building. Revenue scales beyond just B2C consumers.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/book" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors inline-block w-full text-center">
              View Pricing & Book →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
