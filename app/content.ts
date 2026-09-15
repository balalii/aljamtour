/* ==================================================================
   Aljamtour — seluruh isi halaman ada di file ini.
   ------------------------------------------------------------------
   NYATA (sudah diberikan klien, jangan diubah):
       - nama badan hukum: PT Al Jamarat
       - Izin Umrah (PPIU)  : U 93/2022
       - Izin Haji (PIHK)   : 9120.5091.5251.10008
       - tagline            : Haji • Umrah • Wisata Halal
   ------------------------------------------------------------------
   ⚠️  SISANYA MASIH KARANGAN (placeholder) dan wajib diganti sebelum
       live: angka, harga, testimoni, alamat, telepon, nomor WhatsApp,
       dan nama pembimbing. Setiap baris ditandai  // TODO
================================================================== */

/**
 * Master switch for the placeholder banner.
 *
 * Every figure, testimonial, price and legal number below is INVENTED so
 * the design can be reviewed as a finished page. While this is `true` the
 * site shows a notice saying so, which keeps an unfinished page from ever
 * reading as a live set of claims — a fabricated departure record or
 * satisfaction rate is the same class of hazard in this market as a
 * fabricated Kemenag permit number.
 *
 * Replace the data, then set this to `false`.
 */
export const KONTEN_MASIH_CONTOH = true;

export const perusahaan = {
  nama: "Aljamtour",
  namaPanjang: "PT Al Jamarat",
  tagline: "Haji • Umrah • Wisata Halal",
  berdiri: 2009, // TODO
  kota: "Malang", // TODO
  provinsi: "Jawa Timur", // TODO
  alamat: "Jl. Soekarno Hatta No. 18, Lowokwaru", // TODO
  alamatKota: "Malang, Jawa Timur 65141", // TODO
  telepon: "(0341) 500 118", // TODO
  email: "salam@aljamtour.co.id", // TODO
  jamOperasional: "Senin–Sabtu, 08.00–17.00 WIB", // TODO
  mapsUrl: "https://maps.google.com/?q=Malang", // TODO: pin lokasi kantor asli
};

/** Nomor WhatsApp konsultan. Format internasional tanpa + dan tanpa spasi. */
export const waNomor = "6281130009090"; // TODO: nomor WhatsApp konsultan asli
export const waNama = "Ustazah Hanifah"; // TODO: nama konsultan yang menerima chat

/** Menyusun tautan wa.me dengan pesan yang sudah terisi. */
export function waLink(pesan: string) {
  return `https://wa.me/${waNomor}?text=${encodeURIComponent(pesan)}`;
}

/* --------------------------------------------------------------
   Legalitas — tampil sebagai baris yang bisa dicek pengunjung.
   Nomor SK sengaja berformat template, bukan angka palsu.
-------------------------------------------------------------- */
export const legalitas = [
  {
    label: "Izin Umrah (PPIU)",
    nomor: "U 93/2022",
    penerbit: "Kementerian Agama RI",
  },
  {
    label: "Izin Haji Khusus (PIHK)",
    nomor: "9120.5091.5251.10008",
    penerbit: "Kementerian Agama RI",
  },
  {
    label: "Badan Hukum",
    nomor: "PT Al Jamarat",
    penerbit: "Penyelenggara terdaftar",
  },
];

/* --------------------------------------------------------------
   Hero
-------------------------------------------------------------- */
export const hero = {
  // Headline dipecah supaya bagian tebal bisa diberi bobot berbeda.
  judul: [
    { teks: "Berangkat bersama ", tebal: false },
    { teks: "pembimbing", tebal: true },
    { teks: " yang tidak meninggalkan Anda.", tebal: false },
  ],
  ringkas:
    "Aljamtour memberangkatkan jamaah Umrah dan Haji Khusus sejak 2009. Izin resmi Kemenag, satu pembimbing yang mendampingi dari manasik sampai pulang, dan satu nomor yang selalu bisa Anda hubungi.",
  bukti: "Sudah mendampingi 12.400+ jamaah", // TODO: jumlah jamaah sebenarnya
  ctaUtama: "Tanya paket lewat WhatsApp",
  ctaKedua: "Lihat jadwal keberangkatan",
  pesanWa:
    "Assalamu'alaikum Aljamtour. Saya menemukan website Anda dan ingin bertanya tentang paket Umrah. Mohon informasinya, terima kasih.",
};

