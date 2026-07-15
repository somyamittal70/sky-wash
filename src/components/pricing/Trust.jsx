import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Leaf, RotateCcw } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Damage Protection',
    body: 'Up to ₹5,000 reimbursed per item if anything is damaged in our care — no forms, just a photo and a claim number.',
  },
  {
    icon: RotateCcw,
    title: 'On-Time or It’s Free',
    body: 'Deliver late by more than 2 hours and your next Wash & Fold order ships at no charge, automatically credited.',
  },
  {
    icon: Leaf,
    title: 'Eco-Certified Care',
    body: 'Biodegradable detergents across every service line. No harsh bleach or optical brighteners, ever, on any item.',
  },
  {
    icon: Truck,
    title: 'Insured, Door to Door',
    body: 'Every bag is barcoded at pickup and insured in transit, so you can track it from your doorstep back again.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustGuaranteeStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-18 sm:py-22" id="trust-guarantee">
      {/* Light atmospheric glow accents using the original brand blues */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#e2ecfb]/40 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
          className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-[#a8c1ec]/20 rounded-full blur-[130px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Modern Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Header Sticky Zone + Redesigned Badge Seal */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 flex flex-col justify-between h-full">
            <div>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={0}
                variants={fadeUp}
                className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm"
              >
                Our Promise
              </motion.span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={1}
                variants={fadeUp}
                className="font-['Nunito'] mt-6 text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#0a1f47]"
              >
                A guarantee that <br />
                <span className="bg-gradient-to-r from-[#154088] via-[#4770b3] to-[#a8c1ec] bg-clip-text text-transparent">
                  actually pays out.
                </span>
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={2}
                variants={fadeUp}
                className="font-['Open_Sans'] mt-6 text-base sm:text-lg text-[#4770b3] max-w-md font-medium leading-relaxed"
              >
                Every order carries the same four commitments — printed here, not buried in a policy page.
              </motion.p>
            </div>

            {/* Redesigned Minimalist Floating Badge Seal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 pt-8 border-t border-[#e2ecfb] flex items-center gap-6"
            >
              <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite] motion-reduce:animate-none"
                  aria-hidden="true"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#a8c1ec"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                </svg>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.5 }}
                  className="w-20 h-20 rounded-full bg-[#e2ecfb]/60 border border-[#a8c1ec] flex items-center justify-center shadow-sm"
                >
                  <ShieldCheck size={28} className="text-[#154088] stroke-[2.5]" />
                </motion.div>
              </div>

              <div>
                <span className="font-['Nunito'] block text-3xl font-black text-[#0a1f47] tracking-tight">
                  100%
                </span>
                <span className="font-['Open_Sans'] block mt-1 text-xs text-[#4770b3] font-bold uppercase tracking-wider leading-snug">
                  Orders delivered<br />claim-free
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Grid Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={gridContainer}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={cardVariant}
                whileHover={{ y: -5 }}
                transition={{ y: { duration: 0.3, ease: [0.25, 1, 0.5, 1] } }}
                className="group relative rounded-2xl bg-white border border-[#e2ecfb] px-6 py-8 transition-shadow duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-xl hover:shadow-[#0a1f47]/5 hover:border-[#a8c1ec]"
              >
                {/* Visual anchor top-right gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#a8c1ec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <motion.span
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e2ecfb] border border-[#a8c1ec]/30 text-[#154088] shrink-0"
                >
                  <Icon size={20} className="stroke-[2.25]" />
                </motion.span>

                <h3 className="font-['Nunito'] mt-5 text-lg font-extrabold text-[#0a1f47] tracking-tight">
                  {title}
                </h3>

                <p className="font-['Open_Sans'] mt-3 text-sm text-[#4770b3] font-medium leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}