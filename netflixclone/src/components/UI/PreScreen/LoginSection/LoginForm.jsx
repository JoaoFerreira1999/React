import React from 'react'
import classes from './LoginForm.module.css'

function LoginForm() {
  return (
    <div className={classes['main-div']}>
        <form>
            <div className={classes.form}>
                <div className={classes['input-div']}>
                    <input type="text" placeholder='Email Address' className={classes.input}/>
                </div>
                <div className={classes['button-div']}>
                    <button type="submit" className={classes['submit-button']}>Get Started ></button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm