import React, { useState } from "react";
import { Display } from "./components"
import axios from "axios";
import env from "react-dotenv";


function App() {

  const [search, setSearch] = useState("");
  const [weatherDetails, setWeatherDetails] = useState();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleClick(){
    axios.get("http://api.weatherapi.com/v1/current.json?key=" + env.REACT_APP_API_KEY + "&q=" + search +"&aqi=yes")
    .then(res => {
      const weather = res.data;
      setWeatherDetails(weather);
      console.log(weather);
    })
  }


  return (
    <div class="d-flex align-items-center vh-100 vw-100 flex-column justify-content-center">
      <div>
        <input type="text" 
          class="rounded pr-1 pl-1 w inputSearch shadow" 
          onChange={handleChange}></input>
        <button onClick={handleClick}></button>
      </div>
      <Display weatherInfo={weatherDetails}/>
    </div>
  );
}

export default App;
