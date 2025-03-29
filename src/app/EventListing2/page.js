import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function EventListing2() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white overflow-x-hidden">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-32">
                <h2 className="text-4xl font-bold">Hackiethon 2025
                </h2>
                <p className="text-gray-400 mt-5 mx-5 max-w-2xl">
                    Join HackMelbourne’s Hackiethon 2025 at the University of Melbourne for a fun, project-based hackathon! Build interactive web components, enhance your portfolio, and compete for prizes using React & JavaScript. 🚀💻

                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

                    <div className="relative border-2 border-white rounded-xl overflow-hidden max-w-full sm:w-full mx-5 sm:mx-0 w-[300] h-[200px] sm:h-full">
                        <Image
                            src="/hackiethon.png"
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
                                Fri, 28 Mar, 6PM – Sun, 30 Mar, 6PM

                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Arts West, University of Melbourne (Kathleen Fitzpatrick Theatre)

                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon icon" />
                            <p className="font-bold">
                                University Students
                            </p>
                        </div>


                        {/* Format */}
                        <div className=" flex items-center space-x-3">
                            <Image src="formatIcon.svg" width={30} height={30} alt="format icon" />
                            <p className="font-bold">
                                In-Person
                            </p>x
                        </div>


                        {/* Cost */}
                        <div className=" pb-5 flex items-center space-x-3">
                            <Image src="costIcon.svg" width={30} height={30} alt="cost icon" />
                            <p className="font-bold">
                                FREE
                            </p>
                        </div>


                        <a href="https://events.humanitix.com/hackiethon" target="_blank" rel="noopener noreferrer">
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
                        Hackiethon 2025 is UniMelb’s exciting hackathon hosted by HackMelbourne, focusing on building web components like weather widgets, stock trackers, and more! Teams of 3 will collaborate over three days to create innovative React-based projects. Whether you’re a beginner or an experienced coder, workshops, mentors, and online support will help you every step of the way. A perfect chance to learn, build, and have fun while competing for awesome prizes! 🎯✨

                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}