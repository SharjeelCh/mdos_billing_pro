import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Calender.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const nav = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState([]);

  const unavailableDates = [
    new Date("2024-07-26"),
    new Date("2024-08-01"),
    new Date("2024-08-10"),
  ];

  const slotAvailible = {
    "2024-07-31": [
      "9:00",
      "12:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
      "6:00",
    ],
    "2024-08-04": ["10:00", "1:00", "4:00"],
    "2024-08-11": ["11:00", "3:00", "5:00"],
  };

  const isDateAvailable = (date) => {
    return !unavailableDates.some(
      (unavailableDate) =>
        date.getDate() === unavailableDate.getDate() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getFullYear() === unavailableDate.getFullYear()
    );
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    const dateString = date.toISOString().split("T")[0];
    const times = slotAvailible[dateString] || [];
    setAvailableTimes(times);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container">
      <div className="calCont">
        <section className="head">
          <button
            style={{
              backgroundColor: "transparent",
              borderWidth: 0,
              cursor: "pointer",
            }}
            onClick={() => {
              nav("/");
            }}
          >
            <BsArrowLeft />
          </button>
          <h3>Select Time</h3>
        </section>
        <form className="maain">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            filterDate={isDateAvailable}
            inline
            className="calender"
          />
          <div>
            <div className="cont2">
              <div className="dateShow">
                <p>{formatDate(startDate)}</p>
              </div>
              {availableTimes.length > 0 ? (
                <div className="innerCont">
                  <ul className="ul">
                    {availableTimes.map((time, index) => (
                      <button type="submit" key={index} className="list">
                        {time}
                      </button>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="empty">No slots Available</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calendar;
