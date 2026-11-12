"use client";

import React from 'react';  
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoImage from "@/assets/images/SiamJourneyThaiTravelLogo.png";
import styles from "./Header.module.scss";
import Linkmenu from "./Linkmenu";
import headerMenu from '../../data/headerMenu';


const Header = () => {

  const [open, setOpen] = useState(false);

  // ESC
  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  
  return (
    <header className='container'>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
           <Image src={LogoImage}
           width="300"
           height="100%"
           alt="Logo" />
        </Link>

        <button
          type="button"
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.overlay} ${open ? styles.show : ""}`}
          onClick={() => setOpen(false)}
        />

        <nav className={`${styles.nav} ${open ? styles.show : ""}`}>

          <Linkmenu onClose={() => setOpen(false)} />

        </nav>
      </div>      
    </header>
  )
}

export default Header