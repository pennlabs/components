import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Card from '../components/Card';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Hero from '../components/Hero';

storiesOf('Button', module)
  .add('with text', () => <Button text="Penn Labs"/>)
  .add('with some emoji', () => <Button text="Welcome to Penn Labs 👨‍💻"/>);

storiesOf('Card', module).add('Example product card', () => 
  <Card 
    title="Penn Course Review"
    subtitle="https://penncoursereview.com"
    body="The student-run Penn Course Review has served as a valuable guide for course selection since the 1960s. In 2014, Penn Course Review was completely redesigned to simplify the search experience. In 2018, we hope to continue providing you with the best insights on courses and have therefore updated this experience."
    image="https://pennlabs.org/img/PCR.png"
  />
);

storiesOf('LoginForm', module).add("Example", () => 
  <LoginForm />
);

storiesOf('SignupForm', module).add("Example", () => 
  <SignupForm />
);

storiesOf('Hero', module).add("Example", () => 
  <Hero title="Penn Labs" subtitle="Penn Labs empowers others to make connections: connections to resources, connections to people, and connections to the greater Penn community."/>
);