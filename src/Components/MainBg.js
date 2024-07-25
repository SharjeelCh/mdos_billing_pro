import React from "react";
import "../Styles/Main_bg.css";
import pic from "../assets/doctor.png";
import BookNowCard from "./BookNowCard";

const MainBg = () => {
  return (
    <div className="background-main">
      <div>
        <p className="text">Book an Appointment with a Doctor Now</p>
        <div className="inner_container">
          <div className="temp">
            <p className="inner_text">website</p>
            <p className="inner_text2">
              {" "}
              <a
                href=""
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
              >
                www.abc.com
              </a>
            </p>
          </div>
          <div className="temp">
            <p className="inner_text">phone</p>
            <p className="inner_text2">
              {" "}
              <a href="" style={{ color: "white", textDecoration: "none" }}>
                1234567890
              </a>
            </p>
          </div>
          <div className="temp">
            <p className="inner_text">email</p>
            <p className="inner_text2">
              {" "}
              <a href="" style={{ color: "white", textDecoration: "none" }}>
                abc@gmail.con
              </a>
            </p>
          </div>
          <div className="temp">
            <p className="inner_text">address</p>
            <p className="inner_text2">
              <a href="" style={{ color: "white", textDecoration: "none" }}>
                street2,main,canada
              </a>
            </p>
          </div>
        </div>
      </div>
      <BookNowCard />
    </div>
  );
};

export default MainBg;
