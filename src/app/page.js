  import Hero from "../components/Hero"
  import DemografiSection from '../components/Sections/demografiSection';
  import UMKMSection from '../components/Sections/UMKM/umkmSection';
  import PotensiSection from "../components/Sections/PotensiSection";
  import ScrollNav from "../components/ScrollNav";

  export default function Home() {
    return (
      <>
      <ScrollNav />
        <Hero />
        <DemografiSection />
        <UMKMSection />
        <PotensiSection />

        <footer className="py-4 bg-[#0B1D26] text-center space-y-1">
          <p className="text-sm text-white/70">
            © 2025 Padukuhan Gebang. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Developed by Vince Carter (Last updated July 2025)
          </p>
        </footer>
      </>
    )
  }
