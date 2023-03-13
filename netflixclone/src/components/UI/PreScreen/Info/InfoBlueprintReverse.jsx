import React, {Fragment} from 'react'
import classes from './InfoBlueprintReverse.module.css'

function InfoBlueprintReverse(props) {
  return (
    <Fragment>
      <div className={classes['img-div']}>
        <img src={props.imgURL} alt=""/>
        {
          props.videoURL === "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" &&
                <div className={classes['video-div1']}>
                    <video autoplay muted playsInline>
                      <source src={props.videoURL} type="video/mp4" />
                    </video>
                  </div>
        }
        {
          props.videoURL === "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" &&
                <div className={classes['video-div2']}>
                    <video autoplay muted playsInline>
                      <source src={props.videoURL} type="video/mp4" />
                    </video>
                  </div>
        }
      </div>
      <div className={classes['desc-div']}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    </Fragment>
  )
}

export default InfoBlueprintReverse