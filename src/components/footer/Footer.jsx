import React from "react";
import "./Footer.css";
import Logo from "../../images/logo.png";
import Visa from "../../images/visa.png";
import Twocolor from "../../images/twocolor.png";
import Paypal from "../../images/paypal.png";
import Pay from "../../images/pay.png";
import Google from "../../images/google.png";

const Footer = () => {
  return (
    <>
      <div className="icons">
        <div className="container">
          <div className="laters">
            <h4>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h4>
            <div className="wrapper-button">
              <input
                className=""
                type="text"
                class="search-input"
                placeholder="Search for products..."
              />

              <button className="newsletter">Subscribe to Newsletter</button>
            </div>
          </div>
          <ul className="wrapper-icons">
            <li className="icons-logo">
              <img src={Logo} alt="" />
              <p className="about">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="wrapper-icons-four">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
              </div>
            </li>
            <li>
              <p>Company</p>
              <p className="about">About</p>
              <p className="about">Features</p>
              <p className="about">Works</p>
              <p className="about">Career</p>
            </li>
            <li>
              <p>Help</p>
              <p className="about">Customer Support</p>
              <p className="about">Delivery Details</p>
              <p className="about">Terms & Conditions</p>
              <p className="about">Privacy Policy</p>
            </li>
            <li>
              <p>FAQ</p>
              <p className="about">Account</p>
              <p className="about">Manage Deliveries</p>
              <p className="about">Orders</p>
              <p className="about">Payments</p>
            </li>
            <li>
              <p>Resources</p>
              <p className="about">Free eBooks</p>
              <p className="about">Development Tutorial</p>
              <p className="about">How to - Blog</p>
              <p className="about">Youtube Playlist</p>
            </li>
          </ul>
          <div className="wrapper-end">
            <p className="about">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="wrapper-img-end">
              <img src={Visa} alt="" />
              <img src={Twocolor} alt="" />
              <img src={Paypal} alt="" />
              <img src={Pay} alt="" />
              <img src={Google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
