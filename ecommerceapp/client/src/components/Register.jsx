import React from 'react'
import classes from './Register.module.css'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
import model from '../assets/sloganimg2.jpg'

function Register() {
  return (
    <div className={classes.wrapper}>
      <main class={classes["main-wrapper"]}>
        <div class={classes["field-div1"]}>
          <form class={classes["form-div"]}>
            <section>
              <h1>Welcome to GlassShop!</h1>
              <p>Please register and keep up with the news</p>
            </section>
            <hr></hr>
            <span>Name: <p></p><input type="text" placeholder='Name'/></span>
            <span>Email: <p></p><input type="email" placeholder='Email' /></span>
            <span>Password: <p></p><input type="password" placeholder='Password'/></span>
            <button type='submit'>Register</button>
          </form>
          <div class={classes["options-div"]}>
            <Link to="/">Go Back</Link>
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
        <div class={classes["field-div2"]}>
          <img src={model} class={classes.model} alt=""/>
        </div>
      </main>
    </div>
  )
}

export default Register