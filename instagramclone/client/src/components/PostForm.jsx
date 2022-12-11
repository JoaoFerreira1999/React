import React, { useState } from 'react'

function PostForm() {
  const [file, setFile] = useState();

  function handleChange(event) {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <div className='absolute top-20 right-[550px] w-2/5 bg-white h-[50rem] rounded-lg animate-fade-in-down'>
      <div className='flex items-center justify-center p-3 font-bold'>
        Create New Post
      </div>
      <hr/>
      <div>
        <div className='mt-6'>
          <img src={file}/>
        </div>
        <div className='grid place-items-center'>
          <form className='mt-24' action="/api/image" method="post">
            <div>
              <input type="file" required className='mb-4' onChange={handleChange}/>
            </div>
            <div>
              <input type="text" className='bg-gray-200 rounded-md ml-28 pl-2 mr-28 p-1 w-7/12 mb-4' />
            </div>
            <div>
              <input type="text" className='bg-gray-200 rounded-md ml-28 pl-2 mr-28 p-1 w-7/12 mb-4' />
            </div>
            <div className='grid p-4 place-items-center'>
              <button type="submit" className='border-2 p-4 rounded-lg'>Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostForm