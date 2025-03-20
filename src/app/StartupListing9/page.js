import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function StartupListing9() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-16 sm:pt-32">
                <h2 className="text-4xl font-bold mx-5">Startup Sips
                </h2>
                <p className="text-gray-400 mt-5 mx-5 max-w-2xl">
                    Your after-work wind-down with the startup community 🍻

                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-16 sm:pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

                    <div className="relative border-2 border-white rounded-xl overflow-hidden max-w-full sm:w-[550px] mx-5 sm:mx-0 h-[200px] sm:h-full">
                        <Image
                            src="/0ec81e71-f577-4206-bc1a-98319ceb10cf.avif"
                            alt="Event Image"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>





                    {/* Quick Details */}
                    <div className=" relative border-2 rounded-xl items-center overflow-hidden mx-5 sm:mx-auto max-w-lg sm:max-w-xs space-y-4 p-4">


                        {/* Date */}
                        <div className="flex items-center space-x-3">
                            <Image src="dateIcon.svg" width={30} height={30} alt="date icon" />
                            <p className="font-bold">
                                Fri, 4 Apr, 5PM - 8PM

                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                1-9 Sackville St, Collingwood VIC 3066 (Linktree Office)

                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon icon" />
                            <p className="font-bold">
                                Founders & Startup Enthusiasts


                            </p>
                        </div>


                        {/* Format */}
                        <div className=" flex items-center space-x-3">
                            <Image src="formatIcon.svg" width={30} height={30} alt="format icon" />
                            <p className="font-bold">
                                In-Person
                            </p>
                        </div>


                        {/* Cost */}
                        <div className=" pb-5 flex items-center space-x-3">
                            <Image src="costIcon.svg" width={30} height={30} alt="cost icon" />
                            <p className="font-bold">
                                FREE
                            </p>
                        </div>


                        <a href="https://lu.ma/m0ylkg02" target="_blank" rel="noopener noreferrer">
                            <button className="mx-auto text-black bg-white rounded-lg font-semibold py-2 px-20 whitespace-nowrap hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                                Visit Website ‎ ➪
                            </button>
                        </a>

                    </div>



                </div>

            </section>


            <section className="border-2 border-white rounded-xl max-w-4xl sm:mx-auto p-5 -mb-20 sm:mb-96 mx-5">
                <div className="">
                    <h2 className="font-bold mb-3 text-xl">Event Description</h2>
                    <p className="text-gray-200 pb-2">
                        Startup Sips is back for 2025! Join us on April 4th at the Linktree office for an evening of casual networking, free drinks, and great vibes. Whether you want to share a win, meet fellow founders, or just unwind with people who "get it," this is the place to be!








                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}