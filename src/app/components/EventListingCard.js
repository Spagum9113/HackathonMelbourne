import Image from "next/image"
import { humanReadableDate } from "@/app/utils/dateUtils";
import { EVENTS_BASE_PATH } from "@/app/constants/routes"

export default function EventListingCard({ event }) {

    return (
        <a href={`${EVENTS_BASE_PATH}${event.link}`} key={event.link} target="_blank" rel="noopener noreferrer">
            <div className="relative border-2 rounded-xl items-center overflow-hidden hover:scale-105 transition transform duration-200 ease-in-out">
                <Image src={event.image} width={400} height={400} className="w-full h-[275px] object-cover rounded-lg" alt="Event Image" />
                <div className=" p-5 ">
                    <h3 className="mb-1 text-lg font-bold">{event.title} ‎ ‎
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {humanReadableDate(event.startDate)}
                        {event.endDate && ` - ${humanReadableDate(event.endDate)}`}
                    </p>
                    <p className="text-gray-400 text-sm">{event.location}

                    </p>
                </div>


            </div>
        </a>
    )
}