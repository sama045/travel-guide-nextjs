import React from "react";
import Image from "next/image";
import LogoImage from "@/assets/images/SiamJourneyThaiTravelLogoWT.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer-links"]}>
          <div>
          <a href="#">
            <Image src={LogoImage} alt="Logo" />
          </a>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#" title="Pre-wedding">
                  Pre-wedding
                </a>
              </li>
              <li>
                <a href="#" title="Entrance Tickets">
                  Entrance Tickets
                </a>
              </li>
              <li>
                <a href="#" title="Transportation Service">
                  Transportation Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#" title="About JNJ">
                  About JNJ
                </a>
              </li>
              <li>
                <a href="#" title="Contact Us">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" title="Events">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow us</h4>
            <ul>
              <li>
                <a href="#" title="About JNJ">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" title="Pre-wedding">
                  youtube
                </a>
              </li>
              <li>
                <a href="#" title="Entrance Tickets">
                  twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Subscribe</h4>
            <ul>
              <li>
                <a href="#" title="About JNJ">
                  About JNJ
                </a>
              </li>
              <li>
                <a href="#" title="Pre-wedding">
                  Pre-wedding
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">&copy; 2026 Thailand Travel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
