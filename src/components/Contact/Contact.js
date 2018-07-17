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
        <div className="contact-page">
          <div className="contact-content">
            <Fade up>
              <p>
                We would love to hear from you, please get in touch by calling
                or completing the enquiry form below.{" "}
              </p>
              <div>
                <PrimaryButton
                  className="button-primary button-contact"
                  link=""
                  iconLeft={<i className="fas fa-phone left-icon" />}
                  type="submit"
                  label="Phone"
                />
                <PrimaryButton
                  className="button-primary button-contact"
                  iconLeft={<i className="fas fa-envelope left-icon" />}
                  link=""
                  type="submit"
                  label="Email"
                />
              </div>
            </Fade>

            <Fade up>
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
                  iconRight={<i className="fas fa-arrow-right arrow" />}
                  link=""
                  type="submit"
                  label="Submit"
                />
              </form>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
