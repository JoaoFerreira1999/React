import React from 'react'

const options = ["Berries","Contests", "Encounters", "Evolution", "Games", "Items", "Machines", "Moves", "Locations", "Pokemon", "Utility" ];

function generalSearch(){
  
}

function OptionList(props) {
  return (
    <ul>
        {options.map((option) => {
            return <a onClick={generalSearch} href={props.searchParam}><li>{option}</li></a>
        })}
    </ul>

  )
}

export default OptionList;