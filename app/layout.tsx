import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { perusahaan } from "./content";

/**
 * One family, carrying the page on weight contrast alone — the same
 * device the mark uses when three bars of one shape climb in height.
 */
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${perusahaan.nama} — Umrah & Haji Khusus Berizin Resmi Kemenag`,
    template: `%s · ${perusahaan.nama}`,
  },
  description:
    "Aljamtour memberangkatkan jamaah Umrah dan Haji Khusus sejak 2009. Izin resmi Kemenag, pembimbing tetap yang mendampingi dari manasik sampai pulang.",
  keywords: [
    "umrah",
    "haji khusus",
    "travel umrah",
    "biro perjalanan haji",
    perusahaan.kota,
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: perusahaan.nama,
    title: `${perusahaan.nama} — Umrah & Haji Khusus Berizin Resmi`,
    description:
      "Pembimbing tetap, izin resmi Kemenag, dan satu nomor yang selalu bisa dihubungi.",
  },
};

export const viewport: Viewport = {
  themeColor: "#123163",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} antialiased`}
    >
      <body>
        <a
          href="#isi"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-100 focus:rounded-full focus:bg-navy-800 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Lompat ke isi halaman
        </a>
        {children}
      </body>
    </html>
  );
}
