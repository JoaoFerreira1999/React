import React from 'react'
import { useState} from "react"
var validator = require('email-validator')

function Register(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const registerDetails = {
        username: username,
        email: email,
        password: password
    }

    const sendUserData = async (event) => { 
        if(username !== "" && email !== "" && password !== ""){
            if(validator.validate(email) === true){
                const result = await fetch("http://localhost:5000/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(registerDetails)
                }).then(props.validSession(registerDetails))
                
                const resultInJson = await result.json();
                console.log(resultInJson);
                event.preventDefault();
            }
        }
    }

    return (
        <div className='border-2 border-black rounded-lg p-32 bg-slate-400'>
        <div className='grid pb-4 place-items-center'><img src={require("../img/instagramLogo.png")}/></div>
            <div className='grid p-4 place-items-center'>
                Register Form
            </div>
            <hr></hr>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Username'
                className='p-2 rounded-md w-72'
                onChange={(e) => {
                    setUsername(e.target.value)
                    console.log(username)
                }}/>
            </div>
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
                onClick={sendUserData}>Register</button>
            </div>
            <div className='grid mt-8 place-items-center hover:text-white'>
                <a href="#" className='underline' onClick={props.loginClick}>Already registered? Sign in!</a>
            </div>
        </div>

    )
}

export default Register