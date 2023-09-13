import React from "react";

import WhyBG from "../backgrounds/Why HYTE.png"
import Footer from "./Footer";

import Navbar from "./Navbar";

import "../styles/home.scss";

export default function WhyHYTE() {
  return (
    <main className="layout">
      <Navbar />
      <div>
        <div className="why-container">
          <h1 className='why-text'>WHY HYTE?</h1>
          <p className="why-desc">
          In this program, you will learn about the basics of technology, entrepreneurship and how to combine the
          two. Students will learn the pillars of initiating their own start-up, from industry professionals who are
          leading the industry today, and then compete for a $1000 scholarship with their team. You will also
          participate in workshops, seminars, interactive activities, group work and more. Students will work with
          university professors and industry professionals throughout their project, which is an opportunity that not
          many high school students get.
          </p>
          <p className="why-desc">
          Since the pandemic, students' university applications struggle to stand out to admissions, as they have
          become repetitive and expectations have increases. Through HYTE, students are demonstrating key traits
          such as leadership, initiative, the starting and completing of a technical project, as well as the chance to
          win a scholarship and other awards for our exceptional students. These are all characteristics that
          universities look for when assessing personal portfolios.
          </p>
          <p className="why-desc">
          In all, this program will allow you to experience the inside scoop of the tech industry and
          business/entrepreneurship, before graduating high school.
          </p>
        </div>
        <img src={WhyBG} className='bg-mobile' alt='WhyBG' /> 
      </div>
      <Footer />
    </main>
  )
}