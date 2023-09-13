import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import RegistrationBG from "../backgrounds/Registration.png";

import "../styles/home.scss";

export default function Registration() {
  return (
    <main className="layout">
      <Navbar />
      <div id="registration-section">
          <div className='registration-container'>
            <h1 className='about-text'>Registration</h1>
            <p className='about-desc'><b>Who can register?</b></p>
            <p className='about-desc'>Students in grades 9-12</p>
            <br />
            <p className='registration-desc'><b>Registration Steps:</b></p>
            <p className='about-desc'>1. Fill in the <a href="https://drive.google.com/file/d/1nNMUzx9fxTgvlgSjpKRJ62iFPFwRJJEL/view" target="_blank">consent form</a> and email it to
            <a href='mailto:dibai.yasmin@gmail.com'> dibai.yasmin@gmail.com</a></p>
            <p className='about-desc'>2. E-transfer the course fee to
            <a href='mailto:yasminocean16@gmail.com'> yasminocean16@gmail.com</a>, listed on the consent form.</p>
          </div>
          <img src={RegistrationBG} className='bg-mobile' alt='RegistrationBG' />
        </div>
      <Footer />
    </main>
  )
}
