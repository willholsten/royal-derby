import React from "react";
import Fade from "react-reveal/Fade";
import PageHeader from "../PageHeader/PageHeader";
import WhatsOnElement from "./WhatsOnElement";
import Iframe from "react-iframe";

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
          <h2>Daily Specials</h2>
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
                alt="Friday - Happy Hour"
                header="Friday"
                subheader="Happy Hour"
                description="Workers Lunch from 12 – 5pm, $7 pints of beer, $6 basic spirits, $12 esp martinis and $5 house wines from 4-7pm."
              />
              <WhatsOnElement
                image={sunday}
                alt="Weekend - Live Sport"
                header="Weekend"
                subheader="Live Sport"
                description="All AFL and NRL Live & Loud every weekend at Fitzroy’s home of sport."
              />
            </div>
          </Fade>
        </section>

        <section className="live-sports-section">
          <h2>Live Sports</h2>
          <div className="live-sport-container">
            <Iframe
              className="live-sport"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              url="https://secure.gameonlivesports.com.au/live/auto/4458/4458.html"
            />
          </div>
        </section>
      </div>
    );
  }
}
