import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./Buttons/PrimaryButton";

const NotFoundPage = () => (
  <div>
    <div className="landing-container">
      <div className="landing-content">
        <h1>404</h1>
        <h4>Page Not Found</h4>
        <Link to="/" activeClassName="is-active" exact={true}>
          <PrimaryButton
            className="button-primary button-landing"
            link="/about"
            label="Return Home"
          />
        </Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
