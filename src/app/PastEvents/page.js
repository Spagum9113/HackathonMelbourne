import Image from "next/image"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"



export default function EventListing() {
    return (

        <div className="bg-[url('/bg1.png')] bg-cover min-h-screen text-white">

            < Header />



            {/* Event Listings */}
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


                {/* Listings Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl ">



                    {/* Listing 1 */}

                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/listing1.webp" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">CISSA x GMC 2025 Game Jam</h3>
                            <p className="text-gray-400 text-sm">Fri, Mar 7, 6:00 PM</p>
                            <p className="text-gray-400 text-sm">Arts West Building (Building 148)</p>
                        </div>


                    </div>





                    {/* Listing 2 */}

                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/listing2.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">UNIHACK 2025
                                ‎ ‎
                            </h3>
                            <p className="text-gray-400 text-sm">Fri, Mar 14, 18:00 PM</p>
                            <p className="text-gray-400 text-sm">Monash University Clayton Campus</p>
                        </div>


                    </div>




                    {/* Listing 3 */}
                    <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                        <Image src="/medhack.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                        <div className=" p-5 ">
                            <h3 className="mb-1 text-lg font-bold">MedHack: AI Hospital</h3>
                            <p className="text-gray-400 text-sm">Sat, Feb 15, 14:00 PM</p>
                            <p className="text-gray-400 text-sm">Woodside Building for Technology and Design</p>
                        </div>


                    </div>



                </div>
            </div>

            < Footer />
        </div>
    )
}