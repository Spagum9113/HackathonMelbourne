"use client"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setSubmitted(true)
                setFormData({ name: "", email: "", message: "" })
            } else {
                // Handle non-200 responses
                const data = await response.json()
                setError(data.message || "An error occurred. Please try again.")
            }
        } catch (err) {
            setError("An error occurred while submitting the form. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-[url('/bg1.png')] bg-cover min-h-screen text-white">
            <Header />

            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-16 pt-32">
                <h2 className="text-4xl font-bold">Contact Us</h2>
                <p className="text-gray-400 mt-5 max-w-2xl">
                    Have questions or suggestions? Get in touch! Reach out to collaborate, ask about upcoming hackathons, or just say hi!
                </p>
            </section>

            {/* Form Section */}
            <section className="flex justify-center py-36">
                {submitted ? (
                    <p>Thank you for your message!</p>
                ) : (
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="border-2 border-white rounded-xl p-10 w-[600px]">
                            {/* Name Input */}
                            <div className="mb-6">
                                <label htmlFor="name" className="pb-2 block">Full Name *</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-6">
                                <label htmlFor="email" className="pb-2 block">E-mail *</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-6">
                                <label htmlFor="message" className="pb-2 block">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white focus:outline-none"
                                    rows="3"
                                    required
                                />
                            </div>

                            {/* Error Message */}
                            {error && <p className="text-red-500 mb-4">{error}</p>}

                            <button
                                type="submit"
                                className={`w-full bg-white text-black font-semibold py-3 rounded-lg mt-6 transition duration-300 transform hover:bg-transparent hover:text-white hover:border-2 hover:border-white hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit Form"}
                            </button>
                        </form>

                        {/* Social Media Links */}
                        <div className="border-2 border-white rounded-xl p-6 flex flex-col items-center gap-14 w-32 justify-center">
                            <a href="https://www.linkedin.com/in/ethan-lee-resume/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Image src="/linkedin.svg" width={300} height={300} alt="LinkedIn icon" className="hover:scale-110 transition duration-300 ease-in-out" />
                            </a>
                            <a href="https://x.com/ethan_leee9113" target="_blank" rel="noopener noreferrer" aria-label="X">
                                <Image src="/x.svg" width={300} height={300} alt="X icon" className="hover:scale-110 transition duration-300 ease-in-out" />
                            </a>
                            <a href="mailto:ethanlee9113@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                <Image src="/mail.svg" width={300} height={300} alt="Email icon" className="hover:scale-110 transition duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    )
}
