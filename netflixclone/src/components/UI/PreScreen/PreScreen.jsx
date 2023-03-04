import React, {Fragment} from 'react'
import NavbarNL from '../Navbar/NavbarNL';
import classes from './Prescreen.module.css';
import LoginSection from './LoginSection/LoginSection';

function PreScreen() {
  return (
    <Fragment>
      <div className={classes.main}>
        <NavbarNL />
          <div className={classes.info}>
            <div className={classes['info-card']}>
              <LoginSection />
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default PreScreen