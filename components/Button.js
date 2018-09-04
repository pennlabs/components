import React from 'react';
import 'bulma/css/bulma.css'

const Button = (props) => {
    return <button className="button"> {props.text} </button>
}

export default Button;