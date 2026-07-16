import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShirtIcon, Sparkles, Wind, Bed, WashingMachine, ArrowRight, Footprints, RotateCw } from 'lucide-react';
import BookPickupModal from '../layout/BookPickupModal';

const services = [
  {
    id: '01',
    icon: WashingMachine,
    title: 'Wash & Fold',
    desc: 'Everyday apparel professionally washed, climate-controlled dried, and crisply bundled ready for your wardrobe.',
    price: '80',
    unit: 'kg',
    image: 'https://i.pinimg.com/736x/85/e1/7f/85e17f3c753d646b45bb09d3c384706e.jpg'
  },
  {
    id: '02',
    icon: Sparkles,
    title: 'Dry Cleaning Matrix',
    desc: 'Delicate non-aqueous solvent extraction routines engineered for custom suits, premium silks, and delicate fabrics.',
    price: '300',
    unit: 'item',
    image: 'https://i.pinimg.com/1200x/3a/69/20/3a692002d563a47bc0d6403618552fb3.jpg'
  },
  {
    id: '03',
    icon: Wind,
    title: 'Express Turnaround',
    desc: 'Accelerated priority processing track with immediate doorstep collection and a strict 12-hour delivery pipeline.',
    price: '80',
    unit: 'order',
    image: 'https://i.pinimg.com/1200x/de/44/b6/de44b648e7e925ad0efe878fcd5087fb.jpg'
  },
  {
    id: '04',
    icon: ShirtIcon,
    title: 'Ironing & Pressing',
    desc: 'Crisp, high-pressure steam alignment tailored perfectly to restore sharp, professional profiles to corporate workwear.',
    price: '80',
    unit: 'item',
    image: 'https://i.pinimg.com/1200x/99/4d/75/994d7527b14e52e86f1501d39c699553.jpg'
  },
  {
    id: '05',
    icon: Bed,
    title: 'Bedding & Linens',
    desc: 'Intense sanitization and deep structural cleansing loops engineered explicitly for heavy duvets and sheets.',
    price: '300',
    unit: 'set',
    image: 'https://i.pinimg.com/1200x/03/a5/08/03a5087df701b17fb6721a81eb9e6968.jpg'
  },
  {
    id: '06',
    icon: Footprints,
    title: 'Shoe Restoration',
    desc: 'Meticulous micro-dirt extraction, bristle scrubbing, and leather conditioning treatments for luxury footwear.',
    price: '200',
    unit: 'pair',
    image: 'https://i.pinimg.com/1200x/32/20/85/322085e91fe7c9cec235c7084ee54789.jpg'
  },
];

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookService = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-[#fcfdfe] py-18 sm:py-22 relative overflow-hidden" id="interactive-catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm mb-4">
              Interactive Catalog
            </span>
            <h2 className="font-['Nunito'] text-4xl sm:text-5xl font-black text-[#0a1f47] mb-5 tracking-tight leading-[1.15]">
              Hover to inspect specs. <br />
              <span className="text-[#154088]">Click anywhere to deploy service.</span>
            </h2>
          </motion.div>

          {/* 3D FLIP CARD GRID */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const { id, icon: Icon, title, desc, price, unit, image } = service;
              return (
                <motion.div
                  key={title}
                  variants={cardVariant}
                  className="group h-[400px] w-full [perspective:1000px] cursor-pointer"
                  onClick={() => handleBookService(service)}
                >
                  {/* Rotating 3D Container */}
                  <div className="relative h-full w-full rounded-[2rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md group-hover:shadow-2xl">

                    {/* ================= FRONT FACE (IMAGE OVERLAY) ================= */}
                    <div className="absolute inset-0 h-full w-full rounded-[2rem] overflow-hidden [backface-visibility:hidden] bg-slate-900">
                      {/* Background Image with Hover Scale */}
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Dark Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f47]/95 via-[#0a1f47]/40 to-transparent" />

                      {/* Front Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                        <div className="flex items-center justify-between">
                          <motion.div
                            whileHover={{ scale: 1.08, rotate: 4 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
                          >
                            <Icon size={22} className="stroke-[2]" />
                          </motion.div>
                          <span className="font-mono text-sm font-black tracking-widest text-white/60">
                            .{id}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-semibold mb-2">
                            <RotateCw size={12} className="animate-spin-slow" />
                            <span>HOVER FOR SPECS</span>
                          </div>
                          <h3 className="font-['Nunito'] text-2xl font-black tracking-tight text-white leading-snug">
                            {title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* ================= BACK FACE (DETAILS & PRICE) ================= */}
                    <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-white border border-slate-200/80 p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg">

                      {/* Back Header */}
                      <div>
                        <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
                          <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 px-2.5 py-1 rounded">
                            Protocol // 0{id}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                            <Icon size={16} />
                          </div>
                        </div>

                        <h4 className="font-['Nunito'] text-xl font-black text-[#0a1f47] tracking-tight">
                          {title}
                        </h4>
                        <p className="font-['Open_Sans'] mt-3 text-sm text-slate-500 leading-relaxed font-medium">
                          {desc}
                        </p>
                      </div>

                      {/* Back Footer / Action Area */}
                      <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 block">
                            Base Rate
                          </span>
                          <div className="flex items-baseline gap-0.5 mt-0.5">
                            <span className="text-2xl font-black font-['Nunito'] text-[#0a1f47]">₹{price}</span>
                            <span className="text-xs font-semibold font-['Open_Sans'] text-slate-400">/{unit}</span>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#154088] text-white px-5 py-3 font-['Nunito'] font-black text-xs uppercase tracking-wider hover:bg-[#0a1f47] transition-colors shadow-md shadow-[#154088]/20"
                        >
                          <span>Book</span>
                          <ArrowRight size={13} className="stroke-[2.5]" />
                        </motion.button>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* Booking Form Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <BookPickupModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedService={selectedService}
          />
        )}
      </AnimatePresence>
    </>
  );
}