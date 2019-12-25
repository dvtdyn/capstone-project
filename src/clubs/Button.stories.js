import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import add from './assets/icons/add.svg'

import Button from './Button.js'
import { action } from '@storybook/addon-actions'

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
}

export const button = () => {
  return <Button onClick={action('h')} src={add} />
}
