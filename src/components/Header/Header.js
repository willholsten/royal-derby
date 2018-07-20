import React from "react";
import { NavLink } from "react-router-dom";
import LogoMobile from "./images/logo-mobile.svg";
import LogoDesktop from "./images/logo-desktop.svg";

import "./style.scss";

class Header extends React.Component {
  render(props) {
    return (
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
            <NavLink to="/functions" activeClassName="is-active" exact={true}>
              Functions <i className="fas fa-angle-right sidebar-arrow" />
            </NavLink>
            <NavLink
              to="/accommodation"
              activeClassName="is-active"
              exact={true}
            >
              Accommodation <i className="fas fa-angle-right sidebar-arrow" />
            </NavLink>
            <NavLink to="/contact" activeClassName="is-active" exact={true}>
              Contact <i className="fas fa-angle-right sidebar-arrow" />
            </NavLink>
            <NavLink to="/booking" activeClassName="is-active" exact={true}>
              Make a Booking <i className="fas fa-angle-right sidebar-arrow" />
            </NavLink>
            <div className="header-social">
              <a
                target="_blank"
                href="https://www.facebook.com/RoyalDerbyHotel"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/royalderbyhotel/"
              >
                <i className="fab fa-instagram" />
              </a>
              <a target="_blank" href="https://twitter.com/RoyalDerbyHotel">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
