import React from "react";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Image from "next/image";
import RotatingGear from "./UI/RotatingGear";
import { TbPhone, TbMap2, TbMap, TbMapPin } from "react-icons/tb";
import YellowCTA from "./UI/Buttons/YellowCTA";
import BlackCTA from "./UI/Buttons/BlackCTA";
import HidraulikaHeroesCTA from "./UI/HidraulikaHeroesCTA";
import MainButtonYellow from "./UI/Buttons/MainButtonYellow";
import Par from "./UI/Typo/Par";
import Label from "./UI/Typo/Label";


export default function Hero() {
  return (
    <section className="flex flex-col bg-[--white]" id="home">
      <div className="relative flex flex-nowrap gap-2 m-2 overflow-hidden">
        <div className="relative flex flex-col justify-center gap-8 lg:h-[90vh] h-[90vh] px-4 pt-20 bg-[--lightgrey] lg:rounded-s-3xl rounded-3xl lg:w-2/3 w-full">
          <div className="flex flex-nowrap items-center gap-2 z-10 bg-white bg-opacity-25  pr-2 rounded-full w-fit shadow-md backdrop-blur-sm">
            <TbMapPin className="text-[--green] lg:min-w-8 min-w-6 lg:min-h-8 min-h-6 bg-white rounded-full p-1"/>
            <Label classname={'text-black'}><span className="font-black">Somogy, Tolna, Baranya, Zala</span> megyékben</Label>
          </div>
          <H1 className="">
            Elromlott? Dőlj hátra!<br></br> Házhoz megyünk, megjavítjuk.
          </H1>
          <H3 classname={"text-left z-10 text-[--greytext]"}>
            Gépjárművek, munkagépek szervizelése helyszínen
          </H3>
          
          <div className="flex flex-col lg:flex-row gap-2">
            <MainButtonYellow link={'#kapcsolat'} classname={'z-10 w-fit'}>
              Ajánlatkérés
            </MainButtonYellow>
          </div>

          <div
            className="absolute inset-4 z-0"
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
        <div className="relative hidden lg:block bg-gradient-to-br from-white to-[--yellow] h-[90vh] w-1/3 right-0 rounded-3xl">
          <Image src='/kamion.webp' fill style={{ objectFit: 'cover' }} alt="Szerelés" className="rounded-3xl" />
          <div className="absolute right-8 bottom-8 w-2/3 max-w-[350px] h-auto">
            <HidraulikaHeroesCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
