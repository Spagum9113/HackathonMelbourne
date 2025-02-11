import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div>
            <footer>


                <div className="flex flex-col md:flex-row items-center justify-between py-6 max-w-4xl mx-auto border-t">

                    <Link href="/">
                        <Image src="/logo.svg" width={30} height={30} alt="logo" />
                    </Link>

                    <p className="text-center">
                        Copyright © Hackathon Melbourne | Made with ❤️ by Ethan | Support me at&nbsp;
                        <a href="https://buymeacoffee.com/ethanlee9113" target="blank" className="underline">
                            Buy Me a Coffee.
                        </a>
                    </p>



                    <div className="flex space-x-4">
                        <a href="mailto:ethanlee9113@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src="mail.svg" width={30} height={30} alt="email icon" />
                        </a>


                        <a href="https://x.com/ethan_leee9113" target="_blank" rel="noopener noreferrer">
                            <Image src="x.svg" width={30} height={30} alt="x icon" />
                        </a>


                        <a href="https://www.linkedin.com/in/ethan-lee-resume/" target="_blank" rel="noopener noreferrer">
                            <Image src="linkedin.svg" width={30} height={30} alt="linkedin icon" />
                        </a>



                    </div>


                </div>





            </footer>

        </div>
    )
}