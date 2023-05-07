import { Fragment, useState } from 'react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import SearchArea from './components/SearchArea';
import "./root.css";

function RootLayout() {
  const location = useLocation().pathname;

  let searchArea;

  if(location === '/'){
    searchArea = <SearchArea />
  }

  return (
    <Fragment>
      <div className='h-screen bg-background-dark'>
        <div>
          <Navbar />
        </div>
        <div className='grid place-items-center'>
          <div className='m-auto grid place-items-center'>
            {
              searchArea
            }
          </div>
        </div>
      <Outlet />
    </div>
    </Fragment>
  )
}

export default RootLayout;