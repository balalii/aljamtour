"use client";

import { useState } from "react";
import { ChevronDown, WhatsApp, Compass, Calendar, Users } from "./Icons";
import { panduOpsi, waLink } from "../content";

const bidang = [
  { key: "jenis" as const, label: "Jenis ibadah", Ikon: Compass, opsi: panduOpsi.jenis },
  { key: "bulan" as const, label: "Rencana berangkat", Ikon: Calendar, opsi: panduOpsi.bulan },
  { key: "jamaah" as const, label: "Jumlah jamaah", Ikon: Users, opsi: panduOpsi.jamaah },
];

/**
 * Not a booking form. It writes the opening WhatsApp message for the
 * visitor so the consultant already knows what they are asking about.
 */
export default function Pandu() {
  const [pilihan, setPilihan] = useState({
    jenis: panduOpsi.jenis[0],
    bulan: panduOpsi.bulan[0],
    jamaah: panduOpsi.jamaah[0],
  });

  const pesan =
    `Assalamu'alaikum Aljamtour. Saya ingin bertanya tentang ${pilihan.jenis}, ` +
    `rencana berangkat ${pilihan.bulan}, untuk ${pilihan.jamaah}. ` +
    `Mohon informasi paket dan biayanya. Terima kasih.`;

  return (
    <div className="rounded-[var(--radius-plate)] bg-surface p-5 shadow-[var(--shadow-float)] sm:p-6">
      <h2 className="mb-5 text-[1.125rem] font-extrabold">
        Pandu Perjalanan Anda
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="grid flex-1 gap-4 sm:grid-cols-3">
          {bidang.map(({ key, label, Ikon, opsi }) => (
            <div key={key} className="flex flex-col">
              <label
                htmlFor={`pandu-${key}`}
                className="flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-ink-soft"
              >
                <Ikon className="size-4 text-navy-600" />
                {label}
              </label>
              <div className="relative mt-2">
                <select
                  id={`pandu-${key}`}
                  value={pilihan[key]}
                  onChange={(e) =>
                    setPilihan((p) => ({ ...p, [key]: e.target.value }))
                  }
                  className="h-13 w-full cursor-pointer appearance-none rounded-2xl border border-navy-800/14 bg-ground/60 pl-4 pr-11 text-[0.9375rem] font-semibold text-navy-800 transition-colors hover:border-navy-800/30 focus:border-navy-700"
                >
                  {opsi.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-4.5 -translate-y-1/2 text-navy-600"
                />
              </div>
            </div>
          ))}
        </div>

        <a
          href={waLink(pesan)}
          target="_blank"
          rel="noopener noreferrer"
          className="press group flex h-13 shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-amber-500 px-6 text-[0.9375rem] font-bold text-navy-900 shadow-[var(--shadow-lift)] transition-colors duration-200 hover:bg-amber-400 lg:h-13"
        >
          <WhatsApp className="size-5 transition-transform duration-300 ease-[var(--ease-settle)] group-hover:scale-110" />
          Mulai chat
        </a>
      </div>

      <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-soft">
        Pilihan Anda hanya dipakai untuk menuliskan pesan pembuka. Tidak ada
        pemesanan, pembayaran, atau data pribadi yang tersimpan di halaman ini.
      </p>
    </div>
  );
}
