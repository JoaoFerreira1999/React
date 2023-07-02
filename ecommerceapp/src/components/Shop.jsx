import classes from './Shop.module.css'
import Carousel from './Subcomponents/Carousel/Carousel'
import Card from './Subcomponents/Card/Card';
import { useState } from 'react';

let brands = ["Brands","Ray-Ban","Persol","Oakley","Tom Ford","Carerra","Gucci","Vogue","Ana Hickman","Prada","Mormaii","Dior","Dolce & Gabana"];


function Shop() {

  const [search, setSearch] = useState(

  );

  return (
      <main class={classes.main}>
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
  );
}

export default Shop;
