import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";

import "./style.scss";

const profile = "./images/profile.png";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <PageHeader className="eat-drink-header" header="Eat & Drink" />
        <div className="eat-drink-page">
          <div className="content-container">
            <div className="eat-drink-content">
              <Fade up>
                <div>
                  <p>
                    Food is an integral part of the overall experience at the
                    Royal Derby Hotel, and we do take our food seriously! When
                    the chef at the Royal Derby Hotel set about designing the
                    menu, it was important to keep it simple but to ensure all
                    the boxes were ticked when it came to quality produce. The
                    menu outlines a more traditional pub fare, the type of food
                    that can be enjoyed every night for a really competitive
                    price. One may even say it’s cheaper than buying the
                    ingredients yourself and making it at home, not to mention
                    ten times easier! Look out for our rotating seasonal
                    specials.
                  </p>

                  <PrimaryButton
                    link="/images/Will-Holsten-CV.pdf"
                    label="Food + Wine Menu"
                  />
                  <PrimaryButton
                    link="/images/Will-Holsten-CV.pdf"
                    label="Friday Lunch Menu"
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
