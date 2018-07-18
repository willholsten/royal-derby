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
        <PageHeader className="contact-header" header="Make a Booking" />
        <section className="section booking">
          <Fade delay={500} up>
            <div className="container">
              <p>
                To make a table booking or function enquiry please fill out the
                form below. Our team will aim to get back to you within 24
                hours.
              </p>

              <form method="post">
                <input type="hidden" name="booking-form" value="booking-form" />
                <select placeholder="Booking Type">
                  <option value="" disabled selected hidden>
                    Booking Type
                  </option>
                  <option>Table Booking</option>
                  <option>Function Hire</option>
                </select>
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
                  type="email"
                  name="email"
                  placeholder="Contact Number"
                  autocomplete="email"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Date"
                  autocomplete="email"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Time"
                  autocomplete="email"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Number of Guests"
                  autocomplete="email"
                />

                <textarea
                  type="text"
                  name="message"
                  placeholder="Special Requests"
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
      </div>
    );
  }
}