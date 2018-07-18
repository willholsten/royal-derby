import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, withRouter } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

import styled from "styled-components";
import BookingModal from "../components/BookingModal/BookingModal";
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

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BurgerMenu />
        <div className="page-container" id="outer-container">
          <main id="page-wrap">
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/eat-drink" component={EatDrink} />
              <Route path="/whats-on" component={WhatsOn} />
              <Route path="/social" component={Social} />
              <Route path="/functions" component={Functions} />
              <Route path="/accommodation" component={Accommodation} />
              <Route path="/contact" component={Contact} />
              <Route path="/booking" component={Booking} />
              <Route path="/form-submission" component={Success} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(AppRouter);
