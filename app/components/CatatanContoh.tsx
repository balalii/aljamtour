import { KONTEN_MASIH_CONTOH } from '../content';

/**
 * Shown while the page still carries invented data. It is not decoration:
 * unqualified claims about departure records, satisfaction rates and
 * permit numbers are regulated territory for an Indonesian PPIU, and a
 * review build must never be mistaken for a live one.
 */
export default function CatatanContoh() {
  if (!KONTEN_MASIH_CONTOH) return null;

  return (
    <div className="relative z-60 bg-slate-950 px-5 py-2.5 text-center sm:px-8">
      <p className="mx-auto max-w-[70rem] text-[0.8125rem] leading-relaxed text-navy-200">
        Badan Hukum <span className="font-bold text-white">PT Al Jamarat</span> Penyelenggara terdaftar.
      </p>
    </div>
  );
}
