import React from 'react'
import { storiesOf } from '@storybook/react'
import InputState from '../../src/Input/InputState'

storiesOf('Input', module)
  .add('Basic component', () => <InputState />)
  .add('Disabled', () => <InputState disabled />)
  .add('With label and placeholder', () => (
    <InputState
      label="The answer to life, the universe and everything"
      placeholder="Hint: 42"
    />
  ))
  .add('Error', () => (
    <InputState
      label="The answer to life, the universe and everything"
      placeholder="Hint: 42"
      error
      errorMessage="Error!"
    />
  ))
  .add('Success', () => (
    <InputState
      label="The answer to life, the universe and everything"
      placeholder="Hint: 42"
      success
      successMessage="Success!"
    />
  ))
