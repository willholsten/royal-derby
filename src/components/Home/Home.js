import React from "react";
import { Link } from "react-router-dom";
import Maps from "../Maps/Maps";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import "./style.scss";

export default class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render(props) {
    return (
      <div>
        <div className="hero-container">
          <div className="hero-content">
            <Fade delay={500}>
              <h1>Welcome to the Derby</h1>
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
            <Fade delay={500}>
              <h1>What's On</h1>
            </Fade>
          </Link>
          <Link to="/functions" className="functions">
            <Fade delay={500}>
              <h1>Functions</h1>
            </Fade>
          </Link>
        </div>
        <Maps />
      </div>
    );
  }
}
