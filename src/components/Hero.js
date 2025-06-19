export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >

      <div className="absolute inset-0 bg-black/50" />

      {/* vertical social links */}
      <div className="absolute left-6 top-1/2 flex flex-col space-y-4 text-white transform -translate-y-1/2">
        <span className="text-xs uppercase tracking-widest rotate-[-90deg] origin-left">
        </span>
        <a href="#" className="hover:text-gray-300">Instagram</a>
        <a href="#" className="hover:text-gray-300">Tiktok</a>
      </div>

      {/* vertical scroll nav */}
      <div className="absolute right-6 top-1/2 flex flex-col items-center text-white transform -translate-y-1/2 space-y-4">
        <span className="text-xs uppercase tracking-widest">Start</span>
        <div className="space-y-2 text-sm">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>

      {/* main content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl mx-auto px-6 sm:px-12">
        <div className="w-16 h-[2px] bg-white mb-2" />
        <p className="text-sm uppercase text-white/75 tracking-wider mb-4">
          Profil Padukuhan Gebang
        </p>
        <h1 className="text-4xl sm:text-6xl font-serif text-white leading-tight">
          VANESHA CHERRYN AUDREYLIA
        </h1>
        <div className="mt-8 text-white flex items-center space-x-2 text-sm cursor-pointer hover:text-gray-300">
          <span>scroll down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
