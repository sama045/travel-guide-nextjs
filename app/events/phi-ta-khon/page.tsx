import React from 'react'

import { createMetadata } from "../../../lib/createMetadata";
import PhiTaKhonContent from "../../../content/festivals/PhiTaKhonContent";
import styles from "../../../components/EventPost/EventPost.module.scss";
import Siderbar from "../../../components/Aside/Aside"



export const metadata = createMetadata({
    title: "Phi Ta Khon Festival",
    description: "Discover Thailand's most colorful ghost festival filled with masks, parades, and ancient folklore.",
    image: "/images/events.jpg",
});


const page = () => {
    return (
        <div className={styles.content_page}>

            <PhiTaKhonContent />                
            <Siderbar />

        </div>
    )
}

export default page