import React from "react";
import logo from "../img/International_Pokémon_logo.png"
import OptionList from "./Sidebar_list"

function SideBar() {
  return (
    <div>
      <img src={logo} className="logo"></img>
      <hr></hr>
      <OptionList/>
    </div>
  );
}

export default SideBar;