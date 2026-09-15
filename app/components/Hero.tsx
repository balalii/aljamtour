import Image from "next/image";
import { Pill } from "./ui";
import { Star, MapPin, ShieldCheck } from "./Icons";
import { hero, perusahaan, waLink } from "../content";
import Pandu from "./Pandu";

export default function Hero() {
  return (
    <section id="atas" className="on-navy relative -mt-20">
      {/* The dark field: one photograph reduced to luminance, tinted by a
          navy layer above it, so the whole viewport is the brand's colour
          rather than the photograph's. */}
      <div className="relative flex min-h-svh flex-col overflow-clip bg-navy-950 pb-20 pt-24 sm:pb-32 sm:pt-36">
        <Image
          src="/img/haram-hero.jpg"
          alt=""
          aria-hidden
          fill
          preload
          sizes="100vw"
          className="anim-hold night object-cover object-[center_58%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-navy-700 opacity-70 mix-blend-color"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(72rem_48rem_at_50%_34%,rgba(7,20,41,0.58),rgba(7,20,41,0.90)_74%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--color-navy-950),transparent)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,var(--color-navy-950),transparent)]"
        />
        <div
          aria-hidden
          className="anim-curtain absolute inset-0 bg-navy-950"
        />

        <div className="relative mx-auto flex w-full max-w-[84rem] flex-1 flex-col px-5 sm:px-8">
          <div className="flex flex-1 items-center justify-center py-4 sm:py-6">
            <div className="flex max-w-4xl flex-col items-center text-center">
            <h1 className="anim d1 text-[clamp(1.75rem,9vw,5rem)] leading-[1.06] sm:leading-[1.03]">
              <span className="font-normal text-white">Berangkat bersama </span>
              <span className="anim-land inline-block font-extrabold text-amber-500">
                pembimbing
              </span>
              <span className="font-normal text-white">
                {" "}
                yang tidak meninggalkan Anda.
              </span>
            </h1>

            <p className="anim d2 mt-5 max-w-[34ch] text-[clamp(0.9375rem,3.8vw,1.1875rem)] leading-[1.6] text-navy-100 sm:mt-7 sm:max-w-[44rem] sm:leading-[1.65]">
              {hero.ringkas}
            </p>

            <div className="anim d3 mt-7 flex w-full flex-col items-center gap-3 sm:mt-9 sm:w-auto sm:flex-row">
              <Pill href={waLink(hero.pesanWa)} external size="lg">
                {hero.ctaUtama}
              </Pill>
              <Pill href="#paket" tone="outlineLight" size="lg">
                {hero.ctaKedua}
              </Pill>
            </div>

            {/* Proof follows the action rather than labelling the heading. */}
            <p className="anim d4 mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[0.8125rem] font-semibold text-navy-100 sm:mt-8 sm:text-[0.875rem]">
              <span className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-navy-300">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-3.5" />
                  ))}
                </span>
                {hero.bukti}
              </span>
              <span aria-hidden className="hidden h-4 w-px bg-white/25 sm:block" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-navy-300" />
                Izin resmi Kemenag sejak {perusahaan.berdiri}
              </span>
            </p>
            </div>
          </div>

          <div className="anim d5 mt-8 hidden flex-col gap-4 border-t border-white/12 pt-6 sm:mt-10 sm:flex sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:pt-7">
            <p className="flex items-start gap-2.5 text-[0.875rem] leading-snug text-white">
              <MapPin className="mt-px size-5 shrink-0 text-navy-300" />
              <span>
                <span className="font-semibold">{perusahaan.alamat}</span>
                <br />
                <span className="text-navy-200">{perusahaan.alamatKota}</span>
              </span>
            </p>
            <p className="flex items-start gap-2.5 text-[0.875rem] leading-snug text-white">
              <ShieldCheck className="mt-px size-5 shrink-0 text-navy-300" />
              <span>
                <span className="font-semibold">Kemenag RI</span>
                <br />
                <span className="text-navy-200">PPIU U 93/2022 &middot; PIHK terdaftar</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Sentinel: the nav reads this to know it has left the dark field. */}
      <div id="hero-end" aria-hidden className="h-px w-full" />

      <div className="anim d6 relative z-10 mx-auto -mt-20 max-w-[84rem] px-5 sm:px-8">
        <Pandu />
      </div>
    </section>
  );
}
