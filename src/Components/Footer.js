import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h1>Go local Grow</h1>
          <p>
            We connect small businesses with local customers, offering a variety
            of handmade pottery, flowers, and tiffin services. Support local,
            grow local.
          </p>
        </div>

        <div className="footer-section explore">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/potery">Potery</a>
            </li>
            <li>
              <a href="/flower">Flowers</a>
            </li>
            <li>
              <a href="/food">Tiffin Services</a>
            </li>
            <li>
              <a href="/artistic">Artistic Items</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +91 8825936976</li>
            <li>Email: info@golocalgrow.in</li>
            <li>Mon - Fri: 8:00 AM - 9:00 PM</li>
            <li>Sat - Sun: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 - Developed by Quad Squad | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
