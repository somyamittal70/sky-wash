import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'Is there a minimum order for Wash & Fold?',
    a: "Yes, our Wash & Fold service has a ₹1,290 minimum per order. There's no minimum for Dry Cleaning or Ironing services.",
  },
  {
    q: 'Are there any hidden fees?',
    a: 'None. The price you see at checkout is the price you pay. Optional add-ons like same-day service are always shown clearly before you confirm.',
  },
  {
    q: 'Do you offer discounts for bulk or recurring orders?',
    a: 'Yes — recurring weekly or bi-weekly pickups get a 10% discount automatically applied. Bulk orders over 30 lbs also qualify for reduced per-pound rates.',
  },
  {
    q: 'How do I pay for my order?',
    a: 'You can pay securely by card through the app or website at checkout, or set up auto-pay for recurring pickups so you never have to think about it.',
  },
  {
    q: 'What happens if my order weighs more than expected?',
    a: 'We weigh every order on pickup and text you the final total before charging your card — no surprises, and you can always ask questions before we proceed.',
  },
  {
    q: 'Can I get a refund if I\'m not satisfied?',
    a: 'If something isn\'t up to standard, let us know within 48 hours and we\'ll re-clean it free of charge or issue a credit toward your next order.',
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

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function FAQItem({ item, isOpen, onClick }) {
  return (
    <motion.div
      variants={itemVariant}
      className={`border rounded-2xl bg-white overflow-hidden transition-colors duration-300 ${
        isOpen
          ? 'border-[#154088] shadow-[0_20px_40px_-15px_rgba(15,64,136,0.08)]'
          : 'border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group relative"
      >
        <span className={`font-['Nunito'] text-base sm:text-lg font-black tracking-tight transition-colors duration-300 ${
          isOpen ? 'text-[#154088]' : 'text-[#0a1f47] group-hover:text-[#154088]'
        }`}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          whileHover={!isOpen ? { scale: 1.05 } : {}}
          className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-xl border transition-colors duration-300 ${
            isOpen
              ? 'bg-[#154088] text-white border-transparent shadow-md shadow-[#154088]/20'
              : 'bg-slate-50 text-slate-400 border-slate-200 group-hover:border-slate-300 group-hover:text-slate-600'
          }`}
        >
          <Plus size={16} className="stroke-[2.5]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-['Open_Sans'] text-sm sm:text-base text-slate-500 leading-relaxed px-6 pb-6 pr-12 font-medium">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="relative overflow-hidden bg-[#fcfdfe] text-slate-800 py-18 sm:py-22 border-b border-slate-200/60" id="pricing-faq">
      {/* Subtle Underlay Architectural Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
          className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-slate-100/50 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">

          {/* LEFT: Structural Header Panel */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              custom={0}
              variants={fadeUp}
              className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm"
            >
              <HelpCircle size={12} className="text-[#154088]" />
              Support Engine
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              custom={1}
              variants={fadeUp}
              className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0a1f47]"
            >
              Questions about <br />
              <span className="bg-gradient-to-r from-[#154088] via-[#4770b3] to-slate-400 bg-clip-text text-transparent">our pricing?</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              custom={2}
              variants={fadeUp}
              className="font-['Open_Sans'] mt-4 text-base sm:text-lg text-slate-500 max-w-md font-medium leading-relaxed"
            >
              Still unsure about an auto-pay discount or tailored bulk configurations? Our support squad is operational to walk you through it.
            </motion.p>

            <motion.a
              href="/contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              custom={3}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 px-7 py-4 font-['Nunito'] font-black text-xs uppercase tracking-wider text-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              Contact Support
              <ArrowRight size={14} className="text-[#154088] transition-transform duration-300 group-hover:translate-x-0.5 stroke-[2.5]" />
            </motion.a>
          </div>

          {/* RIGHT: Dynamic Light Accordion Stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={listContainer}
            className="flex flex-col gap-4"
          >
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}