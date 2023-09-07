import React from "react";

import PhasesBG from "../backgrounds/Tech Detail Page.png"

import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <Footer />
    </main>
  )
}