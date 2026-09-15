import { alur } from "../content";
import { BarRule } from "./ui";

/**
 * The steps are numbered because the order is the information: a jamaah
 * worried about fraud wants to know exactly when money changes hands.
 */
export default function Alur() {
  return (
    <section id="alur" className="mx-auto mt-28 max-w-[84rem] px-5 sm:mt-40 sm:px-8">
      <BarRule />

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="sr lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08]">
            <span className="font-normal text-navy-800/75">Dari pertanyaan pertama </span>
            <span className="font-extrabold text-navy-800">sampai pulang</span>
            <span className="font-normal text-navy-800/75">, lima langkah.</span>
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-ink">
            Tidak ada biaya yang keluar sebelum langkah kedua, dan setiap
            pembayaran masuk ke rekening perusahaan, bukan rekening pribadi.
          </p>
        </div>

        <ol className="relative flex flex-col">
          {alur.map((a, i) => (
            <li key={a.judul} className="sr relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
              <div className="flex w-12 shrink-0 flex-col items-center">
                <span className="tnum grid size-12 shrink-0 place-items-center rounded-2xl bg-navy-800 text-[1.0625rem] font-extrabold text-white">
                  {i + 1}
                </span>
                {i < alur.length - 1 && (
                  <span aria-hidden className="mt-3 flex w-0.5 flex-1 justify-center">
                    <span className="rail h-full w-full rounded-full bg-navy-800/15" />
                  </span>
                )}
              </div>

              <div className="pt-1.5 pb-2">
                <h3 className="text-[1.25rem] font-extrabold">{a.judul}</h3>
                <p className="mt-2.5 max-w-[46rem] text-[1rem] leading-[1.68] text-ink">
                  {a.isi}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
