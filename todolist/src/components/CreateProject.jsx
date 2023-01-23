import React, { useState } from 'react'

function CreateProject(props) {
  const [projectName, setProjectName] = useState({
    projectName: ""
  })

  function handleChange(event) {
    const name = event.target.value;
    setProjectName(name);
    console.log(name);
  }

  function createProject(event){
    console.log(projectName);
    props.onCreateProject(projectName);
    event.preventDefault();
  }

  return (
    <form className="flex">
      <button 
        className="m-2 mt-3 text-gray-400" 
        onClick={createProject}>
        <i class="fa-solid fa-plus"></i>
      </button>
      <input type="text" placeholder="Add Project" className="p-1 m-2 mt-3 bg-inherit" onChange={handleChange}/>
    </form>
  )
}

export default CreateProject