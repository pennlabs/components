import React from 'react'
import { mount, shallow } from 'enzyme'

import Input from '.'

describe('Input', () => {
  const value = 'PennLabsWithSpace'

  it('should mount basic component', () => {
    const onChange = jest.fn()

    mount(
      <Input
        value=""
        onChange={onChange}
      />
    )
  })

  it('should change value', () => {
    const onChange = jest.fn()

    const component = mount(
      <Input
        onChange={onChange}
        value=""
      />
    )

    const changeEvent = {
      target: {
        value,
      },
    }

    component
      .find('input')
      .first()
      .simulate('change', changeEvent)

    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenLastCalledWith(value)
  })

  it('should not change value when disabled', () => {
    const onChange = jest.fn()

    const component = shallow(
      <Input
        disabled
        onChange={onChange}
        value=""
      />
    )

    component
      .find('input')
      .first()
      .simulate('change', value)

    expect(onChange).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenLastCalledWith(value)
  })

  it('should not show error, success and label in basic component', () => {
    const onChange = jest.fn()

    const component = mount(
      <Input
        onChange={onChange}
        value=""
      />
    )

    expect(component.find('div.label')).toHaveLength(0)

    const input = component.find('input')

    expect(input).toHaveLength(1)
    expect(input.hasClass('is-success')).toBeFalsy()
    expect(input.hasClass('is-danger')).toBeFalsy()

    expect(component.find('p.help')).toHaveLength(0)
  })

  it('should have label', () => {
    const onChange = jest.fn()

    const component = mount(
      <Input
        onChange={onChange}
        value=""
        label="Hi"
      />
    )

    const label = component.find('div.label')

    expect(label).toHaveLength(1)
    expect(label.first().text()).toBe('Hi')
  })

  it('should show error state', () => {
    const onChange = jest.fn()

    const component = mount(
      <Input
        onChange={onChange}
        value=""
        error
        errorMessage="Errrr"
      />
    )

    const input = component.find('input')
    expect(input).toHaveLength(1)
    expect(input.hasClass('is-success')).toBeFalsy()
    expect(input.hasClass('is-danger')).toBeTruthy()

    const helpP = component.find('p.help')
    expect(helpP).toHaveLength(1)
    expect(helpP.hasClass('is-danger')).toBeTruthy()
    expect(helpP.hasClass('is-success')).toBeFalsy()
    expect(helpP.first().text()).toBe('Errrr')
  })

  it('should show success state', () => {
    const onChange = jest.fn()

    const component = mount(
      <Input
        onChange={onChange}
        value=""
        success
        successMessage=":)"
      />
    )

    const input = component.find('input')
    expect(input).toHaveLength(1)
    expect(input.hasClass('is-success')).toBeTruthy()
    expect(input.hasClass('is-danger')).toBeFalsy()

    const helpP = component.find('p.help')
    expect(helpP).toHaveLength(1)
    expect(helpP.hasClass('is-danger')).toBeFalsy()
    expect(helpP.hasClass('is-success')).toBeTruthy()
    expect(helpP.first().text()).toBe(':)')
  })
})
