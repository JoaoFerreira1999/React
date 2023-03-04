import React, { useState } from "react";
import { Display } from "./components";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [weatherDetails, setWeatherDetails] = useState();

  function handleLocationChange(event) {
    setSearch(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
    console.log(event.target.value);
  }

  function handleClick() {
    if (search !== "") {
      axios
        .post("http://localhost:3000/search", {
          location: search,
          date: date,
        })
        .then((response) => {
          console.log(response);
          setWeatherDetails(response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  const iconStyle = {
    padding: "10px",
  };

  return (
    <div class="container-fluid d-flex align-items-center vh-100 vw-100 flex-column justify-content-center">
      <div class="containerDiv">
        <i class="fa-solid fa-location-dot fa-xl" style={iconStyle}></i>
        <input
          type="text"
          class="rounded p-2 w inputSearch shadow"
          placeholder="Where do you want to check the weather?"
          onChange={handleLocationChange}
        ></input>
        <input
          type="date"
          class="rounded p-2 shadow"
          onChange={handleDateChange}
        />
        <button class="rounded p-2 shadow" onClick={handleClick}>
          Search
        </button>
      </div>

      {/*
      <Display weatherInfo={weatherDetails}/> */}
    </div>
  );
}

export default App;
