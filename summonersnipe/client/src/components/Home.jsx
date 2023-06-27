import React from 'react'
import GameDetailsCard from './DetailsLayout/GameDetailsCard'
import UserDetails from './DetailsLayout/UserDetails'
import { useLocation } from 'react-router-dom';
import SearchArea from './SearchArea';
import { useSelector } from 'react-redux';

function Home() {
    const dataStatus = useSelector((state) => state.status.status);
    const location = useLocation().pathname;
  
    let searchArea;
  
    if(location === '/'){
      searchArea = <SearchArea />
    }
  

  return (
    <div className='flex-1 h-full justify-center items-center flex-grow'>
    {!dataStatus ?
      <div className='m-auto grid place-items-center'>
        {
          searchArea
        }
      </div>
      :
      <div className='h-full flex flex-col items-center'>
        <div className='w-1/2 h-2/6 flex mb-10 mt-10 text-slate-300 bg-gray rounded-md'>
          <UserDetails />
        </div>
        <div className='rounded-md overflow-hidden mb-5 w-1/4'>
          <GameDetailsCard />
        </div>
      </div>
    }
    </div>
  )
}

export default Home