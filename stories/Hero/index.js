import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from '../../src/Hero'

storiesOf('Hero', module)
  .add('Example', () => (
    <Hero
      title="Penn Labs"
      subtitle="Penn Labs empowers others to make connections: connections to resources, connections to people, and connections to the greater Penn community."
    />
  ))
