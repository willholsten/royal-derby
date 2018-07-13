import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import Type from "./TypeIt.js";
import "./style.scss";
import "./animation.scss";

const background = "./images/background.jpg";
const background1 = "./images/background1.jpg";
const background2 = "./images/background2.jpg";

const Home = props => (
  <div>
    <div className="landing-container">
      <div id="crossfade">
        <img src={require(`${background}`)} />
        <img src={require(`${background1}`)} />
        <img src={require(`${background2}`)} />
        <img src={require(`${background}`)} />
        <img src={require(`${background1}`)} />
      </div>
      <div className="landing-content">
        <Fade delay={6000}>
          <p>
            A front end developer based in London. If you have a project in
            mind, I’d love to hear about it!
          </p>

          <PrimaryButton
            className="button-primary button-landing"
            link="/contact"
            label="Get in Touch"
          />
        </Fade>
      </div>
    </div>
  </div>
);

export default Home;
