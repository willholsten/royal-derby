import React from "react";
import Stolberg from "./images/stolberg.svg";
import "./style.scss";

const Footer = props => (
  <footer>
    <div className="footer-content">
      <div>
        <h6>Contact</h6>
        <p>
          446 Brunswick Street,<br />Fitzroy, Victoria, 3065.
        </p>
        <a href="tel:+61394172321">03 9417 2321</a>
        <a href="mailto:enquiries@royalderbyhotel.com.au">
          enquiries@royalderbyhotel.com.au
        </a>
      </div>
      <div>
        <h6>Hours</h6>
        <p>
          Monday - Thursday: 3pm - Late<br />
          Friday & Saturday: 12pm - Late<br />
          Sunday: 12pm - 11pm
        </p>
      </div>
      <div>
        <h6>Partner</h6>
        <a href="https://www.stolberg.com.au">
          <Stolberg className="stolberg-logo" />
        </a>
      </div>
    </div>
    <div className="copyright">
      <p>Royal Derby Hotel. All Rights Reserved.</p>
      <p>Mebourne, Australia.</p>
    </div>
  </footer>
);

export default Footer;
