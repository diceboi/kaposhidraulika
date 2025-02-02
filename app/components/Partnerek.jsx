'use client';

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles
import Image from "next/image";
import H1 from "./UI/Typo/H1";
import GaleriaTile from "./UI/GaleriaTile";

export default function Partnerek() {

  return (
    <section className=" bg-gradient-to-b from-[--white] to-[--grey] lg:pt-16 pt-8" id="partnerek">
      <div className="flex flex-col gap-4 px-2">
        <H1>Partnerek</H1>
        <div className="flex lg:flex-row flex-col gap-4 justify-evenly items-center bg-white lg:p-8 p-2 rounded-3xl shadow-md
        ">
            <div className="flex flex-col items-center justify-center relative w-[150px] h-[150px]">
                <Image src={'/exor_logo_png.png'} fill alt="Exor logo" style={{ objectFit: 'contain', objectPosition: 'center' }} />
            </div>
            <div className="relative w-[150px] h-[150px]">
                <Image src={'/KHGlogo.svg'} fill alt="Exor logo" style={{ objectFit: 'contain', objectPosition: 'center' }} />
            </div>
            <div className="relative w-[150px] h-[150px]">
                <Image src={'/Wolf_System_Logo.svg.png'} fill alt="Exor logo" style={{ objectFit: 'contain', objectPosition: 'center' }} />
            </div>
        </div>
      </div>
    </section>
  );
}
