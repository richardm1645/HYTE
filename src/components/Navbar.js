import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../styles/navbar.scss';

import Logo from "../images/Logo.png"


export default function Navbar() {

  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };
  
  return (
    <nav className="navbar">
      <a href='/'><img src={Logo} className='logo' alt="Logo" /></a>
      <ul className="menu">
        <li>
          <a onClick={toggleAboutDropdown} className="registration">
            About
          </a>
          {showAboutDropdown && (
            <ul className="about-dropdown">
              {/* Add dropdown menu items here */}
              <li><a href="#" className='registration'>The Founder</a></li>
              <li><a href="#" className='registration'>The Mentors</a></li>
              <li><a href="#" className='registration'>Why HYTE?</a></li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset from the top (adjust as needed)
                  duration={800} // Animation duration in milliseconds
                  className="registration"
                >
                  Contact Us
                </ScrollLink></li>
            </ul>
          )}
        </li>
        <li>
          <a href="/registration" className='registration'>Registration</a>
        </li>
      </ul>
    </nav>
  );
};