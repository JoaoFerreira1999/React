import React, { useState } from 'react';
import SideBar from "./Sidebar";
import Header from "./Header";
import Searchbox from './Searchbox';
import image from "../img/background.jpg"
import Pokedex from 'pokedex-promise-v2';
import Details from './Details';

const P = new Pokedex();

function App() {
  const [searchMade, setSearchMade] = useState(false);
  const [searchDetails, setSearchDetails] = useState({
    pokemonName: "",
    abilities: [],
    type: [],
    imageURL: "",
    id: ""
  });
  
  function search(input){
    console.log(input.inputValue);
    setSearchMade(true);
    switch(input.searchCategory){
      case 'Berries':
        P.getBerryByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Contests':
        P.getContestTypeByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Encounters':
        P.getEncounterMethodByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Evolution':
        break;
      case 'Games':
        P.getGenerationByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Items':
        P.getItemByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Machines':
        break;
      case 'Moves':
        P.getMoveByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Locations':
        P.getLocationByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Pokemon':
        P.getPokemonByName(input.inputValue.toLowerCase())
        .then((response) => {
          console.log(response);
          const moves = response.abilities;
          const name = response.forms[0].name;
          const types = response.types;
          const imgURL = response.sprites.front_default;
          const imgId = response.id;
          console.log(imgId);
          
          //console.log(imgURL);
          //console.log(types);
          setSearchDetails(() => {
            return {
              pokemonName: name,
              abilities: moves,
              type: types,
              imageURL: imgURL,
              id: imgId
            }
          });
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
      case 'Utility':
        P.getLanguageByName(input.inputValue)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
        break;
    }  
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
          <div className="sidebar col-1">
            <SideBar />
          </div>
          <div className='col' style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "auto"}}>
            <Header/>
            <div>
              <div className={!searchMade ? 'searchboxType1' : 'searchboxType2'}>
                {!searchMade ? <Searchbox inputValue={search}/> : <Details details={searchDetails}/>}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
