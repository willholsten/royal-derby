import React from "react";
import Fade from "react-reveal/Fade";

export default class WhatsOnElement extends React.Component {
  render(props) {
    return (
      <div>
        <img className="whats-on-image" src={require(`${this.props.image}`)} />
        <h3>{this.props.header}</h3>
        <h4>{this.props.subheader}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
