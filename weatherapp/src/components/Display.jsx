import React from 'react'
import { Location, WeatherDetails, WeekdayDetails } from "./index.js"

function Display() {
  return (
    <div class="p-2 rounded navbarParent shadow-lg">
        <div class="subDiv">
          <div>
            <Location />
          </div>
          <div>
            <WeatherDetails />
          </div>
          <div>
            <WeekdayDetails />
          </div>
        </div>
    </div>
  )
}

export default Display