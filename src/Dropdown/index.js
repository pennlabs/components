import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import cx from 'classnames'
import shortid from 'shortid'
import 'bulma/css/bulma.min.css'

class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.instanceId = `${props.name}-${shortid.generate()}`

    this.state = {
      isDropdownActive: false,
    }

    this.openDropdown = this.openDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.renderItems = this.renderItems.bind(this)
  }

  closeDropdown () {
    this.setState({
      isDropdownActive: false,
    })
  }

  openDropdown () {
    this.setState({
      isDropdownActive: false,
    })
  }

  handleClickOutside () {
    this.closeDropdown()
  }

  toggleDropdown () {
    const {
      isDropdownActive,
    } = this.state

    if (isDropdownActive) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  renderItems () {
    const {
      items,
      selectedItem,
      onChange,
    } = this.props

    return items.map(({ key, text }) => {
      // modify to use right class
      const itemClass = cx({
        'is-active': key === selectedItem,
      })

      return (
        <a
          key={key}
          className="dropdown-item"
          onClick={() => onChange(key)}
        >
          {text}
        </a>
      )
    })
  }

  render () {
    const {
      onChange,
      selectedItem,
      placeholder,
      round,
    } = this.props

    return (
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>{selectedItem || placeholder || ''}</span>
            <span className="icon is-small">
              <i
                className="fas fa-angle-down"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu"
          id="dropdown-menu"
          role="menu"
        >
          <div className="dropdown-content">
            {this.renderItems()}
          </div>
        </div>
      </div>
    )

    /*
    return (
      <div className={selectClasses}>
        <select
          id={this.instanceId}
          onChange={onChange}
          defaultValue={selectedItem || 'placeholder'}
        >
          <option
            disabled
            hidden
            value="placeholder"
          >
            {placeholder}
          </option>
          {this.renderItems()}
        </select>
      </div>
    )
    */
  }
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  round: PropTypes.bool,
}

Dropdown.defaultProps = {
  placeholder: '',
  round: false,
}

export default onClickOutside(Dropdown)
