import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Par from "./UI/Typo/Par";
import ParBig from "./UI/Typo/ParBig";
import Image from "next/image";

export default function Rolunk() {
  return (
    <section className="lg:pt-16 pt-8 m-2 overflow-hidden" id="rolunk">
      <div className="flex flex-col gap-4">
        <H1 classname={""}>Rólunk</H1>
        <div className="relative flex lg:flex-row flex-col lg:justify-center bg-gradient-to-b from-[--white] to-[--grey] rounded-3xl lg:p-8 p-4 lg:min-h-[500px]">
          <div
            className="absolute inset-1 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, var(--grey) 2px, transparent 1px)`,
              backgroundSize: "15px 15px",
              mixBlendMode: "darken",
              opacity: 0.5,
            }}
          ></div>

          <div className="relative flex lg:flex-col flex-row justify-center items-center lg:w-3/12 w-full lg:-mr-[10vw] lg:-mb-0 -mb-[100px] z-10">
            <div className="flex flex-col min-w-[300px] lg:h-[200px] h-[250px] lg:-mr-0 -mr-[50px] -rotate-6 overflow-hidden shadow-md">
              <Image
                src={"/bolt.webp"}
                fill
                alt="Kaposhidraulika bolt"
                style={{ objectFit: "cover", objectPosition: "10% 0%" }}
              />
            </div> 
            <div className="flex flex-col min-w-[300px] lg:h-[200px] h-[250px] lg:-mr-0 -ml-[50px]  -mt-[50px] rotate-12 overflow-hidden shadow-md">
              <Image
                src={"/bolt2.webp"}
                fill
                alt="Kaposhidraulika bolt"
                style={{ objectFit: "cover", objectPosition: "10% 0%" }}
              />
            </div>          
          </div>
          <div className="flex flex-col gap-4 lg:p-8 p-2 bg-white rounded-2xl items-start lg:w-6/12 w-full lg:mt-0 shadow-md z-10">
            <Par>
              Cégünk 2010-ben kezdte tevékenységét, röpke két év alatt kinőve
              magát megalakult a ma már Kaposvár és környékén jól ismert
              Szilutech Agro Kft.
            </Par>
            <Par>
              2023-ban bővült a profilunk a Kapos Hidraulika Kft.
              megvásárlásával, ezáltal hidraulika csövek roppantásával,
              munkahengerek javításával és pneumatikai szolgáltatásokkal bővült
              cégünk.
            </Par>
            <Par>
              Elsősorban tehergépkocsik, építő és mezőgazdasági erő és
              munkagépek javításával, szerelésével foglalkozunk.
            </Par>
            <Par>
              Egyediségünk a gépjárművek, munkagépek szervizelésében a házhoz
              szállásosos szerviz szolgáltatásunk, amivel a meghibásodott
              járműveket és munkagépeket a helyszínen meg tudjuk javítani,
              könnyítve ezzel a cégek működését és munkafolyamatait.
            </Par>
            <Par>
              Kaposváron Füredi úti üzletünk a hidraulika és pneumatikára
              szakosodva áll rendelkezésre, szerelőműhelyünk Simonfán üzemel
              minden további szolgáltatásunkat biztosítva.
            </Par>
          </div>
        </div>
      </div>
    </section>
  );
}
