import React from 'react'
import classes from './FreqAsked.module.css'

function FreqAsked() {
  return (
    <div className={classes.wrapper}>
      <div className={classes['title-div']}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={classes['list-div']}>
        <ul>
          <li><button>What is Netflix?</button><span className={classes['desc-span']}>asd</span></li>
          <li><button>How much does Netflix cost?</button></li>
          <li><button>Where can I watch?</button></li>
          <li><button>How do I cancel?</button></li>
          <li><button>What can I watch on Netflix?</button></li>
          <li><button>Is Netflix good for kids?</button></li>
        </ul>
      </div>
    </div>
  )
}

export default FreqAsked