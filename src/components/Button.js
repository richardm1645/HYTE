import React from "react";
import "../styles/button.scss"

export default function Button(props) {
  return (
    <a
      href="#"
      className="button"
    >
      {props.text}
    </a>
  )
}