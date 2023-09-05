import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import "../styles/button.scss"

export default function Button(props) {
  return (
    <a
      className="button"
    >
      <ScrollLink
        to="registration-section"
        spy={true}
        smooth={true}
        offset={-70} // Offset from the top (adjust as needed)
        duration={800} // Animation duration in milliseconds
        className="registration"
      >
        {props.text}
      </ScrollLink>
    </a>
  )
}