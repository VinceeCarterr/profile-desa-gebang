"use client"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const path = usePathname()
  const links = [
    { label: "Potensi", href: "/potensi" },
    { label: "Demografi",  href: "/deomgrafi"  },
    { label: "KKN",      href: "/kkn"      },
  ]

  return (
    <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 py-6">
      <div className="text-white text-2xl font-serif">Gebang</div>
      <ul className="hidden md:flex space-x-8">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={
                `text-sm uppercase tracking-wider ${path === l.href
                  ? "text-white"
                  : "text-white/75 hover:text-white"}`
              }
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="/kontak" className="text-white/75 hover:text-white">
        {/* simple account icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.847.658 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </a>
    </nav>
  )
}
