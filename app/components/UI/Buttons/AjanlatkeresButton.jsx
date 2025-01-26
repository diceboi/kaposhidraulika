"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TbChevronDown, TbChevronLeft, TbPhone } from "react-icons/tb";
import ButtonText from "../Typo/ButtonText";

export default function WhiteCTA() {
  const [open, setOpen] = useState(false);

  const buttonVariants = {
    initial: { width: "fit-content" },
    hover: { width: "fit-content" },
  };

  const slidingVariants = {
    closed: { x: "-0%", opacity: 1 }, // Start hidden to the left
    open: { x: "-124%", opacity: 1 }, // Slide into view
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-full w-[200px]">
    <motion.div
      variants={buttonVariants}
      className="relative flex flex-nowrap w-fit border-2 border-[--yellow] bg-[--lightgrey] z-20 rounded-full group font-bold shadow-lg lg:self-end self-center -mr-[2px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Button */}
      <button className="flex flex-nowrap items-center bg-[--yellow] lg:px-4 px-2 lg:py-1 py-0 rounded-full z-20">
      <ButtonText classname="lg:hidden flex flex-nowrap gap-2 items-center my-1">Ajánlatkérés</ButtonText>
      <TbChevronLeft className={`lg:block hidden min-w-6 h-full my-1 ${open ? '-rotate-90' : ''} transition-all`}/>
        
      </button>

      {/* Sliding Options */}
      <motion.div
        className="absolute top-0 left-full hidden lg:flex flex-nowrap items-center justify-start bg-[--yellow] rounded-s-full border-2 border-[--yellow] overflow-hidden w-[160px] mt-[-2px]"
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={slidingVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <a
          className="hover:bg-[--yellowhover] px-4 py-2 rounded-full transition-all min-w-fit"
          href="#ajanlatkeres"
        >
          Ajánlatkérés
        </a>
      </motion.div>
    </motion.div>
    </div>
  );
}
