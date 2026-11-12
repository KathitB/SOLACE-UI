import React from "react";
import "./styles/ContactAndFooter.scss";

import Texture from "../../assets/textured-left.svg";
import DemoIcon from "../../assets/online-demo.svg";
import FaqIcon from "../../assets/question.svg";
import CallIcon from "../../assets/call-us.svg";
import Arrow from "../../assets/arrow.svg";
import Logo from "../../assets/solace-circle-logo.svg";

export default function ContactAndFooter() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section
        className="contact-section"
        style={{ backgroundImage: `url(${Texture})` }}
      >
        <h2 className="contact-title">Contact us</h2>

        <div className="contact-cards">
          <div className="contact-card">
            <img src={DemoIcon} alt="demo" />
            <p>Book an online demo or consultation</p>
            <span className="arrow">
              <img src={Arrow} alt="arrow" />
            </span>
          </div>

          <div className="contact-card">
            <img src={FaqIcon} alt="faq" />
            <p>Frequently asked questions</p>
            <span className="arrow">
              <img src={Arrow} alt="arrow" />
            </span>
          </div>

          <div className="contact-card">
            <img src={CallIcon} alt="call" />
            <p>Call us or submit a question today</p>
            <span className="arrow">
              <img src={Arrow} alt="arrow" />
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <img src={Logo} alt="Solace Group" className="logo" />
            <p>
              With decades of experience under one roof, we know how property
              management works, but more importantly – we know how to make it
              work better.
            </p>
          </div>

          <div className="footer-col">
            <h4>Solace Management</h4>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Contact us</h4>
            <p>info@solacemanagement.co.uk</p>
            <p>020 3355 5093</p>
            <p>
              6 Mitre Passage Greenwich,
              <br />
              London, SE10 0ER
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Follow us</span>
          <div className="socials">
            <i className="icon fb"></i>
            <i className="icon in"></i>
            <i className="icon ig"></i>
          </div>

          <p>© Copyright 2022 Solace Management® All Rights Reserved.</p>

          <p className="links">Privacy Policy and Terms of Service</p>
        </div>
      </footer> */}
    </>
  );
}
