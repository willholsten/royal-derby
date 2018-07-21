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

import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";
ReactGA.initialize("UA-121952622-4");
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createHistory();
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter history={this.props.history}>
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
      </BrowserRouter>
    );
  }
}

export default AppRouter;
