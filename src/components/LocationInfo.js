import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <div className="location-details">
      <p className="location-name">
        {location.name} <span>{location.country}</span>
      </p>
    </div>
  );
};

export default LocationInfo;
