import classes from './Shop.module.css'
import Carousel from './Subcomponents/Carousel/Carousel'
import Card from './Subcomponents/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

let brands = ["Brands","Ray-Ban","Persol","Oakley","Tom Ford","Carerra","Gucci","Vogue","Ana Hickman","Prada","Mormaii","Dior","Dolce & Gabana"];


function Shop() {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() =>{
    const fetchData = async () =>{
      const result = await axios('http://localhost:5000/shop')
      setAllProducts(result.data);
    }
    fetchData();
    console.log(allProducts);
  }, [])

  return (
      <main class={classes.main}>
        {
          allProducts.map((item) => {
            return <Card 
                brand = {item.brand}
                price = {item.price}
                color = {item.color}
                shape = {item.shape}
                stock = {item.stock}
                imgURL = {item.imgURL}
                rating = {item.rating}
                size = {item.size} 
            />
          })
        }
      </main>
  );
}

export default Shop;
