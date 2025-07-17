"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function UmkmCard({
  number,
  subtitle,
  title,
  text,
  imgSrcs = [],
  imgAlt = "",
  reverse = false,
  address = "",
  price = "",
  hours = "",
}) {
function Slide({ src, alt }) {
  return (
    <div
      className="
        relative
        w-full max-w-[700px]   /* fixed max width */
        h-[400px]              /* fixed height */
        overflow-hidden        /* clip anything outside */
        rounded-lg
        mx-auto
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'none',        
          objectPosition: 'center'  
        }}
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

          {/* additional details */}
          <div className="space-y-2 text-sm text-gray-300">
            {address && (
              <p>
                <span className="font-semibold">Alamat:</span> {address}
              </p>
            )}
            {price && (
              <p>
                <span className="font-semibold">Harga:</span> {price}
              </p>
            )}
            {hours && (
              <p>
                <span className="font-semibold">Jam Operasional:</span> {hours}
              </p>
            )}
          </div>
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
                <Slide src={src} alt={imgAlt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
