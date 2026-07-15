import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const contactCards = [
  {
    id: "phone",
    icon: Phone,
    label: "Voice Support",
    value: "+91-9654349983",
    href: "tel:+91-9654349983",
    status: "Available",
  },
  {
    id: "email",
    icon: Mail,
    label: "Digital Desk",
    value: "hello@laundary.com",
    href: "mailto:hello@laundary.com",
    status: "2hr Reply",
  },
  {
    id: "address",
    icon: MapPin,
    label: "Flagship Hub",
    value: "S-Block, DLF Phase 3, Sector 24 Gurugram, Haryana 122002",
    href: "#",
    status: "Open Now",
  },
  {
    id: "hours",
    icon: Clock,
    label: "Operational Sync",
    value: "Mon–Sun, 9am–9pm",
    href: null,
    status: "Active",
  },
];

// Orchestration variants — one coordinated entrance rather than scattered effects
const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
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

const fieldIn = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactFormMap() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeCard, setActiveCard] = useState("address");

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Premium form dispatch initiated:", form);
    setSubmitted(true);
  };

  return (
    <section
      className="relative overflow-hidden bg-white text-[#001230] py-18 sm:py-22"
      id="contact-command-sheet"
    >
      {/* Structural Micro-Grid Backdrop */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(#9a9ca1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" /> */}

      {/* High-Elegance Cosmic Atmosphere Glows — slow ambient drift */}
      <motion.div
        className="absolute top-12 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#154088]/10 via-[#154088]/5 to-transparent blur-[120px] pointer-events-none"
        animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-12 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#154088]/10 to-transparent blur-[120px] pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid items-stretch gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT PANEL: Form Interface Grid */}
          <div className="flex flex-col justify-between py-2">
            <motion.div className="max-w-xl" variants={riseIn}>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-[#154088]/10 border border-[#154088]/20 px-4 py-1.5 shadow-inner"
                variants={riseIn}
              >
                {/* <Sparkles size={12} className="text-[#154088] fill-[#154088]" /> */}
                <span className="font-['Nunito'] text-[10px] font-black uppercase tracking-widest text-[#154088]">
                  Operational HQ
                </span>
              </motion.div>

              <motion.h2
                className="font-['Nunito'] mt-6 text-4xl font-black tracking-tight text-[#001230] sm:text-5xl lg:text-6xl leading-[1.05]"
                variants={riseIn}
              >
                Let's calibrate your <br />
                <span className="bg-gradient-to-r from-[#154088] via-[#2a5fb0] to-[#154088] bg-clip-text text-transparent">
                  wardrobe care.
                </span>
              </motion.h2>

              <motion.p
                className="font-['Open_Sans'] mt-6 text-base sm:text-lg leading-relaxed text-[#676a73] font-medium"
                variants={riseIn}
              >
                Connect directly with our facility supervisors. Fill out the
                logistics framework below to route your specific inquiry
                directly to the correct treatment cell.
              </motion.p>
            </motion.div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 rounded-3xl bg-[#154088]/5 border border-emerald-500/30 p-8 shadow-xl backdrop-blur-md relative overflow-hidden"
                >
                  <motion.div
                    className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ originY: 0 }}
                  />
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    >
                      <CheckCircle2
                        className="text-emerald-500 shrink-0 mt-0.5"
                        size={22}
                      />
                    </motion.div>
                    <div>
                      <p className="font-['Nunito'] font-black text-[#001230] text-lg">
                        Inbound Stream Validated
                      </p>
                      <p className="font-['Open_Sans'] text-sm text-[#676a73] mt-1.5 leading-relaxed">
                        Your transmission has cleared parameters
                        successfully. A priority agent will trace back via{" "}
                        <span className="font-semibold text-[#154088]">
                          {form.email || "your node"}
                        </span>{" "}
                        shortly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  variants={containerStagger}
                  className="mt-10 space-y-6 bg-gradient-to-b from-[#9a9ca1]/10 to-white border border-[#9a9ca1]/30 p-6 sm:p-8 rounded-[2.5rem] shadow-xl backdrop-blur-md relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9a9ca1]/40 to-transparent" />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <motion.div className="relative" variants={fieldIn}>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="Rahul Kumar"
                        className="w-full rounded-2xl border border-[#9a9ca1]/40 bg-white px-4 py-4 text-sm text-[#001230] placeholder:text-[#9a9ca1] focus:border-[#154088] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#154088]/10 transition-all duration-300 font-medium shadow-sm"
                      />
                      <label
                        htmlFor="name"
                        className="absolute -top-2 left-4 bg-white px-2 font-['Open_Sans'] text-[10px] font-bold uppercase tracking-wider text-[#676a73]"
                      >
                        Name
                      </label>
                    </motion.div>
                    <motion.div className="relative" variants={fieldIn}>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        placeholder="+91-9654349983"
                        className="w-full rounded-2xl border border-[#9a9ca1]/40 bg-white px-4 py-4 text-sm text-[#001230] placeholder:text-[#9a9ca1] focus:border-[#154088] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#154088]/10 transition-all duration-300 font-medium shadow-sm"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute -top-2 left-4 bg-white px-2 font-['Open_Sans'] text-[10px] font-bold uppercase tracking-wider text-[#676a73]"
                      >
                        Phone
                      </label>
                    </motion.div>
                  </div>

                  <motion.div className="relative" variants={fieldIn}>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="rahul@email.com"
                      className="w-full rounded-2xl border border-[#9a9ca1]/40 bg-white px-4 py-4 text-sm text-[#001230] placeholder:text-[#9a9ca1] focus:border-[#154088] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#154088]/10 transition-all duration-300 font-medium shadow-sm"
                    />
                    <label
                      htmlFor="email"
                      className="absolute -top-2 left-4 bg-white px-2 font-['Open_Sans'] text-[10px] font-bold uppercase tracking-wider text-[#676a73]"
                    >
                      Email Hub
                    </label>
                  </motion.div>

                  <motion.div className="relative" variants={fieldIn}>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Provide specific instruction updates or inquiries..."
                      className="w-full rounded-2xl border border-[#9a9ca1]/40 bg-white px-4 py-4 text-sm text-[#001230] placeholder:text-[#9a9ca1] focus:border-[#154088] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#154088]/10 transition-all duration-300 resize-none font-medium shadow-sm"
                    />
                    <label
                      htmlFor="message"
                      className="absolute -top-2 left-4 bg-white px-2 font-['Open_Sans'] text-[10px] font-bold uppercase tracking-wider text-[#676a73]"
                    >
                      Message Parameters
                    </label>
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={fieldIn}
                    whileHover={{ y: -2, boxShadow: "0 20px 30px -10px rgba(21,64,136,0.35)" }}
                    whileTap={{ scale: 0.96 }}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#154088] to-[#0e2c5f] px-8 py-4 font-['Nunito'] font-black text-sm text-white shadow-xl shadow-[#154088]/20 transition-colors duration-300"
                  >
                    Dispatch Transmission
                    <motion.span
                      className="inline-flex"
                      whileHover={{ x: 3, y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send size={14} className="stroke-[2.5]" />
                    </motion.span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL: Live Radar & Interactive Hub Cards */}
          <motion.div
            className="flex flex-col gap-6 justify-between lg:h-full"
            variants={riseIn}
          >
            {/* Interactive Light Embedded Map Canvas */}
            <motion.div
              variants={riseIn}
              className="relative rounded-[2.5rem] p-3 bg-[#9a9ca1]/5 border border-[#9a9ca1]/30 shadow-xl flex-1 flex flex-col min-h-[380px] backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9a9ca1]/40 to-transparent" />

              {/* Console Header Bar */}
              <div className="flex items-center justify-between px-3 pb-3 border-b border-[#9a9ca1]/30 mb-2">
                <div className="flex items-center gap-2">
                  <motion.span
                    className="w-2.5 h-2.5 rounded-full bg-emerald-500"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="font-['Nunito'] text-xs font-black text-[#676a73] uppercase tracking-widest">
                    Live Coordinate Node
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#9a9ca1] font-['Open_Sans']">
                  <ShieldCheck size={13} className="text-[#9a9ca1]" /> Secured
                  Embed
                </div>
              </div>

              {/* Core Iframe Element - Custom styling for clean light integration */}
              <motion.div
                className="w-full flex-1 rounded-[1.75rem] overflow-hidden relative border border-[#9a9ca1]/30 shadow-inner"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <iframe
                  title="Laundary operation central mapping radar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.999999999999!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                  className="absolute inset-0 w-full h-full border-0 contrast-[105%] opacity-95"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

            {/* Light Asymmetric Grid Bento Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerStagger}
            >
              {contactCards.map(
                ({ id, icon: Icon, label, value, href, status }) => {
                  const isActive = activeCard === id;
                  const containerStructure = (
                    <motion.div
                      variants={fieldIn}
                      onClick={() => setActiveCard(id)}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition-colors duration-300 cursor-pointer text-left h-full group ${
                        isActive
                          ? "border-[#154088]/40 bg-[#154088]/5 shadow-xl shadow-[#154088]/5 ring-1 ring-[#154088]/20"
                          : "border-[#9a9ca1]/30 bg-white hover:border-[#9a9ca1]/50 hover:bg-[#9a9ca1]/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <motion.div
                          animate={{
                            backgroundColor: isActive ? "#154088" : "#ffffff",
                          }}
                          transition={{ duration: 0.3 }}
                          className={`flex shrink-0 items-center justify-center w-11 h-11 rounded-xl border ${
                            isActive
                              ? "border-transparent text-white"
                              : "border-[#9a9ca1]/30 text-[#676a73] group-hover:text-[#154088]"
                          }`}
                          style={
                            isActive
                              ? {
                                  backgroundImage:
                                    "linear-gradient(to right, #154088, #0e2c5f)",
                                }
                              : undefined
                          }
                        >
                          <Icon size={16} className="stroke-[2.5]" />
                        </motion.div>
                        <div className="min-w-0">
                          <span className="block font-['Open_Sans'] text-[10px] font-bold text-[#9a9ca1] uppercase tracking-wider">
                            {label}
                          </span>
                          <p
                            className={`font-['Nunito'] text-sm font-black tracking-tight mt-0.5 truncate transition-colors ${
                              isActive
                                ? "text-[#001230]"
                                : "text-[#676a73] group-hover:text-[#154088]"
                            }`}
                          >
                            {value}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0 ${
                          isActive
                            ? "bg-[#154088]/10 text-[#154088] border border-[#154088]/20"
                            : "bg-white border border-[#9a9ca1]/30 text-[#9a9ca1]"
                        }`}
                      >
                        {status}
                      </span>
                    </motion.div>
                  );

                  return href ? (
                    <a
                      key={id}
                      href={href}
                      className="block outline-none rounded-2xl"
                    >
                      {containerStructure}
                    </a>
                  ) : (
                    <div key={id} className="block">
                      {containerStructure}
                    </div>
                  );
                },
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}