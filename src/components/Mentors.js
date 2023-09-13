import React from "react";

import MentorsBG from "../backgrounds/HYTE Mentors.png"
import FounderProf from "../images/Founder-placeholder.png"

import Alex from "../images/alex.jpg"
import Kate from "../images/kate.png"
import Callum from "../images/callum.jpg"
import Liam from "../images/liam.jpg"
import Owen from "../images/owen.jpg"
import Rachel from "../images/rachel.jpg"

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
                <img className="mentor-pic" src={Alex}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Alex McGovern</b></p>
                  <p className="mentors-profile-desc-para">
                  Lifeguard Digital Health, Vice President of Engineering
                  </p>
                </div>
              </div>
                     
              <div className="mentor-profile">
                <img className="mentor-pic" src={Callum}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Callum Woznow</b></p>
                  <p className="mentors-profile-desc-para">
                  Zeeno, Co-founder
                  </p>
                </div>
              </div>

              <div className="mentor-profile">
                <img className="mentor-pic" src={Kate}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Kate Dilworth</b></p>
                  <p className="mentors-profile-desc-para">
                  SFU, Term Associate Professor of Practice, Innovation and Entrepreneurship (BSN R.N. MBA)
                  </p>
                </div>
              </div>

            </div>




            <div className="mentors-desc">
              <div className="mentor-profile">
                <img className="mentor-pic" src={Liam}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Liam Hilder</b></p>
                  <p className="mentors-profile-desc-para">
                  CDL Vancouver, Venture Analyst - Minerals Stream Lead
                  </p>
                </div>
              </div>
                     
              <div className="mentor-profile">
                <img className="mentor-pic" src={Owen}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Owen McBride</b></p>
                  <p className="mentors-profile-desc-para">
                  Private Coaching Co, President & Founder
                  </p>
                </div>
              </div>

              <div className="mentor-profile">
                <img className="mentor-pic" src={Rachel}></img>
                <div className="mentor-desc-center">
                  <p className="mentor-profile-desc"><b>Rachel George</b></p>
                  <p className="mentors-profile-desc-para">
                  Tesla, Vehicle Software Technical Program Manager
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