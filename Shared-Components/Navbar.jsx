"use client";
// library import
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

//constants and helper functions
import { navItems } from "@/constants";


// Misc Components



const googleColors = [
    '#4285F4', '#EA4335', '#34A853', '#FBBC04'
]

export const Navbar = () => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(true);
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-150   bg-[#F0F0F0] shadow-xl`} ref={ref}
        >
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/" className="flex items-center justify-center md:gap-x-4 gap-x-1">
                            <Image src={"/gdsc_logo.png"} alt="GDSC_LOGO" height={70} width={70} />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#656C73]">GDSC PESU</span>
                        </a>
                        <div className="md:hidden flex flex-row items-center justify-center w-fit space-x-5">
                            <button
                                className={`p-2 text-black rounded-md outline-none focus:border-gray-400 transition ease-in-out duration-150 ${navbar && 'animate-bounce'} ${!navbar && 'animate-pulse'}`}
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"

                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-between  md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:gap-x-3 lg:gap-x-16 md:space-y-0 py-4 md:py-0">

                            <li className={`w-fit   text-md lg:text-[20px] md:py-9 px-3 rounded-b-sm md:border-b-4 md:border-[#4285F4]   `} >
                                <Link href="/" className="text-[#585858] hover:text-[#323131]  transition ease-in duration-100">Home</Link>
                            </li>
                            <li className={`w-fit  text-md lg:text-[20px] md:py-9 px-3 rounded-b-sm md:border-b-4 md:border-[#EA4335]   `} >
                                <Link href="#events" className="text-[#585858] hover:text-[#323131]  transition ease-in duration-100">Events</Link>
                            </li>
                            <li className={`w-fit   text-md lg:text-[20px] md:py-9 px-3 rounded-b-sm md:border-b-4 md:border-[#34A853]   `} >
                                <Link href="/" className="text-[#585858] hover:text-[#323131]  transition ease-in duration-100">Projects</Link>
                            </li>
                            <li className={`w-fit   text-md lg:text-[20px] md:py-9 px-3 rounded-b-sm md:border-b-4 md:border-[#FBBC04]   `} >
                                <Link href="#team" className="text-[#585858] hover:text-[#323131]  transition ease-in duration-100">Team</Link>
                            </li>
                            <li className={`w-fit  text-md lg:text-[20px] md:py-9 px-3 rounded-b-sm md:border-b-4 md:border-[#4285F4]   `} >
                                <Link href="/" className="text-[#585858] hover:text-[#323131]  transition ease-in duration-100">Contact Us</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </nav>




    );
};

