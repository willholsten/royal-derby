import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

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
        <section className="section">
          <Fade delay={500} up>
            <div className="container functions-content">
              <p>
                At the Royal Derby Hotel, we pride ourselves on working with you
                to create the perfect function for your special occasion. We can
                tailor packages to suit every requirement and more importantly
                we remove the stress so you can relax and enjoy your evening.
              </p>
              <p>
                Our experienced chefs and waiting staff have earned a reputation
                for being friendly, efficient and focused on customer service.
                The Royal Derby guarantees you an enjoyable and unforgettable
                function that will be remembered and talked about for years to
                come.
              </p>
            </div>
          </Fade>
          <Fade delay={500} up>
            <div className="container functions-content">
              <PrimaryButton
                link="/images/RDH-Function-Pack.pdf"
                target="_blank"
                iconRight={<i className="fas fa-arrow-right arrow" />}
                label="Function Pack"
              />
              <PrimaryButton
                link="/booking"
                iconRight={<i className="fas fa-arrow-right arrow" />}
                label="Enquire Now"
              />
              <h4>View our function listing on Partystar</h4>
              <a
                target="_blank"
                href="https://www.partystar.com.au/functions/venue/652a/"
              >
                <img className="partystar" src={require(`${partystar}`)} />
              </a>
            </div>
          </Fade>
        </section>
      </div>
    );
  }
}
