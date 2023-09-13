import React from "react";

import FounderBG from "../backgrounds/The Founder.png"
import FounderProf from "../images/yasmin.jpg"
import Footer from "./Footer";

import Navbar from "./Navbar";

import "../styles/home.scss";

export default function Founder() {
  return (
    <main className="layout">
      <Navbar />
      <div id="founder">
        <div className='founder-container'>
          <h1 className='phase-text'>the founder</h1>
          <div className="founder-desc">
            <div className="founder-profile">
              <img className="founder-pic" style={{width: '200px', height:'auto'}} src={FounderProf}></img>
              <p className="founder-profile-desc"><b>Yasmin Ocean Dibai</b></p>
              <p className="founder-profile-desc-para">
                Private Math & Physics Tutor, Sustainable Energy
                Engineering Student, Mechanical & Electrical
                Building Designer, Women in Technology
                Scholarship Recipient, President of SFU Women
                in Clean Tech, SFSS Woman of the Year 2021
              </p>
            </div>
            <p className="founder-para">
              Growing up, my parents instilled an
              unbreakable confidence within me and
              taught me the work ethic needed to reach
              my goals. It wasn’t until high school that I
              was made aware of the notorious reputation
              of rigorous careers like engineering and tech.
              The confidence that my parents had built
              within me made me into a strong student and
              an advocate for youth to pursue STEM.
              HYTE is a vessel for me to spread that
              confidence to more students, in hopes of
              encouraging them to pursue a career in tech.
            </p>
          </div>
        </div>
        <img src={FounderBG} className='bg-mobile' alt='FounderBG' />
      </div>
      <Footer />
    </main>
  )
}