import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock3,
  MessageSquare,
  Zap,
} from "lucide-react";
import BookPickupModal from '../layout/BookPickupModal';

const guarantees = [
  {
    icon: Clock3,
    title: "24-Hour Express Service",
    desc: "Need your clothes within 24 hours? Our express service is available with double the standard service charges.",
    iconStyle: "bg-[#154088]/5 text-[#154088] border-[#154088]/15",
  },
  {
    icon: Zap,
    title: "Less Than 24-Hour Priority Service",
    desc: "For urgent orders requiring delivery in less than 24 hours, priority processing is available with triple the standard service charges.",
    iconStyle: "bg-blue-50 text-[#2d5db0] border-blue-100",
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

const guaranteeContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
  },
};

const guaranteeVariant = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesCTA() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="bg-[#ffffff] py-18 sm:py-22 relative overflow-hidden border-b border-slate-200/60">
      {/* Background Cinematic Atmosphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#154088]/5 to-transparent rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#5b86c9]/5 to-transparent rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Asymmetric Core Capsule Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-[0_32px_64px_-20px_rgba(21,64,136,0.08)]"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT SIDE: Core High-Conversion Pitch System */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={0}
                variants={fadeUp}
                className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-2 shadow-sm"
              >
                On-Demand Garment Optimization
              </motion.span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={1}
                variants={fadeUp}
                className="font-['Nunito'] mt-6 text-4xl sm:text-5xl font-black leading-[1.15] text-[#0a1f47] tracking-tight"
              >
                Take laundry completely <br />
                off your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230]">
                  mental overhead.
                </span>
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={2}
                variants={fadeUp}
                className="font-['Open_Sans'] mt-5 text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed font-medium"
              >
                No separating. No commuting. Schedule your seamless
                biometric-tracked valet turnaround cycle in under a single
                minute.
              </motion.p>

              {/* Dynamic Action Trigger Blocks */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                custom={3}
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#154088] to-[#0a1f47] hover:from-[#1a4a99] hover:to-[#154088] px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white shadow-xl shadow-[#154088]/20 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group"
                >
                  Contact Us
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5"
                  />
                </motion.a>

                <motion.a
                  href="/pricing"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-[#475569] shadow-sm transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group"
                >
                  <MessageSquare
                    size={16}
                    className="text-[#94a3b8] group-hover:text-[#64748b] transition-colors"
                  />
                  View Pricing
                </motion.a>
              </motion.div>

              {/* Seamless Inline Trust Grid Row */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={guaranteeContainer}
                className="mt-12 w-full grid sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100"
              >
                {guarantees.map(({ icon: Icon, title, desc, iconStyle }) => (
                  <motion.div
                    key={title}
                    variants={guaranteeVariant}
                    whileHover={{ x: 3 }}
                    className="flex gap-3.5 group/point"
                  >
                    <motion.span
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`flex items-center justify-center w-9 h-9 rounded-xl border shrink-0 ${iconStyle}`}
                    >
                      <Icon size={16} />
                    </motion.span>
                    <div>
                      <h4 className="font-['Nunito'] text-sm font-bold text-[#334155] tracking-tight">
                        {title}
                      </h4>
                      <p className="font-['Open_Sans'] mt-0.5 text-xs text-[#64748b] leading-relaxed font-medium">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT SIDE: Immersive Asset Visual Mask Display Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative w-full flex justify-center lg:justify-end group/image"
            >
              {/* Underlying dynamic lighting bloom matching left-side accents */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#154088]/10 to-[#5b86c9]/10 opacity-40 blur-2xl pointer-events-none transition-opacity duration-500 group-hover/image:opacity-60" />

              {/* Structured Image Display Canvas */}
              <div className="w-full max-w-[400px] aspect-[4/5] bg-slate-50 border border-slate-200 p-2 rounded-[2.5rem] shadow-xl relative overflow-hidden group-hover/image:border-[#154088]/20 transition-colors duration-500">
                {/* Inner premium border hairline edge element */}
                <div className="absolute inset-2 rounded-[2rem] border border-black/5 z-20 pointer-events-none" />

                {/* Clean gradient fallback overlay to protect text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10 pointer-events-none" />

                <motion.img
                  src="https://i.pinimg.com/736x/1b/0d/85/1b0d857b075876d14cc769e2d00aca8d.jpg"
                  alt="Premium laundry folded wardrobe care service"
                  className="w-full h-full object-cover rounded-[2rem] opacity-95"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Book Pickup modal core implementation container injection */}
      <BookPickupModal
        isOpen={bookingOpen}
        closeModal={() => setBookingOpen(false)}
      />
    </section>
  );
}