import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

const Card = ({
  body,
  image,
  subtitle,
  title,
}) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src={image.url}
              alt={image.alt}
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{subtitle}</p>
        </div>
      </div>

      <div className="content">
        {body}
      </div>
    </div>
  </div>
)

Card.propTypes = {
  /** The content of the Card */
  body: PropTypes.string.isRequired,
  /** An image */
  image: PropTypes.shape({
    /** The alt attribute of the image */
    alt: PropTypes.string.isRequired,
    /** The url of the image */
    url: PropTypes.string.isRequired,
  }).isRequired,
  /** The subtitle of the Card */
  subtitle: PropTypes.string.isRequired,
  /** The title of the Card */
  title: PropTypes.string.isRequired,
}

export default Card
