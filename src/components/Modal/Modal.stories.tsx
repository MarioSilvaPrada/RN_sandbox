import React from 'react';
import {storiesOf} from '@storybook/react';
import {Modal} from './Modal';

storiesOf('Modal', module).add('default', () => (
  <Modal text="This is a modal" />
));