/* --------------------------------------------------------------
   Pemandu paket — menyusun pesan WhatsApp, bukan memesan.
-------------------------------------------------------------- */
export const panduOpsi = {
  jenis: ["Umrah Reguler", "Umrah Plus", "Umrah Ramadan", "Haji Khusus"],
  bulan: [
    "Januari 2027",
    "Februari 2027",
    "Maret 2027",
    "April 2027",
    "Mei 2027",
    "Juni 2027",
    "Belum menentukan",
  ], // TODO: samakan dengan jadwal keberangkatan asli
  jamaah: ["1 orang", "2 orang", "3–4 orang", "5 orang atau lebih", "Rombongan"],
};

/* --------------------------------------------------------------
   Angka — semua karangan, ganti sebelum live.
-------------------------------------------------------------- */
export const angka = [
  {
    nilai: "12.400+",
    label: "Jamaah diberangkatkan",
    catatan: "Sejak keberangkatan pertama tahun 2009", // TODO
  },
  {
    nilai: "16",
    label: "Tahun beroperasi",
    catatan: "Izin PPIU diperpanjang tanpa putus", // TODO
  },
  {
    nilai: "0",
    label: "Keberangkatan gagal",
    catatan: "Tidak pernah menunda jadwal sejak 2009", // TODO
    sorot: true,
  },
  {
    nilai: "98%",
    label: "Jamaah merekomendasikan",
    catatan: "Survei internal pasca-kepulangan 2025", // TODO
  },
];

/* --------------------------------------------------------------
   Tentang
-------------------------------------------------------------- */
export const tentang = {
  judul: [
    { teks: "Ibadah sekali seumur hidup tidak boleh ", tebal: false },
    { teks: "diserahkan kepada yang asing", tebal: true },
    { teks: ".", tebal: false },
  ],
  paragraf: [
    "Aljamtour berdiri di Malang pada 2009, berawal dari satu rombongan pengajian yang meminta Ustaz Abdul Jamil membimbing mereka ke Tanah Suci. Rombongan itu berjumlah 41 orang. Yang kedua berjumlah 96.",
    "Sejak itu cara kerja kami tidak berubah: pembimbing yang mengantar adalah pembimbing yang Anda kenal sejak manasik, bukan nama yang baru muncul di bandara. Dokumen diurus di kantor kami sendiri, dan setiap rombongan punya satu nomor yang bisa dihubungi keluarga di rumah, setiap hari, selama perjalanan.",
  ], // TODO: ganti dengan sejarah perusahaan yang sebenarnya
};

/* --------------------------------------------------------------
   Pembimbing — inti positioning Aljamtour.
-------------------------------------------------------------- */
export const pembimbing = {
  nama: "Ustaz H. Abdul Jamil Anshari, Lc.", // TODO
  peran: "Pembimbing Ibadah & Pendiri Aljamtour", // TODO
  kutipan:
    "Tugas saya bukan mengantar jamaah sampai Mekah. Tugas saya memastikan ibadahnya sah, hatinya tenang, dan keluarganya di rumah tidak khawatir.", // TODO
  riwayat: [
    "Alumni Fakultas Syariah, Universitas Al-Azhar, Kairo", // TODO
    "Pembimbing ibadah bersertifikat Kementerian Agama RI", // TODO
    "Mendampingi lebih dari 180 rombongan sejak 2009", // TODO
    "Pengasuh kajian rutin Masjid Ar-Rahman, Malang", // TODO
  ],
};

/* --------------------------------------------------------------
   Paket — harga karangan. WAJIB diganti.
-------------------------------------------------------------- */
export type Paket = {
  nama: string;
  harga: string;
  satuan: string;
  ringkas: string;
  durasi: string;
  hotelMekah: string;
  hotelMadinah: string;
  maskapai: string;
  termasuk: string[];
  sorot?: boolean;
};

