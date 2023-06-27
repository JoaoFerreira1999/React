import React from 'react'
import classes from './Navbar.module.css'
import Glasses from '../../../assets/glasses.png'
import { Link } from 'react-router-dom';

const brands = ["Brands","Ray-Ban","Persol","Oakley","Tom Ford","Carerra","Gucci","Vogue","Ana Hickman","Prada","Mormaii","Dior","Dolce & Gabana"];


function Navbar() {
  return (
    <>
      <div><img alt="logo" src={Glasses} class={`${classes.rotate} ${classes.logo}`}/></div>
      <nav class={classes.navbar}>
        <div><h4><Link to="/">Home</Link></h4></div>
        <div><h4><Link to="/shop">Shop</Link></h4></div>
        <div><h4>        
          <select class={classes.brands}>
            {
              brands.map((item) => {
                if(item === "Brands"){
                  return <option disabled selected>{item}</option>
                }else{
                  return <option value={item} id={item} name={item}>{item}</option>
                }
              })
            }
          </select></h4></div>
        <div><h4><Link to="/featured">Featured</Link></h4></div>
        <div><h4><Link to="/recommended">Recommended</Link></h4></div>
        <form action="" method="POST">
        <input type="text" placeholder="Looking for new glasses?"/>
        </form>
      </nav>
    </>

  )
}

export default Navbar