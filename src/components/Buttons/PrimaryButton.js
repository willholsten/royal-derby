import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const PrimaryButton = props => (
  <a target={props.target} href={props.link}>
    <button className="button-primary">
      {props.iconLeft}
      {props.label}
      {props.iconRight}
    </button>
  </a>
);

export default PrimaryButton;
