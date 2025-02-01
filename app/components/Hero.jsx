import React from "react";
import H1 from "./UI/Typo/H1";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Image from "next/image";
import RotatingGear from "./UI/RotatingGear";
import { TbPhone } from "react-icons/tb";
import YellowCTA from "./UI/Buttons/YellowCTA";
import BlackCTA from "./UI/Buttons/BlackCTA";
import HidraulikaHeroesCTA from "./UI/HidraulikaHeroesCTA";

export default function Hero() {
  return (
    <section className="flex flex-col bg-[--white]">
      <div className="relative flex flex-nowrap gap-2 m-2 overflow-hidden">
        <div className="absolute right-4 bottom-4 w-[300px] h-auto">
          <HidraulikaHeroesCTA />
        </div>
        <div className="relative flex flex-col justify-center gap-4 lg:h-[80vh] h-[80vh] px-4 bg-[--lightgrey] lg:rounded-s-3xl rounded-3xl lg:w-1/2">
          <H1 classname={"z-10"}>
            Gépjárművek, munkagépek szervizelése helyszínen
          </H1>
          <H3 classname={"text-left z-10 text-[--greytext]"}>
            Elromlott? Dőlj hátra - házhoz megyünk, megjavítjuk!
          </H3>
          <div className="flex flex-col lg:flex-row gap-2">
            <YellowCTA />
            {<BlackCTA />}
          </div>

          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle, var(--grey) 2px, transparent 1px)`,
              backgroundSize: "15px 15px",
              mixBlendMode: "darken",
              opacity: 0.7,
            }}
          ></div>
          <div className="absolute lg:-left-1/2 -left-2/3 lg:-top-1/2 -top-1/4 lg:w-full w-[150%] lg:h-[50vw]">
            <RotatingGear />
          </div>
        </div>

        {/*<Image
          src="/hero-mask.webp"
          alt="hero"
          width={411}
          height={730}
          className="hidden lg:flex w-auto h-[80vh] ml-[-5px] z-10"
        />*/}

        <div className="relative hidden lg:block h-[80vh] w-1/2 right-0 rounded-3xl overflow-hidden">
          <Image src='/szereles.webp' fill style={{ objectFit: 'cover', objectPosition: '0% 50%' }} alt="Szerelés" />
        </div>
      </div>
    </section>
  );
}
