import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../src/Card'
import Hero from '../src/Hero'

storiesOf('Card', module).add('Example product card', () => (
  <Card
    title="Penn Course Review"
    subtitle="https://penncoursereview.com"
    body="The student-run Penn Course Review has served as a valuable guide for course selection since the 1960s. In 2014, Penn Course Review was completely redesigned to simplify the search experience. In 2018, we hope to continue providing you with the best insights on courses and have therefore updated this experience."
    image="https://pennlabs.org/img/PCR.png"
  />
))

storiesOf('Hero', module).add('Example', () => (
  <Hero title="Penn Labs" subtitle="Penn Labs empowers others to make connections: connections to resources, connections to people, and connections to the greater Penn community." />
))
