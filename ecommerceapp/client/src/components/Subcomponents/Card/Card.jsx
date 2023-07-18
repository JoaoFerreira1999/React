import React from 'react'
import classes from './Card.module.css'
import Rating from '../Rating/Rating'

function Card(props) {

  const brand = props.brand;
  const price = props.price;
  const color = props.color;
  const shape = props.shape;
  const stock = props.stock;
  const imgURL = props.imgURL;
  const rating = props.rating;
  const size = props.size;

  return (
    <div class={classes.card}>
      <div class={classes['img-div']}>
        <img src={imgURL} alt="img"/>
      </div>
        <div class={classes.detailspt1}>        
          <h2>{brand}</h2>
          <h2>{price}</h2>
        </div>
        <div class={classes.detailspt2}>
        <h4>{brand}</h4>
        <h4><Rating rating={rating}/></h4>
        <button class={classes['addtocart-button']}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card