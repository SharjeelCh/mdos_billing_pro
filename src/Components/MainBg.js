import React from "react";
import "../Styles/Main_bg.css";
import pic from "../assets/doctor.png";

const MainBg = () => {
  return (
    <div className="background-main">
      <div>
        <p className="text">Book an Appointment with a Doctor Now</p>
        <div className="inner_container">
          <div className="temp">
            <p className="inner_text">website</p>
            <p className="inner_text2">www.abc.com</p>
          </div>
          <div className="temp">
            <p className="inner_text">phone</p>
            <p className="inner_text2">+93 23134523</p>
          </div>
          <div className="temp">
          <p className="inner_text">email</p>
          <p className="inner_text2">abc@gmail.com</p>
          </div>
          <div className="temp">
            <p className="inner_text">address</p>
            <p className="inner_text2">canada</p>
          </div>
        </div>
      </div>
      <img src={pic} alt="main" className="main-image" />
    </div>
  );
};

export default MainBg;
