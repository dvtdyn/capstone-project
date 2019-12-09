import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import ButtonAdd from './ButtonAdd.js'
import { action } from '@storybook/addon-actions'

export default {
  component: ButtonAdd,
  title: 'ButtonAdd',
  decorators: [withKnobs],
}

export const buttonAdd = () => {
  return <ButtonAdd onClick={action('h')} />
}
