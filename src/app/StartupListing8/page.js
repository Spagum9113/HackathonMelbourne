import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function StartupListing8() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-16 sm:pt-32">
                <h2 className="text-4xl font-bold mx-5">Find a Co-Founder
                </h2>
                <p className="text-gray-400 mt-5 mx-5 max-w-2xl">
                    Speed date your way to your next business partner.

                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-16 sm:pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

                    <div className="relative border-2 border-white rounded-xl overflow-hidden max-w-full sm:w-[550px] mx-5 sm:mx-0 h-[200px] sm:h-full">
                        <Image
                            src="/cofounder1.png"
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
                                Wed, 2 Apr, 5:30PM - 7PM

                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Stone & Chalk Melbourne Startup Hub, 121 King St, Melbourne VIC 3000

                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon icon" />
                            <p className="font-bold">
                                Founders & Entrepreneurs


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


                        <a href="https://events.humanitix.com/find-a-co-founder?hxchl=mkt-sch&_gl=1*1cs513a*_gcl_au*NjQ4NjMzMDUwLjE3MzY5NjcwNDQ.*_ga*ODA0OTc5NTk0LjE3MzY5NjcwNDQ.*_ga_LHKW5FR9N6*MTc0MjQ4MjczNi4zMy4xLjE3NDI0ODI3NjguMjguMC4w" target="_blank" rel="noopener noreferrer">
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
                        Looking for a co-founder? Join Press Play Ventures and Stone & Chalk for a fast-paced evening of speed matching, reverse pitching, and networking. Whether you’re technical, commercial, or creative, connect with potential partners to build your next big thing!








                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}