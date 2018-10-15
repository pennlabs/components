import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

const Hero = ({ title, subtitle }) => (
  <section className="hero is-link is-medium">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {title}
        </h1>
        <h2 className="subtitle">
          {subtitle}
        </h2>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Hero
