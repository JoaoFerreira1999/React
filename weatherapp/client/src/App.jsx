import React, { useState } from "react";
import { Display } from "./components"
import axios from "axios";


function App() {

  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [weatherDetails, setWeatherDetails] = useState();

  function handleLocationChange(event) {
    setSearch(event.target.value);
  }

  function handleDateChange(event){
    setDate(event.target.value);
    console.log(event.target.value);
  }

  function handleClick(){
    if(search !== ""){
      axios.post("http://localhost:3000/search", {
        location: search,
        date: date
      })
      .then((response) => {
        console.log(JSON.stringify(response) );
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }


  return (
    <div class="d-flex align-items-center vh-100 vw-100 flex-column justify-content-center">
      <div>
        <input type="text" 
          class="rounded pr-1 pl-1 w inputSearch shadow" 
          onChange={handleLocationChange}></input>
        <input type="date" onChange={handleDateChange}/> 
        <button onClick={handleClick}></button>
      </div>
      <Display weatherInfo={weatherDetails}/>
    </div>
  );
}

export default App;
