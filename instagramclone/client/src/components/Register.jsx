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
                console.log(registerDetails);
                props.validSession(registerDetails);
                event.preventDefault(); 

                const result = await fetch("http://localhost:5000/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(registerDetails)
                })
        
                const resultInJson = await result.json();
                console.log(resultInJson);
            }
        }
    }

    return (
        <div>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Username'
                onChange={(e) => {
                    setUsername(e.target.value)
                    console.log(username)
                }}/>
            </div>
            <div className='p-4'>
                <input 
                type="email" 
                placeholder='Email'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </div>
            <div className='p-4'>
                <input 
                type="password" 
                placeholder='Password'
                onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </div>
            <div className='p-4'>
                <button 
                type="submit"
                onClick={sendUserData}>Register</button>
            </div>  
        </div>

    )
}

export default Register