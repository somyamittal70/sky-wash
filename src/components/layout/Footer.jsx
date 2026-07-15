import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

// ── Standardized Clean Brand SVGs (Fixed stroke and fill bindings) ──
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" />
  </svg>
);

const XTwitter = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsApp = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socials = [
  { label: "Facebook", Icon: Facebook, href: "#", brandClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[#1877F2]/20" },
  { label: "Instagram", Icon: Instagram, href: "#", brandClass: "hover:bg-[#E1306C] hover:border-[#E1306C] hover:shadow-[#E1306C]/20" },
  { label: "X (Twitter)", Icon: XTwitter, href: "#", brandClass: "hover:bg-[#000000] hover:border-[#000000] hover:shadow-black/40" },
  { label: "WhatsApp", Icon: WhatsApp, href: "#", brandClass: "hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[#25D366]/20" },
];

const linkColumns = [
  {
    heading: "Services",
    links: [
      { label: "Wash & Fold", path: "/services" },
      { label: "Dry Cleaning", path: "/services" },
      { label: "Ironing", path: "/services" },
      { label: "Pickup & Delivery", path: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Pricing", path: "/pricing" },
      { label: "Gallery", path: "/gallery" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "About Us", path: "/" },
      { label: "Contact", path: "/contact" },
      { label: "Privacy Policy", path: "/pricing" },
    ],
  },
];

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="font-['Open_Sans'] relative bg-[#001230] text-slate-100 overflow-hidden border-t border-[#154088]/40">
      
      {/* Dynamic Font Injection setup to verify Open Sans & Nunito mapping */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&family=Open+Sans:wght@400;500;600;700&display=swap');
      `}} />
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#154088]/15 rounded-full blur-[100px]" />
        <div className="absolute top-12 -right-48 w-80 h-80 bg-[#154088]/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        
        {/* Top Section: Brand Info + Dynamic Interactive Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12 pb-16 border-b border-[#154088]/20 items-center">
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 w-fit group rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#154088]"
            >
              <img
                src="/logo.png"
                alt="SK Laundry logo"
                className="w-30 h-28 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <p className="text-sm text-[#9a9ca1] max-w-sm leading-relaxed">
              Premium care for your garments. We handle the heavy lifting so you can get back to doing what you love most.
            </p>
          </div>

          {/* Inline Premium Newsletter Widget */}
          <div className="bg-[#154088]/10 border border-[#154088]/30 p-6 rounded-2xl md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-md">
            <div className="space-y-1">
              <h4 className="text-[#ffff] font-['Nunito'] font-black tracking-tight text-lg">
                Join our Fresh Sheet
              </h4>
              <p className="text-xs text-[#9a9ca1] max-w-xs leading-relaxed">
                Receive dry cleaning discount codes, weekly tips, and service updates.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-1 max-w-md items-center gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full bg-[#001230]/80 border border-[#154088]/40 hover:border-[#154088]/70 focus:border-[#ffff] rounded-xl py-3 pl-4 pr-10 text-xs text-white placeholder-[#676a73] outline-none transition-all"
                />
                <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#676a73]" />
              </div>
              <button
                type="submit"
                className="p-3 bg-[#154088] hover:bg-[#1c54b2] text-[#ffff] rounded-xl transition-all duration-200 shadow-lg shadow-[#154088]/20 flex items-center justify-center shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Contact Details & Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.90fr_0.90fr_0.90fr] gap-12 pt-16">
          
          {/* Detailed Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffff] font-['Nunito']">
              Get In Touch
            </h4>
            
            <ul className="flex flex-col gap-4 text-sm text-[#9a9ca1]">
              <li className="flex items-start gap-3.5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#154088]/10 border border-[#154088]/20 text-[#154088] group-hover:bg-[#154088] group-hover:text-white transition-all duration-300">
                  <MapPin size={15} className="shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#676a73] uppercase tracking-wider font-bold">Address</span>
                  <span className="text-white/90">221 Riverside Ave, Springfield</span>
                </div>
              </li>
              
              <li className="flex items-start gap-3.5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#154088]/10 border border-[#154088]/20 text-[#154088] group-hover:bg-[#154088] group-hover:text-white transition-all duration-300">
                  <Phone size={15} className="shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#676a73] uppercase tracking-wider font-bold">Call Us</span>
                  <a href="tel:+919854786154" className="text-white/90 hover:text-[#154088] transition-colors">
                    +91-9854786154
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#154088]/10 border border-[#154088]/20 text-[#154088] group-hover:bg-[#154088] group-hover:text-white transition-all duration-300">
                  <Mail size={15} className="shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#676a73] uppercase tracking-wider font-bold">Email Us</span>
                  <a href="mailto:hello@laundry.com" className="text-white/90 hover:text-[#154088] transition-colors">
                    hello@laundry.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Premium Dynamic Original Color Brands Hover Implementation */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ label, Icon, href, brandClass }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`group flex items-center justify-center w-10 h-10 rounded-xl bg-[#154088]/10 border border-[#154088]/20 text-[#9a9ca1] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:border-transparent hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${brandClass}`}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Modern Link Columns with Sliding Hover Effects */}
          {linkColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#ffff] font-['Nunito']">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm text-[#9a9ca1]">
                {col.links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      to={link.path || "#"}
                      className="group flex items-center gap-1 hover:text-[#ffff] transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-[#154088]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Clean Divider Line */}
        <div className="h-px w-full bg-[#154088]/20 mt-16 mb-8" />

        {/* Bottom Section: Copyright & Developer Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#676a73]">
          <p className="font-medium">&copy; {new Date().getFullYear()} SK Laundry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://deboxtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffff] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#154088] rounded py-0.5 px-1.5 bg-[#154088]/5 border border-[#154088]/10 hover:border-[#154088]/30"
            >
              Developed by Debox Technology
            </a>
          </div>
        </div>
      </div>

      {/* Modern Gradient Accent Bottom Border Bar */}
      <div className="h-[5px] w-full bg-gradient-to-r from-[#154088] via-[#9a9ca1] to-[#154088]" />
    </footer>
  );
}