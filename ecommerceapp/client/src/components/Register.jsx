import React from 'react'
import classes from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import model from '../assets/sloganimg2.jpg'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setDetails } from './StateManagement/Slices/userSlice'

function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const registerDetails = {
    name: name,
    password: password,
    email: email
  }

  function Register(event){
    axios.post('http://localhost:5000/register', registerDetails)
    .then(function(response) {
      console.log(response.data);

      if(response.data.auth === true){
        console.log("Registered")
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

    navigate("/");
  }

  return (
    <div className={classes.wrapper}>
      <main class={classes["main-wrapper"]}>
        <div class={classes["field-div1"]}>
          <div class={classes["form-div"]}>
            <section>
              <h1>Welcome to GlassShop!</h1>
              <p>Please register and keep up with the news!</p>
            </section>
            <hr></hr>
            <span>Name: <p></p><input type="text" placeholder='Name' name="name" id="name" 
              onChange={(e) => {
                setName(e.target.value);
              }} 
              required/>
            </span>
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
            <button type='submit' onClick={Register} class={classes['submit-button']}>Register</button>
          </div>
          <div class={classes["options-div"]}>
            <Link to="/">Go Back</Link>
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
        <div class={classes["field-div2"]}>
          <h1>We take care of your eyes!</h1>
        </div>
      </main>
    </div>
  )
}

export default Register