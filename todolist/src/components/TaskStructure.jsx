import React, { useState } from 'react'

function TaskStructure(props) {
    const [task, setTask] = useState({
        title: "",
        content: "",
        minDate: "",
        maxDate: ""
    });

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    function handleChange(event){
        const {name, value} = event.target;
        console.log(name, value);
        
        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,
                minDate: `${day}-${month}-${year}`
            }
        })
    }

    function handleClick(event){
        if(task.title == "" || task.content == "" || task.maxDate == "")
        {
            return ;
        }
        else{
            props.newTask(task);
            setTask({
                title: "",
                content: "",
                minDate: "",
                maxDate: ""
            })
        }
        //console.log(task);
        event.preventDefault();
    }

  return (
    <div className=''>
        <form>
            <div>
                <input 
                    name="title"
                    placeholder='Title'
                    value={task.title}
                    className='p-2 rounded-md m-2'
                    onChange={handleChange}
                />
            </div>

            <div>
                <input 
                    type="date"
                    name="maxDate"
                    value={task.maxDate}
                    className='p-2 rounded-md m-2'
                    onChange={handleChange}
                />
            </div>

            <div>
                <textarea 
                        name="content" 
                        placeholder='Take a note...'
                        value={task.content}
                        className='p-2 rounded-md m-2'
                        rows="3"
                        onChange={handleChange}
                />
            </div>

            <div>
                <button className='p-2 rounded-md m-2 border-2 bg-red-200 border-red-800' onClick={handleClick}>Add Task</button>
            </div>
        </form>
    </div>
  )
}

export default TaskStructure