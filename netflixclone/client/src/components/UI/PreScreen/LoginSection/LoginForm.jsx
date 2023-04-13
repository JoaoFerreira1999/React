import React from 'react'
import classes from './LoginForm.module.css'

function LoginForm() {
  return (
    <div>
        <form className={classes.form}>
                <div className={classes['input-div']}>
                    {/* <label for="email">Email Address</label> */}
                    <input type="text" id="email" placeholder='Email Address'/>
                    <button type="submit" className={classes['submit-button']}>Get Started <i class="fa-solid fa-chevron-right fa-l"></i></button>
                </div>
        </form>
    </div>
  )
}

export default LoginForm