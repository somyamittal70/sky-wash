import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Images, Sparkles, ArrowRight } from 'lucide-react';
import BookPickupModal from '../layout/BookPickupModal';

const BG_IMAGE_URL =
  'https://i.pinimg.com/736x/0d/36/38/0d363852b35a82dd0fde79ac49028c50.jpg';

const stats = [
  { value: '5K+', label: 'Orders Delivered' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24hr', label: 'Turnaround Time' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.55 },
  },
};

const statVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GalleryHero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#001230] border-b border-[#154088]/20">

      {/* 1. Full-Bleed High-Res Cinematic Image Underlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={BG_IMAGE_URL}
          alt="Premium crisp laundry artisan care display"
          className="w-full h-full object-cover select-none pointer-events-none"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{
            scale: [1.05, 1.12, 1.05],
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 20, ease: 'easeInOut', repeat: Infinity },
          }}
        />
        {/* Layered dark structural overlays to isolate lighting fields for text alignment */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001230] via-[#001230]/75 to-transparent opacity-95 lg:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001230] via-transparent to-[#001230]/30" />
      </div>

      {/* 2. Overlaid Premium Structural Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-18 sm:py-22">
        <div className="max-w-3xl space-y-8 text-left">

          {/* Decorative Translucent Micro-Pill */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#001230]/60 border border-white/10 backdrop-blur-md px-4 py-2 shadow-xl"
          >
            <Images size={13} className="text-[#5b86c9] stroke-[2.5]" />
            <span className="font-['Nunito'] text-xs font-black uppercase tracking-widest text-[#5b86c9]">
              Visual Exhibition
            </span>
          </motion.div>

          {/* Precision Fluid Typography Block */}
          <div className="space-y-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="font-['Nunito'] text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              A glimpse into <br />
              <span className="bg-gradient-to-r from-[#9dbbec] via-[#5b86c9] to-[#154088] bg-clip-text text-transparent">
                our craft.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="font-['Open_Sans'] text-base sm:text-xl text-[#c6c8cd] max-w-xl leading-relaxed font-medium"
            >
              From spotless bespoke linens to perfectly pressed dinner coats — see the meticulous validation parameters and absolute care we commit to every single asset.
            </motion.p>
          </div>

          {/* Premium Call-To-Action Element Group */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="pt-2"
          >
            <motion.button
              type="button"
              onClick={() => setBookingOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#154088] to-[#001230] hover:from-[#1a4a99] hover:to-[#0a1f47] px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white shadow-xl shadow-[#001230]/50 hover:shadow-[#154088]/20 transition-colors duration-300"
            >
              Schedule Pickup
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Redesigned Bento Metric Capsules Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={statsContainer}
            className="pt-10 border-t border-white/10 flex flex-wrap items-center gap-4 max-w-2xl"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={statVariant}
                whileHover={{ y: -3 }}
                className="flex flex-col items-start p-4 rounded-2xl bg-[#001230]/40 border border-white/5 shadow-xl backdrop-blur-sm min-w-[140px] flex-1 group hover:border-white/10 hover:bg-[#001230]/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-['Nunito'] text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-[#9dbbec] transition-colors">
                    {value}
                  </span>
                </div>
                <span className="font-['Open_Sans'] mt-1 text-xs font-bold text-[#9a9ca1] uppercase tracking-wider">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Book Pickup modal core interface element wrapping asset */}
      <BookPickupModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}