import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import shortid from 'shortid'
import 'bulma/css/bulma.min.css'

class Input extends React.PureComponent {
  constructor (props) {
    super(props)

    this.instanceId = `${props.name}-${shortid.generate()}`
  }

  render () {
    const {
      value,
      onChange,
      type,
      label,
      disabled,
      placeholder,
      error,
      errorMessage,
      success,
      successMessage,
    } = this.props

    const inputStyle = cx('input', {
      'is-success': success,
      'is-danger': error,
    })

    const messageStyle = cx('help', {
      'is-success': success,
      'is-danger': error,
    })

    return (
      <div className="field">
        {label && <div className="label">{label}</div>}
        <div className="control">
          <input
            value={value}
            onChange={disabled ? null : (e => onChange(e.target.value))}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={inputStyle}
          />
        </div>
        {(error || success) && (
          <p
            className={messageStyle}
          >
            {errorMessage || successMessage}
          </p>
        )}
      </div>
    )
  }
}

Input.propTypes = {
  /** The current input's value */
  value: PropTypes.string.isRequired,
  /** The type of the input */
  type: PropTypes.oneOf([
    'text',
    'number',
    'password',
  ]),
  /** The function that handles input changes */
  onChange: PropTypes.func.isRequired,
  /** The label */
  label: PropTypes.string,
  /** The unique name of the input */
  name: PropTypes.string,
  /** The disabled state */
  disabled: PropTypes.bool,
  /** The placeholder */
  placeholder: PropTypes.string,
  /** The error state */
  error: PropTypes.bool,
  /** The error message */
  errorMessage: PropTypes.string,
  /** The success tate */
  success: PropTypes.bool,
  /** The success message */
  successMessage: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  label: '',
  disabled: false,
  placeholder: '',
  error: false,
  errorMessage: '',
  success: false,
  successMessage: '',
  name: '',
}

export default Input
