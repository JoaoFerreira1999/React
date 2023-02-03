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
    document.getElementById('projectName').value = " ";
    document.getElementById('projectName').placeholder = " Add Project"
    event.preventDefault();
  }

  return (
    <form className="flex">
      <button 
        className="m-2 mt-3 text-gray-400" 
        onClick={createProject}>
        <i class="fa-solid fa-plus"></i>
      </button>
      <input 
        type="text" 
        id="projectName" 
        placeholder="Add Project" 
        maxLength="25" 
        title="25 characters max" 
        className="p-2 m-2 mt-3 bg-inherit border-2 border-gray-300 rounded-lg" 
        onChange={handleChange}
        onFocus={(event) => {
                    event.target.placeholder = ""
                }}
                onBlur={(event) => {
                    event.target.placeholder = " Add Project"
                }}
        />
    </form>
  )
}

export default CreateProject