import { tanya } from "../content";
import { ChevronDown, WhatsApp } from "./Icons";
import { hero, waNama, waLink } from "../content";
import { BarRule } from "./ui";

/**
 * Native <details>: it works before hydration, prints, and is findable
 * with the browser's own in-page search.
 */
export default function Tanya() {
  return (
    <section id="tanya" className="mx-auto mt-28 max-w-[84rem] px-5 sm:mt-40 sm:px-8">
      <BarRule />

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="sr lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08]">
            <span className="font-normal text-navy-800/75">Yang paling sering </span>
            <span className="font-extrabold text-navy-800">ditanyakan</span>
            <span className="font-normal text-navy-800/75">.</span>
          </h2>

          <div className="mt-8 rounded-[var(--radius-card)] border border-navy-800/12 bg-surface/70 p-6">
            <p className="text-[1rem] leading-relaxed text-ink">
              Pertanyaan Anda tidak ada di sini? Tanyakan langsung kepada{" "}
              <span className="font-bold text-navy-800">{waNama}</span>. Tidak
              ada biaya, dan Anda tidak perlu mendaftar apa pun dulu.
            </p>
            <a
              href={waLink(hero.pesanWa)}
              target="_blank"
              rel="noopener noreferrer"
              className="press group mt-5 inline-flex h-12 items-center gap-2.5 rounded-2xl bg-navy-800 px-5 text-[0.9375rem] font-bold text-white transition-colors duration-200 hover:bg-navy-700"
            >
              <WhatsApp className="size-5 text-amber-500 transition-transform duration-300 ease-[var(--ease-settle)] group-hover:scale-110" />
              Tanya sekarang
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          {tanya.map((t, i) => (
            <details
              key={t.q}
              className={`tanya sr st${Math.min(i + 1, 4)} group border-b border-navy-800/12 first:border-t`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-bold text-navy-800 transition-colors hover:text-navy-600 [&::-webkit-details-marker]:hidden">
                {t.q}
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-navy-800/20 text-navy-700 transition-transform duration-300 ease-[var(--ease-settle)] group-open:rotate-180 group-open:border-navy-800 group-open:bg-navy-800 group-open:text-amber-500">
                  <ChevronDown className="size-4.5" />
                </span>
              </summary>
              <p className="max-w-[62ch] pb-7 text-[1rem] leading-[1.7] text-ink">
                {t.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
