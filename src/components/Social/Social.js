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
        <PageHeader className="eat-drink-header" header="#royalderbyhotel" />
        <div className="eat-drink-page">
          <div className="content-container">
            <div className="eat-drink-content">
              <Fade up>
                <div class="instagram">
                  <a
                    href="https://instawidget.net/v/user/the_stolberg"
                    id="link-105770ddb46305dacd2c891e7dbe908f673d4a1522ac5a11272c878eaad59f8f"
                  >
                    @the_stolberg
                  </a>
                  <script src="https://instawidget.net/js/instawidget.js?u=105770ddb46305dacd2c891e7dbe908f673d4a1522ac5a11272c878eaad59f8f&width=900px" />
                </div>
                <div id="instafeed" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
