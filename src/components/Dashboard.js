import { WEATHER_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

import WeatherImage from "./WeatherImage";
import CurrentDetails from "./CurrentDetails";
import LocationInfo from "./LocationInfo";
import Forecast from "./Forecast";
import Loader from "./Loader";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cityName, setCityName] = useState("New Delhi");
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch(
        WEATHER_API_URL + cityName + "&days=3&aqi=no&alerts=yes"
      );

      const data = await response.json();

      if (data.error) {
        toast.error("Invalid Location! Try Again", {
          id: "error",
          position: "bottom-center",
        });
        setCityName("");
        return <Loader />;
      } else {
        setLocation(data.location);
        setForecast(data.forecast);
        setCurrent(data.current);
      }
    };

    getWeatherData();
  }, [cityName]);

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

      {!cityName ? (
        <Loader />
      ) : (
        <>
          <LocationInfo location={location} />
          <WeatherImage
            condition={current.condition?.text}
            time={current.isDay}
          />
          <CurrentDetails current={current} />
          <Forecast forecast={forecast} />{" "}
        </>
      )}

      <Toaster />
    </div>
  );
};

export default Dashboard;
