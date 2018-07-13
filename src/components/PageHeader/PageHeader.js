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
          <Zoom delay={1500} cascade>
            <h1>{this.props.header}</h1>
          </Zoom>
          <Fade delay={2000} up>
            <p>{this.props.description}</p>
          </Fade>
        </div>
        <div className="page-header-spacer" />
      </div>
    );
  }
}
