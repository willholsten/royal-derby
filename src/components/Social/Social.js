import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";

import "./style.scss";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <PageHeader className="social-header" header="#royalderbyhotel" />
        <div className="social-page">
          <div className="content-container">
            <div className="social-content">
              <Fade up>
                <div class="instagram">
                  <a
                    href="https://instawidget.net/v/user/royalderbyhotel"
                    id="link-b1e3ed5f8adc9809933062b88359f51e7ac1b9e9fc0e86c636f790427d8029c5"
                  >
                    @royalderbyhotel
                  </a>
                  <script src="https://instawidget.net/js/instawidget.js?u=b1e3ed5f8adc9809933062b88359f51e7ac1b9e9fc0e86c636f790427d8029c5&width=900px" />
                </div>
                <div id="instafeed">a</div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
