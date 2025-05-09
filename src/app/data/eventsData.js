import { getPastEvents, getUpcomingEvents } from "@/app/utils/eventUtils";

const events = [
    {
        // id: 1,
        link: "EventListing1",
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
        // id: 3,
        link: "EventListing3",
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
        // id: 2,
        link: "EventListing2",
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
    }
];

const hackathonEventsSorted = events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

const getPastHackathonEvents = () => getPastEvents(hackathonEventsSorted);
const getUpcomingHackathonEvents = () => getUpcomingEvents(hackathonEventsSorted);

export { hackathonEventsSorted, getPastHackathonEvents, getUpcomingHackathonEvents };