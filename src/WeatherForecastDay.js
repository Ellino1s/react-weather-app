import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatwherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="dailyTemperature">
        <span className="dailyTemperature-max">{maxTemperature()} </span>{" "}
        <span className="dailyTemperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
