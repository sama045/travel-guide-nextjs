import React from 'react'

import { createMetadata } from "../../../lib/createMetadata";
import SongkranContent from "../../../content/festivals/songkranContent";
import styles from "../../../components/EventPost/EventPost.module.scss";
import Siderbar from "../../../components/Aside/Aside"



export const metadata = createMetadata({
    title: "Vegetarian Festival",
    description: "Experience a fascinating spiritual festival featuring sacred rituals, vegetarian cuisine, and colorful street processions.",
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