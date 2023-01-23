import React from 'react'

function Project(props) {
    console.log(props);
    return (
        <div className="m-2">
            <i class="fa-solid fa-trash"></i><button className="m-2">{props.name}</button>
        </div>
    )
}

export default Project