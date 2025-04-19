import Image from "next/image"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"



export default function StartupEvents() {
    return (

        <div className="bg-[url('/bg1.png')] bg-cover min-h-screen text-white">

            < Header />



            {/* Event Listings */}
            <div className="max-w-6xl mx-auto px-6 relative py-14 min-h-screen mt-16 pt-32">



                <Image src="/dinosaur.svg" width={70} height={70} alt="dino" className="absolute top-16 left-12 sm:left-36 " />


                {/* Title */}
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mb-6 border-2 rounded-xl p-6">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold">Startup & Innovation Events</h3>
                        <p className="text-gray-400">Melbourne</p>
                    </div>

                    {/* <a href="/PastStartupEvents" className="mt-5 md:mt-0">
                        <button className="text-black bg-white rounded-lg font-bold py-2 px-6 hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                            Past Events ‎ ➪
                        </button>
                    </a> */}
                </div>

                {/* Listings Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl ">




                    {/* Listing 1 */}
                    <a href="/StartupListing1" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/femalefounders2.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    Female Founder Pitch Night
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Tue, Mar 25, 6:00 PM

                                </p>

                                <p className="text-gray-400 text-sm">
                                    The Commons Gipps St

                                </p>
                            </div>

                        </div>
                    </a>



                    {/* Listing 2 */}
                    {/* <a href="/StartupListing2" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/femalefounders2.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    Female Founder Pitch Night
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Tue, Mar 25, 6:00 PM

                                </p>

                                <p className="text-gray-400 text-sm">
                                    The Commons Gipps St

                                </p>
                            </div>

                        </div>
                    </a> */}


                    {/* Listing 3 */}
                    {/* <a href="/StartupListing3" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/imctrading1.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    IMC Trading Simulation




                                </h3>
                                <p className="text-gray-400 text-sm">Wed, Mar 26, 1:15 PM

                                </p>
                                <p className="text-gray-400 text-sm">The Spot, Room 1022, University of Melbourne

                                </p>
                            </div>


                        </div>
                    </a> */}


                    {/* Listing 4 */}
                    {/* <a href="/StartupListing4" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/trivia1.jpeg" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">Spicy Startup Trivia
                                </h3>
                                <p className="text-gray-400 text-sm">Wed, Mar 26, 6:15 PM

                                </p>
                                <p className="text-gray-400 text-sm">The Malaysian Theatre (Glyn Davis B121), University of Melbourne

                                </p>
                            </div>


                        </div>
                    </a> */}




                    {/* Listing 5 */}
                    {/* <a href="/StartupListing5" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/sociology.jpeg" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    Digitalization of Qualitative Data Collection Workshop
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Thu, Mar 27, 12:00 PM

                                </p>

                                <p className="text-gray-400 text-sm">
                                    Linkway, Level 4, Meeting Room, UniMelb Parkville Campus

                                </p>
                            </div>

                        </div>
                    </a> */}

                    {/* Listing 6 */}
                    {/* <a href="/StartupListing6" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/founderswalk.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">Founders Walk (Melbourne)
                                </h3>
                                <p className="text-gray-400 text-sm">Sat, Mar 29, 9:15 AM

                                </p>
                                <p className="text-gray-400 text-sm">Carlton Gardens, 1-111 Carlton St, Carlton VIC 3053, Australia

                                </p>
                            </div>


                        </div>
                    </a> */}






                </div>
            </div>

            < Footer />
        </div>
    )
}




