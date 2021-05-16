import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <WeatherIcon code={props.data.icon} size={90} />
      <h1 className="card-title">{props.data.city}</h1>
      <p className="card-text text-capitalize">{props.data.description}</p>
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="current-date row">
        <div className="col-6">
          <div className="forecast-info">
            <FormattedDate date={props.data.date} />
            <FormattedTime date={props.data.time} />
          </div>
        </div>
        <div className="col-6">
          <div className="forecast-info">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
