import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast-container">
      {forecast &&
        forecast.forecastday.map((weather) => (
          <div className="forecast">
            <p>{weather.date}</p>

            <div className="forecast-weather">
              <p>Max: {weather.day.maxtemp_c}&deg; C</p>
              <p>Min: {weather.day.mintemp_c}&deg; C</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forecast;
