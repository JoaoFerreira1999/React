import React from 'react'
import RedirectSection from './RedirectSection'
import classes from './Login.module.css'

function Login() {

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=aa6e4e0b376a5440e6bbd7709d9e2a1a");
    const data = await response.json();

    console.log(data);
  }

  return (
    <div class={classes.wrapper}>
      <div class={classes.form}>
        <form onSubmit={handleSubmit} class={classes['secondary-div']}>
          <h1 class={classes.title}>Sign in</h1>
          {/* <div class={classes['input-div']}>
            <h4>Username</h4>
            <input type="text"/>
          </div> */}
          <div class={classes['input-div']}>
            <h5>Email or Phone Number</h5>
            <input type="text"/>
          </div>
          <div class={classes['input-div']}>
            <h5>Password</h5>
            <input type="password"/>
          </div>
          <div class={classes['button-div']}>
            <button class={classes.button}>Sign In</button>
          </div>
          <div class={classes['checkbox-div']}>
            <input type='checkbox' id="rememberMe" name="rememberMe" />
            <label for="rememberMe">Remember me</label>
          <div class={classes.link}>
            <a href="asd">Need Help?</a>
          </div>
          </div>
          <div class={classes['signup-div']}>
            <RedirectSection />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login