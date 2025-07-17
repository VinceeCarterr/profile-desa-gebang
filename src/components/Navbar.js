"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const path = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(entry.intersectionRatio < 0.5),
      { root: null, threshold: 0.5 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Demografi", href: "/#demografi" },
    { label: "UMKM",      href: "/#umkm"      },
    { label: "Potensi",   href: "/#potensi"   },
    { label: "KKN",       href: "/kkn"       },
  ];

  const baseLinkClasses = `uppercase text-sm tracking-wide transition-colors duration-300 hover:text-[#FBD784]`;
  const activeLinkClasses = "text-[#FBD784]";
  const defaultLinkColor = isSticky || path === "/kkn"
    ? "text-[#0B1D26] font-bold"
    : "text-white";

  return (
    <nav
      className={`
        z-50 w-full px-8 py-4 flex items-center justify-between transition-all duration-300
        ${isSticky || path === "/kkn"
          ? "fixed top-0 bg-[#F5F5DC]/75 backdrop-blur-md shadow-md"
          : "absolute inset-x-0 top-0 bg-transparent"
        }
      `}
    >
      {/* Brand */}
      <div
        className={`text-xl font-serif transition-colors duration-300 ${
          isSticky ? "text-[#0B1D26] font-bold" : "text-white"
        }`}
      >

      </div>

      {/* Hamburger toggle - only on mobile */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ label, href }) => {
          const isActive = href === "/kkn" ? path === "/kkn" : false;
          return (
            <li key={href}>
              <a
                href={href}
                className={`
                  ${baseLinkClasses}
                  ${defaultLinkColor}
                  ${isActive ? activeLinkClasses : ""}
                `}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu */}
      {/* Mobile menu */}
{menuOpen && (
  <ul className="flex flex-col md:hidden bg-[#F5F5DC]/95 backdrop-blur p-4 absolute top-full inset-x-0 z-40 space-y-4">
    {links.map(({ label, href }) => {
      const isActive = href === "/kkn" && path === "/kkn";
      return (
        <li key={href}>
          <a
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`
              block
              uppercase
              text-sm
              tracking-wide
              font-bold       /* make it bold */
              ${isActive
                ? "text-[#FBD784]"  /* active link in gold */
                : "text-black"      /* all others in black */
              }
              hover:text-[#FBD784]
            `}
          >
            {label}
          </a>
        </li>
      );
    })}
  </ul>
)}

    </nav>
  );
}
