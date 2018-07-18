import React from "react";
import classnames from "classnames";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./style.scss";

export default class PageHeader extends React.Component {
  render() {
    return (
      <div>
        <div className={classnames("page-header", this.props.className)}>
          <div className="page-header-content">
            <Fade delay={300}>
              <h1>{this.props.header}</h1>
            </Fade>
          </div>
        </div>
        <div className="page-header-spacer" />
      </div>
    );
  }
}
