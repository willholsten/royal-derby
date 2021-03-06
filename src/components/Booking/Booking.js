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
        <PageHeader className="contact-header" header="Make a Booking" />
        <section className="section booking">
          <Fade delay={500} up>
            <div className="container">
              <p>
                To make a table booking or function enquiry please fill out the
                form below. Our team will aim to get back to you within 24
                hours.
              </p>

              <form method="post" action="/form-submission">
                <input type="hidden" name="form-name" value="booking" />
                <select placeholder="Booking Type" name="Booking Type">
                  <option value="" disabled selected hidden>
                    Booking Type
                  </option>
                  <option>Table Booking</option>
                  <option>Function Hire</option>
                </select>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  autocomplete="name"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autocomplete="email"
                />
                <input
                  type="tel"
                  name="Contact Number"
                  placeholder="Contact Number"
                  autocomplete="tel"
                />
                <input
                  type="date"
                  name="Date"
                  placeholder="Date"
                  autocomplete="off"
                />
                <input
                  type="text"
                  name="Time"
                  placeholder="Time"
                  autocomplete="off"
                />
                <input
                  type="text"
                  name="Number of Guests"
                  placeholder="Number of Guests"
                  autocomplete="off"
                />

                <textarea
                  type="text"
                  name="Special Requests"
                  placeholder="Special Requests"
                  autocomplete="off"
                />
                <div data-netlify-recaptcha />
                <div
                  class="g-recaptcha"
                  data-sitekey="6LfF2XMUAAAAAIYDmUE_zmfZ7Ui1i0OnMY98i0MC"
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
      </div>
    );
  }
}
