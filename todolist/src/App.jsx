import React, { useState } from "react";
import { Navbar, CreateProject, Project } from "./components"
import "./app.css";

function App() {

  const [projects, setProjects] = useState([]);

  function addProject(newProject) {
    console.log(newProject);
    var newProjects = [];
    setProjects((prevProjects) => {
      newProjects = [...prevProjects, newProject];
      return newProjects;
    });
    
    console.log(newProjects);
  }

  function deleteProject(project) {

  }

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
            <CreateProject onCreateProject={addProject}/>
            <p></p>
            {projects.map((projectItem, index) => {
              console.log(projectItem);
              return (
                <Project
                  name={projectItem}
                  key={index}
                  id={index}
                  onDelete={deleteProject}
                />
              );
            })}
          </div>
          <div className="p-5 w-full bg-white">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
