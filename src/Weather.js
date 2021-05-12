import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c90361b5de088d090e7a68910dad002f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city name..."
                    className="city-input form-control border-dark"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-dark w-100">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
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
    search();
    return "Loading...";
  }
}
