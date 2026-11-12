import React from 'react'

import { createMetadata } from "../../../lib/createMetadata";
import SongkranContent from "../../../content/festivals/songkranContent";
import styles from "../../../components/EventPost/EventPost.module.scss";
import Siderbar from "../../../components/Aside/Aside"



export const metadata = createMetadata({
    title: "Loy Krathong Festival",
    description: "Experience the magical beauty of floating lanterns and illuminated waterways during Thailand's most romantic festival.",
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