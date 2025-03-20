import Image from "next/image"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"



export default function PastStartupEvents() {
    return (

        <div className="bg-[url('/bg1.png')] bg-cover min-h-screen text-white">

            < Header />



            {/* Event Listings */}
            <div className="max-w-6xl mx-auto px-6 relative py-14 min-h-screen mt-16 pt-32">

                <Image src="/dinosaur.svg" width={70} height={70} alt="dino" className="absolute top-16 left-12 sm:left-36 " />


                {/* Title */}
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mb-6 border-2 rounded-xl p-6">
                    <div>
                        <h3 className="text-2xl font-bold">Past Startup & Innovation Events</h3>
                        <p className="text-gray-400">Melbourne</p>
                    </div>

                    <a href="/StartupEvents" className="mt-5 md:mt-0">
                        <button className="text-black bg-white rounded-lg font-bold py-2 px-6 hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                            Upcoming Events ‎ ➪
                        </button>
                    </a>
                </div>


                {/* Listings Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl ">



                    {/* Listing 1 */}
                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/leonardo_march.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">A Fireside Chat with Gen AI Unicorn: Leonardo.ai</h3>
                            <p className="text-gray-400 text-sm">Wed, Mar 19, 6:00 PM</p>
                            <p className="text-gray-400 text-sm">TBA, Collingwood VIC</p>
                        </div>

                    </div>

                    {/* Listing 2 */}
                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/ai_startup_march.webp" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">How to Start an AI Startup ‎ ‎                                    ‎ ‎


                            </h3>
                            <p className="text-gray-400 text-sm">Wed, Mar 12, 5:45 PM</p>
                            <p className="text-gray-400 text-sm">Library at The Dock</p>
                        </div>


                    </div>








                    {/* Listing 2 */}
                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/bc_monthly_march.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">
                                StartSpace x Build Club & MLAI Co-working Day
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Sat, Mar 8, 10:00 AM
                            </p>

                            <p className="text-gray-400 text-sm">
                                State Library Victoria
                            </p>
                        </div>


                    </div>



                    {/* Listing 4 */}
                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/vci_launch_night.webp" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">VCi Labs Launch Night</h3>
                            <p className="text-gray-400 text-sm">Thurs, Mar 6, 6:00 PM</p>
                            <p className="text-gray-400 text-sm">Hercus Theatre, Building 192, UniMelb Parkville Campus</p>
                        </div>


                    </div>







                </div>
            </div>

            < Footer />
        </div>
    )
}