import React from 'react';
import { Truck, Leaf, ShieldCheck, Clock, BadgePercent, Headset } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast turnaround',
    desc: 'Most orders are processed and safely dropped back at your doorstep within 24 hours.',
    iconColor: 'text-[#154088] bg-[#154088]/5 border-[#154088]/15 group-hover:bg-[#154088] group-hover:text-white group-hover:border-[#154088]',
  },
  {
    icon: Truck,
    title: 'Free pickup & delivery',
    desc: 'Skip the drop-off errands completely. We come directly to you, both ways, for free.',
    iconColor: 'text-[#2d5db0] bg-blue-50 border-blue-100 group-hover:bg-[#2d5db0] group-hover:text-white group-hover:border-[#2d5db0]',
  },
  {
    icon: Leaf,
    title: 'Eco-friendly care',
    desc: 'Highly effective, completely biodegradable detergents that are gentle on fabrics and the planet.',
    iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
  },
  {
    icon: ShieldCheck,
    title: 'Insured & tracked',
    desc: 'Total security protocol. Every item bag is systematically logged, fully insured, and easy to monitor.',
    iconColor: 'text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
  },
  {
    icon: BadgePercent,
    title: 'Transparent pricing',
    desc: 'Clear, predictable flat per-kilo rates. What you see is exactly what you pay — zero hidden surcharges.',
    iconColor: 'text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
  },
  {
    icon: Headset,
    title: 'Real human support',
    desc: 'No endless AI phone bots. A dedicated support operator answers live, 7 days a week.',
    iconColor: 'text-violet-600 bg-violet-50 border-violet-100 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8faff] py-20 sm:py-28 overflow-hidden relative border-t border-slate-200/60">
      {/* Background Ambience Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#154088]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-2 shadow-sm">
            Why Choose Us
          </span>

          <h2 className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0a1f47] tracking-tight">
            Laundry processing, handled <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230]">
              the way it always should be.
            </span>
          </h2>

          <p className="font-['Open_Sans'] mt-4 text-base sm:text-lg text-[#475569] max-w-xl mx-auto leading-relaxed">
            Thousands of loads in, we have kept our metrics elementary: rapid cycles, honest flat pricing structures, and elite fabric care.
          </p>
        </div>

        {/* Feature Grid Systems */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, desc, iconColor }) => (
            <div
              key={title}
              className="group relative flex flex-col items-start gap-5 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-[#154088]/30 hover:shadow-[0_20px_40px_-15px_rgba(21,64,136,0.08)]"
            >
              {/* Feature Icon Shield Frame */}
              <span className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 border transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 group-hover:shadow-md ${iconColor}`}>
                <Icon size={20} className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110" />
              </span>
              
              {/* Typography Text Frame */}
              <div className="transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5">
                <h3 className="font-['Nunito'] text-lg font-bold text-[#0a1f47] tracking-tight transition-colors duration-300 group-hover:text-[#154088]">
                  {title}
                </h3>
                <p className="font-['Open_Sans'] mt-2 text-sm sm:text-base text-[#64748b] leading-relaxed font-medium transition-colors duration-300 group-hover:text-[#334155]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}