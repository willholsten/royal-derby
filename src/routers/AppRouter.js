import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, withRouter } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

import styled from "styled-components";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

import Apps from "../components/Apps/Apps";
import Clock from "../components/Apps/Clock/Clock";

import Success from "../components/Contact/Success";
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page-container" id="outer-container">
          <BurgerMenu />

          <main id="page-wrap">
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/eat-drink" component={About} />
              <Route path="/whats-on" component={Services} />
              <Route path="/social" component={Work} />
              <Route path="/functions" component={Contact} />
              <Route path="/accommodation" component={Apps} exact={true} />
              <Route path="/contact" component={Contact} />
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
