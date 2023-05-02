import React, { Fragment} from 'react'
import classes from './RedirectSection.module.css'

function RedirectSection() {
  return (
    <Fragment>
        <div class={classes['sign-div']}>
            <h4>New to Netflix? <a href="">Sign up now.</a></h4>
            <h5>This page is protected by Google reCAPTCHA to<p></p> ensure you're not a bot. <a href="">Learn more</a></h5>
        </div>
    </Fragment>
  )
}

export default RedirectSection