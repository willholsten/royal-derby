import React from "react";
import Fade from "react-reveal/Fade";

export default class ServicesElement extends React.Component {
  render(props) {
    return (
      <div>
        <div className="services-element-header">
          {this.props.icon}
          <h3>{this.props.header}</h3>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
