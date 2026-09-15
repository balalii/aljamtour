import Image from "next/image";
import { pembimbing, hero, waLink } from "../content";
import { Pill } from "./ui";
import { Quote, Check } from "./Icons";

export default function Pembimbing() {
  return (
    <section
      id="pembimbing"
      className="on-navy relative mt-28 overflow-clip bg-navy-800 py-20 sm:mt-40 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_28rem_at_82%_-10%,rgba(251,177,23,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-[84rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* An illustrative photograph of a rombongan with its pembimbing,
            captioned as exactly that. It is deliberately NOT presented as
            a portrait of the named person: no stranger's face may stand in
            for a real individual. Replace with the client's own
            documentation at public/img/pembimbing.jpg. */}
        <figure className="sr-unveil relative">
          <div className="arch-sm relative aspect-4/5 w-full overflow-hidden bg-navy-900">
            <Image
              src="/img/jamaah-contoh.jpg"
              alt="Rombongan jamaah berihram bersama pembimbingnya di pelataran Masjid Tan'im"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="graded object-cover object-[center_62%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,20,41,0.72),rgba(7,20,41,0)_46%)]"
            />
          </div>
          <figcaption className="mt-3 text-[0.8125rem] leading-relaxed text-navy-200">
            Foto contoh — rombongan bersama pembimbingnya. Potret{" "}
            {pembimbing.nama} dipasang di sini.
          </figcaption>
        </figure>

        <div className="sr">
          <Quote className="size-10 text-navy-300" />
          <blockquote className="mt-5 text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-[1.22] tracking-[-0.03em] text-white">
            “{pembimbing.kutipan}”
          </blockquote>

          <div className="mt-8">
            <p className="text-[1.25rem] font-extrabold text-white">
              {pembimbing.nama}
            </p>
            <p className="mt-1 text-[0.9375rem] font-semibold text-navy-200">
              {pembimbing.peran}
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-8">
            {pembimbing.riwayat.map((r) => (
              <li key={r} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-navy-100">
                <Check className="mt-0.5 size-5 shrink-0 text-navy-300" />
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Pill
              href={waLink(
                `Assalamu'alaikum. Saya ingin bertanya langsung kepada ${pembimbing.nama} mengenai bimbingan ibadah. Terima kasih.`,
              )}
              external
              tone="amber"
              size="md"
            >
              Tanya langsung ke pembimbing
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
