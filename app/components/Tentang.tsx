import Image from "next/image";
import { Judul, BarRule } from "./ui";
import { tentang, angka } from "../content";

export default function Tentang() {
  const [utama, ...sisa] = angka;

  return (
    <section id="tentang" className="mx-auto mt-28 max-w-[84rem] px-5 sm:mt-40 sm:px-8">
      <BarRule />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16">
        <div className="sr">
          <h2 className="text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08]">
            <Judul parts={tentang.judul} />
          </h2>
          <div className="mt-8 flex flex-col gap-5 text-[1.0625rem] leading-[1.7] text-ink">
            {tentang.paragraf.map((p, i) => (
              <p key={i} className="max-w-[38rem]">
                {p}
              </p>
            ))}
          </div>
        </div>

        <figure className="sr-unveil relative">
          <div className="arch-sm relative aspect-4/5 w-full overflow-hidden bg-navy-900">
            <Image
              src="/img/arafat.jpg"
              alt="Jamaah berihram menaiki Jabal Rahmah di Arafah"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="graded object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[0.75rem] text-ink-soft">
            Jabal Rahmah, Arafah.
          </figcaption>
        </figure>
      </div>

      {/* A ledger, not a scoreboard: one figure leads and the rest are
          read as entries against it, each with the record it comes from. */}
      <div className="sr on-navy mt-16 overflow-clip rounded-[var(--radius-plate)] bg-navy-800 lg:mt-20">
        <div className="grid lg:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col justify-center border-b border-white/12 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="tnum text-[clamp(3.5rem,7vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-white">
              {utama.nilai}
            </p>
            <p className="mt-4 text-[1.25rem] font-bold text-white">{utama.label}</p>
            <p className="mt-2 max-w-[28rem] text-[0.9375rem] leading-relaxed text-navy-200">
              {utama.catatan}
            </p>
          </div>

          <dl className="flex flex-col">
            {sisa.map((a, i) => (
              <div
                key={a.label}
                className={`sr-wipe st${i + 1} flex items-baseline gap-4 border-b border-white/12 px-6 py-6 last:border-b-0 sm:gap-8 sm:px-10`}
              >
                <dd className="tnum w-16 shrink-0 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tracking-[-0.04em] text-white sm:w-32">
                  {a.nilai}
                </dd>
                <div>
                  <dt className="text-[1.0625rem] font-bold text-white">{a.label}</dt>
                  <p className="mt-1 text-[0.875rem] leading-relaxed text-navy-200">
                    {a.catatan}
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
