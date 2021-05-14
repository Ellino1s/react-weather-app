import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Thu</div>
          <WeatherIcon code="09d" size={36} />
          <div className="dailyTemperature">
            <span className="dailyTemperature-max">10 </span>{" "}
            <span className="dailyTemperature-min">12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
