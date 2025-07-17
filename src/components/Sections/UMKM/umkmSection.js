"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UmkmCard from "./umkmCard";

export default function UmkmSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, mirror: false });
  }, []);

  const cards = [
    {
      number: "01",
      subtitle: "085228901896",
      title: "Zain Konveksi dan Sablon",
      text: "Konveksi dan sablon sistem orderan produk kaos, training, seragam olahraga, baju PDL, sablon manual dan DTF; menerima pesanan banner, print menu, undangan.",
      address: "Gebang RT 4 RW 7, Kemiri, Tanjungsari, Gunungkidul, DIY",
      price: "Kaos mulai dari 30K",
      hours: "08.00–16.00",
      imgSrcs: ["/Foto-UMKM/Zain/1.jpg", "/Foto-UMKM/Zain/2.jpg", "/Foto-UMKM/Zain/3.jpg"],
      imgAlt: "Foto Cilok Lezat.",
      reverse: false,
    },
    {
      number: "02",
      subtitle: "081225506790",
      title: "Crystal Teknik Elektrik",
      text: "toko listrik dan Sparepart elektronik menjual berbagai alat listrik dan Sparepart AC,kulkas ,mesin cuci , menerima service berbagai elektronik, dll",
      address: "Gebang RT 4 RW 7, Kemiri, Tanjungsari, Gunungkidul, DIY",
      price: "bervariasi",
      hours: "08:00-21:00",
      imgSrcs: ["/Foto-UMKM/Crystal/1.jpg", "/Foto-UMKM/Crystal/2.jpg", "/Foto-UMKM/Crystal/3.jpg", "/Foto-UMKM/Crystal/4.jpg", "/Foto-UMKM/Crystal/5.jpg", "/Foto-UMKM/Crystal/6.jpg"],
      imgAlt: "Foto Cilok Lezat.",
      reverse: true,
    },
    {
      number: "03",
      subtitle: "082325659086",
      title: "BASRENG IKAN LAUT",
      text: "Menyediakan aneka kue kring, Tape Ketan dan Basreng macam-macam rasa.",
      address: "Gebang RT 3 RW 7, Kemiri, Tanjungsari, Gunungkidul, DIY",
      price: "70.000/kg",
      hours: "08.00–16.00",
      imgSrcs: ["/Foto-UMKM/Crystal/7.jpg"],
      imgAlt: "Foto Cilok Lezat.",
      reverse: false,
    },
    {
      number: "04",
      subtitle: "081228234390",
      title: "KEDAI SUMENE",
      text: "Tempat nongkrong free wifi paling nyaman se-Gebang. Menyediakan makanan dan minuman yang lezat!",
      address: "Gebang, Kemiri, Wonosari, Gunungkidul Regency, Special Region of Yogyakarta 55881 (Available in gmaps)",
      price: "2.000 - 15.000",
      hours: "24 hours",
      imgSrcs: ["/Foto-UMKM/Crystal/1.jpg", "/Foto-UMKM/Crystal/2.jpg", "/Foto-UMKM/Crystal/3.jpg", "/Foto-UMKM/Crystal/4.jpg", "/Foto-UMKM/Crystal/5.jpg", "/Foto-UMKM/Crystal/6.jpg"],
      imgAlt: "Foto Cilok Lezat.",
      reverse: true,
    },
  ];

  return (
    <section id="umkm" className="px-6 py-20 bg-[#0B1D26] text-white">
      <div className="container mx-auto space-y-32">
        {cards.map((c, i) => (
          <UmkmCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
