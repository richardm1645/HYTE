import React from 'react';

import HomeBG from "../backgrounds/Home.png"
import AboutBG from "../backgrounds/About.png"
import PhasesBG from "../backgrounds/Program Phases.png"
import RegistrationBG from "../backgrounds/Registration.png"

import Button from './Button';

import "../styles/home.scss"

export default function Home() {
  return (
    <main className='layout'>

      <div>      
        <div className='button-container'>
          <Button text="REGISTER TODAY" />
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
            <Button text="LEARN MORE" />
          </div>
          
        </div>
        
        <img src={AboutBG} className='bg' alt='AboutBG' />
      </div>

      
      <img src={PhasesBG} className='bg' alt='PhaseBG' />
      <img src={RegistrationBG} className='bg' alt='RegistrationBG' />
    </main>
  )
}