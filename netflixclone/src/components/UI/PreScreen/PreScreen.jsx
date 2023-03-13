import React, {Fragment} from 'react'
import NavbarNL from '../Navbar/NavbarNL';
import classes from './Prescreen.module.css';
import LoginSection from './LoginSection/LoginSection';
import { FreqAsked, InfoBlueprint, InfoBlueprintReverse } from "./Info"
import { infoSectionItems, infoSectionItemsReversed} from "./Info/InfoItem"


function PreScreen() {
  return (
    <Fragment>
      <div className={classes.main}>
        <NavbarNL />
          <div className={classes['main-info']}>
            <div className={classes['main-info-card']}>
              <LoginSection />
            </div>
          </div>
      </div>
      <div className={classes['info-detail-card']}>
        <InfoBlueprint key={infoSectionItems[0].id} description={infoSectionItems[0].description} title={infoSectionItems[0].title} imgURL={infoSectionItems[0].imgURL} videoURL={infoSectionItems[0].videoURL}/>
      </div>
      <div className={classes['info-detail-card']}>
        <InfoBlueprintReverse key={infoSectionItemsReversed[0].id} description={infoSectionItemsReversed[0].description} title={infoSectionItemsReversed[0].title} imgURL={infoSectionItemsReversed[0].imgURL}/>
      </div>
      <div className={classes['info-detail-card']}>
        <InfoBlueprint key={infoSectionItems[1].id} description={infoSectionItems[1].description} title={infoSectionItems[1].title} imgURL={infoSectionItems[1].imgURL} videoURL={infoSectionItems[1].videoURL}/>
      </div>
      <div className={classes['info-detail-card']}>
        <InfoBlueprintReverse key={infoSectionItemsReversed[1].id} description={infoSectionItemsReversed[1].description} title={infoSectionItemsReversed[1].title} imgURL={infoSectionItemsReversed[1].imgURL}/>
      </div>
      <div className={classes['freq-asked-card']}>
        <FreqAsked />
      </div>
    </Fragment>
  )
}

export default PreScreen