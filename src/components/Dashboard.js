import { WEATHER_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import WeatherImage from "./WeatherImage";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cityName, setCityName] = useState("New Delhi");
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState("");
  const [current, setCurrent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getWeatherData();
  }, [cityName]);

  const getWeatherData = async () => {
    const response = await fetch(
      WEATHER_API_URL + cityName + "&days=3&aqi=no&alerts=yes"
    );

    const data = await response.json();

    if (data.error) {
      setError(true);
      return;
    } else {
      setLocation(data.location);
      setForecast(data.forecast);
      setCurrent(data.current);
      setError(false);
    }
  };

  return (
    <div className="container">
      <div className="dashboard-nav">
        <input
          value={searchQuery}
          placeholder="Enter City.."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setCityName(searchQuery)}>
          <FiSearch />
        </button>
      </div>

      <WeatherImage condition={current.condition?.text} time={current.isDay} />

      <div className="current-weather-details">
        <p className="temp-text">
          {current.temp_c}
          <span>&deg; C</span>
        </p>
        <p className="temp-condition">{current.condition?.text}</p>
      </div>

      <div className="location-details">
        <p className="location-name">
          {location.name} <span>{location.country}</span>
        </p>
      </div>
      <div>
        {location && (
          <ul>
            <li>{location.name}</li>
            <li>{location.country}</li>
          </ul>
        )}
        {current && (
          <ul>
            <li>{current.temp_c} C</li>
            <li>{current.wind_kph} KPH</li>
            <p>Last Updated: {current.last_updated}</p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
