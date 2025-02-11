import Link from "next/link"
import Image from "next/image"

export default function Header() {

    return (

        <div>
            {/* The NavBar */}
            <nav className="flex justify-between items-center p-6">

                <Link href="/">
                    <Image src="/logo.svg" width={30} height={30} alt="logo" />
                </Link>

                <div className="space-x-14 font-bold flex pl-36">
                    <Link href="/ComingSoon" className="hover:text-gray-400">Hackathons</Link>
                    <Link href="/ComingSoon" className="hover:text-gray-400">Map</Link>
                    <Link href="/ComingSoon" className="hover:text-gray-400">Calendar</Link>
                    <Link href="/ContactPage" className="hover:text-gray-400">Contact</Link>
                </div>


                <a href="/#newsletter" className="">
                    <button className="bg-white text-black py-2 px-6 rounded-lg font-bold hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                        {"< Stay Updated >"}
                    </button>
                </a>


            </nav>
        </div>

    )
}


