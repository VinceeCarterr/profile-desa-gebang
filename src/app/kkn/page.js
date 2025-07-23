"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KknCard from "./kknCard";

export default function kkn() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, mirror: false });
  }, []);

  // 6 Program Kerja Kelompok
  const kelompokPrograms = [
    {
      number: "01",
      subtitle: "Padukuhan",
      title: "Penyusunan Data Gantung Padukuhan Gebang",
      text: "Menyusun dan mengelola data warga Padukuhan Gebang secara sistematis untuk mempermudah administrasi.",
      imgSrcs: ["/Foto-Proker/padukuhan/1.jpg"],
      imgAlt: "Penyusunan Data Gantung Padukuhan Gebang",
      reverse: false,
    },
    {
      number: "02",
      subtitle: "Bidang Pendidikan Bahasa Inggris",
      title: "Bimbel Edukasi dan Pelatihan Bahasa Inggris Dasar",
      text: "Menyelenggarakan bimbingan belajar dan pelatihan bahasa Inggris dasar bagi masyarakat.",
      imgSrcs: ["/Foto-Proker/bing/4.jpg" , "/Foto-Proker/bing/3.jpg"],
      imgAlt: "Bimbel Edukasi Bahasa Inggris Dasar",
      reverse: true,
    },
    {
      number: "03",
      subtitle: "Bidang UMKM",
      title: "Pemberdayaan UMKM Melalui Digitalisasi Usaha",
      text: "Mengoptimalkan usaha UMKM dengan digitalisasi e-commerce dan penggunaan media sosial.",
      imgSrcs: ["/Foto-Proker/umkm-kewir/1.jpg" , "/Foto-Proker/umkm-kewir/3.jpg", "/Foto-Proker/umkm-kewir/4.jpg"],
      imgAlt: "Pemberdayaan UMKM Digital",
      reverse: false,
    },
    {
      number: "04",
      subtitle: "Bidang Teknologi Tepat Guna",
      title: "Pelatihan Pembuatan Pupuk Organik (POC)",
      text: "Memberikan pelatihan teknis pembuatan pupuk organik untuk meningkatkan produktivitas pertanian.",
      imgSrcs: ["/Foto-Proker/POC/1.jpg", "/Foto-Proker/POC/2.jpg", "/Foto-Proker/POC/3.jpg", "/Foto-Proker/POC/4.jpg", "/Foto-Proker/POC/6.jpg","/Foto-Proker/POC/7.jpg"],
      imgAlt: "Pelatihan Pupuk Organik",
      reverse: true,
    },
    {
      number: "05",
      subtitle: "Bidang Kesehatan",
      title: "Senam Sehat Bersama Masyarakat",
      text: "Menyelenggarakan olahraga senam terpadu untuk meningkatkan kesehatan warga.",
      imgSrcs: ["/Foto-Proker/senam/1.jpg", "/Foto-Proker/senam/2.jpg", "/Foto-Proker/senam/3.jpg"],
      imgAlt: "Senam Sehat Bersama Masyarakat",
      reverse: false,
    },
    {
      number: "06",
      subtitle: "Bidang Kewirausahaan",
      title: "Pelatihan Business Model Canvas (BMC)",
      text: "Melatih masyarakat membuat Business Model Canvas sebagai dasar pengembangan usaha.",
      imgSrcs: [ "/Foto-Proker/umkm-kewir/2.jpg" ,"/Foto-Proker/umkm-kewir/4.jpg", "/Foto-Proker/umkm-kewir/6.jpg", "/Foto-Proker/umkm-kewir/7.jpg"],
      imgAlt: "Pelatihan BMC",
      reverse: true,
    },
  ];

  // 8 Program Kerja Individu
  const individuPrograms = [
    {
      number: "08",
      subtitle: "Hukum",
      title: "Edukasi Bahaya Judi Online",
      text: "Memberikan edukasi mengenai bahaya judi online dan cara pencegahannya.",
      imgSrcs: ["/Foto-Proker/judol/2.jpg","/Foto-Proker/judol/1.jpg" , "/Foto-Proker/judol/3.jpg","/Foto-Proker/judol/4.jpg"],
      imgAlt: "Edukasi Bahaya Judi Online",
      reverse: false,
    },
    {
      number: "09",
      subtitle: "Akuntansi",
      title: "Digitalisasi Pembukuan UMKM",
      text: "Mendigitalisasi pembukuan dan melatih pelaporan keuangan untuk UMKM.",
      imgSrcs: ["/Foto-Proker/pembukuan/1.jpg", "/Foto-Proker/pembukuan/2.jpg", "/Foto-Proker/pembukuan/3.jpg", "/Foto-Proker/pembukuan/4.jpg"],
      imgAlt: "Digitalisasi Pembukuan UMKM",
      reverse: true,
    },
    {
      number: "10",
      subtitle: "Informatika",
      title: "Pembuatan Website Profil Desa Gebang",
      text: "Membangun dan meluncurkan website resmi untuk profil Desa Gebang.",
      imgSrcs: ["/Foto-Proker/Web/1.jpg"],
      imgAlt: "Website Profil Desa Gebang",
      reverse: false,
    },
    {
      number: "11",
      subtitle: "Informatika",
      title: "Edukasi Dasar Kecerdasan Buatan",
      text: "Mengenalkan konsep dasar kecerdasan buatan melalui workshop interaktif.",
      imgSrcs: ["/Foto-Proker/AI/1.jpg", "/Foto-Proker/AI/2.jpg", "/Foto-Proker/AI/3.jpg"],
      imgAlt: "Edukasi AI Dasar",
      reverse: true,
    },
    {
      number: "12",
      subtitle: "Manajemen",
      title: "Desain Logo dan Stiker UMKM",
      text: "Membuat desain logo dan stiker untuk memperkuat branding UMKM.",
      imgSrcs: ["/Foto-Proker/logo/1.jpg", "/Foto-Proker/logo/2.jpg", "/Foto-Proker/logo/3.jpg"],
      imgAlt: "Logo Stiker UMKM",
      reverse: false,
    },
    {
      number: "13",
      subtitle: "Manajemen",
      title: "Workshop Pengelolaan Uang Saku",
      text: "Menyelenggarakan workshop pengelolaan uang saku untuk anak-anak.",
      imgSrcs: ["/Foto-Proker/nabung/1.jpg", "/Foto-Proker/nabung/2.jpg", "/Foto-Proker/nabung/3.jpg", "/Foto-Proker/nabung/4.jpg", "/Foto-Proker/nabung/5.jpg"],
      imgAlt: "Workshop Uang Saku Pintar",
      reverse: true,
    },
    {
      number: "14",
      subtitle: "Ilmu Komunikasi",
      title: "Pelatihan Menulis Kreatif & Public Speaking",
      text: "Memberikan pelatihan menulis kreatif dan public speaking untuk peningkatan kemampuan komunikasi.",
      imgSrcs: ["/Foto-Proker/pubski/1.jpg", "/Foto-Proker/pubski/2.jpg"],
      imgAlt: "Menulis Kreatif & Public Speaking",
      reverse: false,
    },
    {
      number: "15",
      subtitle: "Sosiologi",
      title: "Komunitas Literasi & Pojok Baca",
      text: "Membentuk komunitas literasi dan menyediakan pojok baca untuk warga.",
      imgSrcs: ["/Foto-Proker/baca/1.jpg", "/Foto-Proker/baca/2.jpg", "/Foto-Proker/baca/3.jpg", "/Foto-Proker/baca/4.jpg"],
      imgAlt: "Komunitas Literasi",
      reverse: true,
    },
        {
      number: "16",
      subtitle: "Sistem Informasi",
      title: "Pelatihan Penggunaan formulir digital",
      text: "Pelatihan penggunaan formulir digital bersasis google form yang akan digunakan untuk keperluan survey dan pendataan desa oleh RT/RW dan Dukuh",
      imgSrcs: ["/Foto-Proker/SI/1.jpg", "/Foto-Proker/SI/2.jpg", "/Foto-Proker/SI/3.jpg", "/Foto-Proker/SI/4.jpg", "/Foto-Proker/SI/5.jpg", "/Foto-Proker/SI/6.jpg",],
      imgAlt: "Komunitas Literasi",
      reverse: false,
    },
  ];

  return (
    <>
      {/* ————— PROGRAM KERJA KELOMPOK ————— */}
      <section id="kelompok" className="px-6 py-20 bg-[#0B1D26] text-white">
        <div className="container mx-auto space-y-32">
          <div className="space-y-6 text-center">
            <h2
              className="text-6xl font-serif font-bold mb-0 text-[#FBD784] inline-block border-b-4 border-[#FBD784] pb-2"
              data-aos="zoom-in"
            >
              Program Kerja Kelompok
            </h2>
          </div>
          <div className="space-y-32">
            {kelompokPrograms.map((c, i) => (
              <KknCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ————— PROGRAM KERJA INDIVIDU ————— */}
      <section id="individu" className="px-6 py-20 bg-[#FBD784]/5">
        <div className="container mx-auto space-y-32">
          <div className="space-y-6 text-center">
            <h2
              className="text-6xl font-serif font-bold mb-0 text-[#FBD784] inline-block border-b-4 border-[#FBD784] pb-2"
              data-aos="zoom-in"
            >
              Program Kerja Individu
            </h2>
          </div>
          <div className="space-y-32">
            {individuPrograms.map((c, i) => (
              <KknCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#0B1D26] text-center space-y-1">
        <p className="text-sm text-white/70">
          © 2025 Padukuhan Gebang. All rights reserved.
        </p>
        <p className="text-xs text-white/50">Developed by Vince Carter</p>
      </footer>
    </>
  );
}
