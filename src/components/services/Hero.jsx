import React, { useState } from 'react';
import { Sparkles, Shirt, Wind, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import BookPickupModal from '../layout/BookPickupModal';

const servicesData = [
  {
    icon: Shirt,
    title: 'Wash & Fold',
    tagline: 'Premium Daily Care',
    desc: 'Sorted meticulously by color and fabric type, washed with premium hypoallergenic detergents, and crisp-folded ready for your wardrobe.',
    themeColor: 'from-[#154088] to-[#001230]',
    glowColor: 'bg-[#154088]/10',
    borderColor: 'border-[#154088]/30',
    textColor: 'text-[#5b86c9]',
    bgImage: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop' // Crisp folded laundry stack
  },
  {
    icon: Sparkles,
    title: 'Dry Cleaning',
    tagline: 'Delicate & Couture Spec',
    desc: 'Advanced organic solvents handle delicate suits, silk dresses, and luxury garments with absolute structural preservation.',
    themeColor: 'from-[#5b86c9] to-[#154088]',
    glowColor: 'bg-[#5b86c9]/10',
    borderColor: 'border-[#5b86c9]/30',
    textColor: 'text-[#9dbbec]',
    bgImage: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1200&auto=format&fit=crop' // Luxury garments hanging
  },
  {
    icon: Wind,
    title: 'Express Delivery',
    tagline: 'Priority 24-Hour Cycle',
    desc: 'Jump the logistics queue completely. Your priority items are collected, treated, and delivered right back within an absolute 24-hour window.',
    themeColor: 'from-emerald-500 to-teal-600',
    glowColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    bgImage: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1200&auto=format&fit=crop' // Express delivery van/collection
  }
];

export default function ServicesHero() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#001230] overflow-hidden border-b border-[#154088]/20 pt-28 pb-20 lg:py-32">
      
      {/* Dynamic Background Mesh Engine — Tint shifts depending on active service tab */}
      <div className={`absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20 transition-all duration-1000 ${
        activeIndex === 0 ? 'bg-[#154088]' : activeIndex === 1 ? 'bg-[#5b86c9]' : 'bg-emerald-500'
      }`} />

      {/* BACKGROUND GRAPHIC INTERFACE: Seamless Multi-State Image Array */}
      <div className="absolute inset-0 z-0">
        {servicesData.map((service, index) => (
          <div
            key={service.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? 'opacity-10 lg:opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={service.bgImage}
              alt={service.title}
              className="w-full h-full object-cover object-center brightness-[1] contrast-[1.05]"
            />
          </div>
        ))}
        {/* Dynamic Studio Gradient Shutter Masks */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001230] via-transparent to-[#001230] z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT INTERFACE: Dynamic Typography Engine */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9dbbec] bg-white/5 border border-white/10 rounded-full px-4 py-2 shadow-inner">
              {/* <Sparkles size={13} className="text-amber-400 animate-pulse" /> */}
              Elite Garment Processing
            </span>

            <h1 className="font-['Nunito'] mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight">
              Meticulous care for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9dbbec] via-[#5b86c9] to-[#154088]">
                every single fabric
              </span> you own.
            </h1>

            <p className="font-['Open_Sans'] mt-6 text-base sm:text-lg text-[#9a9ca1] leading-relaxed font-medium max-w-xl">
              From automated architectural wash programs to custom boutique dry cleaning protocols, we process garments with precision parameters.
            </p>

            {/* Quick-Fire Interaction Triggers */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#154088] to-[#001230] px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white shadow-lg shadow-[#001230]/50 transition-all duration-300 hover:shadow-[#154088]/30 hover:-translate-y-0.5 group"
              >
                Schedule Immediate Pickup
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              
              <a
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0a1f47] border border-[#154088]/30 hover:bg-[#0a1f47]/60 hover:border-[#154088]/50 px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Review Tier Pricing
              </a>
            </div>

            {/* Micro Trust Matrix Bar */}
            <div className="mt-12 flex items-center gap-6 text-[#676a73] text-xs font-bold tracking-wider uppercase border-t border-[#154088]/20 pt-6">
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> Insured Valet Care</span>
              <span className="flex items-center gap-1.5"><Zap size={14} className="text-amber-500" /> Eco-Certified Systems</span>
            </div>
          </div>

          {/* RIGHT INTERFACE: High-Fidelity Interactive Bento Switcher Deck */}
          <div className="lg:col-span-6 w-full">
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:max-w-none">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 cursor-pointer select-none ${
                      isActive
                        ? `bg-[#0a1f47]/80 ${service.borderColor} shadow-2xl shadow-black/80`
                        : 'bg-[#001230]/40 border-[#154088]/20 hover:bg-[#001230]/80 hover:border-[#154088]/40'
                    }`}
                  >
                    {/* Embedded Internal Ambient Blur Glow Track */}
                    <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none -z-10 ${service.glowColor}`} />

                    <div className="relative z-10 flex items-start gap-5">
                      {/* Shield Core Metric Frame */}
                      <span className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 border transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-br ${service.themeColor} text-white border-transparent shadow-lg scale-105`
                          : 'bg-[#0a1f47] text-[#676a73] border-[#154088]/20 group-hover:text-[#9a9ca1]'
                      }`}>
                        <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
                      </span>

                      {/* Content Stack Structure */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-['Nunito'] text-lg font-bold tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-[#c6c8cd] group-hover:text-white'
                          }`}>
                            {service.title}
                          </h3>
                          <span className={`font-['Open_Sans'] text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                            isActive ? service.textColor : 'text-[#676a73] group-hover:text-[#9a9ca1]'
                          }`}>
                            {service.tagline}
                          </span>
                        </div>
                        
                        <p className={`font-['Open_Sans'] mt-2 text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                          isActive 
                            ? 'text-[#c6c8cd] max-h-24 opacity-100 mt-2' 
                            : 'text-[#676a73] max-h-0 opacity-0 pointer-events-none mt-0'
                        }`}>
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Core Booking Trigger Shell Injection */}
      <BookPickupModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}