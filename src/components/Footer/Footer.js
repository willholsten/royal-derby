import React from "react";
import "./style.scss";

const Footer = props => (
  <footer>
    <div className="footer-content">
      <div>
        <h6>About</h6>
        <p>
          © Will Holsten Ltd. Registered as a company in England &<br />Wales,
          company registration number 10210269.
        </p>
      </div>
      <div>
        <h6>Location</h6>
        <p>
          Flat 4, 134 Orford Road, Walthamstow,<br />London, E17 9QX.
        </p>
      </div>
      <div>
        <h6>Contact</h6>
        <a href="tel:+447403533961">07403 533 961</a>
        <a href="mailto:mail@willholsten.com">mail@willholsten.com</a>
      </div>
    </div>
    <div className="copyright">
      <p>Will Holsten Ltd. All Rights Reserved.</p>
      <p>London, UK</p>
    </div>
  </footer>
);

export default Footer;
