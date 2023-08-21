import React from 'react'
import classes from './Card.module.css'
import Rating from '../Rating/Rating'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import {
  AnnaHickman_Rouge_Butterfly,
  Gucci_Black_Oval,
  Gucci_Black_Wayfarer,
  Persol_Black_Butterfly,
  Persol_Gold_Round,
  Prada_Black_Butterfly,
  Prada_White_Rectangular,
  RayBan_Golden_Aviator,
  TomFord_Black_Aviator,
  Vogue_Bege_Oval,
  Vogue_Pink_Rectangle
} from '../../../assets/index'

function Card(props) {

  const brand = props.brand;
  const price = props.price;
  const color = props.color;
  const shape = props.shape;
  const stock = props.stock;
  const imgURL = props.imgURL;
  const rating = props.rating;
  const size = props.size;
  const title = props.title;
  const numberofReviews = props.numberofReviews;

  let img;

  switch(imgURL){
    case 'AnaHickmann_Rouge_Butterfly':
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
    case 'RayBan_Golden_Aviator':
      img = RayBan_Golden_Aviator
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
      <a href="">
        <div class={classes['img-div']}>
          <img src={img} alt="img"/>
        </div>
          <div class={classes.detailspt1}>        
            <h2>{title}</h2>
            <h2>{price}</h2>
          </div>
          <div class={classes.detailspt2}>
          <h4>{brand}</h4>
          <h4><Rating rating={rating}/> ({numberofReviews})</h4>
          <Button type="primary" style={{backgroundColor: "#073ea5"}} icon={<ShoppingCartOutlined />}>
            Add to cart!
          </Button>
          </div>
      </a>
    </div>
  )
}

export default Card