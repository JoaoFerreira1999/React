import React from 'react'
import classes from './Home.module.css'
import Guccieyewerar from '../assets/modeloutdoor.png'
import DropDownShape from './Subcomponents/DropDownMenus/DropDownShape'
import SortSelect from './Subcomponents/Selects/SortBySelect'
import Card from './Subcomponents/Card/Card'
import { ShoppingOutlined, FireOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
      <div class={classes['filter-section']}>
        <div class={classes['dropdown-section']}>
          <div class={classes.dropdown}><DropDownShape /></div>
          <div class={classes.dropdown}><DropDownShape /></div>
          <div class={classes.dropdown}><DropDownShape /></div>
        </div>
        <div class={classes.dropdown}>
          <SortSelect />
        </div>
      </div>
      <div class={classes['new-deals-container']}>
        <h2>New Deals! <FireOutlined style={{height: "40px", color: "red"}} /></h2>
        <div class={classes['new-deals-div']}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home