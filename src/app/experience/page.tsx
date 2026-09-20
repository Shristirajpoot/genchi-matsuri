import React from 'react';
import { MapPin, Code, Zap, Camera, ArrowDown } from 'lucide-react';

export default function Experience() {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="pt-24 pb-12 px-6 text-center bg-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">The Concept: What Users Experience</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A detailed walkthrough of a 90-minute GENCHI Matsuri session. This is not a passive virtual tour—it is a live, controllable immersion.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Step 1 */}
        <div className="mb-20 relative pl-8 border-l-2 border-red-900">
          <div className="absolute w-6 h-6 bg-red-600 rounded-full -left-[13px] top-0 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
          <h2 className="text-red-500 font-bold tracking-widest text-sm mb-2">24 HOURS BEFORE</h2>
          <h3 className="text-3xl font-bold mb-4">The Matsuri Passport</h3>
          <p className="text-gray-400 mb-6 text-lg">
            Users receive a digital briefing on the specific festival: its history, rituals, and key Japanese phrases to use live ("Sumimasen!", "Sugoi!"). Premium users receive a physical kit shipped to their door with festival snacks and a paper lantern to set the mood.
          </p>
        </div>

        {/* Step 2 */}
        <div className="mb-20 relative pl-8 border-l-2 border-red-900">
          <div className="absolute w-6 h-6 bg-red-600 rounded-full -left-[13px] top-0 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
          <h2 className="text-red-500 font-bold tracking-widest text-sm mb-2">LIVE - 90 MINUTES</h2>
          <h3 className="text-3xl font-bold mb-8">Four Signature Interactive Moments</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <MapPin className="text-orange-400 mb-4" size={28} />
              <h4 className="text-xl font-bold mb-2">1. Street Food Discovery</h4>
              <p className="text-gray-400">The avatar navigates the food stalls, buys takoyaki, and describes the taste live. Users can purchase non-perishable items for post-session shipping.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <Code className="text-blue-400 mb-4" size={28} />
              <h4 className="text-xl font-bold mb-2">2. Artisan Encounter</h4>
              <p className="text-gray-400">The avatar approaches a mask-carver or calligrapher. The user asks questions directly; the avatar translates and relays answers in real-time.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <Zap className="text-yellow-400 mb-4" size={28} />
              <h4 className="text-xl font-bold mb-2">3. Participatory Ritual</h4>
              <p className="text-gray-400">The avatar acts on behalf of the user — writing a personal wish on an ema (wooden prayer plaque) or joining a traditional dance circle.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <Camera className="text-purple-400 mb-4" size={28} />
              <h4 className="text-xl font-bold mb-2">4. Personal Keepsake</h4>
              <p className="text-gray-400">Throughout the session, the avatar captures photos and short videos specifically for the user, framing exactly what the user asks to see.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8 border-l-2 border-transparent">
          <div className="absolute w-6 h-6 bg-red-600 rounded-full -left-[13px] top-0 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
          <h2 className="text-red-500 font-bold tracking-widest text-sm mb-2">POST-SESSION</h2>
          <h3 className="text-3xl font-bold mb-4">The Matsuri Memory</h3>
          <p className="text-gray-400 text-lg mb-6">
            Within 24 hours, the user receives a curated package: a personalized photo album and video highlight reel from their session. Any festival-exclusive souvenirs purchased through the avatar are packed and shipped internationally.
          </p>
        </div>

      </section>
    </div>
  );
}
