import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import NewClub from './NewClub'

export default {
  component: NewClub,
  title: 'NewClub',
  decorators: [withKnobs],
}

export const newClub = () => {
  return <NewClub />
}
