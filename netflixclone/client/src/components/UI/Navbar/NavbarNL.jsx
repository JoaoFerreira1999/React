import React from 'react'
import classes from './NavbarNL.module.css'
import logo from '../../../assets/Netflix_Logo_CMYK.png'
import { loginActions } from '../../../store/loginSlice'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarNL() {
/*   const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginActions.loginProcessStart());
  }; */

  return (
    <nav className={classes['navbar-container']}>
      <div className={classes.navbar}>
        <div>
            <img src={logo} alt="Netflix Logo" className={classes.logo}/>
        </div>
        <div className={classes['sub-div']}>
            <select>
                <option>English</option>
                <option>Portuguese</option>
            </select>
            <Link to="/loginform" className={classes.link}>Sign In</Link>
{/*             <button onClick={loginHandler}>Sign In</button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavbarNL