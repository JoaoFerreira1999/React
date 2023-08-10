import classes from './Shop.module.css'
import Carousel from './Subcomponents/Carousel/Carousel'
import Card from './Subcomponents/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

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
            const brand = item.brand.replace(/\s/g,'');
            const color = item.color;
            const shape = item.shape;
            const imgURL1 = brand + "_" + color + "_" + shape;

            return <Card 
                brand = {item.brand}
                price = {item.price}
                color = {item.color}
                shape = {item.shape}
                stock = {item.stock}
                imgURL = {imgURL1}
                rating = {item.rating}
                size = {item.size} 
            />
          })
        }
      </main>
  );
}

export default Shop;
