import React from 'react'
import classes from './InfoBar.module.css'
import { PhoneOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const locations = ["Europe West", "North America", "Europe East", "Russia", "Asia", "Africa"];

function InfoBar() {
  return (
    <p class={classes.info}>
        <span class={classes.phone}>9494949532 <PhoneOutlined /></span>
        <span><span class={classes.discount}>Get 50% Off On Your First Buy</span> | <span class={classes.discount}><Link to="/shop">Shop Now</Link></span></span>
        <span>
            <select>
                <option disabled selected >Location</option>
                {
                    locations.map((item) => {
                        return <option value={item} id={item} name={item}>{item}</option>
                    })
                }
            </select>
            <select>
                <option>Eng</option>
                <option>Prt</option>
            </select>
        </span>
    </p>
  )
}

export default InfoBar