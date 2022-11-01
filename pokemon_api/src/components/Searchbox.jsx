import React, { useState } from 'react'

const dropDownItems = ["Berries","Contests", "Encounters", "Evolution", "Games", "Items", "Machines", "Moves", "Locations", "Pokemon", "Utility" ];

function Searchbox(props) {
    const [search, setSearch] = useState({
      inputValue: "",
      searchCategory: "Berries"
    });

    function handleChange(event){
        const {name, value} = event.target;
        setSearch((prevValue) => {
          return  {
            ...prevValue,
            [name]: value
          }

        });

        event.preventDefault();
    }

  return (
    <form onChange={handleChange}>
      <select className='dropDownMenu' name='searchCategory' >
        {dropDownItems.map((item) => {
          return (
            <option value={item}>{item}</option>
          )
        })}
      </select>
      <input name="inputValue" type="text" placeholder='What are you searching for?' ></input>
      <button onClick={() => {
        console.log(search);
        props.inputValue(search);
      }}>
      <i class="fa fa-search"></i>
      </button>
    </form>
  )
}

export default Searchbox;