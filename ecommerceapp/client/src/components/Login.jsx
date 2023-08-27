import React from 'react'
import classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import model from '../assets/sloganimg2.jpg'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setDetails } from './StateManagement/Slices/userSlice'

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginDetails = {
    password: password,
    email: email
  }

  function Register(event){
    axios.post('http://localhost:5000/login', loginDetails)
    .then(function(response) {
      console.log(response.data);

      if(response.data.auth === true){
        console.log("Logged In!")
        const userDetails = response.data.details;
        localStorage.setItem("token", response.data.token);
        dispatch(setDetails(userDetails));
      } else {
        console.log("Not registered");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
    event.preventDefault();

    //navigate("/");
  }

  return (
    <div className={classes.wrapper}>
      <main class={classes["main-wrapper"]}>
        <div class={classes["field-div1"]}>
          <div class={classes["form-div"]}>
            <section>
              <h1>Welcome Back to GlassShop!</h1>
              <p>Please enter your credentials to login!</p>
            </section>
            <hr></hr>
            <span>Email: <p></p><input type="email" placeholder='Email' name="email" id="email" 
              onChange={(e) => {
                setEmail(e.target.value);
              }} 
              required/>
            </span>
            <span>Password: <p></p><input type="password" placeholder='Password' name="password" id="password" 
              onChange={(e) => {
                setPassword(e.target.value);
              }} 
              required/></span>
            <button type='submit' onClick={Register} class={classes['submit-button']}>Login</button>
          </div>
          <div class={classes["options-div"]}>
            <Link to="/">Go Back</Link><p></p>
            <Link to="/register">Don't have an account yet? Please Register</Link>
          </div>
        </div>
        <div class={classes["field-div2"]}>
          <h1>We take care of your eyes!</h1>
        </div>
      </main>
    </div>
  )
}

export default Login