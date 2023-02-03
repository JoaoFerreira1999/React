import React from 'react'

function Task(props) {
  return (
    <div className=''>
        <div className='text-2xl p-2'>
            {
                props.title
            }
        </div>
        <div className='p-2'>
            {
                props.maxDate
            }
        </div>
        <div className="p-2">
            {
                props.content
            }
        </div>
        <hr></hr>
    </div>
  )
}

export default Task