import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="card-title">{props.data.city}</h1>
      <div className="current-date row">
        <div className="col-6">
          <div>
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
          <div>
            <FormattedTime date={props.data.time} />
          </div>
        </div>
      </div>
      <WeatherIcon code={props.data.icon} />
      <p className="card-text text-capitalize">{props.data.description}</p>
      <strong className="temperature">
        {Math.round(props.data.temperature)}
      </strong>
      <span className="units">
        <a href="/">℃</a> | <a href="/">℉</a>
      </span>
      <div className="weather-info row">
        <div className="col">
          <p>Humidity: {props.data.humidity}%</p>
        </div>
        <div className="col">
          <p>Wind: {Math.round(props.data.wind)}km/h</p>
        </div>
      </div>
    </div>
  );
}
