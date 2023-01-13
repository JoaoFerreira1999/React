import React from "react";
import { Navbar } from "./components"
import "./app.css";

function App() {

  const projectList = [];

  return (
    <div className="flex h-screen w-screen bg-pink-100">
      <div className="m-20 h-4/5 w-full rounded-l-md">
        <Navbar/>
        <div className="flex flex-row rounded-bl-md">
          <div className="h-[694px] basis-[12%] p-6 rounded-bl-md bg-gray-100">
            <button className="m-2"><i class="fa-solid fa-inbox"></i> Inbox</button>
            <p></p>
            <button className="m-2"><i class="fa-solid fa-calendar-day"></i> Today</button>
            <p></p>
            <button className="m-2"><i class="fa-solid fa-calendar-week"></i> Next 7 Days</button>
            <p></p>
            <button className="m-2"><i class="fa-solid fa-star"></i> Important</button>
            <p className="mt-2 mb-2"></p>
            <hr style={{color: "black"}}></hr>
            <button className="m-2 mt-3 text-gray-400"><i class="fa-solid fa-plus"></i> Add Project</button>
            <p></p>
          </div>
          <div className="p-5 w-full bg-white">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
