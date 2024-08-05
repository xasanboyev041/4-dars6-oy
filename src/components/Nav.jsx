import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="wrapper-nav">
        <NavLink className="wrapper-nav-li" end to="/">
          Home
        </NavLink>

        <NavLink className="wrapper-nav-li" to="/contact">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
