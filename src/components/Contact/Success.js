import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import "./style.scss";

const Success = props => (
  <div>
    <div className="landing-container">
      <div className="landing-content">
        <h1>Form Submitted!</h1>
        <h4>Thank you for your message. I will get back to you soon.</h4>
        <Link to="/" activeClassName="is-active" exact={true}>
          <PrimaryButton
            className="button-primary button-landing"
            link="/about"
            label="Return Home"
          />
        </Link>
      </div>
    </div>
  </div>
);

export default Success;
