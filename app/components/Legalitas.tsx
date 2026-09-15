import { legalitas } from "../content";
import { ShieldCheck, Document } from "./Icons";

/**
 * Where the reference put a wall of partner logos, this puts the four
 * things a wary Indonesian jamaah actually checks. Set as a document
 * band rather than cards: these are records, not features.
 */
export default function Legalitas() {
  return (
    <section
      aria-label="Legalitas perusahaan"
      className="mx-auto mt-24 max-w-[84rem] px-5 sm:mt-32 sm:px-8"
    >
      <div className="sr rounded-[var(--radius-plate)] border border-navy-800/12 bg-surface/70">
        <div className="flex flex-wrap items-center gap-3 border-b border-navy-800/10 px-6 py-4 sm:px-8">
          <ShieldCheck className="size-5 text-navy-700" />
          <p className="text-[0.9375rem] font-semibold text-navy-800">
            Terdaftar dan diawasi Kementerian Agama Republik Indonesia
          </p>
          <a
            href="https://simpu.kemenag.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 ml-auto inline-flex items-center gap-1.5 py-2.5 text-[0.875rem] font-semibold text-navy-700 underline decoration-navy-700/30 transition-colors hover:text-navy-800 hover:decoration-navy-700"
          >
            <Document className="size-4" />
            Cek izin kami di situs Kemenag
          </a>
        </div>

        <dl className="grid divide-y divide-navy-800/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {legalitas.map((l, i) => (
            <div
              key={l.label}
              className={`sr st${i + 1} px-6 py-6 sm:px-8 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-navy-800/10 lg:[&:nth-child(-n+2)]:border-b-0`}
              style={{ borderColor: "rgb(18 49 99 / 0.10)" }}
            >
              <dt className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                {l.label}
              </dt>
              <dd className="tnum mt-2 text-[1.375rem] font-extrabold leading-tight text-navy-800">
                {l.nomor}
              </dd>
              <dd className="mt-1.5 text-[0.8125rem] text-ink-soft">{l.penerbit}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
