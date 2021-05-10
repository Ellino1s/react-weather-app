import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: "Friday, 23 April",
      time: "15:00",
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
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
            <p className="card-text text-capitalize">
              {weatherData.description}
            </p>
            <strong className="temperature">
              {Math.round(weatherData.temperature)}
            </strong>
            <span className="units">
              <a href="/">℃</a> | <a href="/">℉</a>
            </span>
            <div className="weather-info row">
              <div className="col">
                <p>Humidity: {weatherData.humidity}%</p>
              </div>
              <div className="col">
                <p>Wind: {Math.round(weatherData.wind)}km/h</p>
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
  } else {
    const apiKey = "c90361b5de088d090e7a68910dad002f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
