import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import Fade from "react-reveal/Fade";
import "./style.scss";

export default class Functions extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <PageHeader className="accommodation-header" header="Accommodation" />
        <section className="section">
          <Fade delay={500} up>
            <div className="container accommodation-content">
              <h4>General</h4>
              <p>
                Located on the bustling Brunswick st in Fitzroy this lively
                sports hotel offers more than just a bed to sleep in, clean,
                safe and friendly accommodation with rates not seen since the
                80’s. We also offer 10% off food and drink to all guests in our
                sports bar located down stairs.
              </p>
              <p>
                <b>
                  Please Note: Check in and check out are completed at the main
                  bar down stairs between the hours of 2pm till 10 pm 7 days a
                  week, outside these hours are available if pre-arranged. We
                  don’t cater for guests under the age of 18. Please call 0499
                  979 620 to book accommodation.
                </b>
              </p>
            </div>
          </Fade>

          <Fade delay={500} up>
            <div className="container accommodation-content">
              <PrimaryButton
                link="/images/RDH-Room-Rates.pdf"
                iconRight={<i className="fas fa-arrow-right arrow" />}
                target="_blank"
                label="Room Rates"
              />
              <PrimaryButton
                link="mailto:enquiries@royalderbyhotel.com.au"
                iconRight={<i className="fas fa-arrow-right arrow" />}
                label="Enquire Now"
              />

              <h4>Amenities</h4>
              <p>All rooms feature the following shared facilities.</p>
              <ul>
                <li>Kitchenette</li>
                <li>Fride</li>
                <li>Microwave</li>
                <li>Kettle</li>
                <li>Toaster</li>
                <li>Shower / Toilets</li>
                <li>Laundry</li>
              </ul>
              <h4>Getting There</h4>
              <p>
                <b>From Southern Cross Station:</b> Get on a tram at spencer st
                route 112 (stop 1), going up Collin st, onto Gisborne st and
                continues up Brunswick st Street directly to the royal derby
                hotel.
              </p>
              <p>
                <b>From the airport:</b> The Starbus located at Qantas domestic
                can deliver you to the corner of Nicholson st and Alexandra prd,
                its then a 50m walk down Alexandra prd to the corner of
                Brunswick st where we are located.
              </p>
            </div>
          </Fade>
        </section>
      </div>
    );
  }
}
