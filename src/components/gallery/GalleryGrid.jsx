import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';

const filters = ['All', 'Wash & Fold', 'Dry Cleaning', 'Linens', 'Facility'];

const galleryItems = [
  { id: 1, category: 'Wash & Fold', img: 'https://i.pinimg.com/1200x/e7/dc/4d/e7dc4d94a4b17bd512c4e6f8a9e77080.jpg', title: 'Folded & Packaged', tall: true },
  { id: 2, category: 'Dry Cleaning', img: 'https://i.pinimg.com/1200x/99/4d/75/994d7527b14e52e86f1501d39c699553.jpg', title: 'Pressed Suits' },
  { id: 3, category: 'Facility', img: 'https://i.pinimg.com/1200x/cf/e6/a5/cfe6a53a61905710339296e72f4b90f9.jpg', title: 'Our Facility', tall: true },
  { id: 4, category: 'Linens', img: 'https://i.pinimg.com/736x/37/c0/66/37c06675926f8c39a12996b5e6b8e164.jpg', title: 'Fresh Linens' },
  { id: 5, category: 'Wash & Fold', img: 'https://i.pinimg.com/1200x/ea/db/c8/eadbc8c0cecfb6c8f3cf7be9b144ad42.jpg', title: 'Sorted & Ready' },
  { id: 6, category: 'Dry Cleaning', img: 'https://i.pinimg.com/736x/9e/29/07/9e290730f3c85bb4baf5ec870fea5a74.jpg', title: 'Delicate Care' },
  { id: 7, category: 'Facility', img: 'https://i.pinimg.com/1200x/10/48/87/104887907558d85dee545b7ef682d4e3.jpg', title: 'Pickup & Delivery', tall: true },
  { id: 8, category: 'Linens', img: 'https://i.pinimg.com/736x/72/20/00/722000ac3f0a4fd0e340877b03e87f8a.jpg', title: 'Bedding Sets' },
  { id: 9, category: 'Wash & Fold', img: 'https://i.pinimg.com/1200x/bb/ac/04/bbac042ee75a852f4ab4bff0a5dc79f6.jpg', title: 'Fresh Laundry' },
  { id: 10, category: 'Dry Cleaning', img: 'https://i.pinimg.com/736x/c0/6d/3d/c06d3d2bdcc01252105ac3ea0c333243.jpg', title: 'Professional Cleaning', tall: true },
  { id: 11, category: 'Facility', img: 'https://i.pinimg.com/1200x/62/15/47/6215473d801300865e144308f5f4747d.jpg', title: 'Modern Equipment', tall: true },
  { id: 12, category: 'Linens', img: 'https://i.pinimg.com/736x/1f/ed/ed/1feded3bb4b0cc2d7b7abf552b2e2df5.jpg', title: 'Luxury Bedding' },
  { id: 13, category: 'Wash & Fold', img: 'https://i.pinimg.com/1200x/53/61/23/536123c99d23afb003b9669c91cb4115.jpg', title: 'Freshly Folded', tall: true },
  { id: 14, category: 'Dry Cleaning', img: 'https://i.pinimg.com/736x/60/d9/7b/60d97bcc6e84a7fb9315c91cba60e463.jpg', title: 'Premium Garments' },
  { id: 15, category: 'Facility', img: 'https://i.pinimg.com/736x/6e/39/ce/6e39ce639789bf41d088565f140364ef.jpg', title: 'Laundry Team' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

export default function GalleryGrid() {
  const [active, setActive] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered =
    active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);

  // Reset selected photo context if filter updates out from underneath an open modal
  useEffect(() => {
    setSelectedIndex(null);
  }, [active]);

  // Keyboard controls listener
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filtered]);

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#ffffff] text-[#334155] py-18 sm:py-22 border-b border-slate-200/60" id="gallery-grid">
      {/* Soft Background Accent Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-[#154088]/5 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
          className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-[#5b86c9]/5 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Engine & Navigation Control Panel */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-slate-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            variants={fadeUp}
            className="max-w-xl"
          >
            <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm">
              Our Portfolio
            </span>

            <h2 className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0a1f47]">
              Moments from <br />
              <span className="bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230] bg-clip-text text-transparent">every order.</span>
            </h2>
          </motion.div>

          {/* Premium Filter Pills Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            variants={fadeUp}
            className="flex flex-wrap gap-1.5 bg-slate-100/80 border border-slate-200/60 p-1.5 rounded-2xl backdrop-blur-md self-start lg:self-auto"
          >
            {filters.map((filter) => {
              const isSelected = active === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`relative rounded-xl px-5 py-2.5 font-['Nunito'] text-sm font-black tracking-tight transition-colors duration-300 ${
                    isSelected ? 'text-white' : 'text-[#475569] hover:text-[#0a1f47] hover:bg-slate-200/50'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="active-filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#154088] to-[#0a1f47] shadow-md shadow-[#154088]/10 -z-10"
                    />
                  )}
                  {filter}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* High-Fidelity Masonry Grid Sheet */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ id, img, title, category, tall }, index) => (
              <motion.div
                key={id}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariant}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative mb-6 break-inside-avoid rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-[0_15px_30px_-15px_rgba(21,64,136,0.04)] transition-colors duration-300 hover:border-[#154088]/30 hover:shadow-2xl hover:shadow-[#154088]/10 cursor-pointer ${
                  tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                {/* Inner gradient line highlight edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Core Clean Asset Underlay */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03] select-none pointer-events-none"
                  loading="lazy"
                />

                {/* Multi-layered cinematic overlay scrims calibrated for light layout text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f47]/70 via-[#0a1f47]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 z-10" />

                {/* Bottom Card Copy Stack */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-['Nunito'] inline-block text-[10px] font-black uppercase tracking-widest text-[#9dbbec] bg-white/10 border border-white/10 px-2 py-0.5 rounded-md mb-2 backdrop-blur-sm">
                    {category}
                  </span>
                  <p className="font-['Nunito'] text-base sm:text-lg font-black tracking-tight text-white transition-colors">
                    {title}
                  </p>
                </div>

                {/* Top Action Floating Expand Icon Trigger */}
                <span className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-xl bg-white/80 border border-slate-200/60 text-[#475569] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 backdrop-blur-md z-20 hover:text-[#154088] hover:bg-white hover:border-slate-300">
                  <Expand size={14} className="stroke-[2.5]" />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Modal Module Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#0a1f47]/90 backdrop-blur-lg cursor-zoom-out"
          >
            {/* Top Close Control Panel Bar */}
            <div className="absolute top-6 left-0 right-0 px-6 flex justify-between items-center text-white/70 z-30 select-none pointer-events-none">
              <div className="font-['Nunito'] text-sm font-medium tracking-wide">
                {selectedIndex + 1} / {filtered.length}
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Nav Trigger */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-30 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronLeft size={24} className="stroke-[2.5]" />
            </button>

            {/* Hero Main Presentation Card */}
            <motion.div
              key={filtered[selectedIndex].id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[75vh] md:max-h-[80vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-default"
            >
              <img
                src={filtered[selectedIndex].img}
                alt={filtered[selectedIndex].title}
                className="w-full h-full max-h-[75vh] md:max-h-[80vh] object-contain bg-slate-950/40"
              />
              
              {/* Context Text Footer inside Lightbox */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white pt-16">
                <span className="font-['Nunito'] inline-block text-[10px] font-black uppercase tracking-widest text-[#9dbbec] bg-white/10 border border-white/10 px-2 py-0.5 rounded-md mb-2 backdrop-blur-sm">
                  {filtered[selectedIndex].category}
                </span>
                <h3 className="font-['Nunito'] text-lg md:text-xl font-bold tracking-tight">
                  {filtered[selectedIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Nav Trigger */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-30 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronRight size={24} className="stroke-[2.5]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}