'use client';

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles
import Image from "next/image";
import H1 from "./UI/Typo/H1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Munkatarsak() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images
  const images = [
    "/galeria2.webp",
    "/galeria1.webp",
    "/galeria3.webp",
    "/galeria4.webp",
    "/galeria5.webp",
    "/galeria6.webp",
    "/galeria7.webp",
    "/galeria8.webp",
    "/galeria9.webp",
    "/galeria10.webp",
    "/galeria11.webp",
    "/galeria12.webp",
    "/galeria13.webp",
    "/galeria14.webp",
    "/galeria15.webp",
  ];

  // Open Lightbox when clicking an image
  const handleTileClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-gradient-to-b from-[--white] to-[--white] lg:pt-16 pt-8" id="galeria">
      <div className="flex flex-col gap-4 p-2">
        <H1>Galéria</H1>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={8}
          slidesPerView={1.25}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          className="w-full mx-auto rounded-3xl"
          breakpoints={{
            640: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {/* Click to open Lightbox */}
              <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center cursor-pointer"
                   onClick={() => handleTileClick(index)}>
                <Image
                  src={image}
                  alt={`Galéria kép ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      )}
    </section>
  );
}
