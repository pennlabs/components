import React from 'react';
import 'bulma/css/bulma.css'

const Form = (props) => {
    return (
    	<div class="box">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Course" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Email" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Phone Number (for SMS alerts)" />
        </div>
      </div>
      <button type="submit" class="button">Submit</button>
    </div>
    );
}

export default Form;