import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import Instafeed from "react-instafeed";

import "./style.scss";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    const instafeedTarget = "instafeed";
    return (
      <div>
        <PageHeader className="social-header" header="#royalderbyhotel" />
        <section className="section">
          <div className="container">
            <div id={instafeedTarget}>
              <Instafeed
                limit="5"
                ref="instafeed"
                resolution="standard_resolution"
                sortBy="most-recent"
                target={instafeedTarget}
                template=""
                userId="royalderbyhotel"
                clientId="5b2d0b190d2a4fa1ae0178c400fb8f99"
                accessToken="1506975576.5b2d0b1.bfdb44d5fef54d4d82fc985707742ff6"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
