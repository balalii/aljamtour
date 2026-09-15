"use client";

import { useEffect, useState } from "react";
import { WhatsApp } from "./Icons";
import { hero, waLink } from "../content";

/**
 * Most visitors arrive on a phone from a forwarded link. The action
 * follows them down the page rather than waiting at the bottom.
 */
export default function WhatsAppFab() {
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const onScroll = () => setTampil(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(hero.pesanWa)}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!tampil}
      tabIndex={tampil ? 0 : -1}
      className={`press group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-amber-500 py-3.5 pl-4 pr-5 font-bold text-navy-900 shadow-[var(--shadow-float)] transition-all duration-400 ease-[var(--ease-settle)] hover:bg-amber-400 sm:bottom-7 sm:right-7 ${
        tampil
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsApp className="size-6 transition-transform duration-300 ease-[var(--ease-settle)] group-hover:scale-110" />
      <span className="text-[0.9375rem]">Tanya lewat WhatsApp</span>
    </a>
  );
}
