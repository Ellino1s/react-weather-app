import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Prague",
    temperature: 15,
    date: "Friday, 23 April",
    time: "15:00",
    description: "Rain",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    wind: 5,
    humidity: 50,
  };
  return (
    <div className="Weather">
      <div className="card border-dark mb-3">
        <div className="card-body text-dark">
          <form className="mb-4">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city name..."
                  className="city-input form-control border-dark"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-dark w-100">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </form>
          <h1 className="card-title">{weatherData.city}</h1>
          <div className="current-date row">
            <div className="col-6">
              <p>{weatherData.date}</p>
            </div>
            <div className="col-6">
              <p>{weatherData.time}</p>
            </div>
          </div>
          <img src={weatherData.imgUrl} alt={weatherData.description} />
          <p className="card-text">{weatherData.description}</p>
          <strong className="temperature">{weatherData.temperature}</strong>
          <span className="units">
            <a href="/">℃</a> | <a href="/">℉</a>
          </span>
          <div className="weather-info row">
            <div className="col">
              <p>Humidity: {weatherData.humidity}%</p>
            </div>
            <div className="col">
              <p>Wind: {weatherData.wind}km/h</p>
            </div>
          </div>
        </div>
      </div>

      <small>
        <a
          className="git-link"
          href="https://github.com/Ellino1s/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Elina Sotska
      </small>
    </div>
  );
}
