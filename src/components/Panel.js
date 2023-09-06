import React from "react";
import ButtonNewPage from "./ButtonNewPage";

import "../styles/panel.scss"

export default function Panel(props) {
  return (
    <div className="panel">
      <h2 className="panel-title">{props.title}</h2>
      <p className="panel-description">{props.description}</p>
      <ButtonNewPage text="Learn More" link="/about" />
    </div>
  )
}