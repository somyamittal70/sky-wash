import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BookPickupModal from "./BookPickupModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu automatically whenever route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const isActive = (href) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  const openBooking = () => {
    setMobileOpen(false);
    setBookingOpen(true);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 font-['Open_Sans'] ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#9a9ca1]/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#154088] shrink-0"
          >
            <img
              src="/logo1.png"
              alt="SK Laundry logo"
              className="w-19 h-15 sm:w-23 sm:h-18 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 p-2 bg-[#9a9ca1]/15 backdrop-blur-sm rounded-full border border-[#9a9ca1]/30">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  to={href}
                  aria-current={active ? "page" : undefined}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#154088] ${
                    active
                      ? "bg-white text-[#154088] shadow-sm"
                      : "text-[#676a73] hover:text-[#001230] hover:bg-white/50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <a
              href="tel:+91-9654349983"
              className="group flex items-center gap-2 text-sm font-semibold text-[#676a73] hover:text-[#154088] transition-colors rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#154088]"
            >
              <div className="p-2 rounded-full bg-[#9a9ca1]/15 group-hover:bg-[#154088]/10 transition-colors">
                <Phone size={16} className="text-[#676a73] group-hover:text-[#154088]" />
              </div>
              <span className="tracking-wide">+91-9654349983</span>
            </a>

            <button
              type="button"
              onClick={openBooking}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#154088] to-[#001230] hover:from-[#001230] hover:to-[#154088] px-6 py-2.5 font-['Nunito'] font-bold text-sm text-white shadow-md shadow-[#001230]/20 transition-all duration-200 hover:shadow-lg hover:shadow-[#001230]/30 active:scale-98 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#154088] whitespace-nowrap"
            >
              Book Pickup
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-[#001230] bg-[#9a9ca1]/15 hover:bg-[#9a9ca1]/25 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#154088]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu Overlap */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-[#9a9ca1]/30 shadow-xl px-4 py-6 flex flex-col gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top duration-200">
          {navLinks.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                to={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-4 py-3 font-semibold transition-all ${
                  active
                    ? "bg-[#154088]/10 text-[#154088]"
                    : "text-[#676a73] hover:bg-[#9a9ca1]/10"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div className="h-px bg-[#9a9ca1]/20 my-2" />

          <a
            href="tel:+919854786154"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-[#676a73] hover:bg-[#9a9ca1]/10 transition-colors"
          >
            <span className="p-2 rounded-lg bg-[#9a9ca1]/15 text-[#676a73]">
              <Phone size={16} />
            </span>
            +91 98547 86154
          </a>

          <button
            type="button"
            onClick={openBooking}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#154088] to-[#001230] px-5 py-3.5 mt-2 font-['Nunito'] font-bold text-sm text-white shadow-md shadow-[#001230]/20"
          >
            Book Pickup
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Book Pickup modal */}
      <BookPickupModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </header>
  );
}