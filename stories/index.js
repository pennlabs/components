import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Card from '../components/Card';

storiesOf('Button', module)
  .add('with text', () => <Button text="Penn Labs"/>)
  .add('with some emoji', () => <Button text="Welcome to Penn Labs 👨‍💻"/>);

storiesOf('Card', module).add('with text', () => <Card />);