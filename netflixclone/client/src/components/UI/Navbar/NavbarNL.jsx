import React from 'react'
import classes from './NavbarNL.module.css'
import logo from '../../../assets/Netflix_Logo_CMYK.png'

function NavbarNL() {
  return (
    <nav className={classes['navbar-container']}>
      <div className={classes.navbar}>
        <div>
            <img src={logo} alt="Netflix Logo" className={classes.logo}/>
        </div>
        <div>
            <select>
                <option>English</option>
                <option>Portuguese</option>
            </select>
            <button>Sign In</button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarNL