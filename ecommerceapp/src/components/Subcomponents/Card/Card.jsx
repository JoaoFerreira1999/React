import React from 'react'
import classes from './Card.module.css'

function Card() {
  return (
    <div class={classes.card}>
        <img src="" alt="img"/>
        <div class={classes.details}>        
          <h2>Title</h2>
          <h3>Price</h3>
        </div>
        <h4>Brand</h4>
        <h4>Descrição</h4>
        <div>
          <span></span>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

export default Card