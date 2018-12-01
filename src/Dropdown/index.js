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
    this.activateItem = this.activateItem.bind(this)
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
    } = this.props

    return items.map(({ key, text }) => {
      // modify to use right class
      const itemClass = cx({
        'is-active': key === selectedItem,
      })

      return (
        <option
          key={key}
          className={itemClass}
          value={key}
        >
          {text}
        </option>
      )
    })
  }

  render () {
    const {
      onChange,
      selectedItem,
      placeholder,
    } = this.props

    return (
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
    )
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
}

Dropdown.defaultProps = {
  placeholder: '',
}

export default onClickOutside(Dropdown)
