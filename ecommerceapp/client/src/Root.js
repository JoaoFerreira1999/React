import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Subcomponents/Navbar/Navbar'
import classes from './Root.module.css'
import InfoBar from './components/Subcomponents/Infobar/InfoBar'
import Footer from './components/Subcomponents/Footer/Footer'

function Root() {
  return (
    <div class={classes.wrapper}>
        <InfoBar />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root