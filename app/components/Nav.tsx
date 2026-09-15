"use client";

import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";
import { Pill } from "./ui";
import { Menu, Close, Phone } from "./Icons";
import { hero, perusahaan, waLink } from "../content";

const tautan = [
  { label: "Tentang", href: "#tentang" },
  { label: "Pembimbing", href: "#pembimbing" },
  { label: "Paket", href: "#paket" },
  { label: "Alur", href: "#alur" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Tanya Jawab", href: "#tanya" },
];

export default function Nav() {
  const [buka, setBuka] = useState(false);
  // The bar sits on the hero's dark field until that field scrolls past,
  // then becomes the light bar the rest of the page needs.
  const [diHero, setDiHero] = useState(true);

  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) {
      setDiHero(false);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setDiHero(entry.boundingClientRect.top > 80),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = buka ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [buka]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-colors duration-300 ease-[var(--ease-settle)] ${
          diHero
            ? "on-navy border-b border-transparent bg-transparent"
            : "border-b border-navy-800/10 bg-ground/85 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[84rem] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#atas" aria-label="Aljamtour, kembali ke atas">
            <LogoLockup compact tone={diHero ? "light" : "navy"} />
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {tautan.map((t) => (
                <li key={t.href}>
                  <a
                    href={t.href}
                    className={`rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                      diHero
                        ? "text-navy-100 hover:bg-white/10 hover:text-white"
                        : "text-ink hover:bg-navy-800/[0.06] hover:text-navy-800"
                    }`}
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${perusahaan.telepon.replace(/[^\d+]/g, "")}`}
              className={`hidden items-center gap-2 text-[0.9375rem] font-semibold transition-opacity hover:opacity-70 xl:flex ${
                diHero ? "text-white" : "text-navy-800"
              }`}
            >
              <Phone className="size-4.5" />
              {perusahaan.telepon}
            </a>
            <span className="hidden sm:block">
              <Pill href={waLink(hero.pesanWa)} external size="sm">
                Hubungi Kami
              </Pill>
            </span>
            <button
              type="button"
              onClick={() => setBuka(true)}
              aria-label="Buka menu"
              className={`grid size-11 place-items-center rounded-full border transition-colors lg:hidden ${
                diHero
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-navy-800/20 text-navy-800 hover:bg-navy-800/[0.06]"
              }`}
            >
              <Menu className="size-5.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${buka ? "" : "pointer-events-none"}`}
        aria-hidden={!buka}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Tutup menu"
          onClick={() => setBuka(false)}
          className={`absolute inset-0 bg-navy-950/45 backdrop-blur-sm transition-opacity duration-300 ${
            buka ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`on-navy absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-navy-800 px-6 py-6 transition-transform duration-400 ease-[var(--ease-settle)] ${
            buka ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <LogoLockup tone="light" />
            <button
              type="button"
              onClick={() => setBuka(false)}
              aria-label="Tutup menu"
              className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <Close className="size-5.5" />
            </button>
          </div>

          <nav aria-label="Navigasi utama" className="mt-10 flex-1">
            <ul className="flex flex-col">
              {tautan.map((t) => (
                <li key={t.href} className="border-b border-white/10">
                  <a
                    href={t.href}
                    onClick={() => setBuka(false)}
                    className="block py-4 text-xl font-semibold text-white transition-colors hover:text-amber-500"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <Pill href={waLink(hero.pesanWa)} external size="md" className="w-full justify-between">
              Chat via WhatsApp
            </Pill>
            <a
              href={`tel:${perusahaan.telepon.replace(/[^\d+]/g, "")}`}
              className="flex items-center justify-center gap-2 py-3.5 text-[0.9375rem] font-semibold text-navy-100 transition-colors hover:text-white"
            >
              <Phone className="size-4.5" />
              {perusahaan.telepon}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
