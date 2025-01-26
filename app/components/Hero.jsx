import React from "react";
import H1 from "./UI/Typo/H1";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Image from "next/image";
import RotatingGear from "./UI/RotatingGear";
import { TbPhone } from "react-icons/tb"
import YellowCTA from "./UI/Buttons/YellowCTA";
import BlackCTA from "./UI/Buttons/BlackCTA";

export default function Hero() {
  return (
    <section className="flex flex-col bg-[--grey]">
      <div className="relative flex flex-nowrap px-4 pt-4 pb-2 overflow-hidden">
        <div className="flex flex-col justify-center gap-4 lg:h-[80vh] h-[80vh] px-4 bg-[--lightgrey] lg:rounded-s-lg rounded-lg lg:w-1/2">
          <H1 classname={"z-10"}>
            Gépjárművek, munkagépek szervizelése helyszínen
          </H1>
          <H3 classname={"text-left z-10 text-[--white]"}>
            Elromlott? Dőlj hátra - házhoz megyünk, megjavítjuk!
          </H3>
          <div className="flex flex-col lg:flex-row gap-2">
            <YellowCTA />
            {<BlackCTA />}
          </div>
          <div className="absolute lg:-left-1/4 -left-1/2 lg:-bottom-0 -bottom-1/4 lg:w-1/2 w-full lg:h-[40vh] h-[60vh]">
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

        <div className="hidden lg:block absolute h-[80vh] w-[calc(50%-16px)] right-0 pr-4 py-[1px] rounded-s-lg -z-[0] mix-blend-luminosity">
          <div
            style={{ backgroundImage: `url("/szereles.webp")`, objectPosition: '0% 50%' }}
            className={`relative w-full h-full bg-cover bg-left bg-no-repeat overflow-hidden rounded-lg`}
          ></div>
        </div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, var(--grey) 2px, transparent 1px)`,
            backgroundSize: "15px 15px",
            mixBlendMode: "darken",
            opacity: 0.7,
          }}
        ></div>
      </div>
    </section>
  );
}
