import React, { useState } from 'react';
import { WashingMachine, Sparkles, Bed, Shirt, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'wash-fold',
    label: 'Wash & Fold',
    icon: WashingMachine,
    items: [
      { name: 'Regular Wash & Fold', price: '₹150 / lb' },
      { name: 'Delicate Wash & Fold', price: '₹195 / lb' },
      { name: 'Minimum Order', price: '₹1,290' },
      { name: 'Same-Day Add-On', price: '+₹430' },
    ],
  },
  {
    id: 'dry-cleaning',
    label: 'Dry Cleaning',
    icon: Sparkles,
    items: [
      { name: 'Trousers', price: '₹600' },
      { name: 'Suit (2-piece)', price: '₹1,290' },
      { name: 'Dress', price: '₹860' },
      { name: 'Coat / Jacket', price: '₹1,460' },
    ],
  },
  {
    id: 'ironing',
    label: 'Ironing & Pressing',
    icon: Shirt,
    items: [
      { name: 'Shirt', price: '₹215' },
      { name: 'Trousers', price: '₹260' },
      { name: 'Dress', price: '₹430' },
      { name: 'Bulk (10+ items)', price: '₹170 / item' },
    ],
  },
  {
    id: 'linens',
    label: 'Bedding & Linens',
    icon: Bed,
    items: [
      { name: 'Comforter (Twin)', price: '₹1,720' },
      { name: 'Comforter (Queen/King)', price: '₹2,150' },
      { name: 'Bed Sheet Set', price: '₹1,290' },
      { name: 'Curtains (per panel)', price: '₹1,120' },
    ],
  },
];

export default function PricingTable() {
  const [active, setActive] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === active);

  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-20 sm:py-22 border-b border-slate-200/60" id="pricing-plans">
      {/* Subtle Atmospheric Glow Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-[#154088]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-[#5b86c9]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content Engine */}
        <div className="max-w-2xl">
          <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm">
            {/* <Sparkles size={12} className="text-amber-500 animate-pulse" /> */}
            Price List
          </span>

          <h2 className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0a1f47]">
            Every service, <br />
            <span className="bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230] bg-clip-text text-transparent">one clear price.</span>
          </h2>

          <p className="font-['Open_Sans'] mt-4 text-base sm:text-lg text-[#475569] max-w-xl font-medium">
            Browse our core catalog by category to see exactly what you'll pay — no hidden fees, no estimation guesswork.
          </p>
        </div>

        {/* Dynamic Structural Grid Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Premium Navigation Controller Block */}
          <div className="lg:col-span-5 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
            {categories.map(({ id, label, icon: Icon }) => {
              const isSelected = active === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`shrink-0 w-full flex items-center justify-between gap-4 rounded-2xl px-6 py-4.5 font-['Nunito'] text-sm sm:text-base font-extrabold transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative group overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#154088] to-[#0a1f47] text-white shadow-xl shadow-[#154088]/10 border border-transparent hover:-translate-y-0.5'
                      : 'bg-white text-[#475569] border border-slate-200/80 hover:border-[#154088]/30 hover:bg-slate-50 hover:text-[#0a1f47]'
                  }`}
                >
                  <span className="flex items-center gap-3.5 relative z-10">
                    <span
                      className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 border transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 ${
                        isSelected 
                          ? 'bg-white/10 text-white border-white/10 shadow-sm' 
                          : 'bg-[#154088]/5 text-[#154088] border-[#154088]/15'
                      }`}
                    >
                      <Icon size={16} className="stroke-[2.5]" />
                    </span>
                    <span className="whitespace-nowrap font-black tracking-tight transform transition-transform duration-300 group-hover:translate-x-0.5">{label}</span>
                  </span>
                  
                  <ArrowRight
                    size={16}
                    className={`hidden lg:block shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-10 ${
                      isSelected ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: High-Fidelity Catalog Sheet */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(21,64,136,0.04)] relative">
            
            <div className="divide-y divide-slate-100 bg-white">
              {activeCategory.items.map(({ name, price }) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-6 px-6 sm:px-10 py-5 sm:py-6 transition-colors duration-300 hover:bg-slate-50/60 group"
                >
                  <span className="font-['Open_Sans'] text-sm sm:text-base text-[#334155] font-semibold group-hover:text-[#0a1f47] transition-colors duration-300">
                    {name}
                  </span>
                  <span className="font-['Nunito'] text-base sm:text-lg font-black text-[#154088] whitespace-nowrap bg-[#154088]/5 border border-[#154088]/10 px-3 py-1 rounded-xl shadow-sm group-hover:border-[#154088]/30 group-hover:bg-[#154088] group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {price}
                  </span>
                </div>
              ))}
            </div>

            {/* Catalog Info Footer Footnote */}
            <div className="px-6 sm:px-10 py-5 bg-slate-50/50 border-t border-slate-100">
              <p className="font-['Open_Sans'] text-xs text-[#64748b] leading-relaxed font-medium">
                * Rates may scale adaptively based on geo-location profiles. Express processing and same-day priority fulfillment add-ons are settled dynamically upon valet handover verification.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}