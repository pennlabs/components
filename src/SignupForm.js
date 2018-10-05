import React from 'react';
import 'bulma/css/bulma.css'

const SignupForm = () => {
  return (
    <div class="box">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g. Student McStudent" />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g. student@seas.upenn.edu" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="e.g. ilovelabs123"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Confirm Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="e.g. ilovelabs123"/>
        </div>
      </div>

      <button type="submit" class="button">Sign Up</button>
    </div>
  );
}

export default SignupForm;