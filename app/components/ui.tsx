import type { ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type Tone = "amber" | "navy" | "outline" | "outlineLight";

const tones: Record<Tone, { shell: string; badge: string }> = {
  amber: {
    shell:
      "bg-amber-500 text-navy-900 hover:bg-amber-400 shadow-[var(--shadow-lift)]",
    badge: "bg-navy-800 text-amber-500",
  },
  navy: {
    shell: "bg-navy-800 text-white hover:bg-navy-700 shadow-[var(--shadow-lift)]",
    badge: "bg-amber-500 text-navy-900",
  },
  outline: {
    shell:
      "border border-navy-800/25 text-navy-800 hover:border-navy-800/50 hover:bg-navy-800/[0.04]",
    badge: "bg-navy-800/8 text-navy-800",
  },
  outlineLight: {
    shell: "border border-white/30 text-white hover:border-white/60 hover:bg-white/10",
    badge: "bg-white/15 text-white",
  },
};

/**
 * The page's one action shape: a pill that carries its own arrow badge.
 * Rendered as a link everywhere, because every action here leaves for
 * WhatsApp or moves down the page.
 */
export function Pill({
  children,
  href,
  tone = "amber",
  size = "md",
  external,
  className = "",
}: {
  children: ReactNode;
  href: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  const t = tones[tone];
  const dims = {
    sm: "h-11 pl-4 pr-1.5 text-[0.875rem] gap-2.5",
    md: "h-13 pl-6 pr-2 text-[0.9375rem] gap-3",
    lg: "h-15 pl-7 pr-2.5 text-[1rem] gap-3.5",
  }[size];
  const badge = { sm: "size-8", md: "size-9.5", lg: "size-11" }[size];

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`press group inline-flex shrink-0 items-center justify-between rounded-full font-semibold transition-colors duration-200 ${dims} ${t.shell} ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`grid shrink-0 place-items-center rounded-full transition-transform duration-300 ease-[var(--ease-settle)] group-hover:rotate-45 ${badge} ${t.badge}`}
      >
        <ArrowUpRight className="size-4.5" />
      </span>
    </a>
  );
}

/** A section heading whose accented span is set in the heavy weight. */
export function Judul({
  parts,
  className = "",
  tone = "navy",
}: {
  parts: { teks: string; tebal: boolean }[];
  className?: string;
  tone?: "navy" | "light";
}) {
  return (
    <>
      {parts.map((p, i) => (
        <span
          key={i}
          className={
            p.tebal
              ? `font-extrabold ${tone === "light" ? "text-white" : "text-navy-800"} ${className}`
              : `font-normal ${tone === "light" ? "text-navy-100" : "text-navy-800/75"} ${className}`
          }
        >
          {p.teks}
        </span>
      ))}
    </>
  );
}

/** Hairline rule carrying the mark's bar rhythm at its left end. */
export function Rule({ tone = "navy" }: { tone?: "navy" | "light" }) {
  return (
    <div
      className={`h-px w-full ${tone === "light" ? "bg-white/15" : "bg-navy-800/12"}`}
    />
  );
}

/**
 * The mark's three ascending bars, at a size that actually reads, opening
 * every section. The hairline fades out rather than spanning the page:
 * the identity is the bar rhythm, not the rule, and a full-width hairline
 * with a speck on the end reads as neither.
 */
export function BarRule({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const solid = tone === "light" ? "text-white/55" : "text-navy-800/40";
  const fade =
    tone === "light"
      ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.28),transparent)]"
      : "bg-[linear-gradient(to_right,rgba(18,49,99,0.22),transparent)]";
  return (
    <div aria-hidden className="sr flex items-end gap-5">
      <svg viewBox="0 0 34 24" className={`h-6 w-8.5 shrink-0 ${solid}`}>
        <rect x="0" y="13" width="5.8" height="11" fill="currentColor" />
        <rect x="10" y="6.5" width="5.8" height="17.5" fill="currentColor" />
        <rect x="20" y="0" width="5.8" height="24" fill="currentColor" />
      </svg>
      <span className={`h-px flex-1 translate-y-[-1px] ${fade}`} />
    </div>
  );
}
