import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import ReactGA from "react-ga";
ReactGA.initialize("UA-121952622-4");
ReactGA.pageview(window.location.pathname + window.location.search);

import "./style.scss";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <PageHeader className="eat-drink-header" header="Eat & Drink" />
        <section className="section">
          <Fade delay={500} up>
            <div className="container">
              <p>
                Food is an integral part of the overall experience at the Royal
                Derby Hotel, and we do take our food seriously! When the chef at
                the Royal Derby Hotel set about designing the menu, it was
                important to keep it simple but to ensure all the boxes were
                ticked when it came to quality produce. The menu outlines a more
                traditional pub fare, the type of food that can be enjoyed every
                night for a really competitive price. One may even say it’s
                cheaper than buying the ingredients yourself and making it at
                home, not to mention ten times easier! Look out for our rotating
                seasonal specials.
              </p>
              <PrimaryButton
                link="/images/RDH-Menu.pdf"
                target="_blank"
                iconRight={<i className="fas fa-arrow-right arrow" />}
                label="Food + Wine Menu"
              />
              <PrimaryButton
                link="/images/RDH-Workers-Lunch.pdf"
                target="_blank"
                iconRight={<i className="fas fa-arrow-right arrow" />}
                label="Friday Lunch Menu"
              />
            </div>
          </Fade>
        </section>
      </div>
    );
  }
}
