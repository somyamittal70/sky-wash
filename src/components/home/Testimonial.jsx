import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, BadgeCheck, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priyanka Nair',
    role: 'Verified Customer · Springfield Heights',
    quote:
      "Pickup was on time to the minute and my shirts came back pressed better than the dry cleaner I used for years. Switched over completely.",
    rating: 5,
    initials: 'PN',
    // featured: true, // Takes up more space in the grid layout
  },
  {
    name: 'Shruti Garg',
    role: 'Verified Customer · Riverside',
    quote:
      'Same-day turnaround saved me before a work trip. The app tracking made it easy to know exactly when to expect the driver.',
    rating: 5,
    initials: 'SG',
  },
  {
    name: 'Aisha Rahman',
    role: 'Verified Customer · Downtown Loop',
    quote:
      'They actually listen to the wash notes. Asked for fragrance-free detergent once and every order since has been exactly right.',
    rating: 5,
    initials: 'AR',
  },
  {
    name: 'Karan Sehgal',
    role: 'Verified Customer · Elm District',
    quote:
      "Rescheduling a pickup took ten seconds in the app. Small thing, but it's the reason I've stuck around for over a year.",
    rating: 5,
    initials: 'KS',
  },
  {
    name: 'Priya Singh',
    role: 'Verified Customer · Harbor Row',
    quote:
      'Dry cleaning for a wedding suit came back perfectly finished with two days to spare. Support even called to confirm timing.',
    rating: 5,
    initials: 'PS',
    // featured: true,
  },
  {
    name: 'Rahul Kumar',
    role: 'Verified Customer · Northgate',
    quote:
      'Pricing is upfront before you confirm, no surprise charges at delivery. Simple thing most services get wrong.',
    rating: 5,
    initials: 'RK',
  },
];

const stats = [
  { label: 'Average Rating', value: '4.9', suffix: '/5' },
  { label: 'Orders Processed', value: '128', suffix: 'K+' },
  { label: 'Retention Rate', value: '92', suffix: '%' },
];

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const riseIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5 bg-[#154088]/20 px-2 py-1 rounded-md">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < count
              ? 'fill-[#5b8ee0] text-[#5b8ee0]'
              : 'fill-transparent text-[#154088]/40'
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#000e24] text-white py-24 sm:py-32 border-t border-white/5"
      id="testimonials"
    >
      {/* Decorative Atmosphere & Fine Mesh Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(21,64,136,0.15)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#154088]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Section Header: Title Left, Stats Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end pb-16 border-b border-white/5 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 mb-4">
              <BadgeCheck size={14} className="text-[#5b8ee0]" />
              <span className="font-['Nunito'] text-[10px] font-extrabold uppercase tracking-widest text-[#a3b8cc]">
                Real Feedback
              </span>
            </div>

            <h2 className="font-['Nunito'] text-4xl font-black tracking-tight text-white sm:text-5xl max-w-xl leading-[1.1]">
              Loved by your neighbors.{' '}
              <span className="bg-gradient-to-r from-[#5b8ee0] via-[#8cb4f5] to-[#5b8ee0] bg-clip-text text-transparent">
                Proven by details.
              </span>
            </h2>
          </div>

          {/* Minimalist Stats Panel */}
          <div className="grid grid-cols-3 gap-4 border-l border-white/5 lg:pl-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-['Nunito'] text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {s.value}
                  <span className="text-[#5b8ee0] font-bold text-lg ml-0.5">{s.suffix}</span>
                </span>
                <span className="font-['Open_Sans'] text-[10px] font-semibold uppercase tracking-wider text-[#676a73] mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Box Grid Framework */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={riseIn}
              className={`group relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#154088]/50 hover:from-white/[0.06] ${
                item.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <MessageSquareQuote
                    size={28}
                    className="text-[#154088]/40 transition-colors group-hover:text-[#5b8ee0]/50"
                    strokeWidth={2}
                  />
                  <Stars count={item.rating} />
                </div>

                <p className={`font-['Open_Sans'] text-[#c7c9d1] font-medium leading-relaxed mb-8 ${
                  item.featured ? 'text-base sm:text-lg' : 'text-sm'
                }`}>
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#154088]/40 to-[#000e24] border border-[#154088]/30 flex items-center justify-center font-['Nunito'] text-xs font-black text-white transition-all group-hover:border-[#5b8ee0]/40">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-['Nunito'] text-sm font-black text-white tracking-wide">
                    {item.name}
                  </p>
                  <p className="font-['Open_Sans'] text-[11px] font-medium text-[#676a73] group-hover:text-[#9a9ca1] transition-colors">
                    {item.role.replace('Verified Operator', 'Verified Member')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}