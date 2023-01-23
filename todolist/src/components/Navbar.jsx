import React from 'react'

function navbar() {
  return (
    <div className='flex rounded-l-md p-3 bg-red-500 fa-xl'>
        <div className='p-1 mr-48'>
            <i class="fa-solid fa-pen-to-square" style={{color: "white"}}></i>
        </div>
        <div className='flex-1 w-11/12'>
            <i class="fa-solid fa-magnifying-glass mr-2" style={{color: "white"}}></i>
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
    </div>
  )
}

export default navbar