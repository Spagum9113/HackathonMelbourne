import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"


export default function StartupListing4() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white">
            <Header />



            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-16 sm:pt-32">
                <h2 className="text-4xl font-bold">A Fireside Chat with Gen AI Unicorn: Leonardo.ai</h2>
                <p className="text-gray-400 mt-5 mx-5 max-w-2xl">
                    Join MLAI AUS for an exclusive fireside chat with Leonardo.ai’s co-founder, diving into their journey from a passion project to a unicorn acquired by Canva, and uncover insights on scaling AI startups. 🚀🔥


                </p>
            </section>



            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-16 sm:pt-36 pb-5">


                {/* Image */}
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

                    <div className="relative border-2 border-white rounded-xl overflow-hidden max-w-full sm:w-full mx-5 sm:mx-0 w-[300] h-[200px] sm:h-full">
                        <Image
                            src="/leonardo_march.png"
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
                                Wed, 19 Mar, 6PM - 7:30PM
                            </p>
                        </div>


                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <Image src="locationIcon.svg" width={30} height={30} alt="location icon" />
                            <p className="font-bold">
                                TBA, Collingwood VIC
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
                                FREE (Limited Spots)
                            </p>
                        </div>


                        <a href="https://lu.ma/sy66zur8?tk=R5Nnwx" target="_blank" rel="noopener noreferrer">
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
                        Join MLAI AUS for a fireside chat with Leonardo.ai’s co-founder, exploring their journey from a passion project to a unicorn acquired by Canva. Gain exclusive insights on scaling AI startups, product growth, and building a global user base. 🚀🔥
                        <br /><br />

                        Catering will be provided, courtesy of<a href="https://leonardo.ai/" target="_blank" className="text-blue-500 underline px-2 rounded transition"
                        >Leonardo.ai</a>
                        <br /><br />


                        Hosted by<a href="https://www.mlai.au/" target="_blank" className="text-blue-500 underline px-2 rounded transition"
                        >MLAI AUS</a>





                    </p>

                </div>
            </section>






            <Newsletter />
            <Footer />

        </div>
    )
}