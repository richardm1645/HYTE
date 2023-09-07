import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <li><a href="/founder" className='registration'>The Founder</a></li>
              <li><a href="/mentors" className='registration'>The Mentors</a></li>
              <li><a href="/whyhyte" className='registration'>Why HYTE?</a></li>
              <li>
                <ScrollLink
                  to="footer"
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