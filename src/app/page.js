import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Heroshot from "@/app/components/Heroshot"
import EventListings from "@/app/components/EventListings"
import Newsletter from "@/app/components/Newsletter"
import { Analytics } from "@vercel/analytics/react"


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
        <EventListings />

      </div>


      <div id="newsletter">
        <Newsletter />
      </div>


      <Footer />
      <Analytics />
    </div >
  )
}


