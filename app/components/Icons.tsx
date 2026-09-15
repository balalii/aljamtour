/**
 * Authored icon set. One stroke weight (1.6), one 24-unit grid, round
 * caps and joins throughout, so the whole page speaks one hand.
 */
type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
);

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const WhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35Z" />
    <path d="M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.99 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89Zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.42Z" />
  </svg>
);

export const ShieldCheck = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3 5 5.7v5.5c0 4.2 2.9 7.8 7 9.1 4.1-1.3 7-4.9 7-9.1V5.7L12 3Z" />
    <path d="m9.2 11.8 2 2.1 3.7-3.9" />
  </svg>
);

export const Plane = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M10.3 12.6 3.7 11V9.2l2 .3.9 1.3 2.6.4L7.3 4.9l1.9.5 3.4 5.1 4.4.7c1 .2 1.7.7 1.7 1.4s-.7 1.1-1.7 1.2l-4.4.4-3.4 5.1-1.9.5 1.9-6.2-2.6.4-.9 1.3-2 .3" />
  </svg>
);

export const Hotel = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 21V5.5L12 3l8 2.5V21M4 21h16M4 21H2m18 0h2" />
    <path d="M9.5 21v-4.2h5V21M9 8.5h1.5M13.5 8.5H15M9 12h1.5M13.5 12H15" />
  </svg>
);

export const Users = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 14.6a5.5 5.5 0 0 1 3 5.4" />
  </svg>
);

export const Calendar = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.8h17M8 3v4M16 3v4" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6.2 3.5h3l1.5 3.8-1.9 1.4a12 12 0 0 0 5.5 5.5l1.4-1.9 3.8 1.5v3c0 1-.8 1.8-1.8 1.7A16.5 16.5 0 0 1 4.5 5.3c-.1-1 .7-1.8 1.7-1.8Z" />
  </svg>
);

export const MapPin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8L12 3Z" />
  </svg>
);

export const Quote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M9.4 5.5c-3.4 1.4-5.6 4.4-5.6 8.2 0 3 1.8 5 4.3 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.5-1.7 1.8-3.1 3.6-4l-1.7-2.2Zm9.3 0c-3.4 1.4-5.6 4.4-5.6 8.2 0 3 1.8 5 4.3 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.5-1.7 1.8-3.1 3.6-4l-1.7-2.2Z" />
  </svg>
);

export const ChevronDown = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m6 9.5 6 5.5 6-5.5" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const Document = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5L13.5 3Z" />
    <path d="M13.5 3v5.5H19M8.8 13h6.4M8.8 16.5h4.4" />
  </svg>
);

export const Compass = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
