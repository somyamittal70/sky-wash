import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
  Layers,
  Calendar,
  Droplet
} from "lucide-react";
import BookPickupModal from "../layout/BookPickupModal";

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("wash-fold");

  return (
    <section className="relative overflow-hidden bg-[#000a1c] min-h-screen flex items-center pt-18 pb-18 lg:pt-22 lg:pb-22">
      {/* 1. Background Image Layer */}
      <motion.img
        src="https://i.pinimg.com/1200x/26/ff/4a/26ff4a6dc1d227876fa40f3c29b6df2b.jpg"
        alt="Freshly washed and folded laundry background"
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* 2. Precision Gradient Mask & tech grid */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#000a1c] via-[#000a1c]/40 to-[#000a1c]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#15408815_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Radial Ambient Backlight */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#154088]/15 rounded-full blur-[120px] pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Premium Editorial Copy */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            variants={containerStagger}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-[#154088]/20 border border-cyan-500/20 backdrop-blur-md rounded-xl px-3.5 py-1.5 mb-6"
            >
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              />
              <span className="font-['Nunito'] text-xs font-extrabold uppercase tracking-wider text-cyan-200">
                Next-Gen Garment Care
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Nunito'] text-5xl sm:text-6xl lg:text-[4.2rem] font-black leading-[1.05] text-white tracking-tight"
            >
              Your laundry, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-[#9dbbec] to-white">
                done on demand.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-['Open_Sans'] mt-6 text-lg text-slate-300/90 max-w-lg leading-relaxed font-light"
            >
              Skip the dry cleaners and the laundromat. Schedule a door-to-door pickup in seconds, customize your wash profile, and track your clothes in real-time.
            </motion.p>

            {/* Quick Micro-feature list */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-4 max-w-md w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-md bg-cyan-500/15 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-300 font-['Nunito']">24-Hour Return</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-md bg-cyan-500/15 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-300 font-['Nunito']">Eco-Friendly Soap</span>
              </div>
            </motion.div>

            {/* Premium Dual Actions */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.button
                type="button"
                onClick={() => setBookingOpen(true)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#154088] to-[#0e2c5f] px-8 py-4.5 font-['Nunito'] font-black text-base text-white shadow-xl shadow-[#154088]/20 border border-[#154088]/30 hover:border-cyan-500/30 transition-colors duration-300"
              >
                Book a Pickup
                <motion.span
                  className="flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} className="stroke-[2.5]" />
                </motion.span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setBookingOpen(true)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] px-8 py-4.5 font-['Nunito'] font-bold text-base text-white border border-white/10 hover:border-white/20 transition-colors"
              >
                Estimate Pricing
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: High-End Glassmorphic Bento Dashboard Showcase */}
          <motion.div
            className="lg:col-span-6 w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="grid grid-cols-6 gap-4 w-full max-w-[520px]"
              variants={containerStagger}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 0.35 }}
            >

              {/* Card 1: Interactive Service Selector Mockup (Span 6) */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="col-span-6 bg-[#04122d]/40 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-5 shadow-2xl flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-cyan-400" />
                    <span className="text-xs font-black text-white/50 tracking-wider uppercase font-['Nunito']">Select Care Package</span>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">Customisable</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "wash-fold", label: "Wash & Fold", icon: Droplet, desc: "Everyday apparel" },
                    { id: "dry-clean", label: "Dry Clean", icon: Sparkles, desc: "Delicates & suits" },
                    { id: "express", label: "Express 12h", icon: Clock, desc: "Priority priority" },
                  ].map((service) => {
                    const Icon = service.icon;
                    const isSelected = selectedService === service.id;
                    return (
                      <motion.button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`relative flex flex-col items-start text-left p-3.5 rounded-2xl border overflow-hidden transition-colors duration-300 ${
                          isSelected
                            ? "border-cyan-500/40 text-white"
                            : "bg-[#000a1c]/50 border-white/5 hover:border-white/10 text-slate-400"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="selected-service-bg"
                            className="absolute inset-0 bg-[#154088]/40 shadow-lg shadow-cyan-500/5"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <div className="relative flex flex-col items-start">
                          <Icon size={18} className={isSelected ? "text-cyan-400" : "text-slate-400"} />
                          <span className="text-xs font-black font-['Nunito'] mt-2.5 text-white">{service.label}</span>
                          <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{service.desc}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Card 2: Simulated Live Progress Tracker (Span 4) */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="col-span-6 sm:col-span-4 bg-[#04122d]/40 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-5 shadow-2xl flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-black text-white/50 tracking-wider uppercase font-['Nunito']">Live Order Tracker</span>
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-white">Active Clean Cycle</span>
                    <span className="text-cyan-400">100% Done</span>
                  </div>
                  {/* Styled Progress Bar */}
                  <div className="h-2 w-full bg-[#000a1c]/60 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#154088] to-cyan-400 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-['Nunito'] font-bold">
                    <span>Pickup</span>
                    <span>Wash</span>
                    <span>Iron</span>
                    <span className="text-cyan-400">Delivery</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Free Pickup Schedule Badge (Span 2) */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="col-span-6 sm:col-span-2 bg-gradient-to-br from-[#154088]/30 to-[#0e2c5f]/10 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-5 shadow-2xl flex flex-col items-center justify-center text-center gap-2 group hover:border-cyan-500/20 transition-colors"
              >
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center"
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Calendar size={18} />
                </motion.div>
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase font-['Nunito']">Pickup Slot</span>
                <span className="text-xs font-black text-white font-['Nunito']">Today Available</span>
              </motion.div>

              {/* Card 4: Micro Stats Bar (Span 6) */}
              <motion.div
                variants={fadeUp}
                className="col-span-6 bg-[#04122d]/30 border border-white/[0.04] backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <Truck size={15} className="text-slate-400" />
                  <span className="text-[11px] font-bold text-slate-300">Free Doorstep Dropoff</span>
                </div>
                <div className="h-3 w-px bg-white/10" />
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-slate-400" />
                  <span className="text-[11px] font-bold text-slate-300">Garment Care Guarantee</span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {bookingOpen && (
          <BookPickupModal
            isOpen={bookingOpen}
            onClose={() => setBookingOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}