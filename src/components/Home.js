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

      <img src={AboutBG} className='bg' alt='AboutBG' />
      <img src={PhasesBG} className='bg' alt='PhaseBG' />
      <img src={RegistrationBG} className='bg' alt='RegistrationBG' />
    </main>
  )
}