import React from 'react'
import Logo from "../../assets/solace_logo.svg";
import House from "../../assets/solace_house.svg";
import People from "../../assets/solace_people.svg";
import Arrow from "../../assets/Arrow.svg";
import "./styles/Homepage.scss"
import Automation from './Automation';
import AutopilotDashboard from './AutopilotDashboard';
import Protections from './Protections';
import ClientFeedback from './ClientFeedback';
import ContactAndFooter from './ContactandFooter';
import Footer from './Footer';
import { useState } from 'react';
import Hamburger from "../../assets/hamburger.svg";
import Close from "../../assets/close.svg";
import HouseMobile from "../../assets/house-isolated-field.svg";







export default function HomePage() {

const [open, setOpen]=useState(false);



  return (
    <div>
    {/* <div className='navabar-wrapper'>s */}
         <div className='Navbar'>
        
            <div className='logo'>
                <img src={Logo} alt='company-logo'/>
            </div>

            <ul className='links'>
                <li className='list'>About Us</li>
                <li className='list'>Services</li>
                <li className='list'>Your Protections</li>
                <li className='list'>Contact Us</li>
            </ul>

            

            <div className='buttons'>
                <button className='login-btn'>Login</button>
                <button className='demo-btn'>Book a Demo</button>
            </div>

            <div className='hamburger' onClick={()=> setOpen(true)}>
                <img src={Hamburger} alt='menu'/>

            </div>

            <div className={`mobile-menu ${open ? "open": ""}`}>
                <div className='mobile-header'>
                    <img src={Logo} alt='logo'/>
                    <img src={Close} alt='close' className='close' onClick={()=> setOpen(fatlse)}/>

                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Your protections</li>
                        <li>Contact Us</li>
            
                    </ul>

                    <div className='mobile-buttons'>
                        <button className='login-btn'>Login</button>
                        <button className='demo-btn'>Book a Demo</button>
                    </div>
                </div>
            </div>
            {open && <div className="backdrop" onClick={() => setOpen(false)} />}
    </div>
    

    <div className="hero">
        {/* <div className="background-house">
            <img src={House} alt="house" />
        </div> */}

  
        <div className="hero-content">
            <div className="house-text">
                <h1 className="notsubtitle">
                     Property management partner for Estate Agents
                </h1>

                 <p className="subtitle">
                 Supporting letting agents with innovative technology and dedicated
                 professionals for everyday duties.
                 </p>

                <h4 className="bigsubtitle">Your brand. Your control.</h4>

                    <button className="book-consultation">
                         Book a consultation
                    </button>
             </div>
        </div>

  
  <div className="people-image">
    <img src={People} alt="people" />
  </div>
  <div className='other'>
    <h1 className='other-mainline'>
    Introducing Solace
    <span className='arrow'><img src={Arrow} alt='arrow'/></span>
    </h1>
    
  </div>
</div>
        <Automation/>
        <AutopilotDashboard/>
        <Protections/>
        <ClientFeedback/>
        <ContactAndFooter/>
        <Footer/>



  




</div>
    
      
    
  )
}
