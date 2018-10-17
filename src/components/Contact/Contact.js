import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import Maps from "../Maps/Maps";

import "./style.scss";

export default class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PageHeader className="contact-header" header="Get in Touch" />
        <section className="contact section">
          <Fade delay={500} up>
            <div className="container">
              <p>
                If you have any enquiries or suggestions, we would love to hear
                from you! Please get in touch via the methods below and we will
                get back to you as soon as posisble.
              </p>
              <PrimaryButton
                className="button-primary button-contact"
                link="tel:+61394172321"
                iconLeft={<i className="fas fa-phone left-icon" />}
                label="Phone"
              />
              <PrimaryButton
                className="button-primary button-contact"
                iconLeft={<i className="fas fa-envelope left-icon" />}
                link="mailto:enquiries@royalderbyhotel.com.au"
                label="Email"
              />
            </div>
          </Fade>
        </section>
        <Maps />
      </div>
    );
  }
}
