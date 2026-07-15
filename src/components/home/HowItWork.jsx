import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock, Truck, WashingMachine, PackageCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: CalendarClock,
    title: 'Schedule',
    subtitle: 'Choose your hours',
    desc: 'Pick a day and a convenient 2-hour window that fits your schedule perfectly, right from our application.',
    colorClass: 'from-[#154088] to-[#0a1f47]',
    accentBg: 'bg-[#5b86c9]/10',
    accentText: 'text-[#0a1f47]',
    image: 'https://i.pinimg.com/1200x/96/3f/1f/963f1fc6e9b32bac9ae7aed374b651dc.jpg'
  },
  {
    id: 2,
    icon: Truck,
    title: 'Pickup',
    subtitle: 'Doorstep collection',
    desc: 'A dedicated driver picks up your laundry right from your doorstep — you do not even need to be home.',
    colorClass: 'from-[#154088] to-[#0a1f47]',
    accentBg: 'bg-[#154088]/10',
    accentText: 'text-[#0a1f47]',
    image: 'https://i.pinimg.com/1200x/23/3b/c4/233bc4b58d21edfe7685d204e063f993.jpg'
  },
  {
    id: 3,
    icon: WashingMachine,
    title: 'Process',
    subtitle: 'Wash & fold with care',
    desc: 'Your garments are accurately sorted, sanitized with eco-friendly detergents, and professionally folded.',
    colorClass: 'from-[#154088] to-[#0a1f47]',
    accentBg: 'bg-[#154088]/10',
    accentText: 'text-[#0a1f47]',
    image: 'https://i.pinimg.com/1200x/d3/61/90/d36190538e953e5e20ceb8872d31b096.jpg'
  },
  {
    id: 4,
    icon: PackageCheck,
    title: 'Return',
    subtitle: 'Delivered fresh',
    desc: 'Clean, crisp laundry drops back at your door within 24 hours, perfectly grouped and ready to put away.',
    colorClass: 'from-[#154088] to-[#0a1f47]',
    accentBg: 'bg-[#0a1f47]/10',
    accentText: 'text-[#0a1f47]',
    image: 'https://i.pinimg.com/1200x/78/ba/90/78ba90b154edc1d011035ed1914f36e8.jpg'
  },
];

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const activeData = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section className="bg-[#fcfdfe] py-18 sm:py-22 overflow-hidden relative border-b border-slate-200/60" id="how-it-works-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="text-xs font-black tracking-widest uppercase text-[#154088] bg-[#154088]/5 px-3 py-1 rounded-md font-['Nunito']">
              The Protocol
            </span>
            <h2 className="font-['Nunito'] mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1f47] tracking-tight">
              4 steps. 24 hours. <br />
              <span className="bg-gradient-to-r from-[#154088] to-slate-500 bg-clip-text text-transparent">Zero friction.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Open_Sans'] text-[#475569] max-w-xs text-sm sm:text-base font-medium leading-relaxed"
          >
            We've re-engineered laundry care into a highly responsive utility. Tap, track, and relax.
          </motion.p>
        </div>

        {/* Dynamic Card Controller Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map(({ id, icon: Icon, title, subtitle, desc, accentText, colorClass }) => {
            const isActive = activeStep === id;
            return (
              <motion.div
                key={id}
                variants={cardVariant}
                onMouseEnter={() => setActiveStep(id)}
                onClick={() => setActiveStep(id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                animate={{ scale: isActive ? 1.02 : 1 }}
                transition={{ scale: { duration: 0.3, ease: 'easeOut' }, y: { duration: 0.2 } }}
                className={`relative group p-6 rounded-3xl border cursor-pointer select-none overflow-hidden transition-colors duration-300 ${
                  isActive
                    ? 'bg-white border-slate-200 shadow-[0_20px_50px_-20px_rgba(21,64,136,0.1)]'
                    : 'bg-transparent border-slate-100 hover:border-slate-200/80 hover:bg-slate-50/50'
                }`}
              >
                {/* Big Translucent Number Layer */}
                <div className={`absolute -right-4 -bottom-6 font-['Nunito'] text-9xl font-black pointer-events-none select-none transition-colors duration-300 ${
                  isActive ? 'text-slate-100/70 font-outline' : 'text-slate-50'
                }`}>
                  {id}
                </div>

                {/* Card Icon Header Row */}
                <div className="flex items-center justify-between relative z-10 mb-6">
                  <motion.div
                    animate={isActive ? { rotate: [0, -8, 0] } : { rotate: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? `${colorClass} bg-gradient-to-br text-white shadow-md shadow-[#154088]/10` : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    <Icon size={22} className="stroke-[2.2]" />
                  </motion.div>

                  {/* Subtle Connected Flow Indicator Arrow */}
                  {id < 4 && (
                    <ArrowRight size={14} className="text-slate-300 hidden lg:block group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>

                {/* Text Block Content */}
                <div className="relative z-10">
                  <span className={`text-[10px] font-black uppercase tracking-widest font-['Nunito'] ${accentText}`}>
                    {subtitle}
                  </span>
                  <h3 className="font-['Nunito'] text-xl font-black text-[#0a1f47] tracking-tight mt-1">
                    {title}
                  </h3>
                  <p className={`font-['Open_Sans'] mt-2 text-sm leading-relaxed transition-opacity duration-300 ${
                    isActive ? 'text-slate-600' : 'text-slate-400 opacity-80 group-hover:opacity-100'
                  }`}>
                    {desc}
                  </p>
                </div>

                {/* Active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-card-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#154088] to-[#0a1f47]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic State Media Display Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden border border-slate-200/70 shadow-[0_30px_60px_-25px_rgba(21,64,136,0.06)] bg-slate-50"
        >
          <div className="grid md:grid-cols-12 items-center gap-6 lg:gap-0">

            {/* Visual Screen Container */}
            <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto md:h-[380px] bg-slate-200 overflow-hidden">
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeStep}
                  src={activeData.image}
                  alt={activeData.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-multiply" />

              {/* Context Floating Chip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute bottom-4 left-4 backdrop-blur-md bg-white/80 border border-white/20 rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#154088] animate-pulse" />
                  <span className="font-['Nunito'] text-xs font-black text-[#0a1f47] tracking-tight">
                    Step {activeData.id}: Live Operation View
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Informational Summary Copy Block */}
            <div className="md:col-span-5 p-8 lg:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest font-['Nunito'] px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    Phase Sync {activeData.id}.0
                  </span>
                  <h4 className="font-['Nunito'] text-2xl font-black text-[#0a1f47] tracking-tight mt-4">
                    {activeData.title} &mdash; {activeData.subtitle}
                  </h4>
                  <p className="font-['Open_Sans'] text-slate-500 text-sm sm:text-base leading-relaxed mt-3">
                    {activeData.desc} Our operational agents safeguard your asset workflow with fully trackable milestones visible inside the client console dashboard at any moment.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}