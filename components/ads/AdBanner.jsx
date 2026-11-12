"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const AdBanner = ({ slot }) => {
  return (
    <div className="ad-banner">
      <div id={slot.id}>
        <Image src={slot.imageBanner} width={slot.width} height={slot.height} alt={slot.alt}/>
      </div>
    </div>
  );
};

export default AdBanner;
