import React, {Fragment} from 'react'
import classes from './InfoBlueprint.module.css'

function InfoBlueprint(props) {
  console.log(props.imgURL);
  return (
    <Fragment>
      <div className={classes['desc-div']}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
      <div className={classes['img-div']}>
        <img src={props.imgURL} alt=""/>
        <div className={classes['video-div']}>
          <video>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </Fragment>
  )
}

export default InfoBlueprint