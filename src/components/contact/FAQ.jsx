import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    q: 'How does pickup and delivery work?',
    a: 'Just schedule a pickup slot that suits you through the app or website. Our driver collects your laundry, we clean it with care, and deliver it back fresh — usually within 24–48 hours.',
  },
  {
    q: 'What detergents and products do you use?',
    a: "We use eco-friendly, hypoallergenic detergents by default. If you have specific preferences or sensitivities, just let us know in the order notes and we'll tailor the wash accordingly.",
  },
  {
    q: 'Do you offer same-day service?',
    a: 'Yes! Same-day service is available for orders placed before 10am, subject to availability in your area. An express fee applies for same-day turnaround.',
  },
  {
    q: 'How is pricing calculated?',
    a: "Pricing is based on weight for wash & fold, and per-item for dry cleaning and specialty garments. You'll always see a clear estimate before confirming your order.",
  },
  {
    q: 'What if something gets damaged or lost?',
    a: "We take great care with every garment, but in the rare case of damage or loss, we offer compensation as outlined in our care guarantee. Reach out to our support team and we'll make it right.",
  },
  {
    q: 'Can I reschedule or cancel a pickup?',
    a: 'Absolutely — you can reschedule or cancel free of charge up to 2 hours before your scheduled pickup window from the app or by calling us directly.',
  },
];

// Orchestration variants
const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const riseIn = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function FAQItem({ item, isOpen, onClick }) {
  return (
    <motion.div
      variants={riseIn}
      layout
      transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className={`rounded-2xl border backdrop-blur-md overflow-hidden transition-colors duration-300 ${
        isOpen
          ? 'border-[#154088]/30 bg-[#154088]/10 shadow-2xl shadow-[#154088]/10'
          : 'border-[#154088]/10 bg-white/5 hover:border-[#154088]/20 hover:bg-white/10'
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group"
      >
        <span
          className={`font-['Nunito'] text-base sm:text-lg font-black tracking-tight transition-colors ${
            isOpen ? 'text-white' : 'text-[#9a9ca1] group-hover:text-[#5b8ee0]'
          }`}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-xl border ${
            isOpen
              ? 'bg-gradient-to-r from-[#154088] to-[#0e2c5f] text-white border-transparent'
              : 'bg-[#001230] text-[#9a9ca1] border-[#154088]/20 group-hover:bg-[#154088]/20 group-hover:text-white'
          }`}
        >
          <Plus size={15} className="stroke-[2.5]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25 },
            }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-['Open_Sans'] text-sm sm:text-[15px] text-[#9a9ca1] leading-relaxed px-6 pb-5 pr-12 font-medium">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="relative overflow-hidden bg-[#001230] text-white py-18 sm:py-22" id="faq-module">
      {/* Decorative Atmosphere Layers */}
      <motion.div
        className="absolute top-12 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#154088]/15 to-transparent blur-[120px] pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, 14, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#154088_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* LEFT COLUMN: Stationary Context Hub */}
          <div className="lg:sticky lg:top-28 space-y-6">
            {/* Pill Tag */}
            <motion.div
              variants={riseIn}
              className="inline-flex items-center gap-2 rounded-full bg-[#154088]/10 border border-[#154088]/30 px-4 py-1.5 shadow-inner"
            >
              <HelpCircle size={13} className="text-[#154088]" />
              <span className="font-['Nunito'] text-xs font-black uppercase tracking-widest text-[#154088]">
                Knowledge Base
              </span>
            </motion.div>

            <motion.h2
              variants={riseIn}
              className="font-['Nunito'] text-4xl font-black tracking-tight text-white sm:text-5xl leading-[1.1]"
            >
              Got questions? <br />
              <span className="bg-gradient-to-r from-[#154088] via-[#2a5fb0] to-[#154088] bg-clip-text text-transparent">
                We've got answers.
              </span>
            </motion.h2>

            <motion.p
              variants={riseIn}
              className="font-['Open_Sans'] text-base leading-relaxed text-[#9a9ca1] max-w-md font-medium"
            >
              Can't locate your particular operational parameter? Get in contact directly with a care hub agent for immediate assistance.
            </motion.p>

            <motion.div variants={riseIn} className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-['Nunito'] font-black text-sm text-[#9a9ca1] hover:text-[#154088] transition-colors group"
              >
                Contact Support Desk
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Accordion Matrix Stack */}
          <motion.div className="flex flex-col gap-4 w-full" variants={containerStagger}>
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}