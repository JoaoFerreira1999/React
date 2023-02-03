import React, { useEffect, useState } from 'react'

function Navbar(props) {

    const [newTaskStatus, setNewTaskStatus] = useState("false");
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(()=>setDate(new Date()), 1000)
    }, [])

    function handleClick(event){
        setNewTaskStatus(event.currentTarget.title);
        props.newTaskStatus(newTaskStatus)
        console.log(event.target.value);
    }

  return (
    <div className='flex rounded-t-md p-3 bg-red-500 fa-xl'>
        <div className='p-1 mr-48'>
            <i class="fa-solid fa-pen-to-square" style={{color: "white"}}></i>
        </div>
        <div className='flex-1 text-lg'>
            <i class="fa-solid fa-magnifying-glass mr-2 p-1" style={{color: "white"}}></i>
                <input type="text" 
                className="rounded-md bg-red-500 text-white outline-none"
                placeholder=' Quick Find'
                onFocus={(event) => {
                    event.target.placeholder = ""
                }}
                onBlur={(event) => {
                    event.target.placeholder = " Quick Find"
                }}
            />
        </div>
        <div className='flex-1 text-right text-lg'>
            <span className='text-white mr-2'>
                {date.toLocaleDateString('pt-PT',{
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                {" - "}
                {date.toLocaleString('pt-PT', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric' 
                })}
            </span>
            <button title={'true'} onClick={handleClick} ><i class="fa-solid fa-plus mr-2 p-1" style={{color: "white"}}></i></button>
            <button title={'false'} onClick={handleClick} ><i class="fa-solid fa-xmark mr-2 p-1" style={{color: "white"}}></i></button>
        </div>
    </div>
  )
}

export default Navbar