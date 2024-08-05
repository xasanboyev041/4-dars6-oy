import React from "react";
import "./Madeleine.css";
import Casual from "../../images/casual.png";
import Formal from "../../images/formal.png";
import Party from "../../images/party.png";
import Gym from "../../images/gym.png";

const Madeleine = () => {
  return (
    <>
      <div className="container">
        <div className="azos">
          <h3>BROWSE BY DRESS STYLE</h3>
          <div className="view">
            <img src={Casual} alt="" />
            <img src={Formal} alt="" />
            <img src={Party} alt="" />
            <img src={Gym} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Madeleine;
