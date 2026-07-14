import React from "react";
import { ChevronRight, Phone, Mail, Clock, HelpCircle } from "lucide-react";

const quickContacts = [
  { icon: Phone, label: "+91-98547861540", href: "tel:+9198547861540", activeText: "Call Support" },
  { icon: Mail, label: "hello@laundary.com", href: "mailto:hello@laundary.com", activeText: "Email Support" },
  { icon: Clock, label: "Mon–Sun, 7am–9pm", href: null, activeText: "Operational Hours" },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#001230] text-white py-20 sm:py-32 border-b border-[#154088]/20" id="contact-hero">
      
      {/* Immersive Image Canvas and Ambient Layer Scrims */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://i.pinimg.com/736x/ac/24/68/ac2468c818209380f5635e22b9940cdb.jpg"
          alt="Artisan laundry support infrastructure"
          className="w-full h-full object-cover scale-105 opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001230] via-[#001230]/10 to-[#001230]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001230] via-transparent to-[#001230]/20" />
        
        {/* Soft Background Accent Glows */}
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#154088]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#154088]/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Context Copy and Structural Header */}
          <div className="space-y-6 text-left">
            
            {/* Navigational Segment Path */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#9a9ca1] font-['Nunito']">
              <a href="/" className="hover:text-[#154088] transition-colors">Home</a>
              <ChevronRight size={12} className="text-[#676a73] stroke-[3]" />
              <span className="text-white">Contact</span>
            </nav>

            {/* Micro-Badge Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#154088]/10 border border-[#154088]/30 px-4 py-1.5 shadow-inner">
              <HelpCircle size={12} className="text-[#154088] stroke-[2.5]" />
              <span className="font-['Nunito'] text-xs font-black uppercase tracking-widest text-[#154088]">
                Support Hub Operational
              </span>
            </div>

            {/* Title Block */}
            <h1 className="font-['Nunito'] text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Let's get your <br />
              <span className="bg-gradient-to-r from-[#154088] via-[#2a5fb0] to-[#154088] bg-clip-text text-transparent">
                laundry sorted.
              </span>
            </h1>

            {/* Paragraph Element */}
            <p className="font-['Open_Sans'] text-base sm:text-lg text-[#9a9ca1] max-w-xl leading-relaxed font-medium">
              Questions about localized pickup times, enterprise laundry volume discounts, or custom delicate processing profiles? Reach out dynamically through our communication cards.
            </p>
          </div>

          {/* RIGHT: High-Fidelity Bento Contact Cards Stack */}
          <div className="flex flex-col gap-4 bg-[#154088]/5 border border-[#154088]/20 p-6 sm:p-8 rounded-3xl backdrop-blur-xl relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#154088]/40 to-transparent" />
            
            {quickContacts.map(({ icon: Icon, label, href, activeText }) => {
              const elementStructure = (
                <div className={`w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#001230]/60 border transition-all duration-300 group ${
                  href 
                    ? 'border-[#154088]/20 hover:border-[#154088]/50 hover:bg-[#001230]/90' 
                    : 'border-[#676a73]/20 opacity-90'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex shrink-0 items-center justify-center w-11 h-11 rounded-xl border transition-colors ${
                      href 
                        ? 'bg-[#154088]/15 text-[#154088] border-[#154088]/30 group-hover:bg-[#154088] group-hover:text-white group-hover:border-transparent' 
                        : 'bg-[#676a73]/10 text-[#9a9ca1] border-[#676a73]/30'
                    }`}>
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                    <div className="text-left">
                      <span className="block font-['Nunito'] text-sm font-black text-[#9a9ca1] uppercase tracking-wider text-[10px]">
                        {activeText}
                      </span>
                      <p className="font-['Nunito'] text-base font-bold text-white tracking-tight mt-0.5 group-hover:text-[#5b8ee0] transition-colors">
                        {label}
                      </p>
                    </div>
                  </div>
                  
                  {href && (
                    <ChevronRight size={16} className="text-[#676a73] group-hover:text-[#154088] transform group-hover:translate-x-0.5 transition-all stroke-[2.5]" />
                  )}
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#154088]/50"
                >
                  {elementStructure}
                </a>
              ) : (
                <div key={label} className="block">
                  {elementStructure}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}