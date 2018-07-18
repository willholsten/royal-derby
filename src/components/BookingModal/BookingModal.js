import React from "react";
import Modal from "react-modal";
import PrimaryButton from "../Buttons/PrimaryButton";

class BookingModal extends React.Component {
  render(props) {
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.closeModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
      >
        <div className="modal-container">
          <span onClick={this.props.closeModal}>
            <i className="fas fa-times" />
          </span>
          <h1>Booking Form</h1>
          <p>Our team will get back to you within 24hrs to confirm.</p>
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
      </Modal>
    );
  }
}

export default BookingModal;
