import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

// Fonts: loaded globally alongside the rest of the Laundary components —
// <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">

const plans = [
  {
    name: 'Wash & Fold',
    priceWeekly: 150,
    priceExpress: 215,
    unit: '/ lb',
    desc: 'Everyday laundry, cleaned and neatly folded.',
    features: [
      'Sorted by color & fabric',
      'Eco-friendly detergents',
      'Neatly folded & packaged',
      '24–48 hour turnaround',
    ],
    highlighted: false,
  },
  {
    name: 'Dry Cleaning',
    priceWeekly: 600,
    priceExpress: 860,
    unit: '/ item',
    desc: 'Professional care for your delicate and formal wear.',
    features: [
      'Stain treatment included',
      'Pressed & on hangers',
      'Delicate fabric safe',
      'Same-day option available',
    ],
    highlighted: true,
  },
  {
    name: 'Household Linens',
    priceWeekly: 1720,
    priceExpress: 2410,
    unit: '/ set',
    desc: 'Comforters, duvets, curtains, and bedding sets.',
    features: [
      'Deep-clean wash cycle',
      'Odor & allergen removal',
      'Folded & bagged',
      '48 hour turnaround',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [express, setExpress] = useState(false);

  return (
    <section className="bg-white py-18 sm:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#3B82F6] bg-[#3B82F6]/10 rounded-full px-4 py-1.5">
            Pricing
          </span>

          <h2 className="font-['Nunito'] mt-6 text-3xl sm:text-4xl font-extrabold leading-tight text-[#334155]">
            Simple, transparent pricing.
          </h2>

          <p className="font-['Open_Sans'] mt-4 text-base sm:text-lg text-[#334155]/70 leading-relaxed">
            No hidden fees. Pay only for what you send.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#F8FAFC] border border-[#7DD3FC]/25 rounded-full p-1.5">
            <button
              type="button"
              onClick={() => setExpress(false)}
              className={`font-['Nunito'] text-sm font-bold rounded-full px-5 py-2.5 transition-all duration-300 motion-reduce:transition-none ${
                !express ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-[#334155]/60'
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setExpress(true)}
              className={`font-['Nunito'] text-sm font-bold rounded-full px-5 py-2.5 transition-all duration-300 motion-reduce:transition-none flex items-center gap-1.5 ${
                express ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-[#334155]/60'
              }`}
            >
              {/* <Sparkles size={14} /> */}
              Express
            </button>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[1.75rem] p-8 transition-all duration-300 motion-reduce:transition-none ${
                plan.highlighted
                  ? 'bg-[#0F172A] text-white shadow-xl lg:-translate-y-3'
                  : 'bg-[#F8FAFC] border border-[#7DD3FC]/20 text-[#334155]'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-['Nunito'] text-[11px] font-extrabold uppercase tracking-wide text-white bg-[#3B82F6] rounded-full px-4 py-1.5">
                  Most Popular
                </span>
              )}

              <h3 className="font-['Nunito'] text-lg sm:text-xl font-extrabold">
                {plan.name}
              </h3>
              <p
                className={`font-['Open_Sans'] mt-2 text-sm leading-relaxed ${
                  plan.highlighted ? 'text-white/70' : 'text-[#334155]/70'
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-['Nunito'] text-4xl font-extrabold">
                  ${express ? plan.priceExpress.toFixed(2) : plan.priceWeekly.toFixed(2)}
                </span>
                <span
                  className={`font-['Open_Sans'] text-sm ${
                    plan.highlighted ? 'text-white/60' : 'text-[#334155]/50'
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="mt-7 flex flex-col gap-3.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? 'bg-[#3B82F6]/25 text-[#7DD3FC]'
                          : 'bg-[#3B82F6]/10 text-[#3B82F6]'
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span
                      className={`font-['Open_Sans'] text-sm ${
                        plan.highlighted ? 'text-white/85' : 'text-[#334155]/80'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-['Nunito'] font-bold text-sm transition-all duration-300 motion-reduce:transition-none ${
                  plan.highlighted
                    ? 'bg-[#3B82F6] text-white hover:shadow-lg hover:-translate-y-0.5'
                    : 'bg-white border border-[#7DD3FC]/40 text-[#334155] hover:shadow-md hover:-translate-y-0.5 hover:border-[#3B82F6]/40'
                }`}
              >
                Schedule Pickup
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}