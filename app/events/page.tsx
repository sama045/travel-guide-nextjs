import React from 'react'
import { createMetadata } from "../../lib/createMetadata";
import Image from "next/image";
import EventCard from '../../components/EventCard/EventCard';


export const metadata = createMetadata({
    title: "Events",
    description: "Discover the latest events and festivals in Thailand.",
    image: "/images/events.jpg",
});


const page = () => {
    return (
        <main className="events-page">
            <section className='hero'>
                <div className='container text-center'>
                    <h1><span className='font34'>Most Popular Events...</span>in Bangkok</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                </div>
            </section>
            <section className='content container'>
                <EventCard />
            </section>
            <section className='content container'>
                <h2>Discover Thailand</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </section>
        </main>
    )
}

export default page