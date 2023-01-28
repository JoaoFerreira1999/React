import React, { useState } from 'react'
import TaskStructure from './TaskStructure'

function ProjectDetails(props) {

    const [addProject, setAddProject] = useState(props.addNewTask);
    
    var allTasks = [];

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
        allTasks.push(task);
    }

  return (
    <div>
        <div className="grid place-content-start ml-20 mr-20 mt-8">
        {
            allTasks.map((item) => {
                console.log(item);
                return (
                    <div>
                        <div className='text-6xl mb-6'>
                            {}
                        </div>
                        <div className="p-2">
                            Content
                        </div>
                    </div>
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