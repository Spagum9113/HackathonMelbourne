import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Newsletter from "@/app/components/Newsletter"
import Image from "next/image"

export default function EthanTrang() {
    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-[position:50%_30%] min-h-screen text-white overflow-x-hidden">
            <Header />

            {/* Intro Section */}
            <section className="flex flex-col items-center text-center mt-8 pt-20 md:mt-16 md:pt-32">
                <h2 className="text-2xl font-bold md:text-4xl mx-10">Founders Unravelled: Ethan Trang</h2>
                <p className="text-gray-400 mt-3 mx-4 text-sm md:mt-5 md:mx-5 md:text-base max-w-2xl">29th March 2025</p>
            </section>

            {/* Image & Quick Details Box */}
            <section className="flex justify-center pt-16 pb-6 w-full md:pt-36 md:pb-10">
                <div className="flex flex-col gap-4 w-full max-w-4xl mx-4 md:mx-auto md:flex-row md:gap-6">
                    <div className="relative border-2 border-white rounded-xl overflow-hidden min-h-[300px] md:min-h-[200px] lg:min-h-[400px] flex-1 md:flex-[2]">
                        <Image
                            src="/ethan_trang_2.avif"
                            alt="Event Image"
                            fill
                            className="object-cover rounded-lg filter brightness-100 hover:brightness-75 transition-all duration-200"
                        />
                    </div>
                    <div className="relative border-2 border-white rounded-xl overflow-hidden min-h-[300px] md:min-h-[200px] lg:min-h-[400px] flex-1 md:flex-[2]">
                        <Image
                            src="/ethan_trang.jpeg"
                            alt="Quick Details Image"
                            fill
                            className="object-cover rounded-lg filter brightness-100 hover:brightness-75 transition-all duration-200"
                        />
                    </div>
                </div>
            </section>







            {/* Paragraph 1 */}
            <section className="border-2 border-white rounded-xl max-w-4xl mx-4 p-4 md:mx-auto md:p-5 mb-6 md:mb-10">
                <div>
                    <h2 className="font-bold mb-3 text-xl md:mb-5 md:text-2xl">Some context</h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        When I first heard of Ethan’s journey, something immediately resonated with me. <br /><br />
                        I've been following him for quite some time now, probably over half a year if I had to take a guess? <br /><br />
                        I don’t exactly remember when it all started, but there was just something about his story that clicked. <br /><br />
                        Perhaps it was because I found him inspiring. <br /><br />
                        Perhaps it was his impressive achievements at such a young age. <br /><br />
                        Or perhaps it was just because he had the same name as me. <br /><br />
                        But what I do know is that he is absolutely cracked and such a cool individual to be able to meet. <br /><br />
                        Here’s his story, as best as I can unravel it:
                    </p>
                </div>
            </section>

            {/* Paragraph 2 */}
            <section className="border-2 border-white rounded-xl max-w-4xl mx-4 p-4 md:mx-auto md:p-5 mb-6 md:mb-10">
                <div>
                    <h2 className="font-bold mb-3 text-xl md:mb-5 md:text-2xl">The accidental start</h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        I had always pictured Ethan as this prodigy, a 10x engineer in Sydney that probably started coding the moment he came out of the womb. <br /><br />
                        That was my assumption. <br /><br />
                        However, what he shared during our conversation genuinely surprised me. <br /><br />
                        He revealed that he had only started coding around three years ago, and even then, it was an on-and-off thing. <br /><br />
                        But even more surprisingly, it all began by accident. <br /><br />
                        His story traces back about three years ago to his time in Vietnam where a friend convinced him to enroll in a free Python course at Algorithmics, a Vietnamese coding school. <br /><br />
                        At first, he wasn’t really too interested but decided to give it a chance anyways. <br /><br />
                        And it seems that this was the turning point that sparked an entire chain of events. <br /><br />
                        The next thing you know, <br /><br />
                        He’s signed up as a teaching assistant and teaching kids Python, all just to be able to take advantage of the school’s resources. <br /><br />
                        Then secured an internship and did sales and marketing. <br /><br />
                        Soon after he got ANOTHER internship, this time an AI Engineering internship (despite not being proficient in coding) and found himself working on the AI team at one of the largest tech companies in Vietnam. <br /><br />
                        Tell me this doesn't sound crazy to you, and all this before even starting uni… <br /><br />
                        But anyways.
                    </p>
                </div>
            </section>

            {/* Paragraph 3 */}
            <section className="border-2 border-white rounded-xl max-w-4xl mx-4 p-4 md:mx-auto md:p-5 mb-6 md:mb-10">
                <div>
                    <h2 className="font-bold mb-3 text-xl md:mb-5 md:text-2xl">The rise</h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        The next chapter of Ethan’s journey arrived with university. He decides to move to Sydney, leaving Vietnam behind. <br /><br />
                        I asked him: <em>“Why Sydney specifically?”</em> <br /><br />
                        He told me it was primarily because of the tech scene there. <br /><br />
                        Back then, his dream was to land a high-paying tech job at one of the big tech companies like Google or Amazon. <br /><br />
                        But what surprised me was that he mentioned his brother was living in Melbourne, yet he chose to set off and pursue his own path. <br /><br />
                        At that point, he didn't even know what startups were and had never heard the term before. <br /><br />
                        He eventually crossed paths with Pete (his co-founder for DoryAI) on LinkedIn, and that was the beginning of his startup era. <br /><br />
                        They started working on DoryAI together, pitched it at Build Club’s accelerator and won! <br /><br />
                        Next thing, they’re off to San Francisco. <br /><br />
                        Our convo shifted to the topic of cold outreach where Ethan shared a story that struck me. <br /><br />
                        It was a time when he had a CEO he reached out to say directly to his face: <br /><br />
                        <em>“You're wasting my time”</em> <br /><br />
                        The main lesson he took away from this experience was to always show your <strong>credibility</strong>. <br /><br />
                        <em>What does that mean?</em> <br /><br />
                        To me, it means being mindful of the other person's time, consistently offering value in return, and demonstrating <strong>why</strong> you deserve their attention. <br /><br />
                        <em>(idk if that's what he meant but that’s just my takeaway lol)</em> <br /><br />
                        The next stage was Relevance AI. <br /><br />
                        This is the part that stood out the most to me <br /><br />
                        You see, most people including myself would be thrilled to even land an unpaid internship at a startup like Relevance AI. <br /><br />
                        But not Ethan. <br /><br />
                        He wanted more. <br /><br />
                        He wanted not just an internship but an actual graduate role. <br /><br />
                        Because he knew his worth and had the confidence in himself, he went out and directly contacted the co-founders himself. <br /><br />
                        And he actually did it. <br /><br />
                        At 19, barely settled in Sydney, he became an AI engineer at Relevance AI.
                    </p>
                </div>
            </section>

            {/* Paragraph 4 */}
            <section className="border-2 border-white rounded-xl max-w-4xl mx-4 p-4 md:mx-auto md:p-5 mb-6 md:mb-10">
                <div>
                    <h2 className="font-bold mb-3 text-xl md:mb-5 md:text-2xl">The now</h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        Fast forward to today, and I'm still wrapping my head around where Ethan is now. <br /><br />
                        After working at Relevance AI for about six months, alongside running his side-hustle software agency, he burned out and decided to leave it all behind. <br /><br />
                        He took some time to reflect on the past, what happened and what he truly wanted to do next. <br /><br />
                        I believe he settled on building, focusing on self-improvement and working on what he enjoyed most. <br /><br />
                        His goal is to build quality products that his users love and master the art of marketing. That’s what drives him now, and it’s kind of inspiring ngl. <br /><br />
                        He’s currently working on three projects at the moment (<a href="https://www.bloomnote.me/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BloomNote</a>, <a href="https://www.trynemo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Nemo</a> & <a href="https://www.remock.art/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Remock</a>) and spends 4+ hours daily just building. <br /><br />
                        Tell me how many people you know that are as dedicated at this man right here. <br /><br />
                        Take a look at his <a href="https://github.com/ethantrang" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a> and you’ll see just pure green, bro is literally growing a forest. <br /><br />
                        At the end of our meeting, I asked him quite a personal question: <br /><br />
                        <em>“Do you have a dream?”</em> <br /><br />
                        He paused for a moment and took some time to reflect. <br /><br />
                        Then answered that his dream is to reach 6 to 7 figures in ARR by 2025 or 2026. <br /><br />
                        I didn’t even question him on this because if anyone can do it, it’s him. <br /><br />
                        But his overarching dream is simply to be free. To work because he can, not because he has to. <br /><br />
                        A super high-leverage SaaS, bringing good money, letting him do whatever he wants, that’s his vision. <br /><br />
                        And just like that, our meeting ended.
                    </p>
                </div>
            </section>

            {/* Paragraph 5 */}
            <section className="border-2 border-white rounded-xl max-w-4xl mx-4 p-4 md:mx-auto md:p-5 mb-6 md:mb-10">
                <div>
                    <h2 className="font-bold mb-3 text-xl md:mb-5 md:text-2xl">My thoughts and takeaways</h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        I’ve been reflecting over our conversation this past week. <br /><br />
                        What I still remember to this day was this thing he said to me that keeps echoing in my head. <br /><br />
                        I explained my current situation to him; how I felt burnt out, juggling so many things yet not really achieving much. <br /><br />
                        And he told me that I needed to be <strong>focused</strong> and <strong>intentional</strong> about how and what I choose to spend my time on. <br /><br />
                        That was like some deep stuff that really spoke to me. <br /><br />
                        Since then, I’ve started saying no to things to focus on what’s most important. <br /><br />
                        Another memorable moment that I found particularly funny, was when he mentioned how he enjoyed visiting offices like Atlassian and TikTok and would just cold dm people to take him in. <br /><br />
                        One time he even had someone at Macquarie Group pretend that he was an intern just so he could tour the office. <br /><br />
                        Like who does this??? <br /><br />
                        And a pattern that I noticed in all of his stories and everything he recounted to me is that Ethan is a go-getter. <br /><br />
                        He isn’t scared to just walk into a company’s office, find whoever’s in charge, and start speaking with them. <br /><br />
                        He has confidence and is able to get things done.
                    </p>
                </div>
            </section>

            {/* Paragraph 6 */}
            <section className="border-2 border-white rounded-xl max-w-4xl mx-4 p-4 md:mx-auto md:p-5 mb-6 md:mb-10">
                <div>
                    <h2 className="font-bold mb-3 text-xl md:mb-5 md:text-2xl">To conclude</h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        When you talk to Ethan, one thing is clear. <br /><br />
                        He is ambitious and will work tirelessly to turn his goals into reality. <br /><br />
                        He’s definitely going places and is more knowledgeable and mature than even most adults I meet. <br /><br />
                        You would not believe that he’s just a second-year at USYD if he didn’t tell you. <br /><br />
                        Even till now, I still take heavy inspiration from him and stalk his progress on LinkedIn. <br /><br />
                        I would love to be able to meet him in person one day and get to know him better. <br /><br />
                        Perhaps one day, I’ll get that chance. <br /><br />
                        But if I were you, I’d definitely be keeping a close eye on him and what he’s about to cook up next. <br /><br />
                        -- <br /><br />
                        Find <strong>Ethan Trang</strong> here:{' '}
                        <span className="inline-flex flex-wrap gap-2 md:gap-4">
                            <a href="https://www.linkedin.com/in/ethan-trang/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
                            <a href="https://x.com/ethantrangg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">X</a>
                            <a href="https://github.com/ethantrang" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                        </span>
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}