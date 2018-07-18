import React from "react";
import { Link } from "react-router-dom";
import Maps from "../Maps/Maps";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import "./style.scss";
import "./animation.scss";

const Home = props => (
  <div>
    <div className="hero-container">
      <div className="hero-content">
        <Fade delay={500} down>
          <h1>Welcome to the Derby</h1>
        </Fade>
        <Fade delay={1000}>
          <PrimaryButton
            className="button-primary button-landing"
            iconRight={<i className="fas fa-arrow-right arrow" />}
            link="/booking"
            label="Make a booking"
          />
        </Fade>
      </div>
    </div>
    <div className="secondary-hero-container">
      <Link to="/whats-on" className="whats-on">
        <h1>What's On</h1>
      </Link>
      <Link to="/functions" className="functions">
        <h1>Functions</h1>
      </Link>
    </div>
    <Maps />
  </div>
);

export default Home;
