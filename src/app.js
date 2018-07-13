import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import WebFont from "webfontloader";
import ReactGA from "react-ga";
ReactGA.initialize("UA-121952622-1");
ReactGA.pageview(window.location.pathname + window.location.search);

WebFont.load({
  google: {
    families: ["Roboto:100,300,400,500,700"]
  }
});

const DEFAULT_CONFIG = {
  trackingId: "UA-29548332-1",
  debug: true,
  gaOptions: {
    cookieDomain: "none"
  }
};

const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
