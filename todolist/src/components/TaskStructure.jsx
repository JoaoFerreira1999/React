import React, { useState } from 'react'

function TaskStructure() {
    const [task, setTask] = useState({
        title: "",
        content: "",
        minDate: "",
        maxDate: ""
    })

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    function handleChange(event){
        const [name, value] = event.target;
        
        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,
                minDate: `${day}-${month}-${year}`
            }
        })
    }

  return (
    <div className=''>
        <form>
            <input 
                name="title"
                placeholder='Title'
                value={task.title}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="maxDate"
                onChange={handleChange}
            />

            <textarea 
                name="content" 
                placeholder='Take a note...'
                value={task.content}
                rows="3"
                onChange={handleChange}
            />

            <button>Add Task</button>
        </form>
    </div>
  )
}

export default TaskStructure