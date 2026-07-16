import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Footprints } from 'lucide-react';

const shoeItems = [
  { name: 'Bagpack', price: '₹250' },
  { name: 'Purse', price: '₹350' },
  { name: 'Sport Shoes', price: '₹400' },
  { name: 'Boot Shoes', price: '₹450' },
  { name: 'Suede Shoes', price: '₹550' },
  { name: 'Leather Shoes', price: '₹699' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ShoesAndBagsSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-slate-200/60">
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
            <Footprints size={22} className="stroke-[2.2]" />
          </span>
          <div>
            <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088]">
              Shoes & Bags
            </span>
            <h2 className="font-['Nunito'] text-2xl sm:text-3xl font-black tracking-tight text-[#0a1f47]">
              Shoe & Bag Cleaning
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shoeItems.map(({ name, price }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              whileHover={{ y: -4 }}
              variants={fadeUp}
              className="flex items-center justify-between gap-4 bg-[#f8faff] border border-slate-200/70 rounded-2xl px-5 py-4 shadow-[0_10px_24px_-14px_rgba(21,64,136,0.1)] transition-shadow hover:shadow-[0_16px_32px_-14px_rgba(21,64,136,0.18)]"
            >
              <span className="flex items-center gap-2 font-['Open_Sans'] text-sm sm:text-[15px] text-[#334155] font-semibold">
                <CheckCircle2 size={16} className="text-[#154088] shrink-0" />
                {name}
              </span>
              <span className="font-['Nunito'] text-sm sm:text-base font-black text-white bg-gradient-to-r from-[#154088] to-[#0a1f47] rounded-xl px-3 py-1 whitespace-nowrap">
                {price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}