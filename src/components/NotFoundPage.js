import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import PrimaryButton from "./Buttons/PrimaryButton";

const NotFoundPage = () => (
  <div>
    <section className="section error">
      <Fade delay={500}>
        <h2>404</h2>
        <p>Sorry this page does not exist.</p>
        <Link to="/" activeClassName="is-active" exact={true}>
          <PrimaryButton
            className="button-primary"
            iconRight={<i className="fas fa-arrow-right arrow" />}
            link="/about"
            label="Return Home"
          />
        </Link>
      </Fade>
    </section>
  </div>
);

export default NotFoundPage;
