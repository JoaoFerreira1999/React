import { Fragment, useState } from 'react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import SearchArea from './components/SearchArea';
import { useSelector } from 'react-redux';
import "./root.css";
import GameDetailsCard from './components/DetailsLayout/GameDetailsCard'
import UserDetails from './components/DetailsLayout/UserDetails'

function RootLayout() {
  const dataStatus = useSelector((state) => state.status.status);
  const location = useLocation().pathname;

  let searchArea;

  if(location === '/'){
    searchArea = <SearchArea />
  }

  return (
    <Fragment>
      <div className='flex flex-col h-screen'>
        <div>
          <Navbar />
        </div>
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
            <div className='rounded-md'>
              <GameDetailsCard />
            </div>
          </div>
        }
        </div>
      <Outlet />
    </div>
    </Fragment>
  )
}

export default RootLayout;