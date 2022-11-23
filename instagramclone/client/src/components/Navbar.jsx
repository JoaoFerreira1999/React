import React, { useState } from 'react'
import "../app.css"

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    function dropDownClick(){
        if(isOpen === false){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }

    function handleLogout(){
        props.sessionState();
    }

  return (
    <div className='flex items-center justify-center flex-wrap bg-white pl-6 pr-6 pb-1 pt-2 border'>
        <div className='flex'>
        <div className='p-2 mr-14'><img src={require("../img/instagramLogo.png")}/></div>
        <div className='p-2'>
            <input 
            type="text" 
            className='bg-gray-200 rounded-md ml-28 pl-2 mr-28 p-1 w-7/12' 
            placeholder=" Search"
            onFocus={(event) => {
                event.target.placeholder = ""
            }}
            onBlur={(event) => {
                event.target.placeholder = " Search"
            }}/>
        </div>            
            <button className='ml-2 mr-2 p-2'><i class="fa-solid fa-house fa-lg"></i></button>
            <button className='ml-2 mr-2 p-2'><i class="fa-solid fa-message fa-lg"></i></button>
            <button className='ml-2 mr-2 p-2'><i class="fa-solid fa-square-plus fa-lg"></i></button>
            <button className='ml-2 mr-2 p-2'><i class="fa-regular fa-compass fa-lg"></i></button>
            <button className='ml-2 mr-2 p-2'><i class="fa-regular fa-heart fa-lg"></i></button>
            <div className='pt-1'>
                <button className='ml-2 mr-2 p-2' onClick={dropDownClick}><i class="fa-solid fa-circle-user fa-lg"></i></button>
                {
                    isOpen ? 
                    <div className='rounded-lg absolute bg-white mt-2 shadow-lg p-4'>
                        <a className='block p-2 font-bold'>{props.sessionDetails.username}</a>
                        <hr></hr>
                        <a href="#" className='block hover:bg-slate-300 p-2 rounded'>Profile</a>
                        <a href="#" className='block hover:bg-slate-300 p-2 rounded'>Saved</a>
                        <a href="#" className='block hover:bg-slate-300 p-2 rounded'>Change Accounts</a>
                        <a href="#" className='block hover:bg-slate-300 p-2 rounded' onClick={handleLogout}>Logout</a>
                    </div> : null
                }

            </div>

        </div>
    </div>
  )
}

export default Navbar