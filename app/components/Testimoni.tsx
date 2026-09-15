import { testimoni } from "../content";
import { Quote } from "./Icons";
import { BarRule } from "./ui";

export default function Testimoni() {
  return (
    <section id="testimoni" className="mx-auto mt-28 max-w-[84rem] px-5 sm:mt-40 sm:px-8">
      <BarRule />

      <h2 className="sr mt-14 max-w-[20ch] text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08]">
        <span className="font-normal text-navy-800/75">Yang mereka ingat </span>
        <span className="font-extrabold text-navy-800">bukan hotelnya</span>
        <span className="font-normal text-navy-800/75">.</span>
      </h2>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimoni.map((t, i) => (
          <figure
            key={t.nama}
            className={`sr st${i + 1} flex flex-col rounded-[var(--radius-plate)] p-8 ${
              i === 1
                ? "border border-navy-800/12 bg-surface"
                : "border border-navy-800/12 bg-surface/60"
            }`}
          >
            <Quote className="size-8 text-navy-300" />
            <blockquote className="mt-5 flex-1 text-[1.0625rem] leading-[1.62] text-navy-800">
              {t.isi}
            </blockquote>
            <figcaption className="mt-7 border-t border-navy-800/10 pt-5">
              <p className="text-[0.9375rem] font-extrabold text-navy-800">{t.nama}</p>
              <p className="mt-0.5 text-[0.8125rem] text-ink-soft">{t.asal}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
