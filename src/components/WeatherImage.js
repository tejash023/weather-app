import React from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMdPartlySunny } from "react-icons/io";
import { AiFillCloud } from "react-icons/ai";
import { MdOutlineWaves } from "react-icons/md";
import {
  BsFillCloudFog2Fill,
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsFillCloudLightningRainFill,
  BsFillCloudHazeFill,
  BsCloudSnowFill,
  BsFillCloudSunFill,
} from "react-icons/bs";
import { RiSnowyFill } from "react-icons/ri";
import { FaRegSnowflake } from "react-icons/fa";

const WeatherImage = ({ condition, isDay }) => {
  const getIcon = (condition) => {
    switch (condition) {
      case "Sunny":
        return <IoIosSunny color="white" size="100" />;
        break;
      case "Partly cloudy":
        return <IoMdPartlySunny color="white" size="100" />;
        break;
      case "Cloudy":
        return <AiFillCloud color="white" size="100" />;
        break;
      case "Overcast":
        return <BsFillCloudHazeFill color="white" size="100" />;
        break;
      case "Mist":
        return <MdOutlineWaves color="white" size="100" />;
        break;
      case "Fog":
        return <BsFillCloudFog2Fill color="white" size="100" />;
        break;
      case "Light rain":
        return <BsFillCloudRainFill color="white" size="100" />;
        break;
      case "Moderate rain":
        return <BsFillCloudRainHeavyFill color="white" size="100" />;
        break;
      case "Heavy rain":
        return <BsFillCloudLightningRainFill color="white" size="100" />;
        break;
      case "Light snow":
        return <RiSnowyFill color="white" size="100" />;
        break;
      case "Moderate snow":
        return <BsCloudSnowFill color="white" size="100" />;
        break;
      case "Heavy snow":
        return <FaRegSnowflake color="white" size="100" />;
        break;
      default:
        return <BsFillCloudSunFill color="white" size="100" />;
    }
  };
  return <div className="weather-image">{getIcon(condition)}</div>;
};

export default WeatherImage;
