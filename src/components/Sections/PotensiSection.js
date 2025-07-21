"use client";

import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PotensiSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);

  // track lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // === define each item with an array of images ===
  const items = [
    {
      title: "Telaga Gadhel",
      description:
        "Telaga Gadel merupakan embung yang dibangun untuk menampung air hujan, menyediakan pasokan air bersih bagi warga dan irigasi sawah saat musim kemarau panjang . Tidak hanya itu, telaga ini juga berpotensi sebagai destinasi ekowisata dan sumber pendapatan lokal melalui kegiatan pemancingan ikan air tawar . Berada di kawasan karst Gunung Sewu, Telaga Gadel memanfaatkan cekungan alami untuk menyimpan air yang sulit tertahan di permukaan kapur, sekaligus menawarkan lanskap unik yang menarik bagi pengunjung .",
      images: [
        "hero.jpg",
        "/Potensi/Telaga/Telaga1.jpg",
        "hero.jpg",
      ],
    },
    {
      title: "Gunung Puncis",
      description:
        "Gunung Puncis, yang terletak pada koordinat –8.0759593, 110.5699367, merupakan bagian dari jajaran Bukit Karst Pegunungan Sewu dengan lanskap kaya akan bukit kerucut, lembah karst, dan potensi gua horizontal menciptakan ekosistem unik yang menarik untuk penelitian geologi dan konservasi alam Wikipedia. Kondisi tersebut membuka peluang pengembangan ekowisata petualangan seperti jalur trekking dan titik pandang panorama karst, sekaligus sebagai sarana edukasi geologi bagi pengunjung Bappeda Gunungkidul. Bila dikelola bersama masyarakat lokal dengan program homestay dan pemandu desa Gunung Puncis berpotensi menumbuhkan ekonomi berbasis pariwisata alam berkelanjutan sambil melestarikan warisan geologi Gunungkidul",
      images: [
        "/Potensi/Gunung/Gunung-Puncis.jpg",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ once: false, mirror: true, duration: 600 });
    AOS.refresh();

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + items.length) % items.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % items.length);

  // lightbox controls
  const prevLight = () =>
    setLightboxIndex((i) => (i - 1 + items[current].images.length) % items[current].images.length);
  const nextLight = () =>
    setLightboxIndex((i) => (i + 1) % items[current].images.length);

  return (
    <section
      ref={sectionRef}
      id="potensi"
      className="relative min-h-screen px-8 md:px-20 lg:px-32 py-20 bg-[#0B1D26] text-white overflow-hidden"
    >
      {/* fade gradient */}
      <div
        className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #0B1D26 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
        }}
      />

      {/* section heading */}
      <h2
        className="text-center text-6xl font-serif font-bold mb-12 text-[#FBD784]"
        data-aos="zoom-in"
      >
        Potensi Padukuhan Gebang
      </h2>

      {/* main carousel */}
      <div
        className="relative w-full max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {inView && (
          <img
            src={items[current].images[0]}
            alt={items[current].title}
            className="w-full h-96 object-cover rounded-lg shadow-2xl cursor-pointer"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
          />
        )}

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* slide title & description */}
      <div
        className="mt-8 max-w-3xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-3xl font-serif font-semibold mb-4">
          {items[current].title}
        </h3>
        <p className="text-lg leading-relaxed">
          {items[current].description}
        </p>
      </div>

      {/* full-screen lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl p-2 hover:text-yellow-300"
            aria-label="Close"
          >
            ✕
          </button>

          {/* prev */}
          <button
            onClick={prevLight}
            className="absolute left-5 text-white text-4xl p-2 hover:text-yellow-300"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* image */}
          <img
            src={items[current].images[lightboxIndex]}
            alt={`${items[current].title} ${lightboxIndex + 1}`}
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />

          {/* next */}
          <button
            onClick={nextLight}
            className="absolute right-5 text-white text-4xl p-2 hover:text-yellow-300"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
