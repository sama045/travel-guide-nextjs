import React from 'react'

import { createMetadata } from "../../../lib/createMetadata";
import SongkranContent from "../../../content/festivals/songkranContent";
import styles from "../../../components/EventPost/EventPost.module.scss";
import Siderbar from "../../../components/Aside/Aside"



export const metadata = createMetadata({
    title: "Candle Festival",
    description: "Discover the latest events and festivals in Thailand.",
    image: "/images/events.jpg",
});


const page = () => {
    return (
        <div className={styles.content_page}>

            <SongkranContent />                
            <Siderbar />

        </div>
    )
}

export default page