import Image from "next/image"

export default function EventListing() {
    return (
        <div>
            {/* Event Listings */}
            <div className="max-w-6xl mx-auto px-6 relative pt-14 min-h-screen">

                <Image src="/dinosaur.svg" width={70} height={70} alt="dino" className="absolute -top-2 left-12 sm:-top-2 sm:left-36 " />


                {/* Title */}
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mb-6 border-2 rounded-xl p-6">
                    <div>
                        <h3 className="text-2xl font-bold">Popular Hackathons</h3>
                        <p className="text-gray-400">Melbourne</p>
                    </div>

                    <a href="/PastEvents" className="mt-5 md:mt-0">
                        <button className="text-black bg-white rounded-lg font-bold py-2 px-6 hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                            Past Hackathons ‎ ➪
                        </button>
                    </a>
                </div>




                {/* Listing 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl ">

                    {/* Listing 1 */}
                    <a href="/EventListing1" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/Screenshot 2025-03-21 at 3.53.41 am.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">CCA x Mobilise Hackathon</h3>
                                <p className="text-gray-400 text-sm">Thu, Mar 27, 6:00 PM</p>
                                <p className="text-gray-400 text-sm">Monash University LTB G31</p>
                            </div>


                        </div>
                    </a>



                    {/* Listing 2 */}
                    <a href="/EventListing2" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/hackiethon.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">Hackiethon 2025

                                    ‎ ‎
                                </h3>
                                <p className="text-gray-400 text-sm">Fri, Mar 28, 6:00 PM

                                </p>
                                <p className="text-gray-400 text-sm">Arts West, University of Melbourne (Kathleen Fitzpatrick Theatre)

                                </p>
                            </div>


                        </div>
                    </a>



                    {/* Listing 3 */}
                    <a href="/EventListing3" target="_blank" rel="noopener noreferrer">
                        <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                            <Image src="/prosperity3.png" width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />

                            <div className=" p-5 ">
                                <h3 className="mb-1 text-lg font-bold">Prosperity Trading Challenge

                                    ‎ ‎
                                </h3>
                                <p className="text-gray-400 text-sm">Mon, Apr 7, 2025

                                </p>
                                <p className="text-gray-400 text-sm">Online (Remote)

                                </p>
                            </div>


                        </div>
                    </a>




                </div>
            </div>
        </div>
    )
}