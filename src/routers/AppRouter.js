import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import EatDrink from "../components/EatDrink/EatDrink";
import WhatsOn from "../components/WhatsOn/WhatsOn";
import Social from "../components/Social/Social";
import Functions from "../components/Functions/Functions";
import Accommodation from "../components/Accommodation/Accommodation";
import Contact from "../components/Contact/Contact";
import Booking from "../components/Booking/Booking";
import Success from "../components/Contact/Success";
import NotFoundPage from "../components/NotFoundPage";

export function fireTracking(nextState) {
  const { pathname } = nextState.location; // this gives you the next URL

  ReactGA.pageview(pathname);
}

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <BurgerMenu />
          <div className="page-container" id="outer-container">
            <main id="page-wrap">
              <Switch>
                <Route
                  path="/"
                  component={Home}
                  exact={true}
                  onEnter={fireTracking}
                />
                <Route
                  path="/eat-drink"
                  component={EatDrink}
                  onEnter={fireTracking}
                />
                <Route
                  path="/whats-on"
                  component={WhatsOn}
                  onEnter={fireTracking}
                />
                <Route
                  path="/social"
                  component={Social}
                  onEnter={fireTracking}
                />
                <Route
                  path="/functions"
                  component={Functions}
                  onEnter={fireTracking}
                />
                <Route
                  path="/accommodation"
                  component={Accommodation}
                  onEnter={fireTracking}
                />
                <Route
                  path="/contact"
                  component={Contact}
                  onEnter={fireTracking}
                />
                <Route
                  path="/booking"
                  component={Booking}
                  onEnter={fireTracking}
                />
                <Route
                  path="/form-submission"
                  component={Success}
                  onEnter={fireTracking}
                />
                <Route component={NotFoundPage} onEnter={fireTracking} />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
