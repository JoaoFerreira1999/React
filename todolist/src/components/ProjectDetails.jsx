import React, { useState } from 'react'
import TaskStructure from './TaskStructure'
import Task from './Task'

function ProjectDetails(props) {

    const [addProject, setAddProject] = useState(props.addNewTask);
    const [tasks, setTasks] = useState([]);

    // switch(props.projectName){
    //     case 'Inbox':
    //         return ;
    //         break;
    //     case 'Today':
    //         return ;
    //         break;
    //     case 'Next 7 Days':
    //         return ;
    //         break;
    //     case 'Important':
    //         return ;
    //         break;

    // }

    function addNewTask(task) {
        setTasks((prevTasks) => {
            return [...prevTasks, task]
        });
        console.log(task);
    }

  return (
    <div>
        <div className="text-6xl pt-4 pl-4">
            Task List
        </div>
        <div className="grid place-content-start ml-20 mr-20 mt-8 overflow-auto max-h-[546px] max-w-[1100px]">
        <hr></hr>
        {
            tasks.map((item, index) => {
                console.log("yes");
                return (
                    <Task title={item.title} content={item.content} minDate={item.minDate} maxDate={item.maxDate} index={index}/> 
                );
            })
        }
        </div>
        <div className="absolute p-3 m-3 bg-red-500 rounded-bl-md max-w-xl right-[68px] top-[124px]">
            <div className="text-2xl pb-2 pl-2 pr-2 text-center">
                New Task
            </div>
            <TaskStructure newTask={addNewTask}/>
        </div>
    </div>
  )
}

export default ProjectDetails