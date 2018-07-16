import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const PrimaryButton = props => (
  <a target={props.target} href={props.link}>
    <button className="button-primary">
      {props.label} <i className="fas fa-arrow-right arrow" />
    </button>
  </a>
);

export default PrimaryButton;
