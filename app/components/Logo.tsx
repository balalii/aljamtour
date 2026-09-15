/**
 * The Aljamtour mark, redrawn from the supplied logo: three amber bars
 * climbing left to right, the tallest carrying the J's hook below the
 * common baseline, on a navy field.
 */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Lambang Aljamtour"
    >
      <rect width="64" height="64" rx="14" fill="var(--color-navy-800)" />
      <g fill="var(--color-amber-500)">
        <rect x="22.5" y="28.7" width="4.6" height="16.8" />
        <rect x="29.9" y="22.4" width="4.6" height="23.1" />
        <path d="M37.3 15.4h4.6v27.5c0 3.6-2.4 6.4-6 6.4h-1.3v-4.6h1.1c1.2 0 2-.9 2-2Z" />
      </g>
    </svg>
  );
}

/** The bar rhythm on its own, used as the page's repeating device. */
export function LogoBars({ className = "" }: { className?: string }) {
  const bars = [{ h: 10 }, { h: 15 }, { h: 22 }];
  return (
    <svg viewBox="0 0 22 24" className={className} aria-hidden="true">
      {bars.map((b, i) => (
        <rect
          key={i}
          x={i * 7.6}
          y={24 - b.h}
          width="4.6"
          height={b.h}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

export function LogoLockup({
  className = "",
  tone = "navy",
  compact = false,
}: {
  className?: string;
  tone?: "navy" | "light";
  /** Drops the service line on the narrowest screens, for the nav bar. */
  compact?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap text-[1.0625rem] font-extrabold tracking-[-0.035em] ${
            tone === "navy" ? "text-navy-800" : "text-white"
          }`}
        >
          Aljamtour
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[0.625rem] font-semibold uppercase tracking-[0.11em] ${
            compact ? "hidden min-[400px]:block" : "block"
          } ${
            tone === "navy" ? "text-ink-soft" : "text-navy-200"
          }`}
        >
          Haji &bull; Umrah &bull; Wisata Halal
        </span>
      </span>
    </span>
  );
}
