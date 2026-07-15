import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Shirt,
  HeartHandshake,
  Clock,
} from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    icon: Calendar,
    // stepNumber: '01',
    label: 'Schedule',
    title: 'Precision Pickup Booking',
    desc: 'Select a guaranteed 2-hour collection window that fits your day, through our effortless interface.',
    extendedInfo: 'Our routing engine reserves transport windows in real time, so your collection never overlaps or slips.',
    badgeText: 'Instant Confirmation',
  },
  {
    id: 2,
    icon: Sparkles,
    // stepNumber: '02',
    label: 'Collection',
    title: 'White-Glove Handover',
    desc: 'A background-checked, dedicated concierge collects your items directly from your home or office.',
    extendedInfo: 'Clothes travel in dust-sealed, climate-controlled lockboxes — insured door to door.',
    badgeText: 'Fully Insured Transit',
  },
  {
    id: 3,
    icon: Shirt,
    // stepNumber: '03',
    label: 'Processing',
    title: 'Eco-Certified Garment Care',
    desc: 'Your wardrobe undergoes tailored, fabric-specific treatments using biodegradable solvents.',
    extendedInfo: 'Every item is inspected, cataloged by fiber type, and washed to preserve its original drape.',
    badgeText: 'Zero Harsh Chemicals',
  },
  {
    id: 4,
    icon: HeartHandshake,
    // stepNumber: '04',
    label: 'Return',
    title: 'Fresh Wardrobe Delivery',
    desc: 'Items are returned crisp, pristine, and perfectly hand-pressed on protective boutique hangers.',
    extendedInfo: 'Packaged in breathable linen bags and returned to your closet within 24 hours.',
    badgeText: '24-Hour Turnaround',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function StepContent({ step, isHovered }) {
  return (
    <motion.div
      animate={{ y: isHovered ? -6 : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`rounded-[1.5rem] bg-white border p-6 transition-colors duration-300 ${
        isHovered
          ? 'border-[#154088]/25 shadow-[0_22px_40px_-16px_rgba(21,64,136,0.2)]'
          : 'border-slate-200/70 shadow-[0_16px_32px_-18px_rgba(21,64,136,0.12)]'
      }`}
    >
      <span
        className={`font-['Nunito'] inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border transition-colors duration-300 ${
          isHovered
            ? 'bg-[#154088] border-[#154088] text-white'
            : 'bg-[#154088]/5 border-[#154088]/10 text-[#154088]'
        }`}
      >
        {step.label}
      </span>
      <h3 className="font-['Nunito'] text-lg font-black text-[#0a1f47] tracking-tight mt-3 leading-snug">
        {step.title}
      </h3>
      <p className="font-['Open_Sans'] text-sm text-[#475569] font-medium leading-relaxed mt-2">
        {step.desc}
      </p>
      <p className="font-['Open_Sans'] text-xs text-[#64748b] font-medium leading-relaxed mt-3 pt-3 border-t border-slate-100">
        {step.extendedInfo}
      </p>
      <motion.div
        animate={{ x: isHovered ? 2 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-1.5 mt-4 text-[11px] font-['Nunito'] font-bold text-[#154088]"
      >
        <Clock size={12} className="stroke-[2.5]" />
        {step.badgeText}
      </motion.div>
    </motion.div>
  );
}

function IconNode({ Icon, isHovered }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow ring on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 0.3 : 0, scale: isHovered ? 1.25 : 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 rounded-2xl bg-[#154088] blur-md"
      />
      <motion.div
        animate={{ scale: isHovered ? 1.14 : 1, rotate: isHovered ? 8 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#154088] to-[#0a1f47] border-4 border-[#f8faff] shadow-lg shadow-[#154088]/20 flex items-center justify-center text-white z-10"
      >
        <Icon size={22} className="stroke-[2.2]" />
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const [hovered, setHovered] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-[#f8faff] py-18 sm:py-22 relative overflow-hidden border-b border-slate-200/60"
      id="service-workflow"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#154088]/5 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
          className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#5b86c9]/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 sm:mb-24"
        >
          <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm">
            The Process
          </span>
          <h2 className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0a1f47]">
            Boutique care, <br />
            <span className="bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230] bg-clip-text text-transparent">
              orchestrated seamlessly.
            </span>
          </h2>
          <p className="font-['Open_Sans'] mt-4 text-base sm:text-lg text-[#475569] max-w-xl font-medium">
            No chore lists, no cheap chemicals — just a closed-loop treatment framework that brings your clothes back to life in 24 hours.
          </p>
        </motion.div>

        {/* DESKTOP: Horizontal process rail with alternating content */}
        <div className="hidden lg:block relative">
          {/* Connecting line with shimmer */}
          <div className="absolute left-0 right-0 top-[50%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#5b86c9]/20 via-[#154088]/40 to-[#0a1f47]/20 overflow-hidden">
            {!shouldReduceMotion && (
              <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                style={{ backgroundSize: '200% 100%' }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => {
              const isTop = step.id % 2 !== 0;
              const Icon = step.icon;
              const isHovered = hovered === step.id;
              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setHovered(step.id)}
                  onMouseLeave={() => setHovered(null)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={idx}
                  variants={fadeUp}
                  className="relative flex flex-col items-center"
                >
                  {isTop ? (
                    <>
                      <div className="pb-8 w-full">
                        <StepContent step={step} isHovered={isHovered} />
                      </div>
                      <div className={`w-px h-8 transition-colors duration-300 ${isHovered ? 'bg-[#154088]/40' : 'bg-[#154088]/15'}`} />
                      <IconNode Icon={Icon} isHovered={isHovered} />
                      <div className="h-8" />
                    </>
                  ) : (
                    <>
                      <div className="h-8" />
                      <IconNode Icon={Icon} isHovered={isHovered} />
                      <div className={`w-px h-8 transition-colors duration-300 ${isHovered ? 'bg-[#154088]/40' : 'bg-[#154088]/15'}`} />
                      <div className="pt-8 w-full">
                        <StepContent step={step} isHovered={isHovered} />
                      </div>
                    </>
                  )}

                  {/* <span
                    className={`font-['Nunito'] absolute top-1/2 -translate-y-1/2 text-[10px] font-black tracking-wider transition-colors duration-300 ${
                      isHovered ? 'text-[#154088]/60' : 'text-slate-300'
                    }`}
                  >
                    {step.stepNumber}
                  </span> */}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET: Vertical left-rail timeline */}
        <div className="lg:hidden relative pl-8 sm:pl-10">
          <div className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#5b86c9]/30 via-[#154088]/40 to-[#0a1f47]/20" />

          <div className="flex flex-col gap-10">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = hovered === step.id;
              return (
                <motion.div
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={idx}
                  variants={fadeUp}
                  className="relative"
                >
                  <div className="absolute -left-8 sm:-left-10 top-0">
                    <IconNode Icon={Icon} isHovered={isHovered} />
                  </div>
                  <div
                    className="pl-8 sm:pl-10"
                    onTouchStart={() => setHovered(step.id)}
                    onMouseEnter={() => setHovered(step.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <StepContent step={step} isHovered={isHovered} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}