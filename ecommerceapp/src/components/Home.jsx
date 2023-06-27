import React from 'react'
import Carousel  from './Subcomponents/Carousel/Carousel'
import classes from './Home.module.css'
import Guccieyewerar from '../assets/modeloutdoor.png'
import { ShoppingOutlined } from '@ant-design/icons';
import { Button} from 'antd';

function Home() {
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
    </div>
  )
}

export default Home