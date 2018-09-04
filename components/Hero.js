import React from 'react';
import 'bulma/css/bulma.css'

const Hero = (props) => {
  return (
    <section class="hero is-link is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {props.title}
          </h1>
          <h2 class="subtitle">
            {props.subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;