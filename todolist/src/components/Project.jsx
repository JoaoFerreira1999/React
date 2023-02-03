import React from 'react'

function Project(props) {

    function deleteProject(){
        props.onDelete(props.id);
    }
    
    return (
        <div className="m-2">
            <button onClick={deleteProject}><i class="fa-solid fa-trash"></i></button><button className="m-2">{props.name}</button>
        </div>
    )
}

export default Project