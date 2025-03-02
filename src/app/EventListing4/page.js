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
                <h2 className="text-4xl font-bold">Atlassian X UNIHACK 2025</h2>
                <p className="text-gray-400 mt-5 max-w-2xl">
                    Join Atlassian X UNIHACK 2025 at Monash University for Australia’s top student hackathon. Build, Innovate, and Compete for Prizes! 🚀🎟️
                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-row gap-6 max-w-4xl w-full">

                    <div className="relative flex-1 border-2 border-white rounded-xl overflow-hidden">
                        <Image
                            src="/listing2.png"
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
                                Fri, 14 Mar, 6PM - Sun, 16 Mar, 6PM
                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Monash University Clayton Campus, Wellington Rd, Clayton VIC 3800
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
                            </p>
                        </div>


                        {/* Cost */}
                        <div className=" pb-5 flex items-center space-x-3">
                            <Image src="costIcon.svg" width={30} height={30} alt="cost icon" />
                            <p className="font-bold">
                                FREE
                            </p>
                        </div>


                        <a href="https://www.unihack.net/" target="_blank" rel="noopener noreferrer">
                            <button className="mx-auto text-black bg-white rounded-lg font-semibold py-2 px-20 whitespace-nowrap hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                                Visit Website ‎ ➪
                            </button>
                        </a>

                    </div>



                </div>

            </section>


            <section className="border-2 border-white rounded-xl max-w-4xl mx-auto p-5 mb-44">
                <div className="">
                    <h2 className="font-bold mb-3 text-xl">Event Description</h2>
                    <p className="text-gray-200 pb-2">
                        Atlassian X UNIHACK 2025 is Australia’s premier student hackathon, bringing together innovators, coders, and creatives at Monash University. Over an intense three-day challenge, teams will brainstorm ideas, develop prototypes, and pitch to industry experts for a chance to win exciting prizes. Whether you're a beginner or a seasoned hacker, it's the perfect opportunity to collaborate, learn, and showcase your skills! 🚀
                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}