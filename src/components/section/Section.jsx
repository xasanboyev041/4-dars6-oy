import React from "react";
import "./Section.css";
import Couple from "../../images/couple.png";
import Versage from "../../images/versage.png";
import Zara from "../../images/zara.png";
import Gucci from "../../images/gucci.png";
import Prada from "../../images/prada.png";
import Calvin from "../../images/calvinclain.png";

const Section = () => {
  return (
    <>
      <div className="wrapper-section">
        <div className="container">
          <div className="wrapper">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="browse">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="shop">Shop Now</button>
            <ul className="section-ul">
              <li className="section-li">
                <h2 className="brands-price">200+</h2>
                <p className="customer-section">International Brands</p>
              </li>
              <li className="section-li">
                <h2 className="brands-price">2,000+</h2>
                <p className="customer-section">High-Quality Products</p>
              </li>
              <li className="section-li">
                <h2 className="brands-price">30,000+</h2>
                <p className="customer-section">Happy Customers</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="brands">
        <img src={Versage} alt="" />
        <img src={Zara} alt="" />
        <img src={Gucci} alt="" />
        <img src={Prada} alt="" />
        <img src={Calvin} alt="" />
      </div>
    </>
  );
};

export default Section;
