"use client";

import { useEffect } from "react";

/**
 * Only does anything on browsers without view timelines. Where they
 * exist the reveals are pure CSS and this mounts, checks, and exits —
 * no observer, no scroll listener, nothing on the main thread.
 */
export default function Reveal() {
  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline", "view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = document.querySelectorAll<HTMLElement>(
      ".sr, .sr-wipe, .sr-unveil, .sr-come",
    );
    if (!els.length) return;

    // Only now is it safe to hide anything: the script is running and
    // will put every element back.
    document.documentElement.classList.add("sr-js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("sr-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.documentElement.classList.remove("sr-js");
    };
  }, []);

  return null;
}
