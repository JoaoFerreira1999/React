import React from 'react'

function Details(props) {
  const pokemonName = props.details.pokemonName;
  const capitalizedName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  const moves = props.details.abilities;
  console.log(props.details);
  console.log(moves);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <h1 className='pokemonName'>{capitalizedName}</h1>
          <img src={`https://cdn.traction.one/pokedex/pokemon/${props.details.id}.png`}/>
        </div>
        <div className='col moves' >
        <h1 className='pokemonName'>Moves:</h1>
          <ul className='mx-auto'>
            {moves.map((move) => {
              return (<li><a href={move.ability.url}><p>{move.ability.name}</p></a></li>);
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details;