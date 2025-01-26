"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SzolgaltatasInner from "./UI/SzolgaltatasInner";
import H1 from "./UI/Typo/H1";

export default function Szolgaltatasok() {
  return (
    <section className="flex flex-col gap-4 px-4 py-2 bg-[--grey]">
      <H1 classname={'mt-4'}>Szolgáltatások</H1>
        <div className="rounded-lg overflow-hidden">

        
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={1.25}
        breakpoints={{
          1024: {
            slidesPerView: 2.5,
          },
          960: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 1.25,
          },
          360: {
            slidesPerView: 1.25,
          },
        }}
        navigation
      >
        <SwiperSlide>
          <SzolgaltatasInner image={'/hidraulika.webp'} title={'Hidraulika javítás'} l1={'Hidraulika tömlő roppantás'} l2={'Munkahengerek javítása'} l3={'Teljes körű hidraulika javítás'} l4={'Hidraulika szerelvények'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SzolgaltatasInner image={'/pneumatika.webp'} title={'Pneumatika rendszer'} l1={'Szerelvények'} l2={'Csövek'} l3={'Fittingek'} l4={'Szelepek'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SzolgaltatasInner image={'/tehergepkocsi.webp'} title={'Tehergépkocsi, kamion szerviz'} l1={'Motor javítás'} l2={'Fék javítás'} l3={'Kuplungozás'} l4={'Nagyszerviz'} l5={'Műszakira való felkészítés'} l6={'Felépítmény javítás'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SzolgaltatasInner image={'/gumijavitas.webp'} title={'Gumi javítás'} l1={'Tehergépkocsik és személygépkocsik gumiszerelése'} l2={'Gumi szervíz, gumicsere'} l3={'Felnik homokfúvása'} l4={'Új és használt gumik értékesítése'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SzolgaltatasInner image={'/epitoiparigepek.webp'} title={'Építőipari gépek teljes körű javítása'} l1={'Motor javítás'} l2={'Hidraulika javítás'} l3={'Vonalbafúrás, csapszegezés, perselyezés'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SzolgaltatasInner image={'/mezogazdasagigepek.webp'} title={'Mezőgazdasági és erdészeti gépek teljes körű javítása'} l1={'Motor javítás'} l2={'Hidraulika javítás'} l3={'Vonalbafúrás, csapszegezés, perselyezés'}/>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
