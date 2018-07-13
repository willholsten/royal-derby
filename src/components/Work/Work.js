import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import WorkElement from "./WorkElement";
import StolbergVideo from "./videos/stolberg.mp4";
import SurfdomeVideo from "./videos/surfdome.mp4";
import RoyalDerbyVideo from "./videos/royal-derby.mp4";
import JizzVideo from "./videos/jizz.mp4";
import SFConfectioneryVideo from "./videos/sf-confectionery.mp4";
import "./style.scss";

const stolbergImage = "./images/stolberg.png";
const surfdomeImage = "./images/surfdome.png";
const royalDerbyImage = "./images/royal-derby.png";
const jizzImage = "./images/jizz.png";
const SFConfectioneryImage = "./images/sf-confectionery.png";

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      stolberg: ["design", "development", "hosting", "maintenance"],
      surfdome: ["UX design", "content management"],
      royalDerby: ["design", "development", "CMS"],
      sfConfectionery: ["design", "development", "hosting", "maintenance"],
      jizz: ["design", "development", "hosting"]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let stolberg = this.state.stolberg;
    let surfdome = this.state.surfdome;
    let royalDerby = this.state.royalDerby;
    let jizz = this.state.jizz;
    let sfConfectionery = this.state.sfConfectionery;

    return (
      <div>
        <PageHeader
          className="work-header"
          header="Social"
          description="Below you will find some of my latest work. The projects inlclude
      multi-page websites, product hub pages and user experience journeys."
        />

        <WorkElement
          containerClass="work-container top-shadow work-primary"
          upClass="hide"
          downAnchor="#surfdome"
          id="stolberg"
          image={stolbergImage}
          videoURL={StolbergVideo}
          header="The Stolberg"
          skills={stolberg}
          description="The Stolberg is a bar in Preston, Melbourne that accomodates four stylish function rooms. It was crucial that the design was centred around the ability to view menus and make bookings."
          descriptionClass="work-description stolberg-description"
          link="http://www.stolberg.com.au/"
        />
        <WorkElement
          containerClass="work-container work-secondary"
          upAnchor="#stolberg"
          downAnchor="#royal-derby"
          id="surfdome"
          image={surfdomeImage}
          videoURL={SurfdomeVideo}
          header="Surfdome"
          skills={surfdome}
          description="Surfdome is an online retailer specialising in surf, snow and skate apparel and hardware. My role involved managing the web content and designing user journeys for the store across 7 domains."
          descriptionClass="work-description royal-derby-description"
          link="https://www.surfdome.com/"
        />

        <WorkElement
          pageHeaderClass={"hide"}
          containerClass="work-container work-primary"
          upAnchor="#surfdome"
          downAnchor="#jizz"
          id="royal-derby"
          image={royalDerbyImage}
          videoURL={RoyalDerbyVideo}
          header="The Royal Derby"
          skills={royalDerby}
          description="The Royal Derby is a bar and hotel in Fitzroy, Melbourne which is hugely popular with the sporting community. The goal was to show off the renovations that had just been completed by the new owner."
          descriptionClass="work-description stolberg-description"
          link="http://www.royalderbyhotel.com.au/"
        />

        <WorkElement
          pageHeaderClass={"hide"}
          containerClass="work-container work-secondary"
          upAnchor="#royal-derby"
          downAnchor="#sf-confectionery"
          id="jizz"
          image={jizzImage}
          videoURL={JizzVideo}
          header="JIZZ - The Game"
          skills={jizz}
          description="The Jizz Drinking Game is a product by Spencer & Fleetwood which is aimed at hen parties. The goal was quickly demonstrate how the game works with a video and list some of the retail outlets that stock the product."
          descriptionClass="work-description royal-derby-description"
          link="http://www.jizzthegame.com/"
        />

        <WorkElement
          pageHeaderClass={"hide"}
          containerClass="work-container work-primary"
          downClass="hide"
          upAnchor="#jizz"
          id="sf-confectionery"
          image={SFConfectioneryImage}
          videoURL={SFConfectioneryVideo}
          header="S&F Confectionery"
          skills={sfConfectionery}
          description="S&F Confectionery is a wholesale importer of mints. The goal was to easily display the  products and buying options for the retailers."
          descriptionClass="work-description sf-confectionery-description"
          link="http://www.sfconfectionery.com/"
        />
      </div>
    );
  }
}
