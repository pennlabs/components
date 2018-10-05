import React from 'react';
import 'bulma/css/bulma.css'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={props.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">{props.subtitle}</p>
          </div>
        </div>

        <div className="content">
          {props.body}
        </div>
      </div>
    </div>
  )
}

export default Card;