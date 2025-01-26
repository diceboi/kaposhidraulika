'use client'

import Image from "next/image"
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Par from "./UI/Typo/Par";
import Label from "./UI/Typo/Label";
import { motion } from "framer-motion";
import ParBig from "./UI/Typo/ParBig"
import MunkatarsTile from "./UI/MunkatarsTile";

export default function Munkatarsak() {

    const imageVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
      };

  return (
    <section className=" bg-gradient-to-b from-[--grey] to-[--lightgrey] lg:pt-20 pt-8">
        <div className="flex flex-col gap-4 p-4">
            <H1>Munkatársak</H1>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 rounded-lg">

                <MunkatarsTile image={'/munkatars1.webp'} name={'Minta János'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars2.webp'} name={'Minta Mária'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars1.webp'} name={'Minta János'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars2.webp'} name={'Minta Mária'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars1.webp'} name={'Minta János'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars2.webp'} name={'Minta Mária'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars1.webp'} name={'Minta János'} position={'Szerelő'}/>
                <MunkatarsTile image={'/munkatars2.webp'} name={'Minta Mária'} position={'Szerelő'}/>
                
            </div>
        </div>
    </section>
  )
}
