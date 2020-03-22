import React from "react";

function Display() {
  return (
    <div className="date-display">
      <DisplayDay />
      <DisplayMonth />
      <GetDay />
    </div>
  );
}

function DisplayDay() {
  const today = new Date();
  const day = today.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return <div>{daylist[day]}</div>;
}
function DisplayMonth() {
  const month = new Date();
  const monthNumber = month.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return <div>{months[monthNumber]}</div>;
}

function GetDay() {
  const date = new Date();
  const number = String(date.getDate()).padStart(2, "0");
  return <div>{number}</div>;
}

export default Display;
