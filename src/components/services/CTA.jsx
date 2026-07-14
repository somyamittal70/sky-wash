import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock3,
  MessageSquare,
} from "lucide-react";
import BookPickupModal from "../layout/BookPickupModal";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Zero-Risk Care Guarantee",
    desc: "Full value replacement policy items for total security.",
    iconStyle: "bg-[#154088]/5 text-[#154088] border-[#154088]/15",
  },
  {
    icon: Clock3,
    title: "24–48hr Rapid Cycle",
    desc: "Guaranteed express turnaround from porch back to porch.",
    iconStyle: "bg-blue-50 text-[#2d5db0] border-blue-100",
  },
];

export default function ServicesCTA() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="bg-[#ffffff] py-18 sm:py-22 relative overflow-hidden border-b border-slate-200/60">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#154088]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#5b86c9]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Asymmetric Core Capsule Layout */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-[0_32px_64px_-20px_rgba(21,64,136,0.08)]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Core High-Conversion Pitch System */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-['Nunito'] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#154088] bg-[#154088]/5 border border-[#154088]/10 rounded-full px-4 py-2 shadow-sm">
                {/* <Sparkles size={13} className="text-amber-500 animate-pulse" /> */}
                On-Demand Garment Optimization
              </span>

              <h2 className="font-['Nunito'] mt-6 text-4xl sm:text-5xl font-black leading-[1.15] text-[#0a1f47] tracking-tight">
                Take laundry completely <br />
                off your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4770b3] via-[#154088] to-[#001230]">
                  mental overhead.
                </span>
              </h2>

              <p className="font-['Open_Sans'] mt-5 text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed font-medium">
                No separating. No commuting. Schedule your seamless
                biometric-tracked valet turnaround cycle in under a single
                minute.
              </p>

              {/* Dynamic Action Trigger Blocks */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#154088] to-[#0a1f47] hover:from-[#1a4a99] hover:to-[#154088] px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-white shadow-xl shadow-[#154088]/20 hover:-translate-y-0.5 transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group"
                >
                  Schedule Your First Pickup
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5"
                  />
                </button>

                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-8 py-4 font-['Nunito'] font-extrabold text-sm sm:text-base text-[#475569] shadow-sm transform transition-all duration-300 hover:-translate-y-0.5 ease-[cubic-bezier(0.4,0,0.2,1)] group"
                >
                  <MessageSquare
                    size={16}
                    className="text-[#94a3b8] group-hover:text-[#64748b] transition-colors"
                  />
                  Inquire Corporate Rates
                </a>
              </div>

              {/* Seamless Inline Trust Grid Row */}
              <div className="mt-12 w-full grid sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                {guarantees.map(({ icon: Icon, title, desc, iconStyle }) => (
                  <div key={title} className="flex gap-3.5 group/point">
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-xl border shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/point:scale-105 group-hover/point:shadow-sm ${iconStyle}`}
                    >
                      <Icon size={16} />
                    </span>
                    <div className="transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/point:translate-x-0.5">
                      <h4 className="font-['Nunito'] text-sm font-bold text-[#334155] tracking-tight">
                        {title}
                      </h4>
                      <p className="font-['Open_Sans'] mt-0.5 text-xs text-[#64748b] leading-relaxed font-medium">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Immersive Asset Visual Mask Display Frame */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end group/image">
              {/* Underlying dynamic lighting bloom matching left-side accents */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#154088]/10 to-[#5b86c9]/10 opacity-40 blur-2xl pointer-events-none transition-opacity duration-500 group-hover/image:opacity-60" />

              {/* Structured Image Display Canvas */}
              <div className="w-full max-w-[400px] aspect-[4/5] bg-slate-50 border border-slate-200 p-2 rounded-[2.5rem] shadow-xl relative overflow-hidden group-hover/image:border-[#154088]/20 transition-colors duration-500">
                {/* Inner premium border hairline edge element */}
                <div className="absolute inset-2 rounded-[2rem] border border-black/5 z-20 pointer-events-none" />

                {/* Clean gradient fallback overlay to protect text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10 pointer-events-none" />

                <img
                  src="https://i.pinimg.com/1200x/23/50/14/23501435dcb4df984943b493de38ac04.jpg"
                  alt="Premium laundry folded wardrobe care service"
                  className="w-full h-full object-cover rounded-[2rem] opacity-95 group-hover/image:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Book Pickup modal core implementation container injection */}
      <BookPickupModal
        isOpen={bookingOpen}
        closeModal={() => setBookingOpen(false)}
      />
    </section>
  );
}