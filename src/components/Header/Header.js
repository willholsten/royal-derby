import React from "react";
import { NavLink } from "react-router-dom";
import LogoMobile from "./images/logo-mobile.svg";
import LogoDesktop from "./images/logo-desktop.svg";

import Fade from "react-reveal/Fade";

import "./style.scss";

const Header = props => (
  <header>
    <div className="header-content">
      <NavLink to="/" exact={true}>
        <LogoMobile className="logo-mobile" />
        <LogoDesktop className="logo-desktop" />
      </NavLink>
      <div className="navigation-desktop">
        <NavLink to="/eat-drink" activeClassName="is-active" exact={true}>
          Eat & Drink <i className="fas fa-angle-right sidebar-arrow" />
        </NavLink>
        <NavLink to="/whats-on" activeClassName="is-active" exact={true}>
          What's On <i className="fas fa-angle-right sidebar-arrow" />
        </NavLink>
        <NavLink to="/social" activeClassName="is-active" exact={true}>
          Social <i className="fas fa-angle-right sidebar-arrow" />
        </NavLink>
        <NavLink to="/functions" activeClassName="is-active" exact={true}>
          Functions <i className="fas fa-angle-right sidebar-arrow" />
        </NavLink>
        <NavLink to="/accommodation" activeClassName="is-active" exact={true}>
          Accommodation <i className="fas fa-angle-right sidebar-arrow" />
        </NavLink>
        <NavLink to="/contact" activeClassName="is-active" exact={true}>
          Contact <i className="fas fa-angle-right sidebar-arrow" />
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;
