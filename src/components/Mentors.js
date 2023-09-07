import React from "react";

import MentorsBG from "../backgrounds/HYTE Mentors.png"
import FounderProf from "../images/Founder-placeholder.png"

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/home.scss";

export default function Mentors() {
  return (
    <main className="layout">
      <Navbar />
      <div>
        <div className='founder-container'>
          <h1 className='phase-text'>MEET OUR HYTE MENTORS</h1>
            <div className="mentors-desc">
              <div className="mentor-profile">
                <img className="mentor-pic" src={FounderProf}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Professor Kate Dilworth</b></p>
                  <p className="mentors-profile-desc-para">
                    BSN R.N. MBA, ICD.D, Associate Professor
                    of Practice, Director of Health Programs,
                    SFU Beedie School of Business.
                  </p>
                </div>
              </div>
                     
              <div className="mentor-profile">
                <img className="mentor-pic" src={FounderProf}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Owen McBride</b></p>
                  <p className="mentors-profile-desc-para">
                    Founder of Private Coaching Co.
                  </p>
                </div>
              </div>

              <div className="mentor-profile">
                <img className="mentor-pic" src={FounderProf}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Mehrsa Raeiszadeh</b></p>
                  <p className="mentors-profile-desc-para">
                  Co-founder & COO of Mintlist, PhD in
                  Process Engineering
                  </p>
                </div>
              </div>
            </div>
        </div>
        <img src={MentorsBG} className='bg-mobile' alt='MentorsBG' />
      </div>
      <Footer />
    </main>
  )
}