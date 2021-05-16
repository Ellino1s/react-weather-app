import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WearherTemperature">
      <strong className="temperature">{Math.round(props.celsius)}</strong>
      <span className="units">℃</span>
    </div>
  );
}
