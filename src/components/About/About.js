import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";

import Github from "./images/github.svg";
import Linkedin from "./images/linkedin.svg";
import "./style.scss";

const profile = "./images/profile.png";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <PageHeader
          className="about-header"
          header="Eat & Drink"
          description=""
        />
        <div className="about-page top-shadow">
          <div className="content-container">
            <div className="about-content">
              <Fade delay={3000} up>
                <div>
                  <img className="profile" src={require(`${profile}`)} />

                  <p className="quote">
                    "I am passionate about building user focused web
                    experiences."
                  </p>
                </div>
              </Fade>
              <Fade delay={3000} up>
                <div>
                  <p>
                    I am a front end web developer from South Australia and hold
                    a Bachelor of Design Studies from the University of Adelaide
                    but have been based in London for the past three years.
                  </p>

                  <p>
                    I have a skill set based in HTML, CSS, JavaScript and React
                    as well as commercial experience with the Adobe Creative
                    Cloud Suite. Aside from running this business, I have worked
                    for many companies in varying roles including UX design,
                    eCommerce content management, branding & graphic design.
                  </p>

                  <p>
                    I enjoy making bespoke websites in all shapes and sizes.
                    Whether it’s your own portfolio / freelance website or an
                    already established business that needs a revamp to keep up
                    with modern trends and technologies!
                  </p>

                  <p>
                    If you have a project you’d like to chat about then please
                    feel free to get in touch. Or to find out a little more
                    about my credentials, head to the links below.
                  </p>

                  <div className="about-links github-linkedin">
                    <PrimaryButton
                      className="button-primary"
                      link="/images/Will-Holsten-CV.pdf"
                      label="View CV"
                    />
                    <div>
                      <a
                        href="https://www.linkedin.com/in/willholsten/"
                        target="_blank"
                      >
                        <Linkedin className="linkedin" />
                      </a>
                      <a href="https://github.com/willholsten" target="_blank">
                        <Github />
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
