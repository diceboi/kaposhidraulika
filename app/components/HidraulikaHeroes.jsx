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
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TbPigMoney,
  TbClockHour4,
  TbMoodSmileBeam,
  TbLock,
  TbTool,
  TbBuildingStore,
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
      <section className="bg-[--white]" id="hidraulikaheroes">
        <div className="flex flex-col lg:pt-20 pt-8">
          <section className="relative flex flex-col gap-4 px-4 pb-16 items-center justify-center overflow-hidden bg-gradient-to-b from-[--white] to-[--yellow]">
            <H1 classname={"mt-4 z-30"}>Hidraulika Heroes</H1>
            <div className="container m-auto relative flex flex-col gap-8 items-center justify-center z-10">
              <div className="relative lg:w-1/2 w-full lg:h-[50vh] h-[40vh]">
                <motion.img
                  src="/cloud1.webp"
                  alt="Cloud"
                  className="absolute lg:top-0 top-24 lg:-left-20 -left-40 w-96 h-auto opacity-80 z-20"
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
                  className="absolute lg:top-0 lg:right-0 -top-20 -right-24 w-60 h-auto blur-sm opacity-75"
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
                  className="absolute top-1/2 lg:left-[calc(50%+20px)] left-[calc(50%+20px)] -translate-x-1/2 -translate-y-1/2 w-auto lg:h-80 h-60 z-10"
                />
              </div>

              <div className="flex flex-col gap-4 lg:w-1/2 w-full">
                <H2 classname={"z-30 text-center"}>
                  Ha elromlik - ne mozdulj! Már repülünk is!
                </H2>
                <Par classname={" z-30 text-center"}>
                  Megmentünk az idegtépő helyzetektől! A tehergépjárművek,
                  munkagépek meghibásodásakor nem kell hogy megakadjon a
                  munkafolyamat - a problémás járművet vagy gépet nem kell
                  szervizbe vinni, ugyanis mi a helyszínen megjavítjuk!
                </Par>
              </div>
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
          <section className="flex flex-col gap-4 bg-[--yellow] px-2">
            <div className="flex flex-col gap-8 container m-auto bg-[--yellowhover] rounded-3xl p-8">
              <div className="flex flex-col lg:gap-16 gap-8">
                <H2 classname={"min-w-fit"}>Mit nyersz vele?</H2>
                <div className="grid lg:grid-cols-5 grid-cols-1 items-start gap-8 z-10 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                      <TbClockHour4 className="min-w-10 h-auto bg-[--green] rounded-md p-2 text-white" />
                      <H3 classname={"flex flex-nowrap gap-2"}>Időt</H3>
                    </div>
                    <Par classname={""}>
                      A lehető leggyorsabb megoldás, nem kell hetekig várnod
                    </Par>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                      <TbPigMoney className="min-w-10 h-auto bg-[--green] rounded-md p-2 text-white" />
                      <H3 classname={"flex flex-nowrap gap-2"}>Pénzt</H3>
                    </div>
                    <Par classname={""}>
                      Megkímélünk a meghibásodásból fakadó bevételkieséstől
                    </Par>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                      <LuFuel className="min-w-10 h-auto bg-[--green] rounded-md p-2 text-white" />
                      <H3 classname={"flex flex-nowrap gap-2"}>Üzemanyagot</H3>
                    </div>
                    <Par classname={""}>
                      Nem kell szervizbe utaztatni a járművet
                    </Par>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                      <TbMoodSmileBeam className="min-w-10 h-auto bg-[--green] rounded-md p-2 text-white" />
                      <H3 classname={"flex flex-nowrap gap-2"}>Nyugalmat</H3>
                    </div>
                    <Par classname={""}>
                      Megkíméljük idegrendszered, hiszen nem kell tovább sem
                      szervizt, sem más megoldást keresned
                    </Par>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                      <TbLock className="min-w-10 h-auto bg-[--green] rounded-md p-2 text-white" />
                      <H3 classname={"flex flex-nowrap gap-2"}>Biztonságot</H3>
                    </div>
                    <Par classname={""}>
                      Céged gépparkjának és járműparkjának teljes körű,
                      szakszerű szervizelése, garantáltan minőségi javítása
                    </Par>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center gap-2 p-4 bg-[--green] bg-opacity-25 rounded-2xl z-10 shadow-md">
                {/*<Image
                  src={"/hero-stand-2.svg"}
                  width={300}
                  height={200}
                  alt="Hős elvégezt mindent"
                  className="absolute lg:block hidden lg:h-60 w-auto"
                />*/}
                <div
                  className="absolute inset-1"
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
          </section>
          <section className="flex flex-col gap-2 bg-gradient-to-b from-[--yellow] to-white pt-2 px-2">
            <div className="flex flex-col container m-auto items-center gap-2">
              <div className="relative flex lg:flex-row flex-col w-full items-center lg:gap-16 gap-8 p-8 rounded-3xl bg-opacity-100">
                <div className="relative lg:w-1/2 w-full lg:h-[300px] h-[150px]">
                  <Image
                    src={"/cegesauto.svg"}
                    fill
                    alt="Munkagép javítás"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="flex flex-col gap-8 lg:w-1/2 w-full">
                  <H2 classname={"text-[--black]"}>Helyszíni szervizelés</H2>
                  <ParBig classname={"z-10"}>
                    Hidraulika hőseink munkagépek, tehergépkocsik teljes körű
                    javítását és szervizelését a helyszínen elvégzik - Somogy,
                    Tolna, Baranya és Zala megyében!
                  </ParBig>
                </div>
              </div>
              <div className="relative flex lg:flex-row-reverse flex-col w-full items-center lg:gap-16 gap-8 p-8 rounded-3xl bg-opacity-0">
                <div className="relative lg:w-1/2 w-full lg:h-[300px] h-[150px]">
                  <Image
                    src={"/roppanto.webp"}
                    fill
                    alt="Mobil roppantó"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="flex flex-col gap-8 lg:w-1/2 w-full">
                  <H2 classname={"text-[--black]"}>Innovációs szerszámok</H2>
                  <ParBig classname={"z-10"}>
                    Innovációs mobil roppantóval rendelkezünk, így a
                    hidraulikatömlő roppantást a helyszínen el tudjuk végezni!
                  </ParBig>
                </div>
              </div>
            </div>

            <div className="flex flex-col container m-auto mb-2 lg:gap-16 gap-8 justify-center w-full bg-[--green] rounded-3xl lg:p-8 p-4 px-2 shadow-md">
              <H2 classname={"w-fit self-center"}>Hívj hőst!</H2>
              <div className="flex lg:flex-row flex-col lg:gap-16 gap-8 justify-center self-center">
                <div className="flex lg:flex-row flex-col lg:items-center gap-4">
                  <div className="flex flex-nowrap gap-2 items-center">
                    <TbTool className="text-4xl p-1 bg-[--yellow] rounded-full" />
                    <H3>Szerviz:</H3>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:gap-4 gap-2">
                    <Link href="tel:06 30 939 8591">
                      <ParBig classname={"underline"}>+36 30 939 8591</ParBig>
                    </Link>
                    <Link href="tel:06 30 302 0181">
                      <ParBig classname={"underline"}>+36 30 302 0181</ParBig>
                    </Link>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-center gap-4">
                  <div className="flex flex-nowrap gap-2 items-center">
                    <TbBuildingStore className="text-4xl p-1 bg-[--yellow] rounded-full" />
                    <H3 classname={"font-extrabold"}>Üzlet:</H3>
                  </div>
                  <Link href="tel:06 70 616 6005">
                    <ParBig classname={"underline"}>+36 70 616 6005</ParBig>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
