import React, { useEffect, useState } from 'react'

function Post() {
  const [data, setData] = useState({});

  function getData(){

    // useEffect(() => {
    //   fetch("/home")
    //   .then(res => res.json())
    //   .then(data => setData(data))
    // },[])
  }
  return (
    <div className='flex items-center justify-center w-3/12 h-700 border rounded-lg p-3 bg-white'>
      Post
    </div>
  )
}

export default Post