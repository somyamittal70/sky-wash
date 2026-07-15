import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const contactDetails = [
  { icon: Phone, label: 'Call us', value: ' +91-9654349983', href: 'tel:+ +91-9654349983', glow: 'group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-100' },
  { icon: Mail, label: 'Email us', value: 'hello@laundary.com', href: 'mailto:hello@laundary.com', glow: 'group-hover:text-[#154088] group-hover:bg-[#154088]/5 group-hover:border-[#154088]/10' },
  { icon: MapPin, label: 'Visit us', value: 'S-Block, DLF Phase 3, Sector 24 Gurugram, Haryana 122002', href: '#', glow: 'group-hover:text-emerald-600 group-hover:bg-emerald-50 group-hover:border-emerald-100' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate premium API round-trip delay
    setTimeout(() => {
      console.log('Contact form submitted:', form);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-[#fcfdfe] py-18 sm:py-22 overflow-hidden relative border-t border-slate-200/80">
      {/* Dynamic Background Aura Mesh */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#154088]/5 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
        className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#5b86c9]/5 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: Brand Framing & Interactive Information Cards */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
              variants={fadeUp}
              className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-1.5 shadow-sm"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
              variants={fadeUp}
              className="font-['Nunito'] mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#0a1f47] tracking-tight"
            >
              Questions? We are <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230]">
                happy to assist.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={2}
              variants={fadeUp}
              className="font-['Open_Sans'] mt-4 text-base text-slate-500 leading-relaxed max-w-md"
            >
              Send us a note about your order logistics, a specialized requirement, or general setup inquiries. A support peer will respond within a couple hours.
            </motion.p>

            {/* Quick Informational Directory Blocks */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardContainer}
              className="mt-10 flex flex-col gap-4"
            >
              {contactDetails.map(({ icon: Icon, label, value, href, glow }) => {
                const isLink = href && href !== '#';
                const MotionWrapper = isLink ? motion.a : motion.div;
                return (
                  <MotionWrapper
                    key={label}
                    href={href}
                    variants={cardVariant}
                    whileHover={isLink ? { x: 4 } : {}}
                    className={`group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 transition-colors duration-300 ${
                      isLink ? 'hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 cursor-pointer' : ''
                    }`}
                  >
                    <motion.span
                      whileHover={isLink ? { scale: 1.1, rotate: 4 } : {}}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 bg-white border border-slate-200 text-slate-400 transition-all duration-300 ${glow}`}
                    >
                      <Icon size={18} className="stroke-[2.2]" />
                    </motion.span>
                    <div>
                      <p className="font-['Open_Sans'] text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                      <p className="font-['Nunito'] text-sm sm:text-base font-black text-[#0a1f47] mt-0.5 group-hover:text-[#154088] transition-colors duration-300">{value}</p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT SIDE: High-Fidelity Light Card Contact Portal Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 w-full"
          >
            <div className="relative p-1 rounded-[2rem] bg-slate-100/50 border border-slate-200/60 shadow-[0_25px_60px_-25px_rgba(21,64,136,0.06)]">
              <div className="bg-white rounded-[1.9rem] p-6 sm:p-10 overflow-hidden">

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="py-12 text-center flex flex-col items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                        className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-md shadow-emerald-100"
                      >
                        <CheckCircle size={32} className="stroke-[2.2]" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.4 }}
                        className="font-['Nunito'] text-2xl font-black text-[#0a1f47]"
                      >
                        Transmission Successful
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                        className="font-['Open_Sans'] text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed"
                      >
                        Thanks for reaching out! We have cached your information and will follow up at <span className="text-[#154088] font-bold">{form.email}</span> shortly.
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: -16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="font-['Open_Sans'] text-xs font-black uppercase tracking-wider text-slate-400">
                            Full Name
                          </label>
                          <input
                            id="name"
                            required
                            type="text"
                            value={form.name}
                            onChange={handleChange('name')}
                            placeholder="Rahul Kumar"
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1f47] font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154088]/10 focus:border-[#154088] transition-all duration-300"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="font-['Open_Sans'] text-xs font-black uppercase tracking-wider text-slate-400">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange('phone')}
                            placeholder=" +91-9654349983"
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1f47] font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154088]/10 focus:border-[#154088] transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-['Open_Sans'] text-xs font-black uppercase tracking-wider text-slate-400">
                          Email Address
                        </label>
                        <input
                          id="email"
                          required
                          type="email"
                          value={form.email}
                          onChange={handleChange('email')}
                          placeholder="rahul@email.com"
                          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1f47] font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154088]/10 focus:border-[#154088] transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-['Open_Sans'] text-xs font-black uppercase tracking-wider text-slate-400">
                          Detailed Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange('message')}
                          placeholder="Describe how our support operations can clear your blockers..."
                          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1f47] font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154088]/10 focus:border-[#154088] transition-all duration-300 resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { y: -2 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#154088] to-[#0a1f47] px-8 py-4 font-['Nunito'] font-black text-sm sm:text-base text-white shadow-lg shadow-[#154088]/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#154088]/20 disabled:opacity-50 disabled:pointer-events-none self-start group"
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isSubmitting ? 'submitting' : 'idle'}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                          >
                            {isSubmitting ? 'Processing Dispatch...' : 'Send Message'}
                          </motion.span>
                        </AnimatePresence>
                        <motion.span
                          animate={isSubmitting ? { x: [0, 4, 0] } : {}}
                          transition={{ duration: 0.6, repeat: isSubmitting ? Infinity : 0, ease: 'easeInOut' }}
                          className="inline-flex group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                        >
                          <Send size={16} className="stroke-[2.2]" />
                        </motion.span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}