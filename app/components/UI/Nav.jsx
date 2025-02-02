'use client'

import Image from 'next/image'
import Link from 'next/link'
import MainButtonBlack from './Buttons/MainButtonBlack'
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"

export default function Nav() {

    const [mobileMenu, openMobileMenu] = useState(false)
    const navRef = useRef(null);

    const toggleMobileMenu = () => {
        openMobileMenu((prev) => !prev);
    };

    // Close menu when clicking outside of nav
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                openMobileMenu(false);
            }
        }

        if (mobileMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenu]);

    // Smooth scroll function
    const handleSmoothScroll = (e, targetId, offset = 100) => {
        e.preventDefault(); // Prevent default link behavior
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get absolute position
            window.scrollTo({
                top: elementPosition - offset, // Apply offset
                behavior: "smooth", // Smooth scrolling effect
            });
        }
        openMobileMenu(false); // Close mobile menu after clicking
    };
    

    return (
        <section className='sticky flex justify-center top-0 w-full p-2 z-50'>
            <div className='absolute top-0 left-0 w-full h-[100px] opacity-50'
                style={{
                    backgroundColor: "var(--lightgrey)",
                    backgroundImage: "radial-gradient(transparent 2px, var(--white) 1px)",
                    backgroundSize: "4px 4px",
                    backdropFilter: "blur(10px)",
                    WebkitMask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                    opacity: 1,
                }}
            ></div>

            <motion.nav 
                ref={navRef}
                layout
                className={`flex flex-nowrap gap-16 justify-between items-center lg:w-fit w-full h-[60px] lg:bg-[--yellow] lg:shadow-md rounded-3xl p-2 relative`}
            >
                <button onClick={(e) => handleSmoothScroll(e, '#home', 50)} className='relative min-w-[150px] h-full z-20'>
                    <Image src='/menu-logo.svg' alt='logo' fill className='w-auto h-12'/>
                </button>

                <ul className='hidden lg:flex flex-nowrap w-full h-full items-center justify-center text-md font-bold min-w-fit z-20'>
                    <li>
                        <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                           href='#szolgaltatasok' onClick={(e) => handleSmoothScroll(e, '#szolgaltatasok', 50)}>
                            Szolgáltatásaink
                        </a>
                    </li>
                    <li>
                        <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                           href='#hidraulikaheroes' onClick={(e) => handleSmoothScroll(e, '#hidraulikaheroes', 50)}>
                            Hidraulika Heroes
                        </a>
                    </li>
                    <li>
                        <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                           href='#rolunk' onClick={(e) => handleSmoothScroll(e, '#rolunk', 50)}>
                            Rólunk
                        </a>
                    </li>
                    <li>
                        <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                           href='#galeria' onClick={(e) => handleSmoothScroll(e, '#galeria', 50)}>
                            Galéria
                        </a>
                    </li>
                </ul>

                <div className='flex-nowrap items-center gap-4 lg:w-full w-fit lg:pr-0 pr-2 z-20'>
                    {mobileMenu ? (
                        <IoClose className='lg:hidden min-w-8 min-h-8 text-[--black]' onClick={toggleMobileMenu}/>
                    ) : (
                        <TbMenu2 className='lg:hidden min-w-8 min-h-8 text-[--black]' onClick={toggleMobileMenu}/>
                    )}
                    <MainButtonBlack onclick={(e) => handleSmoothScroll(e, '#kapcsolat', 50)} classname={'lg:block hidden'} >Kapcsolat</MainButtonBlack>
                </div>

                <motion.div 
                    layout
                    animate={{ height: mobileMenu ? '340px' : '60px' }}
                    transition={{ ease: 'easeInOut', duration: 0.4, type: 'spring', bounce: 0.2 }}
                    className='absolute top-0 left-0 flex flex-col items-center justify-center w-full rounded-3xl h-[400px] bg-[--yellow] z-[1] shadow-md'
                >
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: mobileMenu ? 1 : 0 }}
                        transition={{ duration: mobileMenu ? 0.4 : 0.1, delay: mobileMenu ? 0.2 : 0 }} 
                        className='flex flex-col w-full h-full items-center justify-center text-md min-w-fit text-xl font-extrabold gap-4 pt-[60px]'
                    >
                        <li>
                            <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                               href='#szolgaltatasok' onClick={(e) => handleSmoothScroll(e, '#szolgaltatasok', 50)}>
                                Szolgáltatásaink
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                               href='#hidraulikaheroes' onClick={(e) => handleSmoothScroll(e, '#hidraulikaheroes', 50)}>
                                Hidraulika Heroes
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                               href='#rolunk' onClick={(e) => handleSmoothScroll(e, '#rolunk', 50)}>
                                Rólunk
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-white hover:bg-opacity-25 px-4 py-4 rounded-full transition-all' 
                               href='#galeria' onClick={(e) => handleSmoothScroll(e, '#galeria', 50)}>
                                Galéria
                            </a>
                        </li>
                        <MainButtonBlack link='#kapcsolat' onclick={(e) => handleSmoothScroll(e, '#kapcsolat', 50)} >Kapcsolat</MainButtonBlack>
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </section>
    );
}
