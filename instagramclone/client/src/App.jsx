import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Stories, Sugestions, Post, Login, Register } from "./components"
import "./app.css";

function App() {
  const [session, setSession] = useState(false);
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({
    username: "",
    email: ""
  })
  const [brightnessDn, setBrightnessDn] = useState(false);
  const [newPage, setNewPage] = useState("");
  
  function sessionOn(user) {
    console.log("here")
    if(localStorage.getItem("username") !== null){
      localStorage.removeItem("username");
      localStorage.setItem("username", JSON.stringify(user.username));
      console.log(user);
      setSession(true);
      setSessionDetails({
        username: user.username,
        email: user.email
      })
    }else{
      localStorage.setItem("username", JSON.stringify(user.username));
      console.log(user);
      setSession(true);
      setSessionDetails({
        username: user.username,
        email: user.email
      })
    }
  }

  useEffect(() => {
    if(localStorage.getItem("username") == null){
      console.log("No session")
    }else{
      console.log("Session initialized")
    }
  }, [])

  function switchToLoginPage(){
    if(loginDisplay === false){
      setLoginDisplay(true);
      console.log(loginDisplay);
    }else{
      setLoginDisplay(false);
      console.log(loginDisplay);
    }
  }

  function reduceBrightness(){
    if(brightnessDn === false){
      setBrightnessDn(true);
    }else{
      setBrightnessDn(false);
    }
  }

  function pageLoader(data){
    setNewPage(data);
  }

  function logout(){
    localStorage.removeItem("username");
    setSession(false);
  }
  
  return (
    <div>
      { session ? 
        (<div className="relative">
        <div className="sticky top-0 z-50">
          <Navbar sessionState={logout} sessionDetails={sessionDetails} dimBright={reduceBrightness} newPage={pageLoader}/>
        </div>
        {
          
        }
        <div className={ brightnessDn === true ? "brightness-50" : null}>
          <div className="h-screen bg-slate-100 pt-8 relative">
            <div className="flex items-center justify-center">
              <Stories />
            </div>
            <Sugestions />
            <div className="flex items-center justify-center mt-8">
              <Post/>
            </div>
          </div>
        </div>
      </div>) : 
      (<div className="flex items-center justify-center h-screen bg-slate-200">
        {!loginDisplay ? <Register validSession={sessionOn} loginClick={switchToLoginPage}/> : <Login validSession={sessionOn}/>}
      </div>)
      }
    </div>
  );
}

export default App;
