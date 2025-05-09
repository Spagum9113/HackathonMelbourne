import Image from "next/image"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"

import EventListingsGrid from "@/app/components/EventListingsGrid"
import { getPastHackathonEvents } from "@/app/data/eventsData";


export default function PastHackathonEvents() {
    return (

        <div className="bg-[url('/bg1.png')] bg-cover min-h-screen text-white">

            < Header />

            <div className="max-w-6xl mx-auto px-6 relative py-14 min-h-screen mt-16 pt-32">

                <Image src="/dinosaur.svg" width={70} height={70} alt="dino" className="absolute top-16 left-12 sm:left-36 " />


                {/* Title */}
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mb-6 border-2 rounded-xl p-6">
                    <div>
                        <h3 className="text-2xl font-bold">Past Hackathons</h3>
                        <p className="text-gray-400">Melbourne</p>
                    </div>

                    <a href="/#hackathons" className="mt-5 md:mt-0">
                        <button className="text-black bg-white rounded-lg font-bold py-2 px-6 hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                            Upcoming Hackathons ‎ ➪
                        </button>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl ">
                    <EventListingsGrid events={getPastHackathonEvents()} />
                </div>

            </div>

            <div id="newsletter">
                <Newsletter />
            </div>


            <Footer />

        </div>
    )
}