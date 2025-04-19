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
                <h2 className="text-4xl font-bold">Women in AI: Impact Hackathon

                </h2>
                <p className="text-gray-400 mt-5 max-w-2xl">
                    A one-day hackathon focused on using Artificial Intelligence to tackle gender inequality. Choose from Code or No-Code tracks and compete for prizes, mentorship, and more — no experience needed! 🤖💡

                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-row gap-6 max-w-4xl w-full">

                    <div className="relative flex-1 border-2 border-white rounded-xl overflow-hidden">
                        <Image
                            src="/womeninai.webp"
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
                                Sat, 10 May, 9AM to 6PM

                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                Versent Office
                                Level 19, 8 Exhibition St, Melbourne VIC 3000

                            </p>
                        </div>


                        {/* Open-To */}
                        <div className=" flex items-start space-x-3">
                            <Image src="openToIcon.svg" width={30} height={30} alt="open to icon icon" />
                            <p className="font-bold">
                                University Students (Beginner to Experienced)

                            </p>
                        </div>


                        {/* Format */}
                        <div className=" flex items-center space-x-3">
                            <Image src="formatIcon.svg" width={30} height={30} alt="format icon" />
                            <p className="font-bold">
                                In Person
                            </p>
                        </div>


                        {/* Cost */}
                        <div className=" pb-5 flex items-center space-x-3">
                            <Image src="costIcon.svg" width={30} height={30} alt="cost icon" />
                            <p className="font-bold">
                                FREE
                            </p>
                        </div>


                        <a href="https://events.humanitix.com/women-in-ai-impact-hackathon" target="_blank" rel="noopener noreferrer">
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
                        Hosted by Robogals Melbourne and DSCubed in partnership with Versent, this one-day hackathon challenges students to use AI to solve issues of gender inequality. With Code and No-Code options, workshops, all-day mentor support, free food, and a $1000 prize pool, it’s the perfect opportunity to build, learn, and make real impact. Teams of 2 to 4, or sign up solo and we’ll match you. Open to all skill levels. 🎯✨

                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}