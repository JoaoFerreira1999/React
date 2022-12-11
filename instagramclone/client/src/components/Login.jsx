import React from 'react'
import { useState} from "react"
var validator = require('email-validator')

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const loginDetails = {
        email: email,
        password: password
    }

    const sendUserData = async (event) => {
      event.preventDefault(); 
        if(email !== "" && password !== ""){
            if(validator.validate(email) === true){
                const result = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginDetails)
                }).then((response) => response.json())
                .then((data) => props.validSession(data))
            }
        }
    }

    return (
        <div className='border-2 border-black rounded-lg p-32 bg-slate-400'>
        <div className='grid pb-4 place-items-center'><img src={require("../img/instagramLogo.png")}/></div>
            <div className='grid p-4 place-items-center'>
                Login Form
            </div>
            <hr></hr>
            <div className='p-4'>
                <input 
                type="email" 
                placeholder='Email'
                className='p-2 rounded-md w-72'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </div>
            <div className='p-4'>
                <input 
                type="password" 
                placeholder='Password'
                className='p-2 rounded-md w-72'
                onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </div>
            <div className='grid p-4 place-items-center'>
                <button 
                type="submit"
                className='border-2 w-44 h-12 rounded-md first-letter hover:border-black hover:text-white'
                onClick={sendUserData}>Login</button>
            </div>
            <div className='grid mt-8 place-items-center hover:text-white'>
                <a href="" className='underline'>Not registered yet? Click here!</a>
            </div>
        </div>

    )
}

export default Login