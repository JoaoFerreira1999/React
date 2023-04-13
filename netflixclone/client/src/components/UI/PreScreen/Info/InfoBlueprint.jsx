import React, {Fragment} from 'react'
import classes from './InfoBlueprint.module.css'

function InfoBlueprint(props) {
  return (
    <Fragment>
      <div className={classes['desc-div']}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
      <div className={classes['img-div']}>
        <img src={props.imgURL} alt=""/>
        {
          props.videoURL === "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" &&
                <div className={classes['video-div1']}>
                    <video autoplay muted autoPlay>
                      <source src={props.videoURL} type="video/mp4" />
                    </video>
                  </div>
        }
        {
          props.videoURL === "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" &&
                <div className={classes['video-div2']}>
                    <video autoplay muted autoPlay>
                      <source src={props.videoURL} type="video/mp4" />
                    </video>
                  </div>
        }
      </div>
    </Fragment>
  )
}

export default InfoBlueprint