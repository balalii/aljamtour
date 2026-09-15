"use client";

import { useState } from "react";
import { paketUmrah, paketHaji, waLink, type Paket } from "../content";
import { Check, Hotel, Plane, Calendar, WhatsApp } from "./Icons";
import { BarRule } from "./ui";

const tab = [
  { id: "umrah", label: "Paket Umrah", daftar: paketUmrah },
  { id: "haji", label: "Haji Khusus", daftar: paketHaji },
] as const;

function Kartu({ p, className = "" }: { p: Paket; className?: string }) {
  const sorot = Boolean(p.sorot);
  const rincian = [
    { Ikon: Calendar, teks: p.durasi },
    { Ikon: Hotel, teks: p.hotelMekah },
    { Ikon: Hotel, teks: p.hotelMadinah },
    { Ikon: Plane, teks: p.maskapai },
  ];

  return (
    <article
      className={`${className} flex flex-col rounded-[var(--radius-plate)] p-7 sm:p-8 ${
        sorot
          ? "on-navy bg-navy-800 shadow-[var(--shadow-float)] lg:-my-4 lg:py-12"
          : "border border-navy-800/12 bg-surface"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`text-[1.375rem] font-extrabold ${sorot ? "text-white" : "text-navy-800"}`}
        >
          {p.nama}
        </h3>
        {sorot && (
          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-navy-800">
            Terbanyak dipilih
          </span>
        )}
      </div>

      <p
        className={`mt-3 text-[0.9375rem] leading-relaxed ${
          sorot ? "text-navy-100" : "text-ink"
        }`}
      >
        {p.ringkas}
      </p>

      <p className="mt-7 flex items-baseline gap-1.5">
        <span
          className={`text-[0.9375rem] font-semibold ${sorot ? "text-navy-200" : "text-ink-soft"}`}
        >
          Rp
        </span>
        <span
          className={`tnum text-[2.75rem] font-extrabold leading-none tracking-[-0.045em] ${
            sorot ? "text-white" : "text-navy-800"
          }`}
        >
          {p.harga}
        </span>
        <span
          className={`text-[1.125rem] font-bold ${sorot ? "text-white" : "text-navy-800"}`}
        >
          {p.satuan}
        </span>
      </p>
      <p
        className={`mt-1.5 text-[0.8125rem] ${sorot ? "text-navy-200" : "text-ink-soft"}`}
      >
        per jamaah, sudah termasuk perlengkapan
      </p>

      <ul
        className={`mt-7 flex flex-col gap-3 border-t pt-6 ${
          sorot ? "border-white/15" : "border-navy-800/10"
        }`}
      >
        {rincian.map(({ Ikon, teks }) => (
          <li
            key={teks}
            className={`flex items-start gap-3 text-[0.875rem] leading-snug ${
              sorot ? "text-navy-100" : "text-ink"
            }`}
          >
            <Ikon
              className={`mt-px size-4.5 shrink-0 ${sorot ? "text-navy-200" : "text-navy-600"}`}
            />
            {teks}
          </li>
        ))}
      </ul>

      <ul
        className={`mt-6 flex flex-col gap-2.5 border-t pt-6 ${
          sorot ? "border-white/15" : "border-navy-800/10"
        }`}
      >
        {p.termasuk.map((t) => (
          <li
            key={t}
            className={`flex items-start gap-2.5 text-[0.875rem] leading-snug ${
              sorot ? "text-navy-100" : "text-ink"
            }`}
          >
            <Check
              className={`mt-px size-4 shrink-0 ${sorot ? "text-navy-200" : "text-navy-600"}`}
            />
            {t}
          </li>
        ))}
      </ul>

      <a
        href={waLink(
          `Assalamu'alaikum Aljamtour. Saya tertarik dengan paket ${p.nama} (${p.durasi}). Mohon informasi jadwal keberangkatan dan cara pendaftarannya. Terima kasih.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`press group mt-8 flex h-13 items-center justify-center gap-2.5 rounded-2xl text-[0.9375rem] font-bold transition-colors duration-200 ${
          sorot
            ? "bg-amber-500 text-navy-900 hover:bg-amber-400"
            : "border border-navy-800/25 text-navy-800 hover:border-navy-800 hover:bg-navy-800 hover:text-white"
        }`}
      >
        <WhatsApp className="size-5 transition-transform duration-300 ease-[var(--ease-settle)] group-hover:scale-110" />
        Tanya paket ini
      </a>
    </article>
  );
}

export default function PaketSeksi() {
  const [aktif, setAktif] = useState<"umrah" | "haji">("umrah");
  const terpilih = tab.find((t) => t.id === aktif)!;

  return (
    <section id="paket" className="mx-auto mt-28 max-w-[84rem] px-5 sm:mt-40 sm:px-8">
      <BarRule />

      <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="sr max-w-[24ch] text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08]">
          <span className="font-normal text-navy-800/75">Pilih paket yang </span>
          <span className="font-extrabold text-navy-800">sesuai kemampuan</span>
          <span className="font-normal text-navy-800/75">, bukan yang paling mahal.</span>
        </h2>

        {/* The indicator is one element that moves, so the change of
            state is something the eye follows rather than something it
            has to re-find. Equal-width tabs keep it a pure translate. */}
        <div
          role="tablist"
          aria-label="Jenis paket"
          className="sr relative inline-flex shrink-0 self-start rounded-full border border-navy-800/12 bg-surface/70 p-1.5 lg:self-auto"
        >
          <span
            aria-hidden
            className="absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-navy-800 transition-transform duration-300 ease-[var(--ease-settle)] motion-reduce:transition-none"
            style={{ transform: `translateX(${aktif === "umrah" ? "0%" : "100%"})` }}
          />
          {tab.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={aktif === t.id}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setAktif(t.id)}
              className={`relative z-10 w-1/2 whitespace-nowrap rounded-full px-5 py-3 text-[0.9375rem] font-bold transition-colors duration-300 ${
                aktif === t.id ? "text-white" : "text-ink hover:text-navy-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        key={aktif}
        role="tabpanel"
        id={`panel-${aktif}`}
        aria-labelledby={`tab-${aktif}`}
        className="panel-in mt-12 grid gap-5 lg:grid-cols-3 lg:items-start"
      >
        {terpilih.daftar.map((p, i) => (
          <Kartu key={p.nama} p={p} className={`sr st${i + 1}`} />
        ))}
      </div>

      <p className="sr mt-8 max-w-[62ch] text-[0.875rem] leading-relaxed text-ink-soft">
        Biaya di atas berlaku untuk keberangkatan dari {`Bandara Juanda, Surabaya`} dan
        dapat berubah mengikuti kurs serta tarif maskapai. Angka pasti selalu kami
        konfirmasi tertulis sebelum pendaftaran.
      </p>
    </section>
  );
}
