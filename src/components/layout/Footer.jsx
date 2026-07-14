import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

// --- Clean, modernized Inline SVG social icons -----------------------------
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.5c0-.93.26-1.56 1.6-1.56h1.7V3.1C16.5 3.05 15.53 3 14.4 3c-2.36 0-3.98 1.44-3.98 4.08v2.52H7.66v3.2h2.76V21h3.08z" />
  </svg>
);

const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XTwitter = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsApp = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.003 21c-1.623 0-3.14-.424-4.46-1.166L3 21l1.192-4.382A8.956 8.956 0 0 1 3.003 12c0-4.963 4.04-9 9-9 4.964 0 9 4.037 9 9 0 4.963-4.036 9-9 9zm4.721-6.17c-.26-.13-1.536-.757-1.773-.843-.238-.086-.411-.13-.583.13-.172.26-.667.843-.818 1.016-.151.173-.303.195-.563.066a7.1 7.1 0 0 1-2.091-1.288 7.83 7.83 0 0 1-1.446-1.801c-.152-.26-.016-.4.113-.529.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.086-.173.043-.325-.022-.455-.065-.13-.583-1.405-.799-1.925-.21-.51-.424-.442-.583-.45-.15-.008-.324-.01-.497-.01a.96.96 0 0 0-.693.325c-.238.26-.91.888-.91 2.165s.93 2.513 1.06 2.686c.13.173 1.83 2.8 4.434 3.928 2.168.94 2.608.753 3.082.71.474-.043 1.536-.628 1.752-1.234.217-.606.217-1.126.152-1.234-.065-.108-.238-.173-.498-.303z" />
  </svg>
);

const socials = [
  { label: "Facebook", Icon: Facebook, href: "#", brand: "#1877F2" },
  { label: "Instagram", Icon: Instagram, href: "#", brand: "#E1306C" },
  { label: "X (Twitter)", Icon: XTwitter, href: "#", brand: "#000000" },
  { label: "WhatsApp", Icon: WhatsApp, href: "#", brand: "#25D366" },
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
      { label: "About Us" },
      { label: "Contact" },
      { label: "FAQ" },
      { label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add custom handler logic here
  };

  return (
    <footer className="font-['Open_Sans'] relative bg-[#001230] text-slate-100 overflow-hidden border-t border-[#154088]/40">
      
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
                className="w-28 h-18 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
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

            {/* Premium Interactive Hover Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ label, Icon, href, brand }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{ "--brand": brand }}
                  className="group flex items-center justify-center w-10 h-10 rounded-xl bg-[#154088]/10 border border-[#154088]/20 text-[#9a9ca1] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:border-transparent hover:bg-[var(--brand)] hover:shadow-lg hover:shadow-[var(--brand)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
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