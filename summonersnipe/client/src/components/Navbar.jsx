/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable default-case */
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar(){
  const navigate = useNavigate();

    function handleClick(e) {
      const id = e.target.id;
      
      switch(id){
          case 'home':
          navigate('/');
          break;
          case 'championAnalysis':
            navigate('/championanalysis');
          break;
          case 'gameMode':
            navigate('/gamemode');
            break;
          case 'stats':
            navigate('/statistics');
            break;
          case 'leaderboard':
            navigate('/leaderboard');
            break;
          case 'proGames':
            navigate('/progames');
            break;
          case 'multipleSearch':
            navigate('/multiplesearch');
            break;

      }
    }

    return (
      <Fragment>
        <nav className="bg-main-blue p-5 text-neutral-300 text-center focus:underline-offset-1">
            <a onClick={handleClick} id="home" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Home</a>
            <a onClick={handleClick} id="championAnalysis" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Champion Analysis</a>
            <a onClick={handleClick} id="gameMode" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Game Mode</a>
            <a onClick={handleClick} id="stats" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Statistics</a>
            <a onClick={handleClick} id="leaderboard" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Leaderboard</a>
            <a onClick={handleClick} id="proGames" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Pro Games</a>
            <a onClick={handleClick} id="multipleSearch" className='m-2 hover:text-white cursor-pointer hover:underline underline-offset-[16px]'>Multiple Search</a>
        </nav>
      </Fragment>
    )
}

export default Navbar