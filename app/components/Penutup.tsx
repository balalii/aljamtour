import Image from "next/image";
import { Pill } from "./ui";
import { hero, perusahaan, waNama, waLink } from "../content";
import { Phone, MapPin } from "./Icons";

export default function Penutup() {
  return (
    <section className="relative mt-28 sm:mt-40">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="sr-come on-navy relative overflow-clip rounded-[var(--radius-plate)] bg-navy-800">
          <Image
            src="/img/green-dome.jpg"
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="graded object-cover object-[center_38%] opacity-35 sm:opacity-60"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(175deg,rgba(18,49,99,0.92)_0%,rgba(18,49,99,0.86)_55%,rgba(11,32,68,0.78)_100%)] sm:bg-[linear-gradient(105deg,rgba(18,49,99,0.94)_0%,rgba(18,49,99,0.80)_42%,rgba(11,32,68,0.62)_100%)]"
          />

          <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-16">
            <div>
              <h2 className="max-w-[18ch] text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08]">
                <span className="font-normal text-navy-100">Tanya dulu. </span>
                <span className="font-extrabold text-white">Tidak ada biaya</span>
                <span className="font-normal text-navy-100"> untuk bertanya.</span>
              </h2>
              <p className="mt-6 max-w-[42rem] text-[1.0625rem] leading-[1.7] text-navy-100">
                Pesan Anda diterima langsung oleh {waNama}, bukan robot balasan
                otomatis. Ceritakan rencana dan kondisi Anda, dan kami akan
                menjawab apa adanya — termasuk bila saran kami adalah menunggu
                tahun depan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Pill href={waLink(hero.pesanWa)} external size="lg">
                  Chat WhatsApp sekarang
                </Pill>
                <Pill
                  href={`tel:${perusahaan.telepon.replace(/[^\d+]/g, "")}`}
                  tone="outlineLight"
                  size="lg"
                >
                  Telepon kantor
                </Pill>
              </div>
            </div>

            <dl className="flex flex-col gap-6 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-navy-200" />
                <div>
                  <dt className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-navy-300">
                    Kantor
                  </dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-white">
                    {perusahaan.alamat}
                    <br />
                    {perusahaan.alamatKota}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-navy-200" />
                <div>
                  <dt className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-navy-300">
                    Jam layanan
                  </dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-white">
                    {perusahaan.jamOperasional}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
