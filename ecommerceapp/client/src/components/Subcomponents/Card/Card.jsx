import React from 'react'
import classes from './Card.module.css'
import Rating from '../Rating/Rating'
import {
  AnnaHickman_Rouge_Butterfly,
  Gucci_Black_Oval,
  Gucci_Black_Wayfarer,
  Persol_Black_Butterfly,
  Persol_Gold_Round,
  Prada_Black_Butterfly,
  Prada_White_Rectangular,
  Rayban_Golden_Aviator,
  TomFord_Black_Aviator,
  Vogue_Bege_Oval,
  Vogue_Pink_Rectangle
} from '../../../assets/index'

const images = [
  AnnaHickman_Rouge_Butterfly,
  Gucci_Black_Oval,
  Gucci_Black_Wayfarer,
  Persol_Black_Butterfly,
  Persol_Gold_Round,
  Prada_Black_Butterfly,
  Prada_White_Rectangular,
  Rayban_Golden_Aviator,
  TomFord_Black_Aviator,
  Vogue_Bege_Oval,
  Vogue_Pink_Rectangle
]

function Card(props) {

  const brand = props.brand;
  const price = props.price;
  const color = props.color;
  const shape = props.shape;
  const stock = props.stock;
  const imgURL = props.imgURL;
  const rating = props.rating;
  const size = props.size;

  let img;

  switch(imgURL){
    case 'AnnaHickman_Rouge_Butterfly':
      img = AnnaHickman_Rouge_Butterfly
      break;
    case 'Gucci_Black_Oval':
      img = Gucci_Black_Oval
      break;
    case 'Gucci_Black_Wayfarer':
      img = Gucci_Black_Wayfarer
      break;
    case 'Persol_Black_Butterfly':
      img = Persol_Black_Butterfly
      break;
    case 'Persol_Gold_Round':
      img = Persol_Gold_Round
      break;
    case 'Prada_Black_Butterfly':
      img = Prada_Black_Butterfly
      break;
    case 'Prada_White_Rectangular':
      img = Prada_White_Rectangular
      break;
    case 'Rayban_Golden_Aviator':
      img = Rayban_Golden_Aviator
      break;
    case 'TomFord_Black_Aviator':
      img = TomFord_Black_Aviator
      break;
    case 'Vogue_Bege_Oval':
      img = Vogue_Bege_Oval
      break;
    case 'Vogue_Pink_Rectangle':
      img = Vogue_Pink_Rectangle
      break;
    default:
      img = "";
  }

  return (
    <div class={classes.card}>
      <div class={classes['img-div']}>
        <img src={img} alt="img"/>
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