export const paketUmrah: Paket[] = [
  {
    nama: "Umrah Hemat",
    harga: "27,9",
    satuan: "juta",
    ringkas: "Untuk jamaah yang mengutamakan biaya terjangkau tanpa mengurangi kelengkapan ibadah.",
    durasi: "9 hari",
    hotelMekah: "Setaraf bintang 3, ±800 m dari Masjidil Haram",
    hotelMadinah: "Setaraf bintang 3, ±400 m dari Masjid Nabawi",
    maskapai: "Penerbangan transit satu kali",
    termasuk: [
      "Bimbingan manasik 3 pertemuan",
      "Pengurusan visa dan dokumen",
      "Perlengkapan ibadah lengkap",
      "Makan 3 kali sehari, menu Indonesia",
      "Bus AC selama di Tanah Suci",
      "Pembimbing tetap satu rombongan",
    ],
  },
  {
    nama: "Umrah Utama",
    harga: "36,5",
    satuan: "juta",
    ringkas: "Pilihan terbanyak jamaah kami. Hotel dekat, penerbangan langsung, rombongan dibatasi 45 orang.",
    durasi: "12 hari",
    hotelMekah: "Bintang 4, ±250 m dari Masjidil Haram",
    hotelMadinah: "Bintang 4, ±150 m dari Masjid Nabawi",
    maskapai: "Penerbangan langsung",
    termasuk: [
      "Semua yang ada di paket Hemat",
      "Rombongan dibatasi 45 jamaah",
      "Ziarah Mekah dan Madinah lengkap",
      "Pendamping lansia bila diperlukan",
      "Laporan harian untuk keluarga di rumah",
      "Air zamzam 5 liter per jamaah",
    ],
    sorot: true,
  },
  {
    nama: "Umrah Plus Aqsa",
    harga: "52,0",
    satuan: "juta",
    ringkas: "Umrah dilanjutkan ziarah ke Masjid Al-Aqsa melalui Yordania, dengan pendampingan penuh.",
    durasi: "16 hari",
    hotelMekah: "Bintang 5, menghadap Masjidil Haram",
    hotelMadinah: "Bintang 5, ±100 m dari Masjid Nabawi",
    maskapai: "Penerbangan langsung, kelas ekonomi premium",
    termasuk: [
      "Semua yang ada di paket Utama",
      "Ziarah Al-Aqsa, Yordania, dan Petra",
      "Rombongan dibatasi 25 jamaah",
      "Handling bandara prioritas",
      "Asuransi perjalanan diperluas",
      "Dokumentasi foto dan video rombongan",
    ],
  },
];

export const paketHaji: Paket[] = [
  {
    nama: "Haji Khusus Reguler",
    harga: "168",
    satuan: "juta",
    ringkas: "Kuota Haji Khusus resmi melalui PIHK Aljamtour. Masa tunggu berjalan sejak pelunasan.",
    durasi: "26 hari",
    hotelMekah: "Bintang 4, kawasan Syisyah dengan bus 24 jam",
    hotelMadinah: "Bintang 4, kawasan Markaziyah",
    maskapai: "Penerbangan langsung",
    termasuk: [
      "Pendaftaran SISKOPATUH dan nomor porsi",
      "Bimbingan manasik 8 pertemuan",
      "Tenda Mina kategori standar",
      "Pembimbing tetap satu rombongan",
      "Pengurusan dokumen dan visa haji",
      "Perlengkapan haji lengkap",
    ],
  },
  {
    nama: "Haji Khusus Utama",
    harga: "215",
    satuan: "juta",
    ringkas: "Hotel dekat dengan Masjidil Haram dan tenda Mina yang lebih lapang untuk jamaah lanjut usia.",
    durasi: "26 hari",
    hotelMekah: "Bintang 5, ±400 m dari Masjidil Haram",
    hotelMadinah: "Bintang 5, ±150 m dari Masjid Nabawi",
    maskapai: "Penerbangan langsung",
    termasuk: [
      "Semua yang ada di paket Reguler",
      "Tenda Mina ber-AC kategori VIP",
      "Rombongan dibatasi 30 jamaah",
      "Pendamping khusus jamaah lansia",
      "Katering menu Indonesia sepanjang perjalanan",
      "Laporan harian untuk keluarga di rumah",
    ],
    sorot: true,
  },
  {
    nama: "Haji Khusus Keluarga",
    harga: "248",
    satuan: "juta",
    ringkas: "Untuk keluarga yang berangkat bersama dan ingin ditempatkan dalam satu kamar dan satu tenda.",
    durasi: "26 hari",
    hotelMekah: "Bintang 5, menghadap Masjidil Haram",
    hotelMadinah: "Bintang 5, ±100 m dari Masjid Nabawi",
    maskapai: "Penerbangan langsung, kelas ekonomi premium",
    termasuk: [
      "Semua yang ada di paket Utama",
      "Kamar keluarga, maksimal 3 orang",
      "Tenda Mina satu keluarga",
      "Pendamping pribadi per keluarga",
      "Handling bandara prioritas",
      "Dokumentasi foto dan video keluarga",
    ],
  },
];

