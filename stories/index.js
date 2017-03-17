import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import ProgressBar from '../frontend/components/ProgressBar';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('ProgressBar', module)
  .add('0%', () => (
    <ProgressBar current={1} total={4} incrementName="Step" />
  ))
  .add('25%', () => (
    <ProgressBar current={1} total={4} incrementName="Step" />
  ))
  // .add('no border', () => (
  //   <ProgressBar current={1} total={4} border={false} incrementName="Step" />
  // ))
  .add('100%', () => (
    <ProgressBar current={5} total={4} incrementName="Step" />
  ));
