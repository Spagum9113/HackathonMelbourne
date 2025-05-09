import EventListingCard from "@/app/components/EventListingCard";

export default function EventListingGrid({events}) {
    
    return (
        events.map((event) => {return (
            <EventListingCard event={event} key={event.link} />
        )})
    )
}