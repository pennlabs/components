import React from 'react'
import PropTypes from 'prop-types'
import Input from '.'

class InputState extends React.Component {
  constructor () {
    super()

    this.state = { value: '' }
  }

  render () {
    const {
      type,
      label,
      disabled,
      placeholder,
      error,
      errorMessage,
      success,
      successMessage,
    } = this.props

    const { value } = this.state

    return (
      <div>
        <p>{value}</p>
        <Input
          value={value}
          onChange={e => this.setState({ value: e })}
          type={type}
          label={label}
          disabled={disabled}
          placeholder={placeholder}
          error={error}
          errorMessage={errorMessage}
          success={success}
          successMessage={successMessage}
        />
      </div>
    )
  }
}

InputState.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'number',
    'password',
  ]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
}

InputState.defaultProps = {
  type: 'text',
  label: '',
  disabled: false,
  placeholder: '',
  error: false,
  errorMessage: '',
  success: false,
  successMessage: '',
}

export default InputState
