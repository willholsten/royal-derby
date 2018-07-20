import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import Maps from "../Maps/Maps";
import ReactGA from "react-ga";
ReactGA.initialize("UA-121952622-4");
ReactGA.pageview(window.location.pathname + window.location.search);

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
                We would love to hear from you, please get in touch by calling
                or completing the enquiry form below.{" "}
              </p>
              <PrimaryButton
                className="button-primary button-contact"
                link="tel:+61394172321"
                iconLeft={<i className="fas fa-phone left-icon" />}
                type="submit"
                label="Phone"
              />
              <PrimaryButton
                className="button-primary button-contact"
                iconLeft={<i className="fas fa-envelope left-icon" />}
                link="mailto:enquiries@royalderbyhotel.com.au"
                type="submit"
                label="Email"
              />
            </div>
          </Fade>
          <Fade delay={500} up>
            <div className="container">
              <form method="post" action="/form-submission">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autocomplete="name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autocomplete="email"
                />
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  autocomplete="off"
                />
                <PrimaryButton
                  className="button-primary button-contact"
                  iconRight={<i className="fas fa-arrow-right arrow" />}
                  link=""
                  type="submit"
                  label="Submit"
                />
              </form>
            </div>
          </Fade>
        </section>
        <Maps />
      </div>
    );
  }
}
