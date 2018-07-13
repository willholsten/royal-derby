import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

export default class Services extends React.Component {
  render(props) {
    return (
      <div>
        <NavLink to="/apps/clock">
          <div className="app-container">
            <div className="app" />
            <p>{this.props.name}</p>
          </div>
        </NavLink>
      </div>
    );
  }
}
