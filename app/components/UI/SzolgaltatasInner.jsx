"use client";

import Image from "next/image";
import H3 from "./Typo/H3";
import H4 from "./Typo/H4";
import H2 from "./Typo/H2";
import { motion } from "framer-motion";
import Par from "./Typo/Par";
import AjanlatkeresButton from "./Buttons/AjanlatkeresButton"
import { TbPhone } from "react-icons/tb";

export default function SzolgaltatasInner({ image, title, l1, l2, l3, l4, l5, l6, tel }) {
  // Define variants for the image zoom effect
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="relative flex flex-col justify-end w-full lg:h-[60vh] h-[400px] rounded-3xl overflow-hidden lg:p-8 p-2 cursor-pointer group"
      initial="initial"
      whileHover="hover" // Applies hover effect to child elements
    >
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[--black] to-[#00000000] transition-all w-full h-full z-10"></div>

      {/* Image with zoom effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={imageVariants} // Link the variants for zoom effect
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image src={image} fill alt={title} style={{ objectFit: "cover" }} />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-2 z-20">
        <H3 classname={"text-[--yellow]"}>{title}</H3>
        <ul className="grid grid-cols-2 grid-flow-row list-disc marker:text-[--yellow] marker:text-2xl text-white space-y-0 lg:max-w-6/12">
          {l1 && <li className="ml-6"><Par>{l1}</Par></li>}
          {l2 && <li className="ml-6"><Par>{l2}</Par></li>}
          {l3 && <li className="ml-6"><Par>{l3}</Par></li>}
          {l4 && <li className="ml-6"><Par>{l4}</Par></li>}
          {l5 && <li className="ml-6"><Par>{l5}</Par></li>}
          {l6 && <li className="ml-6"><Par>{l6}</Par></li>}
        </ul>
        <a href={`tel:${tel}`} className="flex flex-nowrap gap-1 items-center px-4 py-2 rounded-full text-black bg-[--yellow] w-fit hover:bg-[--yellowhover]"><TbPhone className="w-5 h-5"/>{tel}</a>
      </div>
    </motion.div>
  );
}
