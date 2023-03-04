import React from 'react'
import classes from './LoginSection.module.css';
import LoginForm from './LoginForm';

function LoginSnippet() {
  return (
    <div className= {classes['center-div']}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <LoginForm />
    </div>
  )
}

export default LoginSnippet