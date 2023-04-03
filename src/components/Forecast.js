import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div>
      {forecast &&
        forecast.forecastday.map((weather) => (
          <div className="forecast">
            <p>{weather.date}</p>

            <div className="forecast-weather">
              <p>Max: {weather.day.maxtemp_c}</p>
              <p>Min: {weather.day.mintemp_c}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forecast;
