import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shirt } from 'lucide-react';

const mensItems = [
  { name: 'Shirt / T-shirt', price: '₹100' },
  { name: 'Trouser / Jeans', price: '₹100' },
  { name: 'Payjama', price: '₹80' },
  { name: 'Silk Payjama', price: '₹100' },
  { name: 'Light Thermals', price: '₹100' },
  { name: 'Hoody (Heavy)', price: '₹100' },
  { name: 'Muffler', price: '₹89' },
  { name: 'Cap', price: '₹50' },
  { name: 'Woolen Cap', price: '₹69' },
  { name: 'Boxer / Sports', price: '₹80' },
  { name: 'Tie', price: '₹49' },
  { name: 'Hand Towel', price: '₹69' },
  { name: 'Cushion / Pillow', price: '₹70' },
  { name: 'Silk / Plain Kurta', price: '₹180' },
  { name: 'Dhoti', price: '₹180' },
  { name: 'Fancy Kurta', price: '₹200' },
  { name: 'Sweater', price: '₹149' },
  { name: 'Nehru Jacket', price: '₹199' },
  { name: 'Hoodies', price: '₹199' },
  { name: 'Jacket (Half)', price: '₹150' },
  { name: 'Blazer / Coat', price: '₹250' },
  { name: 'Full Jacket', price: '₹250' },
  { name: 'Suit (2 Pcs)', price: '₹349' },
  { name: 'Suit (3 Pcs)', price: '₹399' },
  { name: 'Over Coat', price: '₹399' },
  { name: 'Sherwani', price: '₹666' },
  { name: 'Leather Jacket', price: '₹699' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function MensWearSection() {
  return (
    <section className="relative bg-[#f8faff] py-16 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#154088]/5 border border-[#154088]/15 text-[#154088] shadow-sm">
            <Shirt size={22} className="stroke-[2.2]" />
          </span>
          <div>
            <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088]">
              Men's Section
            </span>
            <h2 className="font-['Nunito'] text-2xl sm:text-3xl font-black tracking-tight text-[#0a1f47]">
              Men's Wear Pricing
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 bg-white border border-slate-200/70 rounded-[2rem] shadow-[0_16px_36px_-18px_rgba(21,64,136,0.08)] p-6 sm:p-8">
          {mensItems.map(({ name, price }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              variants={fadeUp}
              className="flex items-center justify-between gap-4 py-3 border-b border-slate-100 last:border-b-0"
            >
              <span className="flex items-center gap-2 font-['Open_Sans'] text-sm sm:text-[15px] text-[#334155] font-semibold">
                <CheckCircle2 size={16} className="text-[#154088] shrink-0" />
                {name}
              </span>
              <span className="font-['Nunito'] text-sm sm:text-base font-black text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-xl px-3 py-1 whitespace-nowrap">
                {price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}