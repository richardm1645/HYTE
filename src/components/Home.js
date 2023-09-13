import React from 'react';


import HomeBG from "../backgrounds/Home.png";
import AboutBG from "../backgrounds/About.png";
import PhasesBG from "../backgrounds/Program Phases.png";
import ContactBG from "../backgrounds/Contact.png";

import Navbar from './Navbar';
import Button from './Button';
import ButtonNewPage from './ButtonNewPage';
import Panel from './Panel';
import Footer from './Footer';

import "../styles/home.scss";

export default function Home() {
  
  return (
    <main className='layout'>
      <Navbar />
      <div>      
        <div className='button-container'>
          <ButtonNewPage text="REGISTER TODAY" link="/registration" />
        </div>
        <img src={HomeBG} className='bg' alt='HomeBG' /> 
      </div>

      <div>
        <div className='about-container'>
          <h1 className='about-text'>About Hyte</h1>
          <p className='about-desc'>HYTE is a tech entrepreneurship
            program, funded by the BC
            Scholarship Society, where
            students will learn the pillars of
            initiating their own start-up, and
            compete for a $1000 scholarship.
          </p>
          <div className='button-container-left'>
            <ButtonNewPage text="LEARN MORE" link="/whyhyte" />
          </div>         
        </div>
        <img src={AboutBG} className='bg' alt='AboutBG' />
      </div>

      <div>
        <div className='phase-container'>
          <h1 className='phase-text'>Program Phases</h1>
          <p className='phase-desc'>
            Saturdays | 10-11:30am | Lions Gate Community Centre
          </p>
          
          <div className='panel-container'>
            <Panel
              title="Phase 1"
              description="Technology"
              link="/about" 
            />
            <Panel
              title="Phase 2"
              description="Entrepreneurship"
              link="/about" 
            />
            <Panel
              title="Phase 3"
              description="Competition"
              link="/about" 
            />
          </div>
        </div>
        <img src={PhasesBG} className='bg' alt='PhaseBG' />
      </div>
      
      <div id='contact'>
        <div className='about-container'>
          <div className='register-text-container'>             
            <h1 className='register-text'>Reach for new </h1>
            <h1 className='about-text'>hyte</h1>
            <h1 className='register-text'>s</h1>
          </div>
          <p className='about-desc'>
            Last Day to Register: October 5th, 2023
          </p>         
        </div>       
        <img src={ContactBG} className='bg' alt='ContactBG' />
      </div>
      <Footer />
    </main>
  );
};