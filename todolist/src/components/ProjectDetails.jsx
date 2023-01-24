import React, { useState } from 'react'
import TaskStructure from './TaskStructure'

function ProjectDetails(props) {

    const [addProject, setAddProject] = useState(false);

    var newTaskStatus = props.addNewTask;

    var allProjects = [];

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

  return (
    <div>
    { !addProject ?
        (<div className="grid place-content-start ml-20 mr-20 mt-8">
            <div className='text-6xl mb-6'>
                Tasks
            </div>
            <div className="p-2">
                Content
            </div>
        </div>) :
        (<div>
            Olá
        </div>)
    }
    </div>
  )
}

export default ProjectDetails