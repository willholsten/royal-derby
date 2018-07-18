import React from "react";
import GoogleMapReact from "google-map-react";
import Iframe from "react-iframe";

import "./style.scss";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="map-container">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12611.384183110667!2d144.9794953!3d-37.7936476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e0bd006d1a3b2ef!2sRoyal+Derby+Hotel!5e0!3m2!1sen!2suk!4v1531850544692"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
        />
      </div>
    );
  }
}
