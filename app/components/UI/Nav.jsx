import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainButtonBlack from './Buttons/MainButtonBlack'
import MainButtonWhite from './Buttons/MainButtonWhite'
import { TbPhone } from "react-icons/tb";

export default function Nav() {
  return (
    <section
    className='sticky flex justify-center top-0 w-full p-4 z-50'
    >
        <div className='absolute top-0 left-0 w-full h-[100px] opacity-50'
        style={{
            backgroundColor: "var(--lightgrey)", // Slightly opaque white background
            backgroundImage: "radial-gradient(transparent 2px, var(--grey, #ffffff) 1px)",
            backgroundSize: "4px 4px",
            backdropFilter: "blur(10px)",
            WebkitMask: "linear-gradient(rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 100%)",
            opacity: 1,
          }}
        ></div>
            <nav className='flex flex-nowrap gap-16 justify-between w-fit h-[60px] bg-[--yellow] shadow-md rounded-full p-2 relative isolate'>
                <div className='relative min-w-[150px] h-full'>
                    <Image src='/menu-logo.svg' alt='logo' fill className='w-auto h-12'/>
                </div>

                <ul className='hidden lg:flex flex-nowrap w-full h-full items-center justify-center gap-8 text-md font-bold min-w-fit'>
                    <li>
                        <Link href='#'>Szolgáltatásaink</Link>
                    </li>
                    <li>
                        <Link href='#'>Hidraulika Heroes</Link>
                    </li>
                    <li>
                        <Link href='#'>Rólunk</Link>
                    </li>
                    <li>
                        <Link href='#'>Galéria</Link>
                    </li>
                </ul>

                <div className='hidden lg:flex flex-nowrap gap-4 w-full'>
                    <MainButtonBlack>Kapcsolat</MainButtonBlack>
                </div>
            </nav>
    </section>
  )
}
