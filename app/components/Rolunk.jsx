import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Par from "./UI/Typo/Par";
import ParBig from "./UI/Typo/ParBig";
import Image from "next/image";

export default function Rolunk() {
  return (
    <section className="bg-gradient-to-b from-[--white] to-[--grey] px-4 lg:pt-20 pt-8">
      <div className="flex flex-col gap-4">
        <H1 classname={""}>Rólunk</H1>
        <div className="relative flex lg:flex-row flex-col justify-center gap-4 rounded-lg lg:p-8 p-4">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, var(--grey) 2px, transparent 1px)`,
              backgroundSize: "15px 15px",
              mixBlendMode: "darken",
              opacity: 0.5,
            }}
          ></div>

          <div className="flex flex-col gap-4 items-center lg:w-3/12 w-full -mr-[5vw] z-10">
            <div className="flex flex-col relative lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] rounded-full overflow-hidden border-2 border-[--yellow] shadow-md">
              <Image
                src={"/munkatars1.webp"}
                fill
                alt="Markó Szilárd"
                style={{ objectFit: "cover", objectPosition: "10% 0%" }}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-8/12 w-full">
              <H4 classname={"text-center"}>
              Markó Szilárd vagyok,
              </H4>
              <ParBig classname={'text-center'}>a Szilutech Agro Kft - Kapos Hidraulika
              tulajdonosa és ügyvezetője.</ParBig>
            </div>
            
          </div>
          <div className="flex flex-col gap-4 lg:p-8 p-2 bg-white rounded-lg items-start lg:w-6/12 w-full shadow-md z-10">
            <ParBig>
              Cégünk 2010-ben kezdte tevékenységét, röpke két év alatt kinőve
              magát megalakult a ma már Kaposvár és környékén jól ismert
              Szilutech Agro Kft.
            </ParBig>
            <ParBig>
              2023-ban bővült a profilunk a Kapos Hidraulika Kft.
              megvásárlásával, ezáltal hidraulika csövek roppantásával,
              munkahengerek javításával és pneumatikai szolgáltatásokkal bővült
              cégünk.
            </ParBig>
            <ParBig>
              Elsősorban tehergépkocsik, építő és mezőgazdasági erő és
              munkagépek javításával, szerelésével foglalkozunk.
            </ParBig>
            <ParBig>
              Egyediségünk a gépjárművek, munkagépek szervizelésében a házhoz
              szállásosos szervíz szolgáltatásunk, amivel a meghibásodott
              járműveket és munkagépeket a helyszínen meg tudjuk javítani,
              könnyítve ezzel a cégek működését és munkafolyamatait.
            </ParBig>
            <ParBig>
              Kaposváron Füredi úti üzletünk a hidraulika és pneumatikára
              szakosodva áll rendelkezésre, szerelőműhelyünk Simonfán üzemel
              minden további szolgáltatásunkat biztosítva.
            </ParBig>
          </div>
        </div>
      </div>
    </section>
  );
}
