import React, { useState } from 'react';
import { ArrowRight, Sparkles, Star, ShieldCheck, Zap, Clock } from 'lucide-react';
import BookPickupModal from '../layout/BookPickupModal';

export default function GalleryCTA() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#001230] text-[#e5e6e8] pb-24 sm:pb-36" id="gallery-cta">
      {/* Dynamic Cosmic Gradient Ambient Backdrops */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-1/4 w-[600px] h-[300px] bg-[#154088]/15 rounded-full blur-[140px] opacity-70" />
        <div className="absolute bottom-12 right-1/4 w-[600px] h-[300px] bg-[#5b86c9]/15 rounded-full blur-[140px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Frame Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a1f47]/80 via-[#0a1f47]/40 to-[#001230] border border-[#154088]/20 shadow-2xl backdrop-blur-xl p-8 sm:p-14 lg:p-20">
          
          {/* Subtle Top-Border Shimmer Effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#154088]/40 to-transparent" />

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Deep Text & Value Framework */}
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#154088]/10 border border-[#154088]/20 px-4 py-1.5 shadow-inner">
                {/* <Sparkles size={13} className="text-[#5b86c9] stroke-[2.5]" /> */}
                <span className="font-['Nunito'] text-xs font-black uppercase tracking-widest text-[#5b86c9]">
                  Experience The Standard
                </span>
              </div>

              <h2 className="font-['Nunito'] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
                Ready to see the <br />
                <span className="bg-gradient-to-r from-[#9dbbec] via-[#5b86c9] to-[#154088] bg-clip-text text-transparent">
                  difference yourself?
                </span>
              </h2>

              <p className="font-['Open_Sans'] text-base sm:text-lg text-[#c6c8cd] max-w-xl leading-relaxed font-medium">
                Join thousands of verified subscribers who have completely automated their wardrobe maintenance. Schedule your initial pickup parameters in under two minutes.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#154088] to-[#001230] hover:from-[#1a4a99] hover:to-[#0a1f47] px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white shadow-xl shadow-[#001230]/50 hover:shadow-[#154088]/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Schedule Your Pickup
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-white stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Trust Validation Hub */}
            <div className="grid grid-cols-1 gap-4 bg-[#001230]/50 border border-[#154088]/30 p-6 sm:p-8 rounded-3xl backdrop-blur-md relative group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#154088]/40 to-transparent" />
              
              {/* Stat Card 1: Rating */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#0a1f47]/40 border border-[#154088]/20 hover:border-[#154088]/40 transition-colors">
                <div className="flex shrink-0 items-center justify-center w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Star size={18} className="fill-amber-400" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] text-base font-black text-white">4.9/5 TrustScore</h4>
                  <p className="font-['Open_Sans'] text-xs text-[#9a9ca1] font-medium mt-0.5">Backed by over 5,000 active customer reviews.</p>
                </div>
              </div>

              {/* Stat Card 2: Guarantee */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#0a1f47]/40 border border-[#154088]/20 hover:border-[#154088]/40 transition-colors">
                <div className="flex shrink-0 items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] text-base font-black text-white">Premium Care Guarantee</h4>
                  <p className="font-['Open_Sans'] text-xs text-[#9a9ca1] font-medium mt-0.5">Complimentary re-clean within 48 hours if unsatisfied.</p>
                </div>
              </div>

              {/* Stat Card 3: Velocity */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#0a1f47]/40 border border-[#154088]/20 hover:border-[#154088]/40 transition-colors">
                <div className="flex shrink-0 items-center justify-center w-11 h-11 rounded-xl bg-[#154088]/10 text-[#5b86c9] border border-[#154088]/20">
                  <Clock size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] text-base font-black text-white">24-Hour Delivery Cycle</h4>
                  <p className="font-['Open_Sans'] text-xs text-[#9a9ca1] font-medium mt-0.5">Rapid logistics pipelines trackable via dashboard.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Book Pickup modal interface anchor */}
      <BookPickupModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}