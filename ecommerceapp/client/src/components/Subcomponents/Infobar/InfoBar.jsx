import React from 'react'
import classes from './InfoBar.module.css'
import { PhoneOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import LangSelect from '../Selects/LanguageSelect'
import LocationSelect from '../Selects/LocationSelect'

const locations = ["Europe West", "North America", "Europe East", "Russia", "Asia", "Africa"];

function InfoBar() {
  return (
    <p class={classes.info}>
        <span class={classes.phone}>949 494 953 <PhoneOutlined /></span>
        <span><span class={classes.discount}>Get 50% Off On Your First Buy</span> | <span class={classes.discount}><Link to="/shop">Shop Now</Link></span></span>
        <span class={classes['dropdown-section']}>
            <LocationSelect />
            <LangSelect />
        </span>
    </p>
  )
}

export default InfoBar