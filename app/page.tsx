import Reveal from './components/Reveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Legalitas from './components/Legalitas';
import Tentang from './components/Tentang';
import Pembimbing from './components/Pembimbing';
import Paket from './components/Paket';
import Alur from './components/Alur';
import Testimoni from './components/Testimoni';
import Tanya from './components/Tanya';
import Penutup from './components/Penutup';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function Beranda() {
  return (
    <>
      <Nav />
      <main id="isi">
        <Hero />
        <Legalitas />
        <Tentang />
        <Pembimbing />
        <Paket />
        <Alur />
        <Testimoni />
        <Tanya />
        <Penutup />
      </main>
      <Footer />
      <WhatsAppFab />
      <Reveal />
    </>
  );
}
