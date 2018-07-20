import React from "react";
import { NavLink } from "react-router-dom";
import { Spring } from "react-burgers";
import { stack as Menu } from "react-burger-menu";

import Fade from "react-reveal/Fade";
import "./style.scss";
import "./hamburger.css";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      active: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen
    });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({
      menuOpen: false,
      active: !this.state.active
    });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      active: !this.state.active
    });
  }

  render() {
    return (
      <div>
        <div className="burger-container">
          <Spring
            onClick={() => this.toggleMenu()}
            active={this.state.active}
            width={20}
            lineHeight={2}
            lineSpacing={4}
            borderRadius={2}
            color="white"
          />
        </div>

        <Menu
          left
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          customBurgerIcon={false}
          id={"sidebar"}
          width={"100%"}
        >
          <NavLink
            to="/eat-drink"
            activeClassName="is-active"
            exact={true}
            onClick={() => this.closeMenu()}
          >
            Eat & Drink
          </NavLink>
          <NavLink
            to="/whats-on"
            activeClassName="is-active"
            exact={true}
            onClick={() => this.closeMenu()}
          >
            What's On
          </NavLink>
          <NavLink
            to="/functions"
            activeClassName="is-active"
            exact={true}
            onClick={() => this.closeMenu()}
          >
            Functions
          </NavLink>
          <NavLink
            to="/Accommodation"
            activeClassName="is-active"
            exact={true}
            onClick={() => this.closeMenu()}
          >
            Accommodation
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="is-active"
            exact={true}
            onClick={() => this.closeMenu()}
          >
            Contact
          </NavLink>
          <NavLink
            to="/booking"
            activeClassName="is-active"
            exact={true}
            onClick={() => this.closeMenu()}
          >
            Make a Booking
          </NavLink>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
