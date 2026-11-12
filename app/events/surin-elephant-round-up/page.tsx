import React from 'react'

import { createMetadata } from "../../../lib/createMetadata";
import SongkranContent from "../../../content/festivals/songkranContent";
import styles from "../../../components/EventPost/EventPost.module.scss";
import Siderbar from "../../../components/Aside/Aside"



export const metadata = createMetadata({
    title: "Surin Elephant Round-Up",
    description: "Witness Thailand's majestic elephants showcase their strength, intelligence, and centuries-old bond with humans.",
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