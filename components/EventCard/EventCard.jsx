import React from "react";
import Image from "next/image";
import Link from "next/link";
import events from "../../data/events";
import styles from "./EventCard.module.scss";

const EventCard = () => {
  return (
    <div className={styles.events_container}>
      {events.map((event) => (
        <div
          key={event.id}
          className={`${styles.events_card} ${styles[event.layout]}`}
        >
          <Link key={event.id} href={`/events/${event.slug}`}>
            <Image src={event.thumbnail} alt={event.title} />
            <div className={styles.events_card_overlay}>
              <div className={styles.events_card_title}>
                <h3>{event.title}</h3>
              </div>
              <div className={styles.events_card_description}>
                <p>{event.description}</p>
                <p className={styles.events_card_readmore}>Read More</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
