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
import Par from "./UI/Typo/Par";
import { TbHammer, TbShoppingCart, TbTool, TbBuildingStore } from "react-icons/tb";
import Link from "next/link";
import ParBig from "./UI/Typo/ParBig";

export default function Szolgaltatasok() {
  return (
    <section className="flex flex-col gap-2 px-2 pb-2 pt-8 bg-[--white]" id="szolgaltatasok">
      <H2 classname={''}>Szolgáltatások</H2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 rounded-lg overflow-hidden">
          <SzolgaltatasInner image={'/hidraulika.webp'} title={'Hidraulika javítás'} l1={'Hidraulika tömlő roppantás'} l2={'Munkahengerek javítása'} l3={'Teljes körű hidraulika javítás'} l4={'Hidraulika szerelvények'} l5={'Klímacső roppantás'}/>
          <SzolgaltatasInner image={'/pneumatika.webp'} title={'Pneumatika rendszer'} l1={'Szerelvények'} l2={'Csövek'} l3={'Fittingek'} l4={'Szelepek'}/>
          <SzolgaltatasInner image={'/tehergepkocsi.webp'} title={'Tehergépkocsi, kamion szerviz'} l1={'Motor javítás'} l2={'Fék javítás'} l3={'Kuplungozás'} l4={'Nagyszerviz'} l5={'Műszakira való felkészítés'} l6={'Felépítmény javítás'}/>
          <SzolgaltatasInner image={'/gumijavitas.webp'} title={'Gumi javítás'} l1={'Tehergépkocsik és személygépkocsik gumiszerelése'} l2={'Gumi szerviz, gumicsere'} l3={'Felnik homokfúvása'} l4={'Új és használt gumik értékesítése'}/>
          <SzolgaltatasInner image={'/epitoiparigepek.webp'} title={'Építőipari gépek teljes körű javítása'} l1={'Motor javítás'} l2={'Hidraulika javítás'} l3={'Vonalbafúrás, csapszegezés, perselyezés'}/>
          <SzolgaltatasInner image={'/mezogazdasagigepek.webp'} title={'Mezőgazdasági és erdészeti gépek teljes körű javítása'} l1={'Motor javítás'} l2={'Hidraulika javítás'} l3={'Vonalbafúrás, csapszegezés, perselyezés'}/>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-8 justify-center w-full m-auto bg-[--lightgrey] rounded-3xl lg:p-8 p-4">
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-8 justify-center self-center">
          <div className="flex lg:flex-row flex-col lg:items-center gap-4">
            <div className="flex flex-nowrap gap-2 items-center">
              <TbTool className="text-4xl p-1 bg-[--yellow] rounded-full"/>
              <H3>Szerviz:</H3>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-4 gap-2">
              <Link href='tel:06 30 939 8591'><ParBig classname={'underline'}>+36 30 939 8591</ParBig></Link>
              <Link href='tel:06 30 302 0181'><ParBig classname={'underline'}>+36 30 302 0181</ParBig></Link>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center gap-4">
            <div className="flex flex-nowrap gap-2 items-center">
              <TbBuildingStore className="text-4xl p-1 bg-[--yellow] rounded-full"/>
              <H3 classname={'font-extrabold'}>Üzlet:</H3>
            </div>
            <Link href='tel:06 70 616 6005'><ParBig classname={'underline'}>+36 70 616 6005</ParBig></Link>
          </div>
          </div>
        </div>
    </section>
  );
}
