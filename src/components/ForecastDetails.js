import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date ">{formattedDate}</div>
      <div className="forecast-details__min-temperature">
        <strong>Min Temperature:</strong> {temperature.min}&deg;C
      </div>
      <div className="forecast-details__max-temperature">
        <strong>Max Temperature:</strong> {temperature.max}&deg;C
      </div>
      <div className="forecast-details__humidity">
        <strong>Humidity:</strong> {humidity}%
      </div>
      <div className="forecast-details__wind-speed">
        <strong>Wind Speed:</strong> {wind.speed} mph
      </div>
      <div className="forecast-details__wind-direction">
        <strong>Wind Direction:</strong> {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
