import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import AppElement from "./AppElement";

import "./style.scss";

export default class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PageHeader
          className="services-header"
          header="Web Apps"
          description=""
        />
        <div className="app-page top-shadow">
          <div className="content-container">
            <div className="app-content">
              <AppElement name="Clock" link="clock" />
              <AppElement name="To Do" />
              <AppElement name="Notes" />
              <AppElement name="Indecision" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
