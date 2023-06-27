import { Fragment } from 'react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./root.css";


function RootLayout() {
  return (
    <Fragment>
      <div className='flex flex-col h-screen'>
        <div>
          <Navbar />
        </div>
      <Outlet />
    </div>
    </Fragment>
  )
}

export default RootLayout;