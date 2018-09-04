import React from 'react';
import 'bulma/css/bulma.css'

const LoginForm = () => {
  return (
    <div class="box">
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

      <button type="submit" class="button">Log In</button>
    </div>
  );
}

export default LoginForm;