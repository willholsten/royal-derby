import React from "react";
import Fade from "react-reveal/Fade";
import PageHeader from "../PageHeader/PageHeader";
import WhatsOnElement from "./WhatsOnElement";
import ReactGA from "react-ga";
ReactGA.initialize("UA-121952622-4");
ReactGA.pageview(window.location.pathname + window.location.search);

import "./style.scss";

const monday = "./images/monday.jpg";
const tuesday = "./images/tuesday.jpg";
const wednesday = "./images/wednesday.jpg";
const thursday = "./images/thursday.jpg";
const friday = "./images/friday.jpg";
const sunday = "./images/sunday.jpg";

export default class WhatsOn extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PageHeader className="whats-on-header" header="What's On" />
        <section className="section">
          <Fade delay={500} up>
            <div className="container whats-on-content">
              <WhatsOnElement
                image={monday}
                alt="Monday - Locals Night"
                header="Monday"
                subheader="Locals Night"
                description="Main meals for $17 + free pool."
              />
              <WhatsOnElement
                image={tuesday}
                alt="Tuesday - Trivia Night"
                header="Tuesday"
                subheader="Trivia Night"
                description="Weekly cash jackpot & $15 parma."
              />
              <WhatsOnElement
                image={wednesday}
                alt="Wednesday - Steak Night"
                header="Wednesday"
                subheader="Steak Night"
                description="$17 Porterhouse or $20 Scotch fillet."
              />
              <WhatsOnElement
                image={thursday}
                alt="Thursday - Burger Night"
                header="Thursday"
                subheader="Burger Night"
                description="$15 burger and chips, $3.50 pots, $5 house wines all night."
              />
              <WhatsOnElement
                image={friday}
                alt="Friday - Pick the Margin"
                header="Friday"
                subheader="Pick The Margin"
                description="$200 voucher up for grabs during Friday night Footy, Workers Lunch from 12 – 5pm, $7 pints of beer, $6 basic spirits, $12 esp martinis and $5 house wines from 4-7pm."
              />
              <WhatsOnElement
                image={sunday}
                alt="Sunday - Spit Roast"
                header="Sunday"
                subheader="Spit Roast"
                description="Spit roast in the beer garden, $15 Rolls & $20 Plates – roast meat, roast veggies and gravy."
              />
            </div>
          </Fade>
        </section>
      </div>
    );
  }
}
