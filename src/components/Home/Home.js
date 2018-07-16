import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import "./style.scss";
import "./animation.scss";

const background = "./images/background.jpg";
const background1 = "./images/background1.jpg";
const background2 = "./images/background2.jpg";
const background3 = "./images/background3.jpg";
const background4 = "./images/background4.jpg";

const Home = props => (
  <div>
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to the Derby</h1>
        <PrimaryButton
          className="button-primary button-landing"
          link="/contact"
          label="Make a booking"
        />
      </div>
    </div>
    <div className="secondary-hero-container">
      <div className="whats-on">
        <h2>What's On</h2>
      </div>
      <div className="functions">
        <h2>Functions</h2>
      </div>
    </div>
  </div>
);

export default Home;
