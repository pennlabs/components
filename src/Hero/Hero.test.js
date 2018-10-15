import React from 'react'
import { mount } from 'enzyme'

import Hero from '.'

describe('Hero', () => {
  it('should mount', () => {
    mount(
      <Hero
        title="a"
        subtitle="b"
      />
    )
  })
})
