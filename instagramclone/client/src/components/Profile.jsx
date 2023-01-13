import React from 'react'

function Profile() {
  return (
    <div className='h-5/6'>
      <div className='m-6 h-5/6 rounded-lg'>
        <div className='p-6 rounded-lg mb-5 ml-10 mr-10 bg-white h-2/5 border border-slate-200'>
          Profile Info
        </div>
        <div className='mt-24 ml-32 mr-32 p-6 rounded-lg bg-white min-h-full border border-slate-200'>
          Posts
        </div>
      </div>
    </div>
  )
}

export default Profile