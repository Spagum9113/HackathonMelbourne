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
                            <Image src="/breakfast.avif" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    Founder Breakfast Club
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Tue, Apr 22, 9:00 AM

                                </p>

                                <p className="text-gray-400 text-sm">
                                    Studley Park Boathouse,
                                    Kew, Victoria

                                </p>
                            </div>

                        </div>
                    </a>



                    {/* Listing 2 */}
                    <a href="/StartupListing2" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/howtoraise.webp" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    How to Raise your First Million

                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Tue, Apr 29, 6:00 PM

                                </p>

                                <p className="text-gray-400 text-sm">
                                    Level: B1 UniMelb Glyn Davis Building

                                </p>
                            </div>

                        </div>
                    </a>


                    {/* Listing 3 */}
                    <a href="/StartupListing3" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/next.avif" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    NEXT [Founder Day]: From Front Door To Funded





                                </h3>
                                <p className="text-gray-400 text-sm">Wed, Apr 30, 1:00 PM

                                </p>
                                <p className="text-gray-400 text-sm">Cremorne Digital Hub

                                </p>
                            </div>


                        </div>
                    </a>


                    {/* Listing 4 */}
                    <a href="/StartupListing4" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/BC_may.avif" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">StartSpace x Build Club & MLAI Co-working

                                </h3>
                                <p className="text-gray-400 text-sm">Sat, May 3, 10:00 AM

                                </p>
                                <p className="text-gray-400 text-sm">State Library Victoria

                                </p>
                            </div>


                        </div>
                    </a>




                    {/* Listing 5 */}
                    <a href="/StartupListing5" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/pitchnight.avif" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">
                                    Startmate Pitch Night (Melbourne)                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Thu, May 8, 5:30 PM

                                </p>

                                <p className="text-gray-400 text-sm">
                                    Tank Stream Labs Melbourne, Collins Street
                                </p>
                            </div>

                        </div>
                    </a>

                    {/* Listing 6 */}
                    <a href="/StartupListing6" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/startspace.jpg" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">StartSpace Flip The Pitch

                                </h3>
                                <p className="text-gray-400 text-sm">Tues, May 13, 4:30 PM

                                </p>
                                <p className="text-gray-400 text-sm">Conversation Quarter, State Library Victoria

                                </p>
                            </div>


                        </div>
                    </a>





                    {/* Listing 7 */}
                    <a href="/StartupListing7" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/uber.avif" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">UoM to Uber to Unicorn w/ Rob Skillington

                                </h3>
                                <p className="text-gray-400 text-sm">Tues, May 13, 5:30 PM

                                </p>
                                <p className="text-gray-400 text-sm">Melbourne Connect, Parkville VIC

                                </p>
                            </div>


                        </div>
                    </a>






                </div>
            </div>

            < Footer />
        </div>
    )
}




