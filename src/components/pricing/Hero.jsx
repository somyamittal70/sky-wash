import React, { useState } from 'react';
import { Tag, ShieldCheck, Ban, ArrowRight, Sparkles } from 'lucide-react';
import BookPickupModal from '../layout/BookPickupModal';

const BG_IMAGE_URL =
  'https://i.pinimg.com/1200x/e4/bb/ef/e4bbefbd03370b73261146f195dd56ce.jpg';

const trustPoints = [
  { icon: Ban, label: 'No hidden fees' },
  { icon: ShieldCheck, label: 'Care guarantee' },
  { icon: Tag, label: 'Cancel anytime' },
];

export default function PricingHero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#001230] px-4 py-20 sm:py-22">
      
      {/* 1. KEEPING YOUR EXACT BACKGROUND STRUCTURE UNTOUCHED */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE_URL}
          alt="Premium crisp laundry background texture"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#001230]/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001230] via-[#001230]/50 to-[#001230]/40" />
      </div>

      {/* 2. NEW STRATEGIC TWO-COLUMN VIEWPORT LAYOUT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT RUNWAY: Content Stack Aligned Left */}
        <div className="lg:col-span-7 text-left space-y-8 flex flex-col items-start">
          
          {/* Decorative Micro-Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#154088]/20 border border-[#154088]/40 backdrop-blur-md px-4 py-1.5 shadow-lg">
            <Tag size={13} className="text-[#9dbbec] stroke-[2.5]" />
            <span className="font-['Nunito'] text-xs font-black uppercase tracking-widest text-[#9dbbec]">
              Transparent Pricing
            </span>
          </div>

          {/* Cinematic Typography Block */}
          <div className="space-y-4">
            <h1 className="font-['Nunito'] text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Fair pricing, for <br />
              <span className="bg-gradient-to-r from-[#9dbbec] via-[#5b86c9] to-[#154088] bg-clip-text text-transparent">
                fresher
              </span> laundry.
            </h1>
            
            <p className="font-['Open_Sans'] text-base sm:text-lg text-[#c6c8cd] max-w-xl leading-relaxed font-medium">
              Pay only for what you send us. No locked-in subscriptions, no surprise charges — just clean laundry at flat rates that make sense.
            </p>
          </div>

          {/* Premium Action Call-To-Action Element */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#154088] to-[#001230] hover:from-[#1a4a99] hover:to-[#0a1f47] px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white shadow-xl shadow-[#001230]/50 hover:shadow-[#154088]/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Schedule Your Pickup
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Minimal Left-Aligned Trust Badges Frame */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-4 w-full max-w-xl">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 group">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-[#9dbbec] shadow-inner group-hover:scale-105 transition-transform">
                  <Icon size={14} className="stroke-[2.5]" />
                </span>
                <span className="font-['Nunito'] text-sm font-bold text-[#c6c8cd] tracking-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT RUNWAY: Premium Interactive Glassmorphic Rates Matrix */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#9dbbec]" />
                <span className="font-mono text-[10px] font-bold text-[#c6c8cd] uppercase tracking-wider">Live Estimation Deck</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-['Nunito'] text-sm font-black text-white">Wash & Fold Protocol</h4>
                  <p className="text-[11px] text-[#c6c8cd] font-medium font-['Open_Sans']">Everyday bulk garment piles</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-white font-['Nunito']">₹150</span>
                  <span className="text-[10px] text-[#c6c8cd] font-semibold block">/ kg</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-['Nunito'] text-sm font-black text-white">Dry Cleaning Matrix</h4>
                  <p className="text-[11px] text-[#c6c8cd] font-medium font-['Open_Sans']">Premium delicate textures</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-white font-['Nunito']">₹600</span>
                  <span className="text-[10px] text-[#c6c8cd] font-semibold block">/ item</span>
                </div>
              </div>
            </div>

            <div className="bg-[#154088]/10 border border-[#154088]/30 rounded-2xl p-4 text-center">
              <p className="font-mono text-[10px] font-bold text-[#9dbbec] tracking-wide uppercase">
                * Zero hidden pickup or routing surcharges applied.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Book Pickup modal wrapper core interface */}
      <BookPickupModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}