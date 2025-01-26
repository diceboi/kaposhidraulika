"use client";

import Image from "next/image";
import H3 from "./Typo/H3";
import { motion } from "framer-motion";
import Par from "./Typo/Par";
import AjanlatkeresButton from "./Buttons/AjanlatkeresButton"

export default function SzolgaltatasInner({ image, title, l1, l2, l3, l4, l5, l6 }) {
  // Define variants for the image zoom effect
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="relative flex flex-col justify-end w-full h-[500px] rounded-lg overflow-hidden lg:p-8 p-2 cursor-pointer group"
      initial="initial"
      whileHover="hover" // Applies hover effect to child elements
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 bg-gradient-to-t from-[--black] to-[#00000076] transition-all w-full h-full z-10"></div>

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
        <H3 classname={"text-[--yellow] uppercase"}>{title}</H3>
        <ul className="list-disc marker:text-[--yellow] marker:text-2xl text-white space-y-0 lg:max-w-6/12">
          {l1 && <li className="ml-6"><Par>{l1}</Par></li>}
          {l2 && <li className="ml-6"><Par>{l2}</Par></li>}
          {l3 && <li className="ml-6"><Par>{l3}</Par></li>}
          {l4 && <li className="ml-6"><Par>{l4}</Par></li>}
          {l5 && <li className="ml-6"><Par>{l5}</Par></li>}
          {l6 && <li className="ml-6"><Par>{l6}</Par></li>}
        </ul>
        <div className="flex flex-col items-center lg:self-end self-center lg:w-fit w-full">
          <AjanlatkeresButton />
        </div>
        
      </div>
    </motion.div>
  );
}
