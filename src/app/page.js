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
        <title>Hackathon Melbourne</title>
      </Head>
      <Header />
      <Heroshot />
      <EventListings />








      <div id="newsletter">
        <Newsletter />
      </div>


      <Footer />
      <Analytics />
    </div >
  )
}
