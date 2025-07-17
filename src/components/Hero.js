"use client";
import ScrollNav from "./ScrollNav";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full h-screen 
        bg-cover bg-center bg-fixed
        filter brightness-90 saturate-110
        "
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, #0B1D26 90%)",
        }}
      />

      {/* main content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl mx-auto px-6 sm:px-12">
        <div className="w-16 h-[2px] bg-white mb-2" />
        <p className="text-sm uppercase text-[#FBD784] tracking-wider mb-4 drop-shadow-md">
          Profil Padukuhan Gebang
        </p>
        <h1
          className="
    text-4xl sm:text-6xl font-serif leading-tight mb-6
    bg-clip-text text-transparent
    bg-gradient-to-r from-yellow-300 to-white
    drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]
    filter brightness-200
    animate-pulse
  "
        >
          SELAMAT DATANG DI PADUKUHAN GEBANG
        </h1>
      </div>
    </section>
  );
}
