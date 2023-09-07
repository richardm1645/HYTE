import React from "react";

import PhasesBG from "../backgrounds/Tech Detail Page.png"
import FounderBG from "../backgrounds/The Founder.png"
import FounderProf from "../images/Founder-placeholder.png"
import WhyBG from "../backgrounds/Why HYTE.png"
import MentorsBG from "../backgrounds/HYTE Mentors.png"

import Navbar from "./Navbar";

import "../styles/home.scss";

export default function About() {
  return (
    <main className="layout">
      <Navbar />
      <div>
        <div className="about-container">
          <h1 className='phases-text'>Phase 1: technology</h1>
          <p className="phases-desc">
            Phase 1 of HYTE provides student with a deep and tangible
            understanding of what STEM & tech really mean.
          </p>
          <p className="phases-desc">
            Students will learn about skills required to pursue a career in science,
            technology, engineering and mathematics with a focus on sustainability.
          </p>
          <p className="phases-desc">
            Phase 1 will conclude with a workshop featuring university professors
            and leading industry professionals in the tech industry.
          </p>
        </div>
        <img src={PhasesBG} className='bg' alt='PhasesBG' /> 
      </div>

      <div>
        <div className="about-container">
          <h1 className='phases-text2'>PHASE 2: ENTPRENEURSHIP</h1>
          <p className="phase-desc">
            Phase 2 of HYTE provides student with the tools to develop a
            business mindset.
          </p>
          <p className="phases-desc">
            Students will learn about what it takes to become an entrepreneur
            and the phases of initiating your own start up.
          </p>
          <p className="phases-desc">
          Phase 2 will conclude with a workshop featuring university
          professors and leading industry professionals in the
          entrpreneurship and innovation industry.
          </p>
        </div>
        <img src={PhasesBG} className='bg' alt='PhasesBG' /> 
      </div>

      <div>
        <div className="about-container">
          <h1 className='phases-text2'>PHASE 3: COMPETITION</h1>
          <p className="phases-desc">
            Phase 3 of HYTE provides students with the opportunity to showcase
            their ventures and compete for a $1000 scholarship.
          </p>
          <p className="phases-desc">
            Students will create teams and initiate their own innovation using the
            tech entrepreneurial skills acquired in Phases 1 & 2. Students will have
            six weeks to identify market opportunities, design a business model, the
            option to build a prototype, and develop a winning team.
          </p>
          <p className="phases-desc">
            Teams will pitch their innovations,
            "Dragon's Den" style, to a panel of
            judges and the winning team will be provided with a scholarship.
            Individual awards are also available.
          </p>
        </div>
        <img src={PhasesBG} className='bg' alt='PhasesBG' /> 
      </div>

      <div>
        <div className='phase-container'>
          <h1 className='phase-text'>the founder</h1>
          <div className="founder-desc">
            <div className="founder-profile">
              <img className="founder-pic" src={FounderProf}></img>
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
        <img src={FounderBG} className='bg' alt='FounderBG' />
      </div>

      <div>
        <div className="about-container">
          <h1 className='why-text'>WHY HYTE?</h1>
          <p className="why-desc">
            In this program, you will learn about the basics of technology, entrepreneurship and how to combine the
            two. Students will learn the pillars of initiating their own start-up, from industry professionals who are
            leading the industry today, and then compete for a $1000 scholarship with their team. Students will
            participate in workshops, seminars, interactive activities, group work, the option to build a prototype and
            more. You will also be working with university professors and industry professionals throughout his
            project, which is an opportunity that not many high school students get.
          </p>
          <p className="why-desc">
            Since the pandemic, students' personal portfolios struggle to stand out to admissions, as they have
            become repetitive and do not stand out anymore. Through HYTE, students are demonstrating leadership,
            initiative, the starting and completing of a technical project, as well as the chance to win a scholarship or
            other awards for our exceptional students. These are all characteristics that university's look for when
            assessing personal portfolios and this will help your application stand out.
          </p>
          <p className="why-desc">
            In all, this program will allow you to experience the inside scoop of the tech industry and
            business/entrepreneurship, before graduating high school.
          </p>
        </div>
        <img src={WhyBG} className='bg' alt='WhyBG' /> 
      </div>

      <div>
        <div className='phase-container'>
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
        <img src={MentorsBG} className='bg' alt='MentorsBG' />
      </div>
    </main>
  )
}