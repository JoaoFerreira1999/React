import React, { useEffect, useState } from 'react'
import classes from './Home.module.css'
import Guccieyewerar from '../assets/modeloutdoor.png'
import ShapeSelect from './Subcomponents/Selects/ShapeSelect'
import SortSelect from './Subcomponents/Selects/SortBySelect'
import ColorSelect from './Subcomponents/Selects/ColorSelect'
import ReviewSelect from './Subcomponents/Selects/ReviewSelect'
import Card from './Subcomponents/Card/Card'
import { ShoppingOutlined, FireOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';

function Home() {
  const [hotDeals, setHotDeals] = useState([])

  useEffect(() =>{
    const fetchData = async () =>{
      const result = await axios('http://localhost:5000/hotdeals')
      setHotDeals(result.data);
    }
    fetchData();
    console.log(hotDeals);
  }, [])

  return (
    <div class={classes.wrapper}>
      <main class={classes.main}>
        <div class={classes["promo-div"]}>
          <h1>Grab Up To 50% Off On The Selected SunGlasses</h1>
          <Button type="primary" shape="round" style={{ background: "#073ea5", height: "50px", width:"120px", margin:"40px 0 0 0"}} icon={<ShoppingOutlined />}>
            Buy Now
          </Button>
        </div>
        <div class={classes["img-div"]}>
          <img src={Guccieyewerar} alt="promo"/>
        </div>
      </main>
      <div class={classes['filter-section']}>
        <div class={classes['dropdown-section']}>
          <div class={classes.dropdown}><ShapeSelect /></div>
          <div class={classes.dropdown}><ColorSelect /></div>
          <div class={classes.dropdown}><ReviewSelect /></div>
        </div>
        <div class={classes.dropdown}>
          <SortSelect />
        </div>
      </div>
      <div class={classes['new-deals-container']}>
        <h2>New Deals! <FireOutlined style={{height: "40px", color: "red"}} /></h2>
        <div class={classes['new-deals-div']}>
          {
            hotDeals.map((item) => {
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
        </div>
      </div>
    </div>
  )
}

export default Home