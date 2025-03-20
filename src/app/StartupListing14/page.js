import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function StartupListing14() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-16 sm:pt-32">
                <h2 className="text-4xl font-bold mx-5">ArchiTeam 2025 Conference
                </h2>
                <p className="text-gray-400 mt-5 mx-5 max-w-2xl">
                    EXPANDING PRACTICE: 100% Architecture | A Hybrid Event Empowering Small Practice Architects

                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-16 sm:pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

                    <div className="relative border-2 border-white rounded-xl overflow-hidden max-w-full sm:w-[550px] mx-5 sm:mx-0 h-[200px] sm:h-full">
                        <Image
                            src="/archi1.png"
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
                                Fri, 16 May, 9AM - 9PM

                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Melbourne Museum, 11 Nicholson St, Carlton VIC 3053

                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon icon" />
                            <p className="font-bold">
                                Architects & Industry Professionals


                            </p>
                        </div>


                        {/* Format */}
                        <div className=" flex items-center space-x-3">
                            <Image src="formatIcon.svg" width={30} height={30} alt="format icon" />
                            <p className="font-bold">
                                Hybrid (In-Person & Online)



                            </p>
                        </div>


                        {/* Cost */}
                        <div className=" pb-5 flex items-center space-x-3">
                            <Image src="costIcon.svg" width={30} height={30} alt="cost icon" />
                            <p className="font-bold">
                                Paid Event (Expensive lol)


                            </p>
                        </div>


                        <a href="https://events.humanitix.com/architeam-2025-conference?hxchl=mkt-sch&_gl=1*1i6mj07*_gcl_au*NjQ4NjMzMDUwLjE3MzY5NjcwNDQ.*_ga*ODA0OTc5NTk0LjE3MzY5NjcwNDQ.*_ga_LHKW5FR9N6*MTc0MjQ4MjczNi4zMy4xLjE3NDI0ODI4NzMuMTEuMC4w" target="_blank" rel="noopener noreferrer">
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
                        Join us on May 16th, 2025, at the Melbourne Museum for ArchiTeam’s 4th biennial conference: EXPANDING PRACTICE: 100% Architecture. Explore how small practice architects can broaden their impact through purpose, collaboration, and alternative approaches to practice. Learn from industry experts, join panel discussions, and enjoy an afterparty!








                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}