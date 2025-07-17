"use client";

import { useState, useEffect, useRef } from "react";

const sectionIds = ["hero", "demografi", "umkm", "potensi"];

export default function ScrollNav() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "-50% 0% -50% 0%", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const [stackHeight, setStackHeight] = useState(0);
  useEffect(() => {
    if (containerRef.current) {
      const measured = containerRef.current.getBoundingClientRect().height;
      const EXTRA = 150;
      setStackHeight(measured + EXTRA);
    }
  }, []);

  return (
    <>
      {/* — static white track behind the buttons — */}
      <div
        className="fixed right-8 top-1/2 z-40 pointer-events-none"
        style={{
          transform: "translateY(-50%)",
          height: stackHeight,
          width: 1,
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      />

      {/* — clickable steps — */}
      <div
        ref={containerRef}
        className="fixed right-8 top-1/2 z-50 
                  flex flex-col items-center justify-between 
                  transform -translate-y-1/2 pointer-events-auto"
       style={{ height: stackHeight }}
      >
        {sectionIds.map((id, idx) => {
          const boxClasses = "w-20 pr-3";

          return (
            <button
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`
                relative
                ${boxClasses}
                text-right
                text-xs font-medium
                transition-colors
              `}
              style={{
                color:
                  active === idx
                    ? "#FBD784"
                    : "rgba(255,255,255,0.6)",
              }}
            >
              {/* gold marker on the right edge */}
              {active === idx && (
                <span
                  className="absolute top-0 right-0 block"
                  style={{
                    width: "2px",
                    height: "100%",
                    backgroundColor: "#FBD784",
                  }}
                />
              )}
              {/* label */}
              {idx === 0
                ? "Start"
                : String(idx).padStart(2, "0")}
            </button>
          );
        })}
      </div>
    </>
  );
}
