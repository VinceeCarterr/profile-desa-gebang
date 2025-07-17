// src/components/AOSProvider.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      once: false,    // ← allow repeat animations
      mirror: false,  // ← optional: animate on scroll-up too
      duration: 600,
    });
  }, []);

  return <>{children}</>;
}
