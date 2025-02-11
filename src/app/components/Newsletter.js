import Image from "next/image"

export default function Newsletter() {
    return (
        <div>
            {/* Newsletter Section */}
            <div className="relative max-w-4xl mx-auto my-32 text-center p-8 pb-56 rounded-xl">



                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF896E] to-[#A49EFF] h-full rounded-lg p-[2px]">


                    <Image src="/stars.svg" width={120} height={120} alt="dino" className="absolute -top-10 -right-16" />


                    {/* Inner Black Background */}
                    <div className="h-full w-full bg-[#131313] rounded-lg p-8">

                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF896E] to-[#A49EFF] text-transparent bg-clip-text">
                            Join the Newsletter 🎉
                        </h2>

                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                            Never again miss another Hackathon, get notified of all upcoming hackathons happening in Melbourne. No spam.
                        </p>

                        {/* <button className="mt-8 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-300 hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                            Keep me Updated!
                        </button> */}

                        <div className="flex justify-center mt-8">
                            <iframe className="hover:scale-105 transition transform duration-300"
                                src="https://embeds.beehiiv.com/e501cc41-cb99-45bd-9da3-21420a4e6cf7?slim=true"
                                data-test-id="beehiiv-embed"
                                height="52"
                                width="400px"
                                frameBorder="0"
                                scrolling="no"
                                style={{
                                    margin: "0",
                                    borderRadius: "10px",
                                    backgroundColor: "transparent",

                                }}
                            />
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}