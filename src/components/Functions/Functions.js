import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";

import "./style.scss";

const partystar = "./images/partystar.png";

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
              <Fade delay={2000} up>
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
                    iconRight={<i className="fas fa-arrow-right arrow" />}
                    label="Enquire Now"
                  />
                  <PrimaryButton
                    link="/images/RDH-Function-Pack.pdf"
                    target="_blank"
                    iconRight={<i className="fas fa-arrow-right arrow" />}
                    label="Rooms & Packages"
                  />
                  <PrimaryButton
                    link="/images/RDH-Function-Terms.pdf"
                    target="_blank"
                    iconRight={<i className="fas fa-arrow-right arrow" />}
                    label="Terms"
                  />
                  <h4>View our function listing on Partystar</h4>
                  <a
                    target="_blank"
                    href="http://www.partystar.com.au/functions/venue/652a/"
                  >
                    <img className="partystar" src={require(`${partystar}`)} />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
