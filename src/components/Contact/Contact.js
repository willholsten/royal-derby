import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import "./style.scss";

export default class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PageHeader
          className="contact-header"
          header="Contact"
          description="If you have a new or existing project you would like to work on, I'd
      love to hear about it! Please fill in the form below to get started!"
        />
        <div className="contact-page top-shadow">
          <div className="contact-details">
            <Fade delay={3000} up>
              <div>
                <h5>Phone</h5>
                <h4>
                  <a href="tel:+447403533961">07403 533 961</a>
                </h4>
              </div>
              <div>
                <h5>Email</h5>
                <h4>
                  <a href="mailto:mail@willholsten.com">mail@willholsten.com</a>
                </h4>
              </div>
            </Fade>
          </div>

          <Fade delay={3500} up>
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
              <input
                type="text"
                name="existing-domain"
                placeholder="Existing Domain"
                autocomplete="off"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                autocomplete="off"
              />
              <PrimaryButton
                className="button-primary button-contact"
                link=""
                type="submit"
                label="Submit"
              />
            </form>
          </Fade>
        </div>
      </div>
    );
  }
}
