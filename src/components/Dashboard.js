import { WEATHER_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import WeatherImage from "./WeatherImage";
import CurrentDetails from "./CurrentDetails";
import LocationInfo from "./LocationInfo";
import Forecast from "./Forecast";

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

      <CurrentDetails current={current} />

      <LocationInfo location={location} />

      <Forecast forecast={forecast} />
    </div>
  );
};

export default Dashboard;
