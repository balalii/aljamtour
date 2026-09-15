import { LogoLockup } from "./Logo";
import { legalitas, perusahaan, kreditFoto, hero, waLink } from "../content";

const kolom = [
  {
    judul: "Halaman",
    tautan: [
      { label: "Tentang kami", href: "#tentang" },
      { label: "Pembimbing", href: "#pembimbing" },
      { label: "Paket & biaya", href: "#paket" },
      { label: "Alur pendaftaran", href: "#alur" },
      { label: "Tanya jawab", href: "#tanya" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="on-navy mt-24 bg-navy-950 pt-16 pb-10 sm:mt-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="sr grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
          <div>
            <LogoLockup tone="light" />
            <p className="mt-6 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-navy-200">
              {perusahaan.namaPanjang} — penyelenggara perjalanan ibadah Umrah
              dan Haji Khusus berizin resmi, berkedudukan di {perusahaan.kota},{" "}
              {perusahaan.provinsi}.
            </p>
            <a
              href={waLink(hero.pesanWa)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block py-2.5 text-[0.9375rem] font-bold text-amber-500 underline decoration-amber-500/40 transition-colors hover:decoration-amber-500"
            >
              Hubungi kami lewat WhatsApp
            </a>
          </div>

          {kolom.map((k) => (
            <nav key={k.judul} aria-label={k.judul}>
              <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-navy-300">
                {k.judul}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {k.tautan.map((t) => (
                  <li key={t.href}>
                    <a
                      href={t.href}
                      className="-my-1 inline-block py-2.5 text-[0.9375rem] text-navy-200 transition-colors hover:text-white"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-navy-300">
              Legalitas
            </h2>
            <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {legalitas.map((l) => (
                <div key={l.label}>
                  <dt className="text-[0.75rem] text-navy-300">{l.label}</dt>
                  <dd className="tnum mt-1 text-[0.9375rem] font-bold text-white">
                    {l.nomor}
                  </dd>
                </div>
              ))}
            </dl>
            <address className="mt-6 text-[0.875rem] not-italic leading-relaxed text-navy-200">
              {perusahaan.alamat}, {perusahaan.alamatKota}
              <br />
              {perusahaan.telepon} · {perusahaan.email}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-8 text-[0.8125rem] text-navy-300 lg:flex-row lg:items-start lg:justify-between">
          <p>
            © {new Date().getFullYear()} {perusahaan.namaPanjang}. Seluruh hak
            dilindungi.
          </p>
          <p className="max-w-[58ch] lg:text-right">{kreditFoto}</p>
        </div>
      </div>
    </footer>
  );
}
