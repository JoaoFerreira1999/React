import React from "react";
import { useState } from "react";
import { Navbar, Stories, Sugestions, Post, Login, Register } from "./components"
import "./app.css";

function App() {
  const [session, setSession] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({
    username: "",
    email: ""
  })
  
  function sessionOn(user) {
    localStorage.setItem("username", user.username);
    console.log(user);
    setSession(true);
    setSessionDetails({
      username: user.username,
      email: user.email
    })
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
          <Navbar sessionState={logout} sessionDetails={sessionDetails}/>
        </div>
        <div className="h-screen bg-slate-100 pt-8 relative">
          <div className="flex items-center justify-center">
            <Stories />
          </div>
          <Sugestions />
          <div className="flex items-center justify-center mt-8">
            <Post/>
          </div>
        </div>
      </div>) : 
      (<div className="flex items-center justify-center h-screen">
        <Register validSession={sessionOn}/>
      </div>)
      }
    </div>
  );
}

export default App;
