import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart, Award } from 'lucide-react';

const values = [
  { icon: Leaf, text: 'Eco-friendly detergents, gentle on fabric and the planet', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  { icon: ShieldCheck, text: 'Every order insured, tracked, and handled with care', color: 'text-[#154088] bg-[#154088]/5 border-[#154088]/10' },
  { icon: Heart, text: 'Founded by people who just wanted their weekends back', color: 'text-rose-600 bg-rose-50 border-rose-100' },
];

// Variants
const imageVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.6, type: 'spring', stiffness: 180, damping: 14 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#f8faff] to-[#ffffff] py-18 sm:py-22 overflow-hidden relative">
      {/* Background Ambience Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#154088]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">

          {/* LEFT SIDE: Image Stack Layout */}
          <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full order-last lg:order-first">
            {/* Decorative Layer Shape */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-6 -left-6 w-full h-full rounded-[2.5rem] bg-gradient-to-tr from-[#154088]/5 to-transparent border border-[#154088]/10 -z-10 hidden sm:block"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={imageVariant}
              className="rounded-[2.5rem] overflow-hidden border border-[#154088]/15 shadow-xl aspect-[4/5] relative group bg-white"
            >
              <motion.img
                src="https://i.pinimg.com/1200x/56/f1/42/56f14219d41c9849136c0c37a6691c97.jpg"
                alt="Sky Wash team folding fresh Sky Wash"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              {/* Soft subtle gradient overlay inside image frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Continuous Floating Badge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={badgeVariant}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.1 } }}
              className="absolute -bottom-6 -right-4 sm:-right-6 flex items-center gap-3.5 bg-white/95 border border-[#154088]/15 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 max-w-[240px] select-none"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#154088] to-[#0d2a5c] text-white shrink-0 shadow-md shadow-[#154088]/20">
                <Award size={20} />
              </span>
              <div>
                <p className="font-['Nunito'] text-lg font-extrabold text-[#0a1f47] leading-none">5+ Years</p>
                <p className="font-['Open_Sans'] text-[11px] text-[#64748b] mt-1.5 font-medium leading-tight">Caring for local wardrobes</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content Presentation */}
          <div className="lg:col-span-7">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              variants={fadeUp}
              className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-2 shadow-sm"
            >
              About Our Standard
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              variants={fadeUp}
              className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-[#0a1f47] tracking-tight"
            >
              Care for your clothes,<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230]">
                care for your time.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              variants={fadeUp}
              className="font-['Open_Sans'] mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
            >
              Sky Wash started with a simple truth: Sky Wash shouldn't claim your hard-earned weekends.
              What began as a single neighborhood drop-off has evolved into a premium, end-to-end
              delivery matrix — yet our fundamental metric remains unchanged: treating your garments with absolute preservation care.
            </motion.p>

            {/* Premium Feature Rows */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={listContainer}
              className="mt-8 flex flex-col gap-4 max-w-2xl"
            >
              {values.map(({ icon: Icon, text, color }) => (
                <motion.li
                  key={text}
                  variants={listItem}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm shadow-slate-100/50 hover:border-[#154088]/20 transition-colors duration-300 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 border ${color}`}
                  >
                    <Icon size={18} />
                  </motion.span>
                  <p className="font-['Open_Sans'] text-sm sm:text-base text-[#334155] font-medium leading-relaxed">
                    {text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
}