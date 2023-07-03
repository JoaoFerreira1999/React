import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Subcomponents/Navbar/Navbar'
import classes from './Root.module.css'
import InfoBar from './components/Subcomponents/Infobar/InfoBar'

function Root() {
  return (
    <div class={classes.wrapper}>
        <InfoBar />
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Root