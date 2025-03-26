"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="overflow-x-hidden">
            {/* The NavBar */}
            <nav className="flex justify-between items-center p-6">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.svg" width={30} height={30} alt="logo" />
                </Link>

                {/* Nav Bar for Desktop */}
                <div className="hidden md:flex space-x-14 font-bold pl-36">
                    <Link href="/#hackathons" className="hover:text-gray-400">Hackathons</Link>
                    <Link href="/StartupEvents" className="hover:text-gray-400">Startup Events</Link>
                    <Link href="/ComingSoon" className="hover:text-gray-400">Map</Link>
                    <Link href="/ComingSoon" className="hover:text-gray-400">Calendar</Link>
                    <Link href="/ContactPage" className="hover:text-gray-400">Contact</Link>
                </div>

                {/* Newsletter Button */}
                <a href="/#newsletter" className="hidden md:block">
                    <button className="bg-white text-black py-2 px-6 rounded-lg font-bold hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                        {"< Stay Updated />"}
                    </button>
                </a>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Nav Bar for Mobile */}
                {isOpen && (
                    <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[url('/bg1.png')] text-white flex flex-col px-16 py-24 z-50 font-semibold text-3xl">

                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                            <FiX size={32} />
                        </button>

                        <Link href="/#hackathons" className="py-6" onClick={() => setIsOpen(false)}>Hackathons</Link>
                        <Link href="/StartupEvents" className="py-6" onClick={() => setIsOpen(false)}>Startup Events</Link>
                        <Link href="/ComingSoon" className="py-6" onClick={() => setIsOpen(false)}>Map</Link>
                        <Link href="/ComingSoon" className="py-6" onClick={() => setIsOpen(false)}>Calendar</Link>
                        <Link href="/ContactPage" className="py-6" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
