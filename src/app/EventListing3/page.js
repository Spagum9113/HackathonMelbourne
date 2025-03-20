import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function EventListing2() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-32">
                <h2 className="text-4xl font-bold">Prosperity Trading Challenge 2025
                </h2>
                <p className="text-gray-400 mt-5 max-w-2xl">
                    Join IMC’s Prosperity Trading Challenge and put your coding, strategy, and analytical skills to the test! Compete on a virtual market for your share of a $50,000 prize pool and showcase your trading potential! 💹💰

                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-row gap-6 max-w-4xl w-full">

                    <div className="relative flex-1 border-2 border-white rounded-xl overflow-hidden">
                        <Image
                            src="/prosperity3.png"
                            alt="Event Image"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>





                    {/* Quick Details */}
                    <div className=" relative border-2 rounded-xl items-center overflow-hidden max-w-xs space-y-4 p-4">


                        {/* Date */}
                        <div className="flex items-center space-x-3">
                            <Image src="dateIcon.svg" width={30} height={30} alt="date icon" />
                            <p className="font-bold">
                                Mon, 7 Apr, 2025 – Mon, 21 Apr, 2025

                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Online (Remote)

                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon icon" />
                            <p className="font-bold">
                                Everyone
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


                        <a href="https://prosperity.imc.com/?gad_source=1&gclid=Cj0KCQjw-e6-BhDmARIsAOxxlxXfPLeVYQ4Kiqe-nFctRRQhsirUJkvtlrVLWTjVxnIRJgX1h2xpYmAaAnPqEALw_wcB#" target="_blank" rel="noopener noreferrer">
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
                        Prosperity is a 15-day live trading simulation hosted by IMC, where university students will strategize, analyze, and code trading algorithms using Python. Compete remotely in teams of up to 5 to outperform the market and climb the leaderboard for a chance to win a share of the $50,000 prize pool. No full-time commitment is required, and all resources will be provided, including a dedicated wiki to help you succeed. The top 25 teams will receive prizes and exclusive recruitment opportunities! 📈🏆

                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}