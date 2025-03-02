export default function Heroshot() {
    return (
        <section className="flex flex-col items-center text-center mt-10 sm:mt-16 py-16 md:py-32 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
                Hackathons in Melbourne
            </h2>

            <p className="text-gray-400 mt-5 max-w-full sm:max-w-2xl text-sm md:text-base">
                Whether you’re an experienced developer or a tech newcomer, explore our curated calendar to discover the best hackathon events in and around Melbourne.
            </p>

            <a href="#newsletter">
                <button className="bg-white text-black py-3 px-8 mt-10 mb-20 rounded-lg font-bold transition transform duration-200 ease-in-out hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-105">
                    Join the Newsletter
                </button>
            </a>
        </section>
    );
}
