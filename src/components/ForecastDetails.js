import React from "react";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date ">{formattedDate}</div>
      <div className="forecast-details__min-temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__max-temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {wind.speed} mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
