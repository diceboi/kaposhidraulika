'use client';

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles
import Image from "next/image";
import H1 from "./UI/Typo/H1";
import GaleriaTile from "./UI/GaleriaTile";

export default function Munkatarsak() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images
  const images = [
    "/galeria1.webp",
    "/galeria2.webp",
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

  const handleTileClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-gradient-to-b from-[--lightgrey] to-[--white] lg:pt-20 pt-8">
      <div className="flex flex-col gap-4 p-4">
        <H1>Galéria</H1>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 rounded-lg">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleTileClick(index)}>
              <GaleriaTile image={image} />
            </div>
          ))}
        </div>
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
