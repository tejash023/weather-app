import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast-container">
      {forecast &&
        forecast.forecastday.map((weather) => (
          <div key={weather.date_epoch} className="forecast">
            <p>{weather.date}</p>

            <div className="forecast-weather">
              <p>MAX: {weather.day.maxtemp_c}&deg; C</p>
              <p>MIN: {weather.day.mintemp_c}&deg; C</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forecast;
