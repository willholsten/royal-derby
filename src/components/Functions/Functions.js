import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";

import "./style.scss";

const profile = "./images/profile.png";

export default class Functions extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <PageHeader className="functions-header" header="Functions" />
        <div className="functions-page">
          <div className="content-container">
            <div className="functions-content">
              <Fade up>
                <div>
                  <p>
                    At the Royal Derby Hotel, we pride ourselves on working with
                    you to create the perfect function for your special
                    occasion. We can tailor packages to suit every requirement
                    and more importantly we remove the stress so you can relax
                    and enjoy your evening.
                  </p>
                  <p>
                    Our experienced chefs and waiting staff have earned a
                    reputation for being friendly, efficient and focused on
                    customer service. The Royal Derby guarantees you an
                    enjoyable and unforgettable function that will be remembered
                    and talked about for years to come.
                  </p>

                  <PrimaryButton
                    link="/images/Will-Holsten-CV.pdf"
                    label="Rooms & Packages"
                  />
                  <PrimaryButton
                    link="/images/Will-Holsten-CV.pdf"
                    label="Booking Enquiry"
                  />
                  <PrimaryButton
                    link="/images/Will-Holsten-CV.pdf"
                    label="Terms"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
