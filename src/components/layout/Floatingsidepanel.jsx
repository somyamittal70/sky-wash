import React from "react";

// WhatsApp glyph
function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.42a9.87 9.87 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.12-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.12-4.9-4.31-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

// Facebook glyph
function FacebookIcon({ size = 20, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  );
}

// Phone / Call glyph
function PhoneIcon({ size = 20, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const actions = [
  {
    id: "whatsapp",
    icon: WhatsAppIcon,
    label: "WhatsApp Us",
    href: "https://wa.me/919654349983",
    bg: "bg-[#25D366]",
    hoverBg: "hover:bg-[#1ebe5d]",
    textColor: "text-white",
  },
  {
    id: "facebook",
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/p/Sky-Wash-Laundry-100038071315944",
    bg: "bg-[#1877F2]",
    hoverBg: "hover:bg-[#166fe5]",
    textColor: "text-white",
  },
  {
    id: "call",
    icon: PhoneIcon,
    label: "Call Us",
    href: "tel:+91-9654349983",
    bg: "bg-gradient-to-br from-[#34D399] via-[#10B981] to-[#047857]",
    hoverBg: "hover:bg-[#b71c1c]",
    textColor: "text-white",
  },
];

export default function FloatingSidePanel() {
  return (
    /* 
      Container Layout System:
      - Mobile: Fixed at the bottom center of the screen as a horizontal bar (row layout).
      - Desktop (md:): Fixed on the right side centered vertically (column layout).
    */
    <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:right-0 md:top-2/3 md:-translate-y-1/2 flex flex-row md:flex-col items-center md:items-end gap-3.5 w-fit px-4 py-3 bg-[#001230]/20 backdrop-blur-lg border border-[#154088]/20 rounded-full md:bg-transparent md:border-none md:backdrop-blur-none md:rounded-none md:p-0">
      {actions.map(({ id, icon: Icon, label, href, bg, hoverBg, textColor }) => (
        <a
          key={id}
          href={href}
          target={id !== "call" ? "_blank" : undefined}
          rel={id !== "call" ? "noopener noreferrer" : undefined}
          /* 
            Rounded corners are fully rounded (rounded-full) on mobile, 
            but flat on the right (rounded-l-2xl rounded-r-none) on desktop 
            where they mount to the right-hand edge.
          */
          className={`group flex items-center overflow-hidden rounded-full md:rounded-l-2xl md:rounded-r-none shadow-xl shadow-black/20 transition-all duration-300 ${bg} ${hoverBg}`}
        >
          {/* Icon Area */}
          <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
            <Icon size={20} className={`${textColor}`} />
          </span>
          <span className={`max-w-0 md:group-hover:max-w-[160px] md:group-hover:pr-5 overflow-hidden whitespace-nowrap transition-all duration-300 font-['Nunito'] font-black text-sm ${textColor}`}>
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}