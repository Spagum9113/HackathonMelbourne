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
                <h2 className="text-4xl font-bold">CCA x Mobilise Hackathon</h2>
                <p className="text-gray-400 mt-5 mx-5 max-w-2xl">
                    A weekend of innovation where technology meets social impact 🧡
                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-36 pb-5">





                {/* Image Section */}
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

                    <div className="relative border-2 border-white rounded-xl overflow-hidden max-w-full sm:w-full mx-5 sm:mx-0 w-[300] h-[200px] sm:h-full">

                        <Image
                            src="/ccahackathon.avif"
                            alt="Event Image"
                            fill
                            className="object-cover"
                        />
                    </div>



                    {/* Quick Details */}
                    <div className=" relative border-2 rounded-xl items-center overflow-hidden mx-5 sm:mx-auto max-w-lg sm:max-w-xs space-y-4 p-4">


                        {/* Date */}
                        <div className="flex items-center space-x-3">
                            <Image src="dateIcon.svg" width={30} height={30} alt="date icon" />
                            <p className="font-bold">
                                Thu, 27 Mar, 6PM – Sun, 30 Mar, 2:30PM
                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Monash University LTB G31
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
                                Hybrid (Online & In-Person)
                            </p>
                        </div>


                        {/* Cost */}
                        <div className=" pb-5 flex items-center space-x-3">
                            <Image src="costIcon.svg" width={30} height={30} alt="cost icon" />
                            <p className="font-bold">
                                FREE
                            </p>
                        </div>


                        <a href="https://www.eventbrite.com.au/e/cca-x-mobilise-hackathon-tickets-1268413832919?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
                            <button className="mx-auto text-black bg-white rounded-lg font-semibold py-2 px-14 whitespace-nowrap hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
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
                        Across 48 hours, teams will develop tech-driven solutions to address homelessness while gaining hands-on experience in problem-solving, collaboration, and solution design. With mentor guidance, industry resources, and engaging workshops, this hackathon is open to all university students with no prior experience required. Team sizes are 3-5, but you can also sign up individually and be matched to a team. It’s the perfect opportunity to innovate, learn, and create real-world change while competing for exciting prizes! 🚀💡
                    </p>
                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}