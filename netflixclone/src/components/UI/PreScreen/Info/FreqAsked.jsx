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
            <button id="1" onClick={handleClick}>
              <div id="1" onClick={handleClick} className={classes['question-div']}>What is Netflix?</div>
              <div className={classes['plus-icon']}>
                <span><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc1" className={classes['desc-span']}>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<p></p>
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </span>

        {/* Item 2 */}
          <li>
            <button id="2" onClick={handleClick}>
              <div id="2" onClick={handleClick} className={classes['question-div']}>How much does Netflix cost?</div>
              <div className={classes['plus-icon']}>
                <span><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc2" className={classes['desc-span']}>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR15.99 a month. No extra costs, no contracts.
          </span>

        {/* Item 3 */}
          <li>
            <button id="3" onClick={handleClick}>
              <div id="3" onClick={handleClick} className={classes['question-div']}>Where can I watch?</div>
              <div className={classes['plus-icon']}>
                <span><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc3" className={classes['desc-span']}>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<p></p>
            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </span>

        {/* Item 4 */}
          <li>
            <button id="4" onClick={handleClick}>
              <div id="4" onClick={handleClick} className={classes['question-div']}>How do I cancel?</div>
              <div className={classes['plus-icon']}>
                <span><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc4" className={classes['desc-span']}>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
          </span>

        {/* Item 5 */}
          <li>
            <button id="5" onClick={handleClick}>
              <div id="5" onClick={handleClick} className={classes['question-div']}>What can I watch on Netflix?</div>
              <div className={classes['plus-icon']}>
                <span><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc5" className={classes['desc-span']}>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </span>

        {/* Item 6 */}
          <li>
            <button id="6" onClick={handleClick}>
              <div id="6" onClick={handleClick} className={classes['question-div']}>Is Netflix good for kids?</div>
              <div className={classes['plus-icon']}>
                <span><i class="fa-solid fa-plus"></i></span>
              </div>
            </button>
          </li>
          <span id="desc6" className={classes['desc-span']}>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<p></p>
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </span>
        </ul>
      </div>
      <div className={classes.form}>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <input placeholder="Email address" type="text" />
          <input type="submit" value='Get Started'/>
      </div>
    </div>
  )
}

export default FreqAsked