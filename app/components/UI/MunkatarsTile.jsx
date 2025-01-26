'use client'

import Image from "next/image";
import H3 from "./Typo/H3";
import Par from "./Typo/Par";
import { motion } from "framer-motion"

export default function MunkatarsTile({ image, name, position }) {

    const imageVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
      };

  return (
    <motion.div
      className="relative rounded-lg w-full overflow-hidden shadow-md"
      whileHover="hover"
    >
      <motion.div
        className="relative lg:h-[500px] h-[300px] rounded-lg overflow-hidden"
        variants={imageVariants} // Link the variants for zoom effect
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounce: 0.4,
          type: "spring",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[--black] to-transparent z-10"></div>
        <Image
          src={image}
          fill
          alt={name}
          style={{ objectFit: "cover", objectPosition: "50% 10%" }}
        />
      </motion.div>
      <div className="absolute lg:bottom-8 bottom-2 lg:left-8 left-2 flex flex-col lg:gap-2 gap-0 z-20">
        <H3 classname={"text-[--yellow]"}>{name}</H3>
        <Par classname={"text-white"}>{position}</Par>
      </div>
    </motion.div>
  );
}
