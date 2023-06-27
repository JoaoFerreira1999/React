import React from 'react'
import classes from './Form.module.css'

function Form() {
  return (
    <fieldset class={classes.fieldset}>
        <legend><h2>What would you like to cook?</h2></legend>
        <form>
          <input type="text" name="recipe" id="recipe" />
          <button type="submit">Search</button>
        </form>
    </fieldset>
  )
}

export default Form