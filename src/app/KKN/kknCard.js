"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function kknCard({
  number,
  subtitle,
  title,
  text,
  imgSrcs = [],
  imgAlt = "",
  reverse = false,
}) {
  function Slide({ src, alt }) {
  const [orient, setOrient] = useState("landscape");

  // only drives the height—not the width
  const boxHeight =
    orient === "landscape"
      ? "h-[400px] md:h-[300px]"
      : "h-[600px] md:h-[500px]";

  return (
    <div
      className={`relative w-[700px] ${boxHeight} overflow-hidden rounded-lg mx-auto`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          setOrient(
            naturalWidth >= naturalHeight ? "landscape" : "portrait"
          )
        }
      />
    </div>
  );
}

  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {!reverse && (
        <div data-aos="fade-right">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="rounded-lg"
          >
            {imgSrcs.map((src, idx) => (
              <SwiperSlide key={idx}>
                <Slide src={src} alt={imgAlt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* text block */}
      <div
        className={`relative ${reverse ? "order-2 md:order-1" : ""}`}
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <span className="absolute -top-12 left-0 text-[8rem] font-bold text-white/10 select-none pointer-events-none">
          {number}
        </span>

        <div className={`relative space-y-6 ${reverse ? "mr-8" : "ml-8"}`}>
          <div className="flex items-center space-x-2">
            <div className="h-[2px] w-12 bg-[#FBD784]" />
            <span className="uppercase text-xs tracking-wider text-[#FBD784]">
              {subtitle}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-serif font-semibold leading-snug">
            {title}
          </h3>

          <p className="text-base leading-relaxed text-gray-200">{text}</p>
        </div>
      </div>

      {/* if reversed, carousel on right */}
      {reverse && (
        <div className="order-1 md:order-2" data-aos="fade-left">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="rounded-lg"
          >
            {imgSrcs.map((src, idx) => (
              <SwiperSlide key={idx}>
                <Slide src={src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}