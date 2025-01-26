"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TbChevronRight, TbChevronLeft, TbPhone } from "react-icons/tb";

export default function BlackCTA() {
  const [open, setOpen] = useState(false);

  const buttonVariants = {
    initial: { width: "fit-content" },
    hover: { width: "fit-content" },
  };

  const slidingVariants = {
    closed: { x: "-90%", opacity: 0 }, // Start hidden to the left
    open: { x: "-10%", opacity: 1 }, // Slide into view
  };

  return (
    <motion.div
      variants={buttonVariants}
      className="relative flex flex-nowrap w-fit border-2 border-[--black] bg-[--lightgrey] z-20 rounded-full group font-bold shadow-lg"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Button */}
      <button className="flex flex-nowrap items-center bg-[--black] px-4 py-1 rounded-full z-20">
      <p className="flex flex-nowrap gap-2 items-center border-r border-[#000000] my-1 pr-3 text-white"><TbPhone className="min-w-5 h-full"/>Üzlet hívása</p>
      <div className="flex flex-col items-center justify-center min-w-8 h-full border-l border-[#2f2f2f] pl-3 text-white">
          <TbChevronRight className={`${open ? 'rotate-180' : ''} transition-all`}/>
        </div>
        
      </button>

      {/* Sliding Options */}
      <motion.div
        className="absolute top-0 left-full flex flex-nowrap items-center justify-end bg-[--black] rounded-e-full border-2 border-[--black] overflow-hidden w-[175px] mt-[-2px] "
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={slidingVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button
          className="hover:bg-white hover:bg-opacity-15 px-4 py-2 rounded-full transition-all min-w-fit text-white"
        >
          06 30 123 4567
        </button>
      </motion.div>
    </motion.div>
  );
}
