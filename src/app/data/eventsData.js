import { getPastEvents, getUpcomingEvents } from "@/app/utils/eventUtils";

const eventTypes = {
    hackathon: "hackathon",
    startup: "startup",
};


/**
 * @typedef {Object} Event
 * @property {string} link - *Unique* URL slug e.g. "cissa-codebrew"
 * @property {string} type - Event type (eventTypes.hackathon or eventTypes.startup)
 * @property {string} title - Event title
 * @property {string} startDate - Event start date and time in ISO format
 * @property {string} endDate - *Optional* Event end date and time in ISO format
 * @property {string} location - Physical location of the event
 * @property {string} image - Image path for event thumbnail
 * @property {string} externalLink - Link to external registration or event page
 * @property {string} shortDescription - Brief event description
 * @property {string} description - Full event description
 * @property {string} cost - Price information for the event
 * @property {string} format - Event format (In-Person, Online, Hybrid)
 * @property {string} openTo - Target audience for the event
 */

const events = [
    {
        link: "EventListing1",
        type: eventTypes.hackathon,
        title: "CISSA Codebrew",
        startDate: "2025-04-24T12:00:00",
        endDate: "2025-04-27T14:00:00",
        location: "The Spot, Copland Theatre",
        image: "/codebrew.webp",
        externalLink: "https://events.humanitix.com/cissa-codebrew?hxchl=mkt-sch",
        shortDescription: "Another year, another Codebrew! 💻✨",
        description: "Codebrew is a 4-day, 3-night hackathon where university students of all skill levels come together to build innovative tech solutions. Whether you're a first-timer or an experienced hacker, you'll have access to mentor support, pre-event workshops, and plenty of opportunities to learn and collaborate. Expect free merch, thousands of dollars worth of food, fun challenges, and a stacked prize pool judged by industry professionals. It's the ultimate chance to connect, create, and make something amazing with like-minded students.",
        cost: "$15 Early Bird – $20 General",
        format: "In-Person",
        openTo: "University Students"
    },
    {
        link: "EventListing3",
        type: eventTypes.hackathon,
        title: "Women in AI: Impact Hackathon",
        startDate: "2025-05-10T09:00:00",
        endDate: "2025-05-10T18:00:00",
        location: "Versent Office, Melbourne",
        image: "/womeninai.webp",
        externalLink: "https://events.humanitix.com/women-in-ai-impact-hackathon",
        description: "Hosted by Robogals Melbourne and DSCubed in partnership with Versent, this one-day hackathon challenges students to use AI to solve issues of gender inequality. With Code and No-Code options, workshops, all-day mentor support, free food, and a $1000 prize pool, it’s the perfect opportunity to build, learn, and make real impact. Teams of 2 to 4, or sign up solo and we’ll match you. Open to all skill levels.",
        shortDescription: "A one-day hackathon focused on using Artificial Intelligence to tackle gender inequality. Choose from Code or No-Code tracks and compete for prizes, mentorship, and more — no experience needed! 🤖💡",
        cost: "FREE",
        format: "In Person",
        openTo: "University Students (Beginner to Experienced)"
    },
    {
        link: "EventListing2",
        type: eventTypes.hackathon,
        title: "MACATHON 2025",
        // startDate: "2025-04-05T18:00:00",
        // endDate: "2025-04-07T18:00:00",
        startDate: "2025-04-24T18:00:00",
        endDate: "2025-04-26T18:00:00",
        location: "C1 Lecture Theatre, Monash University Clayton Campus",
        image: "/MACATHON.webp",
        externalLink: "https://events.humanitix.com/macathon-2025",
        description: "MACATHON 2025 is a 48-hour hackathon where students work in teams to solve a surprise challenge using technology. With access to workshops, industry mentors, and a strong prize pool, it's the perfect place to test your skills and make something awesome. Whether you join in person or online, you’ll walk away with new experience, connections, and maybe even a trophy.",
        shortDescription: "Join MACATHON 2025 for 48 hours of innovation, collaboration, and creativity as students tackle a surprise theme and build impactful IT solutions! Open to all Australian uni & TAFE students, in-person or online. 💡💻",
        cost: "$10 (MAC Members) / $15 (Non-Members)",
        format: "Hybrid (In-Person & Online)",
        openTo: "Australian University & TAFE Students"
    },
    {
        link: "StartupListing1",
        type: eventTypes.startup,
        title: "Founder Breakfast Club x Sparks x IRL",
        startDate: "2025-04-22T09:15:00",
        endDate: "2025-04-22T11:30:00",
        location: "Studley Park Boathouse, 1 Boathouse Rd, Kew VIC 3101 (The Conservatory)",
        image: "/breakfast.avif",
        externalLink: "https://lu.ma/amberbreakfastclub",
        shortDescription: "Start your week the way founders should — with coffee, croissants, and great company. A curated morning gathering for founders, builders, and creative minds to connect and collaborate IRL. ☕️💡",
        description: "Hosted by IRL by Amber and Sparks, this intimate founder breakfast is designed to spark genuine conversations, collaborations, and micro-moments of inspiration. Whether you're scaling a startup or just getting started, expect coffee, ideas, and real connections without the awkward networking. Come early, stay open, and bring your brain (and your banter). Limited spots — RSVP essential. ⚡️🥐",
        cost: "FREE",
        format: "In-Person",
        openTo: "Founders, Builders, Creatives"
    },
    {
        link: "StartupListing2",
        type: eventTypes.startup,
        title: "How to Raise Your First Million",
        startDate: "2025-04-29T18:00:00",
        endDate: "2025-04-29T21:00:00",
        location: "The Malaysian Theatre, Glyn Davis Building (B1 Level), University of Melbourne, Masson Rd, Parkville VIC 3010",
        image: "/howtoraise.webp",
        externalLink: "https://events.humanitix.com/mlai-x-enactus-how-to-raise-your-first-million",
        shortDescription: "A masterclass for AI startup founders, investors, and aspiring entrepreneurs — featuring raw insights from investors, founders, and fundraising experts on how to secure your first million in capital. 💰🤖",
        description: "Hosted by MLAI and Enactus, this AI startup funding masterclass is designed for founders and builders looking to raise their first million. Expect honest advice from investors, lessons from startup founders, and behind-the-scenes insights into the funding process. Powered by Boab and the Generational AI funding initiative, the event includes networking, panels, and plenty of opportunities to connect over gourmet refreshments. Whether you're pitching your first deck or just exploring the startup scene, this event is a must. 💼✨",
        cost: "From $15",
        format: "In-Person",
        openTo: "AI Founders, Students, Entrepreneurs"
    },
    {
        link: "StartupListing3",
        type: eventTypes.startup,
        title: "NEXT [Founder Day]: From Front Door to Funded",
        startDate: "2025-04-30T13:00:00",
        endDate: "2025-04-30T19:00:00",
        location: "Cremorne Digital Hub, 80 Balmain St, Cremorne VIC 3121",
        image: "/next.avif",
        externalLink: "https://lu.ma/qazdbial",
        shortDescription: "A full afternoon designed for founders to access capital, refine their strategy, and learn directly from top VCs, lawyers, and mentors. Hosted by Cremorne Digital Hub and built to accelerate high-growth startups. 🚀📊",
        description: "NEXT [Founder Day] is a bi-monthly founder-focused event hosted at Cremorne Digital Hub. It features pitch deck breakdowns, inside looks into VC decision-making, and legal workshops that prepare founders for funding. Cap it off with curated networking designed to connect you with VCs, advisors, and potential partners. Whether you're raising your first round or prepping to scale globally, this event gives you the insights and connections to move forward confidently. 🧠💼",
        cost: "FREE",
        format: "In-Person",
        openTo: "Startup Founders, Entrepreneurs, Investors"
    },
    {
        link: "StartupListing4",
        type: eventTypes.startup,
        title: "StartSpace x Build Club & MLAI Co-working Day",
        startDate: "2025-05-03T10:00:00",
        endDate: "2025-05-03T17:00:00",
        location: "State Library Victoria — StartSpace, 328 Swanston St, Melbourne VIC 3000",
        image: "/BC_may.avif",
        externalLink: "https://lu.ma/du0uqax1?tk=58qCfr",
        shortDescription: "Join Melbourne's two biggest AI communities for a day of demos, building, and co-working at StartSpace. Whether you're deep into your AI project or just starting out, come hang out, show off what you're working on, and connect with the city's top builders. 🤖☕️",
        description: "Hosted by Build Club and MLAI, this monthly co-working day brings together AI enthusiasts to work on projects, share demos, and meet like-minded builders. Kicking off with intros and optional demo sessions, followed by group lunch and focused co-working, it's a casual yet productive way to plug into the Melbourne AI community. Held at StartSpace, State Library Victoria's entrepreneurship hub, the space supports early-stage founders with mentoring, community, and collaboration. Open to everyone, with limited access for non-members after 2PM. Show up early, bring your laptop, and get ready to build. 💡💻",
        cost: "FREE",
        format: "In-Person",
        openTo: "AI Builders, Founders, Developers, Students"
    },
    {
        link: "StartupListing5",
        type: eventTypes.startup,
        title: "Startmate Pitch Night (Melbourne)",
        startDate: "2025-05-08T17:30:00",
        endDate: "2025-05-08T19:45:00",
        location: "Tank Stream Labs, Collins Street, Level 6, 440 Collins St, Melbourne VIC 3000",
        image: "/pitchnight.avif",
        externalLink: "https://lu.ma/startmate-pitchnight",
        shortDescription: "Come see what Australia's boldest early-stage founders have been building. A night of pitches, pizza, networking, and inspiration hosted by Startmate. 🍕🚀",
        description: "Hosted by Startmate, this pitch night showcases founders from programs like Launch Club, Student Fellowship, Women Fellowship, and more. Expect inspiring ideas, a supportive community, and a whole lot of pizza. The evening includes founder pitches, networking, and post-event drinks at State of Grace. Whether you're building, investing, or just curious — come connect, cheer, and get inspired. 🧑‍🚀💬",
        cost: "$12",
        format: "In-Person",
        openTo: "Startup Enthusiasts, Founders, Investors, Students"
    },
    // (incorrect date?)
    {
        link: "StartupListing6",
        type: eventTypes.startup,
        title: "StartSpace Flip The Pitch",
        startDate: "2025-03-29T09:15:00",
        endDate: "2025-03-29T11:00:00",
        location: "Conversation Quarter, State Library Victoria, 328 Swanston St, Melbourne VIC 3000 (Livestream available online)",
        image: "/startspace.jpg",
        externalLink: "https://www.startspacehq.com.au/events/flip-the-pitch",
        shortDescription: "20 speakers. 3 minutes each. One room full of Victoria's best startup resources. Join this high-energy evening and discover how funders, accelerators, and ecosystem leaders support early-stage founders. ⚡🎤",
        description: "Flip The Pitch is an evening of fast-paced presentations from 20 key players in Victoria's startup scene — including VCs, accelerators, universities, founder communities, and government programs. Learn who can help you grow, where to find funding, and how to plug into the startup ecosystem. Expect insights, networking, and a few surprises. In-person attendees enjoy a drink on arrival and access to networking after the talks. Whether you're just starting out or scaling, this is your go-to guide to Victoria's founder resources. 🧠💼",
        cost: "$15 - $36",
        format: "In-Person + Online",
        openTo: "Aspiring Founders, Early-Stage Startups, Ecosystem Supporters"
    },
    {
        link: "StartupListing7",
        type: eventTypes.startup,
        title: "UoM to Uber to Unicorn w/ Rob Skillington",
        startDate: "2025-05-13T17:30:00",
        endDate: "2025-05-13T19:15:00",
        location: "Melbourne Connect 700 Swanston St, Carlton VIC 3053 (Mezzanine Level)",
        image: "/uber.avif",
        externalLink: "https://lu.ma/bkqp4gvo?tk=VJpo7n",
        shortDescription: "Hear the journey of Aussie-born Rob Skillington — from the University of Melbourne to Uber, and now co-founder of $1.6B startup Chronosphere. An intimate, behind-the-scenes session on startups, scaling, and building in Silicon Valley. 🚀🇦🇺",
        description: "Join us for an exclusive fireside chat with Rob Skillington, co-founder and CTO of Chronosphere — a US$1.6B unicorn startup. From UniMelb to Uber, and now building one of the most powerful tools in cloud observability, Rob will share stories on startup life, Silicon Valley, technical hiring, and what it takes to scale a venture-backed company. This is a rare opportunity to learn, ask questions, and connect with other ambitious minds in tech, AI, and startups. Bonus: Rob is hiring. 👀💬",
        cost: "FREE",
        format: "In-Person",
        openTo: "Students, Aspiring Founders, Engineers, AI/Tech Enthusiasts"
    }
];

// Hackathon events
const hackathonEvents = events.filter(event => event.type === eventTypes.hackathon);
const hackathonEventsSorted = hackathonEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

const getPastHackathonEvents = () => getPastEvents(hackathonEventsSorted);
const getUpcomingHackathonEvents = () => getUpcomingEvents(hackathonEventsSorted);



// Startup events
const startupEvents = events.filter(event => event.type === eventTypes.startup);
const startupEventsSorted = startupEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

const getPastStartupEvents = () => getPastEvents(startupEventsSorted);
const getUpcomingStartupEvents = () => getUpcomingEvents(startupEventsSorted);



export { 
    events, 
    getPastHackathonEvents, 
    getUpcomingHackathonEvents, 
    getPastStartupEvents, 
    getUpcomingStartupEvents
};