import React from "react";
import Fade from "react-reveal/Fade";
import PageHeader from "../PageHeader/PageHeader";
import Design from "./images/design.svg";
import Development from "./images/development.svg";
import Hosting from "./images/hosting.svg";
import Cms from "./images/cms.svg";
import Marketing from "./images/marketing.svg";
import Maintenance from "./images/maintenance.svg";
import ServicesElement from "./ServicesElement";

import "./style.scss";

export default class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PageHeader
          className="services-header"
          header="What's On"
          description=""
        />
        <div className="services-page top-shadow">
          <div className="content-container">
            <Fade delay={3000} up>
              <div className="services-content">
                <ServicesElement
                  icon={<Design />}
                  header="Web Design"
                  description="I can help whether you would like an affordable templated option or a bespoke website which casts a memorable experience."
                />
                <ServicesElement
                  icon={<Development />}
                  header="Web Development"
                  description="I build robust and scalable websites using modern techniques which helps keep the code responsive and maintainable."
                />
                <ServicesElement
                  icon={<Cms />}
                  header="CMS"
                  description="If you require access to the content on your webpages then I can set up a consumer management system with a friendly user interface."
                />
                <ServicesElement
                  icon={<Hosting />}
                  header="Hosting"
                  description="I provide a secure and affordable hosting solution which is fast and reliable anywhere around the globe!"
                />
                <ServicesElement
                  icon={<Marketing />}
                  header="SEO + Marketing"
                  description="Keeping your website relevant to search engines comes in an array of different forms, whether it be updating new content or using semantic code. I strive to keep my websites searchable and trackable."
                />
                <ServicesElement
                  icon={<Maintenance />}
                  header="Maintenance"
                  description="I can take care of all the boring bits too, like making sure your site is live and without bugs or malware."
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
