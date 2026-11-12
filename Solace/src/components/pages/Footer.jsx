import React from "react";
import "./styles/Footer.scss";

import Logo from "../../assets/solace-circle-logo.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";
import Location from "../../assets/location.svg";


export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer-top">
        {/* COL 1 */}
        <div className="footer-col brand">
          <img src={Logo} alt="Solace Group" className="logo" />
          <h4 className="first-line">SOLACE</h4>
          <p className="second-line">GROUP</p>
          <p>
            With decades of experience under one roof, we know how property
            management works, but more importantly – we know how to make it work
            better.
          </p>
        </div>

        {/* COL 2 */}
        <div className="footer-col">
          <h4>SOLACE MANAGEMENT</h4>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>

        {/* COL 3 */}
        <div className="footer-col">
          <h4>CONTACT US</h4>

          <div className="contact-item">
            <img src={Mail} alt="email" />
            <span>info@solacemanagement.co.uk</span>
          </div>

          <div className="contact-item">
            <img src={Phone} alt="phone" />
            <span>020 3355 5093</span>
          </div>

          <div className="contact-item">
            <img src={Location} alt="location" />
            <span>
              6 Mitre Passage Greenwich,
              <br />
              London, SE10 0ER
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="social">
          <span>Follow us</span>
          <img src={Facebook} alt="facebook" />
          <img src={Linkedin} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>

        <p className="copyright">
          © Copyright 2022 Solace Management® All Rights Reserved.
        </p>

        <p className="policy">Privacy Policy and Terms of Service</p>
      </div>
    </footer>
  );
}
