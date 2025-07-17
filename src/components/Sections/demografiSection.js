"use client";

import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DemografiSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);

    AOS.init({
      once: false,    
      mirror: true,   
      duration: 600,  
    });
    AOS.refresh();

    return () => obs.disconnect();
  }, []);

  const genderData = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [172, 163],
        backgroundColor: ["#FBD784", "#6B7280"],
        hoverOffset: 8,
      },
    ],
  };

  return (
    <section
      ref={ref}
      id="demografi"
      className="relative min-h-screen px-8 md:px-20 lg:px-32 py-20 bg-[#0B1D26] text-white overflow-hidden"
    >
     <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #0B1D26 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 40%)",
          height: "40%",
        }}
      />
      {/* Title */}
      <h2
        className="text-6xl font-serif font-bold mb-12 text-[#FBD784] text-left"
        data-aos="zoom-in"
        data-aos-once="false"
      >
        Demografi Padukuhan Gebang
      </h2>

      {/* Counters + Chart */}
      <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Stats: spans 2 cols */}
        <div className="md:col-span-2 space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-l-4 border-[#FBD784]
                     hover:bg-white/20 hover:scale-[1.02] transition transform-gpu duration-300"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h3 className="text-xl font-serif font-semibold mb-2">Total Penduduk</h3>
              <p className="text-4xl font-bold text-[#FBD784]">
                {inView ? <CountUp end={335} duration={2} separator="." /> : "0"}
              </p>
            </div>
            <div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-l-4 border-[#FBD784]
                     hover:bg-white/20 hover:scale-[1.02] transition transform-gpu duration-300"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h3 className="text-xl font-serif font-semibold mb-2">Kepala Keluarga</h3>
              <p className="text-4xl font-bold text-[#FBD784]">
                {inView ? <CountUp end={101} duration={2} separator="." /> : "0"}
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
            <div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-l-4 border-[#FBD784]
                     hover:bg-white/20 hover:scale-[1.02] transition transform-gpu duration-300"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h3 className="text-xl font-serif font-semibold mb-2">Total Luas Wilayah</h3>
              <p className="text-4xl font-bold text-[#FBD784]">
                {inView ? <CountUp end={11.25} duration={2} decimals={1} /> : "0"} km
                <sup>2</sup>
              </p>
            </div>
            <div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-l-4 border-[#FBD784]
                     hover:bg-white/20 hover:scale-[1.02] transition transform-gpu duration-300"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h3 className="text-xl font-serif font-semibold mb-2">
                Total Luas Padukuhan
              </h3>
              <p className="text-4xl font-bold text-[#FBD784]">
                {inView ? <CountUp end={2} duration={2} decimals={1} /> : "0"} km
                <sup>2</sup>
              </p>
            </div>
          </div>
        </div>

        {/* Gender composition chart */}
        <div
          className="
            bg-white/10 p-4 rounded-lg backdrop-blur-sm 
            w-full h-73 flex flex-col border-l-4 border-[#FBD784]"
          data-aos="fade-left"
          data-aos-once="false"
        >
          <h3 className="text-xl font-serif font-semibold mb-1 text-center">
            Komposisi Penduduk
          </h3>
          {inView && (
            <div className="flex-1 relative">
              <Doughnut
                data={genderData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: { color: "#fff" },
                    },
                  },
                }}
                width={150}
                height={150}
              />
            </div>
          )}
        </div>
      </div>

      {/* Large map */}
      <div className="mt-12 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.510891326783!2d110.562967490382!3d-8.075408767810593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb05543d9ddcd%3A0x7974519cf48a4968!2sGebang%2C%20Kemiri%2C%20Tanjungsari%2C%20Gunungkidul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1750329209413!5m2!1sen!2sid"
          className="w-full max-w-3xl h-[500px] rounded-lg shadow-2xl transition-shadow hover:shadow-none border-5 border-[#FBD784]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta Desa Gebang"
        />
      </div>
    </section>
  );
}
