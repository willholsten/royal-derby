import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { removeHash } from "react-scrollable-anchor";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

export default class WorkElement extends React.Component {
  constructor() {
    super();
    removeHash();
  }

  render() {
    return (
      <ScrollableAnchor id={this.props.id}>
        <div className={this.props.containerClass}>
          <div className="work-content">
            <a href={this.props.upAnchor}>
              <i
                className={classnames("fas fa-angle-up", this.props.upClass)}
              />
            </a>
            <Fade delay={1000}>
              <div>
                <img className="image" src={require(`${this.props.image}`)} />
                <video
                  className="video"
                  controls
                  loop
                  playsInline
                  muted
                  autoPlay
                  data-reactid=".0.1.0.0"
                >
                  <source
                    type="video/mp4"
                    data-reactid=".0.1.0.0.0"
                    src={this.props.videoURL}
                  />
                </video>
              </div>
            </Fade>
            <Fade delay={1500} right>
              <div className={this.props.descriptionClass}>
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
                <ul className="work-list">
                  {this.props.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                <PrimaryButton
                  target="_blank"
                  link={this.props.link}
                  className="button-primary"
                  label="Visit Site"
                />
              </div>
            </Fade>
            <a href={this.props.downAnchor}>
              <i
                className={classnames(
                  "fas fa-angle-down",
                  this.props.downClass
                )}
              />
            </a>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
