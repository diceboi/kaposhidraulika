'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HidraulikaHeroesCTA() {
  return (
    <button href="#hidraulikaheroes" className="relative flex flex-nowrap gap-2 bg-[--yellow] rounded-xl shadow-md p-2 overflow-hidden z-10 w-full">
      {/* Background animation */}
      

      {/* Text */}
      <div className="flex flex-col gap-2 relative z-10">
        <p className="text-lg font-bold leading-5 text-left">Lerobbantál?</p>
        <p className="text-lg font-bold leading-5 bg-white p-1 w-fit rounded-md uppercase">Hívj hőst!</p>
      </div>

      {/* Flying Hero */}
      <div className="absolute top-0 right-0 flex flex-col gap-2 items-center z-10 w-1/2">
        <motion.div 
          animate={{ y: ["-20px", "0px", "-20px"], rotate: [5, 7, 5] }} 
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative w-[300px] h-[75px] pointer-events-none"
        >
          <Image src="/hero-fly.svg" fill alt="Repülő hős" style={{ objectFit: 'contain' }} className=" scale-x-[-1]"/>
        </motion.div>
      </div>
      {/* Sparkles Animation */}
      <Sparkles />
    </button>
  );
}

// Sparkles Component
function Sparkles() {
  const sparkleCount = 50; // Number of sparkles
  return (
    <>
      {Array.from({ length: sparkleCount }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-[2px] bg-white rounded-full opacity-75"
          style={{
            top: `${Math.random() * 100}%`, // Random Y position
            left: `${Math.random() * 100}%`, // Start anywhere
          }}
          animate={{ x: ["0%", "2000%"], opacity: [1, 0] }}
          transition={{
            duration: Math.random() * 1, // Different speeds for each sparkle
            ease: "easeOut",
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}
