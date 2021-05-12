import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="card-title">{props.data.city}</h1>
      <div className="current-date row">
        <div className="col-6">
          <p>
            <FormattedDate date={props.data.date} />
          </p>
        </div>
        <div className="col-6">
          <p>
            <FormattedTime date={props.data.time} />
          </p>
        </div>
      </div>
      <img src={props.data.imgUrl} alt={props.data.description} />
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
