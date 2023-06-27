import React from 'react'
import classes from './Card.module.css'

function Card() {
  return (
    <div class={classes.card}>
        <h2>Marca</h2>
        <img src="" alt="img"/>
        <h4>Descrição</h4>
    </div>
  )
}

export default Card