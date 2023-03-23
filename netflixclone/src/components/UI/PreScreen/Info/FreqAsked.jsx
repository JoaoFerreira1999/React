import React, { useState } from 'react'
import classes from './FreqAsked.module.css'

function FreqAsked() {

  const [showDescription, setShowDescription] = useState({
    desc1: false,
    desc2: false,
    desc3: false,
    desc4: false,
    desc5: false,
    desc6: false
  });

  function handleClick(event) {
    const id = event.target.id;
    console.log(id);

    switch (id) {
      case "1": 
        if(showDescription.desc1 === false){
          document.getElementById("desc" + id).setAttribute('style', 'display:block');
          setShowDescription({
            desc1: true
          });
        }else {
          document.getElementById("desc" + id).setAttribute('style', 'display:none');
          setShowDescription({
            desc1: false
          });
        }
        return;
        case "2": 
        if(showDescription.desc2 === false){
          document.getElementById("desc" + id).setAttribute('style', 'display:block');
          setShowDescription({
            desc2: true
          });
        }else {
          document.getElementById("desc" + id).setAttribute('style', 'display:none');
          setShowDescription({
            desc2: false
          });
        }
        return;
        case "3": 
        if(showDescription.desc3 === false){
          document.getElementById("desc" + id).setAttribute('style', 'display:block');
          setShowDescription({
            desc3: true
          });
        }else {
          document.getElementById("desc" + id).setAttribute('style', 'display:none');
          setShowDescription({
            desc3: false
          });
        }
        return;
        case "4": 
        if(showDescription.desc4 === false){
          document.getElementById("desc" + id).setAttribute('style', 'display:block');
          setShowDescription({
            desc4: true
          });
        }else {
          document.getElementById("desc" + id).setAttribute('style', 'display:none');
          setShowDescription({
            desc4: false
          });
        }
        return;
        case "5": 
        if(showDescription.desc5 === false){
          document.getElementById("desc" + id).setAttribute('style', 'display:block');
          setShowDescription({
            desc5: true
          });
        }else {
          document.getElementById("desc" + id).setAttribute('style', 'display:none');
          setShowDescription({
            desc5: false
          });
        }
        return;
        case "6": 
        if(showDescription.desc6 === false){
          document.getElementById("desc" + id).setAttribute('style', 'display:block');
          setShowDescription({
            desc6: true
          });
        }else {
          document.getElementById("desc" + id).setAttribute('style', 'display:none');
          setShowDescription({
            desc6: false
          });
        }
        return;
      default: 
        console.log("Ooops, something went wrong!");
    }

  }

  return (
    <div className={classes.wrapper}>
      <div className={classes['title-div']}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={classes['list-div']}>
        <ul>

        {/* Item 1 */}
          <li>
            <button>
              <div id="1" onClick={handleClick} className={classes['question-div']}>What is Netflix?</div>
              <div>
                <span className={classes['plus-icon']}><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc1" className={classes['desc-span']}>des1</span>

        {/* Item 2 */}
          <li>
            <button id="2">
              <div id="2" onClick={handleClick} className={classes['question-div']}>How much does Netflix cost?</div>
              <div>
                <span className={classes['plus-icon']}><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc2" className={classes['desc-span']}>des2</span>

        {/* Item 3 */}
          <li>
            <button id="3">
              <div id="3" onClick={handleClick} className={classes['question-div']}>Where can I watch?</div>
              <div>
                <span className={classes['plus-icon']}><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc3" className={classes['desc-span']}>des3</span>

        {/* Item 4 */}
          <li>
            <button id="4">
              <div id="4" onClick={handleClick} className={classes['question-div']}>How do I cancel?</div>
              <div>
                <span className={classes['plus-icon']}><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc4" className={classes['desc-span']}>des4</span>

        {/* Item 5 */}
          <li>
            <button id="5">
              <div id="5" onClick={handleClick} className={classes['question-div']}>What can I watch on Netflix?</div>
              <div>
                <span className={classes['plus-icon']}><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc5" className={classes['desc-span']}>des5</span>

        {/* Item 6 */}
          <li>
            <button>
              <div id="6" onClick={handleClick} className={classes['question-div']}>Is Netflix good for kids?</div>
              <div>
                <span className={classes['plus-icon']}><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc6" className={classes['desc-span']}>des6</span>
        </ul>
      </div>
    </div>
  )
}

export default FreqAsked