/* --------------------------------------------------------------
   Alur — memakai irama tiga batang pada logo.
-------------------------------------------------------------- */
export const alur = [
  {
    judul: "Mengobrol dulu, tanpa biaya",
    isi: "Hubungi kami lewat WhatsApp. Kami tanyakan kondisi, usia, dan rencana Anda, lalu sarankan paket yang masuk akal — termasuk bila jawabannya adalah menunda dulu.",
  },
  {
    judul: "Mendaftar di kantor",
    isi: "Pendaftaran dilakukan di kantor Malang, bukan lewat transfer ke rekening pribadi. Anda menerima kuitansi resmi dan nomor pendaftaran atas nama Aljamtour.",
  },
  {
    judul: "Dokumen kami yang mengurus",
    isi: "Paspor, visa, vaksin meningitis, dan berkas Kemenag diurus tim kami. Anda hanya perlu datang dua kali: foto biometrik dan pengambilan dokumen.",
  },
  {
    judul: "Manasik bersama pembimbing Anda",
    isi: "Manasik dipimpin pembimbing yang akan berangkat bersama Anda. Rombongan saling mengenal sebelum bertemu di bandara.",
  },
  {
    judul: "Berangkat dan didampingi",
    isi: "Satu pembimbing tetap bersama rombongan sepanjang perjalanan. Keluarga di rumah menerima kabar harian dari nomor koordinator rombongan.",
  },
];

/* --------------------------------------------------------------
   Testimoni — karangan. Ganti dengan testimoni asli berizin.
-------------------------------------------------------------- */
export const testimoni = [
  {
    isi: "Ibu saya usia 71 dan sudah pakai kursi roda. Yang saya cari bukan hotel bagus, tapi orang yang mau repot. Pendampingnya menggendong ibu saya waktu tawaf. Itu yang tidak bisa saya bayar.",
    nama: "Pak Hendra Kurniawan", // TODO
    asal: "Umrah Utama, Maret 2025", // TODO
  },
  {
    isi: "Saya sempat ragu karena banyak cerita travel yang gagal berangkat. Saya datang ke kantornya dulu, saya lihat SK-nya, saya tanya-tanya ke jamaah lama. Baru saya daftar. Alhamdulillah berangkat tepat tanggal.",
    nama: "Bu Siti Maemunah", // TODO
    asal: "Umrah Hemat, Desember 2024", // TODO
  },
  {
    isi: "Yang paling saya hargai justru laporan hariannya. Anak saya di Surabaya bisa tahu bapaknya sedang di mana, sudah makan atau belum. Buat keluarga yang menunggu di rumah, itu menenangkan sekali.",
    nama: "Pak Ahmad Sulaiman", // TODO
    asal: "Haji Khusus, 2024", // TODO
  },
];

/* --------------------------------------------------------------
   Pertanyaan yang sering masuk
-------------------------------------------------------------- */
export const tanya = [
  {
    q: "Bagaimana saya tahu Aljamtour benar-benar berizin?",
    a: "Nomor SK PPIU dan PIHK kami tercantum di bagian atas halaman ini dan di setiap kuitansi. Nomor tersebut bisa Anda cek sendiri di situs resmi Kementerian Agama. Kami juga mempersilakan calon jamaah datang ke kantor dan melihat dokumen aslinya sebelum mendaftar.",
  },
  {
    q: "Apakah pembayaran bisa dicicil?",
    a: "Bisa. Pendaftaran dimulai dengan setoran awal, sisanya dicicil sampai batas pelunasan sesuai jadwal keberangkatan. Semua pembayaran masuk ke rekening perusahaan atas nama Aljamtour, tidak pernah ke rekening pribadi siapa pun.",
  },
  {
    q: "Orang tua saya sudah sepuh dan punya penyakit bawaan. Apakah bisa ikut?",
    a: "Sebagian besar jamaah kami berusia di atas 55 tahun. Sebelum mendaftar kami minta keterangan kondisi kesehatan, lalu kami sarankan paket dengan hotel terdekat dan, bila perlu, pendamping khusus. Bila kondisinya belum memungkinkan, kami akan mengatakannya terus terang.",
  },
  {
    q: "Siapa yang membimbing di Tanah Suci?",
    a: "Pembimbing yang memimpin manasik adalah pembimbing yang berangkat bersama rombongan Anda. Kami tidak mengganti pembimbing di menit terakhir, dan setiap rombongan hanya dipegang satu pembimbing.",
  },
  {
    q: "Kalau keberangkatan ditunda, bagaimana?",
    a: "Sejak 2009 kami belum pernah menunda keberangkatan. Bila penundaan terjadi karena sebab di luar kendali seperti kebijakan pemerintah Arab Saudi, jamaah berhak memilih dijadwalkan ulang tanpa biaya tambahan atau menerima pengembalian dana sesuai ketentuan yang tertulis di perjanjian pendaftaran.",
  },
];

/* --------------------------------------------------------------
   Kredit foto — wajib dipertahankan selama foto ini masih dipakai.
-------------------------------------------------------------- */
export const kreditFoto =
  "Foto pada halaman ini bersumber dari Wikimedia Commons dan dipasang sementara sebagai pengganti dokumentasi perjalanan Aljamtour. Foto pemandangan berlisensi CC0; foto rombongan jamaah oleh Indonesiagood, berlisensi CC BY 4.0.";
