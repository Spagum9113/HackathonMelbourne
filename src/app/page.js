import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Heroshot from "@/app/components/Heroshot"
import Newsletter from "@/app/components/Newsletter"
import { Analytics } from "@vercel/analytics/react"

import EventListingsGrid from "@/app/components/EventListingsGrid"
import { getUpcomingHackathonEvents } from "@/app/data/eventsData";


export default function Home() {
  return (
    <div className="bg-[url('/bg1.png')] bg-cover bg-center min-h-screen text-white">
      <Head>
        <title>Hackathon Melbourne - Find & Join Hackathons in Melbourne</title>
        <meta name="description" content="Discover and never miss another hackathon in Melbourne. Get notified, browse upcoming events, and stay connected with the hackathon community!" />
        <meta name="keywords" content="Melbourne hackathons, AI competitions, student hackathons, coding competitions, startup events" />
        <meta name="author" content="Hackathon Melbourne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://hackathonmelbourne.au/" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>



      <Header />
      <Heroshot />

      <div id="hackathons">
      <div>
            {/* Event Listings */}
            <div className="max-w-6xl mx-auto px-6 relative pt-14 min-h-screen">

                <Image src="/dinosaur.svg" width={70} height={70} alt="dino" className="absolute -top-2 left-12 sm:-top-2 sm:left-36 " />

                {/* Title */}
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mb-6 border-2 rounded-xl p-6">
                    <div>
                        <h3 className="text-2xl font-bold">Popular Hackathons</h3>
                        <p className="text-gray-400">Melbourne</p>
                    </div>

                    <a href="/PastEvents" className="mt-5 md:mt-0">
                        <button className="text-black bg-white rounded-lg font-bold py-2 px-6 hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105 transition transform duration-200 ease-in-out">
                            Past Hackathons ‎ ➪
                        </button>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl ">

                    <EventListingsGrid events={getUpcomingHackathonEvents()} />
                    
                </div>
            </div>
        </div >

      </div>


      <div id="newsletter">
        <Newsletter />
      </div>


      <Footer />
      <Analytics />
    </div >
  )
}


