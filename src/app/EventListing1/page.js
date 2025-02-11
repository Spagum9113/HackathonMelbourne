import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function EventListing1() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-32">
                <h2 className="text-4xl font-bold">MedHack: AI Hospital</h2>
                <p className="text-gray-400 mt-5 max-w-2xl">
                    MedHack 2025 is a hackathon where participants of all skill levels will build AI models to solve healthcare challenges in a simulated hospital.                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-row gap-6 max-w-4xl w-full">

                    <div className="relative flex-1 border-2 border-white rounded-xl overflow-hidden">
                        <Image
                            src="/listing1.webp"
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
                                Sat, 15 Feb, 2pm - 17 Feb, 5pm
                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Woodside Building for Technology and Design, 20 Exhibition Walk, Clayton VIC
                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon" />
                            <p className="font-bold">
                                AI Enthusiasts, Healthcare Professionals, Uni Students
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
                                $41.40
                            </p>
                        </div>


                        <a href="https://www.med-hack.com/" target="_blank" rel="noopener noreferrer">
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
                        MedHack 2025 is an AI hackathon from February 15-17 in Clayton, Australia, where participants will develop AI models to solve healthcare challenges in a simulated hospital. Open to all skill levels, the event offers workshops, mentorship, and opportunities to win prizes, with tracks for both beginners and advanced participants.
                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}