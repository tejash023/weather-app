import React from "react";

const CurrentDetails = ({ current }) => {
  return (
    <div className="current-weather-details">
      <p className="temp-text">
        {current.temp_c}
        <span>&deg; C</span>
      </p>
      <p className="temp-condition">{current.condition?.text}</p>
    </div>
  );
};

export default CurrentDetails;
