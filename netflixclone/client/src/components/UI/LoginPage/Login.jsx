import React from 'react'
import classes from './Login.module.css'

function Login() {
  return (
    <div class={classes.wrapper}>
      <div class={classes.form}>
        <div class={classes['secondary-div']}>
          <h1 class={classes.title}>Sign in</h1>
{/*           <div class={classes['input-div']}>
            <h4>Username</h4>
            <input type="text"/>
          </div> */}
          <div class={classes['input-div']}>
            <h4>Email</h4>
            <input type="text"/>
          </div>
          <div class={classes['input-div']}>
            <h4>Password</h4>
            <input type="text"/>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default Login