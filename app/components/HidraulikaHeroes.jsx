"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SzolgaltatasInner from "./UI/SzolgaltatasInner";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Par from "./UI/Typo/Par";
import Label from "./UI/Typo/Label";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TbPigMoney,
  TbClockHour4,
  TbMoodSmileBeam,
  TbLock,
} from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import ParBig from "./UI/Typo/ParBig";
import MainButtonWhite from "./UI/Buttons/MainButtonWhite";
import ButtonText from "./UI/Typo/ButtonText";
import YellowCTA from "./UI/Buttons/YellowCTA";
import WhiteCTA from "./UI/Buttons/BlackCTA";

export default function HidraulikaHeroes() {
  return (
    <>
      <section className="bg-[--yellow] mx-2 rounded-3xl" id="hidraulikaheroes">
        <section className="relative flex flex-col gap-4 px-4 py-20 h-[70vh] items-center justify-center overflow-hidden">
          {/* Content */}
          <div className="relative flex flex-col gap-4 items-center justify-center z-10">
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[--grey] z-20"></div>
            <motion.img
              src="/cloud1.webp"
              alt="Cloud"
              className="absolute top-1/4 left-1/4 w-96 h-auto opacity-80 z-10"
              animate={{ y: ["-20px", "0px", "-20px"] }} // Start at the viewport's left edge
              transition={{
                duration: 2, // Time for a single loop
                ease: "easeInOut", // Smooth linear motion
                repeat: Infinity, // Infinite looping
                repeatType: "loop", // Restarts the animation
              }}
            />
            <motion.img
              src="/cloud2.webp"
              alt="Cloud"
              className="absolute top-1/5 right-1/4 w-60 h-auto blur-sm opacity-75"
              animate={{ y: ["-10px", "0px", "-10px"] }} // Start at the viewport's left edge
              transition={{
                duration: 1.4, // Time for a single loop
                ease: "easeInOut", // Smooth linear motion
                repeat: Infinity, // Infinite looping
                repeatType: "loop", // Restarts the animation
              }}
            />
            <motion.img
              src="/hero-stand.svg"
              alt="Hero standing"
              className="w-auto lg:h-80 h-60 z-10"
              initial={{
                y: "50vh",
                opacity: 0,
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 50%, rgba(0, 0, 0, 0)",
                maskImage:
                  "linear-gradient(to bottom, black 50%, rgba(0, 0, 0, 0))",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }} // Start at the viewport's left edge
              whileInView={{
                y: "20vh",
                opacity: 1,
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 50%, rgba(0, 0, 0, 0)",
                maskImage:
                  "linear-gradient(to bottom, black 50%, rgba(0, 0, 0, 0))",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }} // Fly completely off the right side
              animate
              transition={{ duration: 0.2, ease: "easeInOut", delay: 2 }} // Smooth animation
              viewport={{ once: true, amount: 0 }} // Trigger when 10% of the section is visible
            />
            <H1 classname={"mt-4 z-30"}>Hidraulika Heroes</H1>
            <H3 classname={"text-[--black] text-center z-30"}>
              Ha elromlik - ne mozdulj! Már repülünk is!
            </H3>
            <Par classname={"lg:w-1/2 text-center z-30"}>
              Megmentünk az idegtépő helyzetektől! A tehergépjárművek,
              munkagépek meghibásodásakor nem kell hogy megakadjon a
              munkafolyamat - a problémás járművet vagy gépet nem kell szervizbe
              vinni, ugyanis mi a helyszínen megjavítjuk!
            </Par>
          </div>

          {/* Flying Image */}
          <motion.img
            src="/hero-fly.svg"
            alt="Hero flying"
            className="absolute top-1/4 left-0 w-72 h-auto mix-blend-multiply blur-sm"
            initial={{ x: 0, opacity: 0 }} // Start at the viewport's left edge
            whileInView={{ x: "300vw", opacity: 1 }} // Fly completely off the right side
            transition={{ duration: 2, ease: "easeOut", delay: 1 }} // Smooth animation
            viewport={{ once: true, amount: 0.4 }} // Trigger when 10% of the section is visible
          />
          <motion.img
            src="/hero-fly.svg"
            alt="Hero flying"
            className="absolute top-1/2 right-0 w-96 h-auto mix-blend-multiply"
            initial={{ x: "0vw", opacity: 0, scaleX: -1 }} // Start at the viewport's left edge
            whileInView={{ x: "-300vw", opacity: 1, scaleX: -1 }} // Fly completely off the right side
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }} // Smooth animation
            viewport={{ once: true, amount: 0 }} // Trigger when 10% of the section is visible
          />
        </section>
        <section className="flex flex-col gap-4 py-2 px-4 container m-auto">
          <div className="relative flex lg:flex-row flex-col items-center gap-4 m-auto">
            <div className="flex lg:flex-row flex-col gap-2">
              <div className="flex flex-col lg:gap-16 gap-8 bg-[--white] lg:p-8 p-2 rounded-3xl">
                <H2 classname={"min-w-fit"}>Mit nyersz vele?</H2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 z-10 ">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <TbClockHour4 className="min-w-12 h-auto bg-[--yellow] rounded-md p-2" />
                      <H4 classname={"flex flex-nowrap gap-2"}>Időt</H4>
                    </div>
                    <Par classname={"ml-16"}>
                      A lehető leggyorsabb megoldás, nem kell hetekig várnod
                    </Par>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <TbPigMoney className="min-w-12 h-auto bg-[--yellow] rounded-md p-2" />
                      <H4 classname={"flex flex-nowrap gap-2"}>Pénzt</H4>
                    </div>
                    <Par classname={"ml-16"}>
                      Megkímélünk a meghibásodásból fakadó bevételkieséstől
                    </Par>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <LuFuel className="min-w-12 h-auto bg-[--yellow] rounded-md p-2" />
                      <H4 classname={"flex flex-nowrap gap-2"}>Üzemanyagot</H4>
                    </div>
                    <Par classname={"ml-16"}>
                      Nem kell szervizbe utaztatni a járművet
                    </Par>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <TbMoodSmileBeam className="min-w-12 h-auto bg-[--yellow] rounded-md p-2" />
                      <H4 classname={"flex flex-nowrap gap-2"}>Nyugalmat</H4>
                    </div>
                    <Par classname={"ml-16"}>
                      Megkíméljük idegrendszered, hiszen nem kell tovább sem
                      szervizt, sem más megoldást keresned
                    </Par>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <TbLock className="min-w-12 h-auto bg-[--yellow] rounded-md p-2" />
                      <H4 classname={"flex flex-nowrap gap-2"}>Biztonságot</H4>
                    </div>
                    <Par classname={"ml-16"}>
                      Céged gépparkjának és járműparkjának teljes körű,
                      szakszerű szervizelése, garantáltan minőségi javítása
                    </Par>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center gap-2 p-4 bg-[--green] bg-opacity-25 rounded-3xl z-10">
                <Image
                  src={"/hero-stand-2.svg"}
                  width={300}
                  height={200}
                  alt="Hős elvégezt mindent"
                  className="absolute lg:block hidden lg:h-60 w-auto"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle, var(--white) 2px, transparent 1px)`,
                    backgroundSize: "15px 15px",
                    mixBlendMode: "lighten",
                    opacity: 0.2,
                  }}
                ></div>
                <ParBig classname={"text-center text-white z-10"}>
                  Szolgáltatásaink közül{" "}
                  <span className="p-1 bg-[--yellow] rounded-md shadow-md text-black">
                    MINDEN
                  </span>{" "}
                  javítást el tudunk végezni helyszíni kiszállással
                </ParBig>
                <Par classname={"text-center text-[--white] z-10"}>
                  (kivéve a gumijavítást)
                </Par>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 px-4 container m-auto">
          <div className="flex flex-col items-center gap-4 m-auto">
            <div className="relative flex lg:flex-row flex-col items-center lg:gap-16 gap-8 p-8 rounded-3xl bg-white border bordeer-white bg-opacity-0">
              <div className="relative lg:w-full w-full lg:h-[300px] h-[150px]">
                <Image
                  src={"/javitas.webp"}
                  fill
                  alt="Munkagép javítás"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>
              <div className="flex flex-col gap-8">
                <H2 classname={'text-white'}>Helyszíni szervizelés</H2>
                <ParBig classname={"z-10"}>
                  Hidraulika hőseink munkagépek, tehergépkocsik teljes körű
                  javítását és szervizelését a helyszínen elvégzik - Somogy,
                  Tolna, Baranya és Zala megyében!
                </ParBig>
              </div>
            </div>
            <div className="relative flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 p-8 rounded-lg">
              <div className="relative lg:w-full w-full lg:h-[300px] h-[150px]">
                <Image
                  src={"/roppanto.webp"}
                  fill
                  alt="Mobil roppantó"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>
              <div className="flex flex-col gap-8">
                <H2 classname={'text-white'}>Innovációs szerszámok</H2>
                <ParBig classname={"z-10"}>
                  Innovációs mobil roppantóval rendelkezünk, így a hidraulikatömlő
                  roppantást a helyszínen el tudjuk végezni!
                </ParBig>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[--green] gap-4 py-20 rounded-lg">
            <H3 classname={"w-fit self-center"}>Hívj hőst!</H3>
            <div className="flex lg:flex-row flex-col gap-4">
              <YellowCTA />
              <WhiteCTA />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
