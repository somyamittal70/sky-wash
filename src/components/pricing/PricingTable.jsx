import React from 'react';
import { motion } from 'framer-motion';
import { WashingMachine, Sparkles, Bed, Shirt, ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 'wash-fold',
    label: 'Wash & Fold',
    tagline: 'Everyday laundry, done right',
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
    tagline: 'Delicate fabric specialists',
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
    tagline: 'Crisp, sharp, ready to wear',
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
    tagline: 'Deep, hygienic refresh',
    icon: Bed,
    items: [
      { name: 'Comforter (Twin)', price: '₹1,720' },
      { name: 'Comforter (Queen/King)', price: '₹2,150' },
      { name: 'Bed Sheet Set', price: '₹1,290' },
      { name: 'Curtains (per panel)', price: '₹1,120' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PricingTable() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-18 sm:py-22 border-b border-slate-200/60" id="pricing-plans">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-[#154088]/5 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
          className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-[#5b86c9]/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            variants={fadeUp}
            className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm"
          >
            Price List
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            variants={fadeUp}
            className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0a1f47]"
          >
            Every service, <br />
            <span className="bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230] bg-clip-text text-transparent">one clear price.</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
            variants={fadeUp}
            className="font-['Open_Sans'] mt-4 text-base sm:text-lg text-[#475569] max-w-xl font-medium"
          >
            Browse our core catalog by category to see exactly what you'll pay — no hidden fees, no estimation guesswork.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7"
        >
          {categories.map(({ id, label, tagline, icon: Icon, items }) => (
            <motion.div
              key={id}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ y: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
              className="group relative bg-white border border-slate-200/70 rounded-[2rem] overflow-hidden shadow-[0_16px_36px_-18px_rgba(21,64,136,0.08)] transition-shadow duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_28px_56px_-18px_rgba(21,64,136,0.18)] hover:border-[#154088]/25"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#0a1f47] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />

              <div className="relative flex items-start justify-between gap-4 px-6 sm:px-8 pt-7 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#154088]/5 border border-[#154088]/15 text-[#154088] shrink-0 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#154088] group-hover:to-[#0a1f47] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-[#154088]/20"
                  >
                    <Icon size={22} className="stroke-[2.2]" />
                  </motion.span>
                  <div>
                    <h3 className="font-['Nunito'] text-lg sm:text-xl font-black text-[#0a1f47] tracking-tight leading-tight">
                      {label}
                    </h3>
                    <p className="font-['Open_Sans'] text-xs sm:text-[13px] text-[#94a3b8] font-semibold mt-1">
                      {tagline}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 mt-1 text-slate-300 transition-all duration-300 group-hover:text-[#154088] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <div className="divide-y divide-slate-100">
                {items.map(({ name, price }, i) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-6 px-6 sm:px-8 py-4 sm:py-4.5 transition-colors duration-300 hover:bg-[#f8faff]"
                  >
                    <span className="font-['Open_Sans'] text-sm sm:text-base text-[#334155] font-semibold">
                      {name}
                    </span>
                    <span
                      className={`font-['Nunito'] text-sm sm:text-base font-black whitespace-nowrap px-3 py-1 rounded-xl border transition-all duration-300 ${
                        i === 0
                          ? 'text-white bg-gradient-to-r from-[#154088] to-[#0a1f47] border-transparent shadow-sm'
                          : 'text-[#154088] bg-[#154088]/5 border-[#154088]/10'
                      }`}
                    >
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}