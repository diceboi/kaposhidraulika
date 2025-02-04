"use client";

import Image from "next/image";
import Par from "./Typo/Par";
import H3 from "./Typo/H3";
import H2 from "./Typo/H2";
import Label from "./Typo/Label";
import Link from "next/link";
import {
  TbArrowBigRightLines,
  TbAnchor,
  TbPhone,
  TbMail,
  TbUsersGroup,
  TbClock,
  TbPin,
  TbMapPin,
  TbBrandFacebookFilled,
  TbBrandFacebook,
} from "react-icons/tb";
import H4 from "./Typo/H4";
import ParBig from "./Typo/ParBig";

export default function Footer() {

  return (
      <section className="bg-[--grey] lg:pt-20 pt-20 px-2 pb-2">
        <div className="flex flex-col gap-4 lg:p-8 p-4 bg-[--black] rounded-3xl">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8">
            <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-8">
                    <Image
                        src="/grey-logo.svg"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                    <div className="flex flex-nowrap gap-2">
                        <Link href='https://www.facebook.com/profile.php?id=100063761670146' target="__blank"><TbBrandFacebookFilled className="text-[--grey] min-w-8 h-auto border-2 border-[--grey] rounded-sm p-1"/></Link>
                    </div>
                 </div>
              <Label classname={"text-[--grey]"}>
                Kaposhidraulika Kft., Szilutech Agro Kft. 2025 @ Minden jog fenntartva
              </Label>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-nowrap gap-2 items-center">
                <H3 classname={"text-[--yellow]"}>Üzlet</H3>
              </div>
              <div className="flex flex-col gap-2 text-[--grey]">
                <div className="flex flex-nowrap gap-2">
                    <TbClock className="min-w-6 min-h-6"/>
                    <ParBig>Nyitvatartás:</ParBig>
                </div>
                <div className="space-y-2 ml-8">
                    <Par>H-P 7:45-16:15</Par>
                    <Label>munkaidő után és hétvégén ügyelet működik</Label>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[--grey]">
                <div className="flex flex-nowrap gap-2">
                    <TbMapPin className="min-w-6 min-h-6"/>
                    <ParBig>Cím:</ParBig>
                </div>
                <div className="space-y-2 ml-8">
                    <Par>7400 Kaposvár Füredi út 153, Kapos Hidraulika</Par>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-[--grey]">
                <div className="flex flex-nowrap gap-2">
                    <TbPhone className="min-w-6 min-h-6"/>
                    <ParBig>Telefonszám:</ParBig>
                </div>
                <div className="space-y-2 ml-8">
                    <Par><a href="tel:70/616-6005"></a>70/616-6005</Par>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-nowrap gap-2 items-center">
                <H3 classname={"text-[--yellow]"}>Szerelőműhely</H3>
              </div>
              <div className="flex flex-col gap-2 text-[--grey]">
                <div className="flex flex-nowrap gap-2">
                    <TbClock className="min-w-6 min-h-6"/>
                    <ParBig>Nyitvatartás:</ParBig>
                </div>
                <div className="space-y-2 ml-8">
                    <Par>H-P 8:00-16:00</Par>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[--grey]">
                <div className="flex flex-nowrap gap-2">
                    <TbMapPin className="min-w-6 min-h-6"/>
                    <ParBig>Cím:</ParBig>
                </div>
                <div className="space-y-2 ml-8">
                    <Par>7474 Simonfa Ipartelep 2.</Par>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-[--grey]">
                <div className="flex flex-nowrap gap-2">
                    <TbPhone className="min-w-6 min-h-6"/>
                    <ParBig>Telefonszám:</ParBig>
                </div>
                <div className="space-y-2 ml-8">
                    <Par><a href="tel:30/939-8591"></a>30/939-8591</Par>
                    <Par><a href="tel:30/302-0181"></a>30/302-0181</Par>
                </div>
              </div>
            </div>
            

              {/*<div className="flex flex-col gap-2">
                        <Label classname={""}>Biztonságos fizetés a <b>Stripe</b> által</Label>
                        <Link href={"https://stripe.com"} target="__blank"><Image src={"/Powered by Stripe - white.svg"} width={150} height={75}/></Link>
                    </div>*/}
            </div>
          </div>
      </section>
  );
}
