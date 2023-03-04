import React from "react";
import { Location, WeatherDetails, WeekdayDetails } from "./index.js";

function Display(props) {
  const location = {
    country: props.country,
    region: props.region,
    localtime: props.localtime,
    tz_id: props.tz_id,
  };

  const weatherDetails = {};

  const weekdayDetails = {};

  return (
    <div class="p-2 rounded navbarParent shadow-lg">
      <div class="subDiv">
        <div>
          <Location locationDetails={location} />
        </div>
        <div>
          <WeatherDetails />
        </div>
        <div>
          <WeekdayDetails />
        </div>
      </div>
    </div>
  );
}

export default Display;
