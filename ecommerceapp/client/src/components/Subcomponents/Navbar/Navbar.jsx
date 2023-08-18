import React from 'react'
import classes from './Navbar.module.css'
import Glasses from '../../../assets/glasses.png'
import { Link, useLocation } from 'react-router-dom';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button} from 'antd'
import { DropDownBrands } from '../DropDownMenus/DropDownBrands'
 
function Navbar() {
  const location = useLocation();

  return (
    <>
      <div><img alt="logo" src={Glasses} class={`${classes.rotate} ${classes.logo}`}/></div>
      <nav class={classes.navbar}>
      {
        location.pathname !== "/" && <div><h4><Link to="/">Home</Link></h4></div>
      }
        <div><h4><Link to="/shop">Shop</Link></h4></div>
        <div><h4 class={classes.dropdown}><DropDownBrands /></h4></div>
        <div><h4><Link to="/featured">Featured</Link></h4></div>
        <div><h4><Link to="/recommended">Recommended</Link></h4></div>
        <div class={classes['form-div']}>
          <form action="" method="POST">
            <input type="text" placeholder="Looking for new glasses?"/>
            <Button type="primary" shape="circle" style={{background: "#073ea5"}} icon={<SearchOutlined />} />
          </form>
        </div>
        <div class={classes['account-div']}><h4><Link to="/register"><UserOutlined style={{ fontSize: '25px'}}/> Account</Link></h4></div>
        <div class={classes['cart-div']}><h4><Link><ShoppingCartOutlined style={{ fontSize: '25px'}} /> Cart</Link></h4></div>
      </nav>
    </>
  )
}

export default Navbar