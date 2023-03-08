import React from 'react'
import classes from './LoginForm.module.css'

function LoginForm() {
  return (
    <div>
        <form className={classes.form}>
                <div className={classes['input-div']}>
                    <label for="email">Email Address</label>
                    <input type="text" id="email"/>
                    <div className={classes['submit-button-div']}>
                        <button type="submit" className={classes['submit-button']}>Get Started ></button>
                    </div> 
                </div>
        </form>
    </div>
  )
}

export default LoginForm