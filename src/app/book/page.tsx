"use client";

import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="bg-white/5 border border-red-500/30 p-12 rounded-3xl max-w-2xl text-center">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Reservation Received!</h2>
          <p className="text-gray-400 text-lg mb-8">
            Thank you for your interest in GENCHI Matsuri. This is a highly functional concept prototype built for toraru's CxO internship assignment by Shristi Rajpoot.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            ← Back to Booking Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-24">
      <section className="pt-24 pb-12 px-6 text-center bg-black border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing & Booking</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Experience Japan for less than a movie ticket. Select your package below.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 py-12">
        
        {/* Pricing Tiers */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Select a Package</h2>
          
          <div className="border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-colors cursor-pointer bg-white/5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Standard Session</h3>
                <p className="text-gray-400 text-sm">Perfect for first-timers</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">¥5,000</span>
                <p className="text-gray-500 text-xs">~$32 USD</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> 90-minute live session</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Matsuri Memory album</li>
            </ul>
          </div>

          <div className="border-2 border-red-500 rounded-2xl p-6 relative bg-red-500/5 cursor-pointer shadow-[0_0_30px_rgba(220,38,38,0.15)]">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Premium Immersion</h3>
                <p className="text-gray-400 text-sm">The complete multi-sensory experience</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">¥9,000</span>
                <p className="text-gray-500 text-xs">~$58 USD</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Everything in Standard</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Physical Matsuri Kit shipped to your door</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Live souvenir shopping & delivery</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex gap-4 mt-8">
            <Info className="text-blue-400 shrink-0" />
            <p className="text-sm text-blue-200">
              <strong>CxO Insight:</strong> The Premium tier achieves ~72% gross margin, scaling efficiently as the platform amortizes infrastructure costs across the avatar network.
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Reserve Your Avatar</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="jane@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Season</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none">
                <option>🌸 Spring (Hanami Festivals)</option>
                <option>🎆 Summer (Fireworks & Bon Odori)</option>
                <option>🍂 Autumn (Harvest & Lanterns)</option>
                <option>❄️ Winter (Snow Festivals)</option>
              </select>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                Complete Booking
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By clicking this button, you acknowledge this is a concept application for toraru Inc.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
