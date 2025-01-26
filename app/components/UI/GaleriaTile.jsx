'use client'

import Image from "next/image";
import { motion } from "framer-motion"

export default function GaleriaTile({ image }) {

    const imageVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
      };

  return (
    <motion.div
      className="relative rounded-lg w-full overflow-hidden shadow-md cursor-pointer"
      whileHover="hover"
    >
      <motion.div
        className="relative lg:h-[500px] h-[200px] rounded-lg overflow-hidden"
        variants={imageVariants} // Link the variants for zoom effect
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounce: 0.4,
          type: "spring",
        }}
      >
        <Image
          src={image}
          fill
          alt='Galéria kép'
          style={{ objectFit: "cover", objectPosition: "50% 10%" }}
        />
      </motion.div>
    </motion.div>
  );
}
