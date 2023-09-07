import React from "react";

import "../styles/button.scss"

export default function ButtonNewPage(props) {
  return (
    <a
      className="button"
      href={props.link}
    >
      {props.text}
    </a>
  )
}