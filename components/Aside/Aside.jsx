import React from "react";
import Image from "next/image";
import Link from "next/link";
import events from "../../data/events";
import AdBanner from "@/components/ads/AdBanner";
import { AD_SLOTS } from "@/components/ads/ads.config";
import styles from "../../components/EventPost/EventPost.module.scss";

const Aside = () => {
  return (
    <aside>

      <AdBanner slot={AD_SLOTS.EVENT_SIDEBAR_TOP} />

      <h3>Top Atraction Place</h3>

      {events.slice(0, 4).map((event) => (

        <div key={event.id} className={styles.content_page_sidebar}>
          <div>
            <Link key={event.id} href={`/events/${event.slug}`}>
              <Image src={event.thumbnail} alt={event.title} />
            </Link>
          </div>
          <div>
            <Link key={event.id} href={`/events/${event.slug}`}>
              <h4>{event.title}</h4>
            </Link>
            <p>Location:{event.location}</p>
          </div>
        </div>

      ))}

      <AdBanner slot={AD_SLOTS.EVENT_SIDEBAR_BOTTOM} />

    </aside>
  );
};

export default Aside;
