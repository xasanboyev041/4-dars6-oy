import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper-header">
          <img src={Logo} alt="about site logo" />
          <ul className="header-ul">
            <li className="header-li">Shop v</li>
            <li className="header-li">On Sale</li>
            <li className="header-li">New Arrivals</li>
            <li className="header-li">Brands</li>
          </ul>
          <div className="search-container">
            <input
              type="text"
              class="search-input"
              placeholder="Search for products..."
            />
          </div>
          <div className="users">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-regular fa-circle-user"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
